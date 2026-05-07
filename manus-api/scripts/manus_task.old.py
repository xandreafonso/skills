'''
---
name: manus-task-api
description: Delegate long-running, autonomous work to a Manus AI agent — research, document analysis, multi-step tasks, anything that runs in the background and returns a final result. Use this skill whenever the user wants to "run a Manus task", "send something to Manus", asks Claude to delegate work to another agent, or needs to retrieve the result of a previously created Manus task. Also use it whenever the user mentions a Manus task ID, MANUS_API_KEY, or asks Claude to upload a file to Manus. The skill wraps a local Python script (`scripts/manus_task.py`) that handles authentication, file upload via presigned S3 URLs, task creation, and result polling against the Manus API v2.
---

# Manus API skill

Wraps `scripts/manus_task.py` to do two things, and only two things:

1. **Create a task** on Manus (optionally with a file attached).
2. **Retrieve the final result** of a task once the agent has stopped.

Everything else (webhooks, projects, connectors, listing tasks, deleting tasks) is out of scope for this skill — the script does not implement it. Don't invent flags.

## Prerequisites — verify before running

Run these checks once at the start of any Manus-related request. If something fails, stop and tell the user, don't try to work around it.

1. `MANUS_API_KEY` must be set in the environment. Check with `echo "${MANUS_API_KEY:+set}"` — should print `set`. If empty, the script exits with a `401`-ish error from the API. Do **not** print or echo the key value itself.
2. `python3` and the `requests` package must be available. The script has no other dependencies.
3. The script lives at `scripts/manus_task.py` relative to this skill. Always invoke it with `python3 scripts/manus_task.py …`.

## The two commands

### Create a task

```bash
python3 scripts/manus_task.py create --prompt "<the instruction for Manus>" [--file <path>] [--file-id <id>]
```

- `--prompt` is required. It's the natural-language instruction that Manus will execute. Write it as if briefing a capable junior — be specific about the deliverable and any constraints.
- `--file <path>` uploads a local file first (presigned S3 PUT), then attaches its `file_id` to the task. Use this for "analyze this PDF / CSV / image". The script handles the two-step upload internally.
- `--file-id <id>` skips the upload and reuses an already-uploaded Manus file. Don't pass both `--file` and `--file-id`; if both are provided the local upload wins.

**Output on success:** the script prints **only the `task_id`** to stdout (e.g. `task_AbCd1234…`) and exits 0. Capture it — that's the only handle to the task afterward.

```bash
TASK_ID=$(python3 scripts/manus_task.py create --prompt "Summarize the attached report in 5 bullets" --file ./report.pdf)
echo "$TASK_ID"
```

**Output on failure:** error text on stderr and exit 1. Common causes: missing/invalid API key, file not found, malformed prompt, Manus side error. The error body from the API is forwarded raw — read it, don't guess.

### Get the result

```bash
python3 scripts/manus_task.py result --task-id <task_id> [--wait]
```

- Without `--wait`: one shot. If the task is still running, prints the literal string `Task ainda em execução.` (Portuguese, hard-coded — don't expect it to localize) to stdout and exits 0. If it's finished, prints the assistant's final message content and exits 0. Detect "still running" by matching this exact string, not by exit code (both cases exit 0).
- With `--wait`: polls every 5 seconds until the agent's `agent_status == "stopped"`, then prints the final message and exits. There is **no built-in timeout** — the script will poll forever if the task never stops. Wrap it in a shell `timeout` if that matters:

```bash
timeout 600 python3 scripts/manus_task.py result --task-id "$TASK_ID" --wait
```

**What "result" actually returns:** the content of the most recent `assistant_message`. This is usually a string, but for some tasks Manus returns structured content (a list of blocks with `type: text`, `type: file`, etc.) and the script prints that structure as Python's `str(...)` of a list. If the output looks like `[{'type': 'text', ...}, ...]`, that's why — parse it as Python literal if needed, or just present it to the user as-is.

The script does not surface intermediate progress, tool calls, file outputs the agent may have produced, or anything beyond that final assistant message. If the user needs those, this skill isn't enough — tell them.

## Typical workflow

For most user requests, the flow is **create → wait for result → present**:

```bash
TASK_ID=$(python3 scripts/manus_task.py create --prompt "Research the top 3 EV battery suppliers and produce a comparison table")
python3 scripts/manus_task.py result --task-id "$TASK_ID" --wait
```

If the user wants to fire-and-forget and check later, do **create** now, give them back the `task_id`, and tell them to come back with it. Then later, **result** without `--wait` (or with `--wait` if they want to block).

If the user already has a `task_id` from earlier and just wants the answer: skip `create` entirely, go straight to `result`.

## Choosing between `--wait` and one-shot polling

- Use `--wait` when the user is watching the conversation and expects an answer in this turn. Manus tasks typically take anywhere from ~30s (simple Q&A) to many minutes (research, multi-file analysis). Plan for it. Always wrap in `timeout` so a stuck task doesn't hang the agent loop forever — 600s (10 min) is a reasonable default; bump to 1800s for clearly heavy work.
- Use one-shot (no `--wait`) when polling on your own schedule, e.g. inside a larger loop where you want to do other work between checks.

## Prompt guidance for Manus

The prompt you pass via `--prompt` is everything Manus sees. It runs autonomously — there's no follow-up clarification turn before it starts working. So:

- State the deliverable explicitly ("produce a markdown table with columns X, Y, Z", "return a JSON object with keys …").
- Include all context the user gave you that's relevant. Don't assume Manus has any of the conversation history.
- If a file is attached, reference it in the prompt ("Using the attached CSV, …") so Manus knows to look at it.
- Keep prompts in the language the user is using — Manus is multilingual.

## Errors the agent will actually see

| Symptom | Likely cause | Fix |
|---|---|---|
| `Erro: {"error": ...}` with `unauthorized` / `401` | `MANUS_API_KEY` missing, wrong, or expired | Ask the user to set/refresh it. Do not retry. |
| `Erro no upload S3:` | Presigned URL expired (rare) or local file unreadable | Verify the file exists and is readable, then retry once. |
| `Erro:` with `task_id is required` or `not found` | Wrong/typo'd `--task-id` | Confirm the ID with the user. |
| Output is `Task ainda em execução.` | Task still running, called without `--wait` | Either wait and retry, or re-run with `--wait`. |
| `--wait` hangs for a very long time | Heavy task, or task got stuck | Use `timeout` wrapper. If it consistently hits the timeout, tell the user — the skill cannot recover it. |

The script `sys.exit(1)`s on any non-2xx HTTP response, so a non-zero exit code from the script always means something went wrong on the API side. Read stderr, surface it to the user, don't paper over it.

## Things this skill does NOT do — don't pretend otherwise

- Cancel/delete a running task. The Manus API doesn't support cancellation; the script doesn't even try.
- List existing tasks or files. No `list` subcommand exists.
- Stream intermediate progress. You only get the final assistant message.
- Configure `taskMode`, `agentProfile`, connectors, projects, or webhooks. The script always uses Manus defaults.
- Download files that Manus produced as part of the task output. If the task generated artifacts, the user has to fetch them via the Manus web app or a different tool.

If the user asks for any of the above, say so plainly and offer to either (a) extend the script, or (b) point them at the Manus web app / official docs at `https://open.manus.im/docs`.
'''

