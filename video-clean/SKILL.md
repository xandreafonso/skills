---
name: video-clean
description: Faz uma edição simples no vídeo apenas removendo/limpando os silencios do vídeo.
---

# Video Clean

Esse é um processo de edição de vídeo. Ele já foi validado e funciona. Não há necessidade de chegar os scripts antes de começar. Apenas siga o processo.

## Visão geral do fluxo

```
[0] sync_audio          (só se áudio e vídeo foram gravados separados)
        ↓
[1] extract_audio       vídeo → .mp3
        ↓
[2] transcribe_audio    .mp3 → .transcript.json   (--reuse)
        ↓
[3] transcript_timestamps   janelas de fala por frase (nunca abrir o JSON no contexto)
        ↓
[4] edição + encode     escolher últimas tomadas → 1 comando ffmpeg (trim + concat)
```

Regra de ouro: **cada etapa consome o arquivo da etapa anterior** e os nomes são encadeados (ver seção *Cadeia de nomes*).

---

## 0. Sincronizar áudio (condicional — antes de tudo)

Rodar **somente se o áudio foi gravado separado do vídeo** (ex.: vídeo do celular + `.m4a` do gravador).

```bash
sync_audio --video {video} --audio {audio} --output {video}.sync.mp4
```

`{audio}` = arquivo de áudio gravado à parte — tipicamente `.m4a` (formato do gravador de voz do celular). Use o nome real do arquivo.

Daqui em diante, usar sempre o `.sync.mp4` como fonte — nunca o vídeo original.

---

## 1. Extrair o áudio

```bash
extract_audio --video {video} --output {video}.mp3
```

---

## 2. Transcrever

```bash
transcribe_audio --audio {mp3} --provider elevenlabs/openrouter --options "words" --output {mp3}.transcript.json --reuse
```

- **`--reuse`**: sempre usar, para evitar retranscrições desnecessárias.
- Provedor alternativo: `elevenlabs` **ou** `openrouter`.
- Listar provedores disponíveis: `transcribe_audio --list-providers`.

> A transcrição tem um custo de API. Cada edição precisa de pelo menos 1 transcrição, mas não pode ser feita uma segunda transcrição sem autorização.

---

## 3. Timestamps da transcrição

```bash
transcript_timestamps --transcript {json} --by sentences --silence-threshold 200
```

- `--by sentences`: agrupar por frases.
- `--silence-threshold 200`: limiar de silêncio (ms) para separar falas.
- ⚠️ **NUNCA carregar o JSON da transcrição no contexto.** Trabalhar apenas com a saída de `transcript_timestamps`.

---

## 4. Edição

O comando `transcript_timestamps` acima, vai apresentar todos os silêncios - todos eles devem ser removidos.

### 4.1 Critério de seleção das tomadas

- A transcrição pode conter **frases repetidas**: para cada frase, escolher a **ÚLTIMA tomada COMPLETA**.
- Descartar tomadas incompletas, cortadas ou com erro de fala.

### 4.2 Padding (margens de segurança por cena)

| Corte                   | Padding       |
| ----------------------- | ------------- |
| Início de cada cena     | `+50ms`       |
| Fim de cada cena        | `+100ms`      |
| **Último corte do vídeo** | `+1s` (somente nele) |

> O `+1s` se aplica **exclusivamente ao último corte** (fim do vídeo como um todo). Nos demais, manter +50ms / +100ms.

### 4.3 Renderização — um único comando ffmpeg

Gerar o vídeo final com **UM único comando**, fazendo `trim` + `concat` dentro de um `filter_complex` (evita múltiplos passes e perda de qualidade).

Parâmetros de encode obrigatórios:

```
-c:v libx264 -preset medium -crf 18 -c:a aac -b:a 192k -movflags +faststart
```

**Opcional:** aplicar `volume=10dB` no `filter_complex`, sempre acompanhado de **limitador anti-clipping** para não estourar o áudio.

---

## Cadeia de nomes

Nomes encadeados entre as etapas (cada saída alimenta a próxima):

```
video.mp4  →  video.sync.mp4  →  video.mp3  →  video.mp3.transcript.json
```

- `video.mp4` → original (ou `video.sync.mp4` após o passo 0)
- `video.mp4.mp3` → áudio extraído
- `video.mp4.mp3.transcript.json` → transcrição

---

## Checklist rápido

- [ ] Áudio e vídeo gravados separados? → rodar `sync_audio` primeiro e usar o `.sync.mp4`.
- [ ] `extract_audio` gerou o `.mp3`.
- [ ] `transcribe_audio` rodado com `--options "words"` e `--reuse`.
- [ ] `transcript_timestamps --by sentences --silence-threshold 200` executado.
- [ ] JSON da transcrição **não** foi carregado no contexto.
- [ ] Selecionada a última tomada completa de cada frase.
- [ ] Padding aplicado: início +50ms, fim +100ms; +1s **só** no último corte.
- [ ] Encode único com `-crf 18 -preset medium -movflags +faststart`.
- [ ] Se usou `volume=10dB`, o limitador anti-clipping está no filtro.