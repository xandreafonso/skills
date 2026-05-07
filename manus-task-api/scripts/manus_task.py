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
            status_msg = next((m for m in res["data"] if m["type"] == "status_update"), None)
            if status_msg and status_msg["status_update"]["agent_status"] == "stopped":
                last_msg = next((m for m in res["data"] if m["type"] == "assistant_message"), None)
                if last_msg:
                    print(last_msg["assistant_message"]["content"])
                break
            if not args.wait:
                print("Task ainda em execução.")
                break
            time.sleep(5)

if __name__ == "__main__":
    main()