---
name: prisma-model-relations
description: Padrão customizado obrigatório para o nome da propriedade @relation ao criar models no esquema do Prisma. Define explicitamente como determinar donos e relações inversas.
---

# Padrão de Nomenclatura das Relações Prisma

Ao criar novos modelos no `schema.prisma` deste projeto, existe um **padrão estrito imposto** sobre como o parâmetro nome da relação na flag `@relation("NomeDaRelacao")` deve ser preenchido. 

Este documento descreve como determinar o componente "Principal" de uma relação e como utilizar isso para chegar no nome unificado.

## 1. O Conceito Central: "Lado Principal" e "Lado Inverso"

Toda relação bidirecional no Prisma requer que duas pontas sejam declaradas, mas na regra de negócios da aplicação as relações geralmente possuem uma finalidade clara sobre quem possui quem. 

Neste projeto definimos isso por:
- **Lado Principal (Owning Side / Lado Forte):** É o modelo ("Model") que detém primariamente a relação na perspectiva de lógica de domínio ou fluxo de negócio de consultas. Normalmente, é deste lado que temos a Chave Estrangeira (`foreign key` / `fields` / `references`) no banco ou o lado que faria menos sentido não ter aquela relação definida.
- **Lado Inverso (Secundário / Lado Fraco):** É a ponta mapeada no outro Model estritamente porque o "ORM do Prisma nos obriga" para referenciar o caminho invertido (geralmente como tipo Array de Itens - ex: `Task[]`). Muitas vezes, esses arrays reversos não são utilizados nativamente pela aplicação de ponta a ponta na query diária, sendo declarados como mero requisito do Type System do Prisma para completar a ponta principal.

## 2. A Regra de Nomenclatura do `@relation`

O nome que vai dentro de `@relation("EsteNomeAqui")` DEVE SEMPRE obedecer rigidamente o template abaixo:

**`"NomeDoModelPrincipal_nomeDaPropriedadeNoModelPrincipal"`**

### Passo-a-passo da criação:
1. Analise o relacionamento em criação e determine através de "quem precisa mais da relação para a API funcionar" qual é o **Model Principal** e o **Model Inverso**.
2. No Model Principal, observe exatamente o nome do *campo que conterá a relação originária*.
3. Monte o nome concatenando: `O Nome Da Entity Do Model Principal (com primeira letra maiúscula)` + `_` + `o nome exato do campo relacional que está dentro desse model`.
4. Copie a mesma string resultante para a anotação `@relation` no Model Inverso.

### 2.1 Nomeando a PROPRIEDADE no Lado Inverso (Inútil para Negócio)

Muitas vezes, a propriedade no Lado Inverso nunca será usada num `.include{}` ou chamada pela sua aplicação. Ela é mapeada *apenas porque o Prisma obriga* a relação bidirecional parar de gritar erro. Nesses casos, onde a propriedade não tem valor semântico real, **o NOME da propriedade também segue uma regra:**

O nome da propriedade no Lado Inverso deve ser:
`[Nome da Entidade Principal (em camelCase, plural ou singular dependendo da relação)]` + `[Nome da propriedade na Entidade Principal (Capitalizada)]`

**Exemplo Prático Lado Inverso:**
Se a Entidade Principal for `Agent` (Lado Forte), e o campo de relação nela for `contexts`. Deste modo, no Model Inverso (`Context`) que só recebe a relação por burocracia, nós juntamos:
- Entidade Principal no plural (porque é um Array): `agents`
- Campo na Principal mudando a 1ª letra para maiúsculo (PascalCase): `Contexts`
- **Resultado da Propriedade no Lado Inverso:** `agentsContexts Agent[] @relation("Agent_contexts")`

Isso deixa claríssimo na leitura do código de que essa propriedade reversa é apenas o espelho de `Agent.contexts` e provavelmente não possui uso semântico. Quando o lado inverso tiver serventia real de negócio (ex: o usuário vai querer listar itens a partir dele), aí sim pense em um nome semântico próprio.

## 3. Exemplos Reais de Aplicação