import requests
import time
import sys
import os
import argparse

BASE_URL = "https://api.manus.ai/v2"

def call_api(endpoint, method="GET", api_key=None, data=None, params=None, files=None):
    headers = {"x-manus-api-key": api_key or os.getenv("MANUS_API_KEY")}
    if not files:
        headers["Content-Type"] = "application/json"
    
    url = f"{BASE_URL}/{endpoint}"
    resp = requests.request(method, url, headers=headers, json=data, params=params, files=files)
    
    if not resp.ok:
        print(f"Erro: {resp.text}", file=sys.stderr)
        sys.exit(1)
    return resp.json()

def upload_file(file_path, api_key):
    # 1. Solicita URL de upload
    filename = os.path.basename(file_path)
    res = call_api("file.upload", "POST", api_key=api_key, data={"filename": filename})
    upload_url = res["upload_url"]
    file_id = res["file"]["id"]

    # 2. Faz o upload via PUT (S3 presigned URL)
    with open(file_path, "rb") as f:
        put_resp = requests.put(upload_url, data=f)
        if not put_resp.ok:
            print(f"Erro no upload S3: {put_resp.text}", file=sys.stderr)
            sys.exit(1)
    
    return file_id

def main():
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command")

    # Comando Create
    create_p = subparsers.add_parser("create")
    create_p.add_argument("--prompt", required=True)
    create_p.add_argument("--file", help="Caminho do arquivo local para upload")
    create_p.add_argument("--file-id", help="ID de arquivo já existente")

    # Comando Result
    result_p = subparsers.add_parser("result")
    result_p.add_argument("--task-id", required=True)
    result_p.add_argument("--wait", action="store_true", help="Aguardar conclusão")

    args = parser.parse_args()
    api_key = os.getenv("MANUS_API_KEY")

    if args.command == "create":
        f_id = args.file_id
        if args.file:
            f_id = upload_file(args.file, api_key)
        
        content = args.prompt if not f_id else [{"type": "text", "text": args.prompt}, {"type": "file", "file_id": f_id}]
        res = call_api("task.create", "POST", api_key=api_key, data={"message": {"content": content}})
        print(res["task_id"])

    elif args.command == "result":
        while True:
            res = call_api("task.listMessages", params={"task_id": args.task_id, "order": "desc"})
            msgs = res.get("messages", [])
            status_msg = next((m for m in msgs if m["type"] == "status_update"), None)
            if status_msg and status_msg["status_update"]["agent_status"] == "stopped":
                last_msg = next((m for m in msgs if m["type"] == "assistant_message"), None)
                if last_msg:
                    print(last_msg["assistant_message"]["content"])
                    print(last_msg)
                break
            if not args.wait:
                print("Task ainda em execução.")
                break
            time.sleep(5)

if __name__ == "__main__":
    main()