Abaixo constam exemplos do uso da regra extraídos diretamente do Schema deste projeto, demonstrando a racionalização por trás do nome imposto.

### Exemplo A: Relações N:M (`Agent` e `Context`)
No caso de um `Agent` que precisa de `Context` e vice-versa, na arquitetura da IA é muito mais comum carregar os "contextos de um Agente". Logo, `Agent` atua como **Lado Principal**.

```prisma
model Agent {
    // ...
    // Agent é o "Model Principal".
    // "contexts" é o nome da propriedade. 
    // Logo, o nome da relação é: "Agent" + "_" + "contexts"
    contexts Context[] @relation("Agent_contexts")
}

model Context {
    // ...
    // Context é o "Lado Inverso". Apenas recebe passivante o nome da relação.
    agentsContexts Agent[] @relation("Agent_contexts")
}
```

### Exemplo B: Modelos Tabela-Pivô ou Vínculos (`DocumentTypeTask`)

```prisma
model DocumentTypeTask {
    // ...
    // A tabela agregadora pivô DocumentTypeTask só existe na presença desse DocumentType,
    // garantindo-a como o "Lado Principal" originatório.
    // Propriedade que mapeia a relação base: documentType
    // Nome: DocumentTypeTask_documentType
    documentType   DocumentType @relation("DocumentTypeTask_documentType", fields: [documentTypeId], references: [id])
}

model DocumentType {
    // ...
    // Lado inverso:
    tasks DocumentTypeTask[] @relation("DocumentTypeTask_documentType")
}
```

### Exemplo C: Configurando 1:N Tradicional (`Task` e `Agent`)

A `Task` no ecossistema atual precisa ter agentes configurados a ela. Sendo a `Task` quem coordena a necessidade.

```prisma
model Task {
    // ...
    // Lado principal: Task. Campo: agents. Resulta em Task_agents
    agents   Agent[]   @relation("Task_agents")
}

model Agent {
    // Lado inverso / Opcional do ponto de vista da funcionalidade:
    tasks    Task[]    @relation("Task_agents")
}
```

## 4. Estrutura Padrão de um Novo Model (Boilerplate)

Sempre que a interface demandar a criação de um novo modelo de domínio da aplicação (por exemplo, algo fora do sistema engessado de autenticação/Better Auth), você deve incluir a **Estrutura Base Obrigatória e Sugerida**.

### 4.1 Campos Obrigatórios (Casca Base)
Dois campos devem OBRIGATORIAMENTE preencher as primeiras linhas do model:

1. **id**: Deve sempre ser uma `String`, chave primária e gerada como um `cuid()`.
2. **Timestamps**: Todo model transacional precisa das chaves de log temporal utilizando explicitamente o native type `@db.Timestamptz`.

```prisma
model Exemplo {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now()) @db.Timestamptz
    updatedAt DateTime @updatedAt @db.Timestamptz
    
    // ...
}
```

### 4.2 Campos Contextuais Fortemente Sugeridos
Ao criar qualquer model da camada de serviço/dados, você deve sempre se questionar sobre a necessidade da inclusão dos dois campos abaixo. Eles são extremamente comuns no projeto, mas não são automáticos:

1. **`userId String`**: Adicione se este dado pertencer a um usuário no sistema (o que é válido para quase 90% das entidades do sistema atual).
2. **`active Boolean @default(true)`**: Adicione se a entidade necessita de um comportamento de *soft-delete* (exclusão lógica) ou desativação temporária no front-end ao invés de apagamento físico via SQL.

## 5. O que não fazer
- Você **NÃO** deve misturar o nome dos dois Models (ex: errado: `AgentToContext`).
- Você **NÃO** deve utilizar aspas simples nas definições.
- Você **NÃO** deve criar nomes bidirecionais caso a relação já tenha dono claro. 
- Você **NÃO** deve criar nomes que partem da perspectiva gramatical do banco de dados (ignorando o viés do objeto JSON de domínio).
- Você **NÃO** deve utilizar `@default(uuid())` ou Autoincrement para IDs. Utilize sempre `@default(cuid())`.
