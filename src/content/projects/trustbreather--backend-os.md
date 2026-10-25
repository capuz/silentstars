---
repo: "TrustBreather/Backend-OS"
name: "Backend-OS"
description: "Backend OS — A model-to-API compatibility layer for client harnesses, exposing backend models through a client-compatible API"
readmeQualityOk: true
url: "https://github.com/TrustBreather/Backend-OS"
homepage: "https://chatgpt.boats"
language: "PowerShell"
languages: ["PowerShell", "Batchfile"]
languagePcts: [79, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-01-10T12:25:11Z"
lastCommitAt: "2026-10-25T09:00:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 53
maintainers: ["TrustBreather"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ba66ce872806053647a6a32d7eb87ed4a1d26b82255d5db1cba75fff867085/TrustBreather/Backend-OS"
---

## Backend OS là gì?

Backend OS là một **kernel orchestration chạy local**. Kernel nhận request từ client, chuẩn hóa payload, dispatch công việc tới browser worker và stream kết quả ngược về client.

Các endpoint chính:

```text
Client harness
  ├─ POST /v1/chat/completions
  └─ MCP SSE /mcp/sse
          ↓
BackendOS Kernel :3210
  ├─ authenticate + normalize + dispatch
  ├─ coordinate /v1/swarm/*
  └─ stream results via SSE
          ↓
Chrome Extension worker
  ├─ register browser tab, provider and role
  ├─ receive pending tasks
  └─ harvest / stream results
```

## Cài đặt bản phát hành Windows

Sau khi khởi chạy, kernel mặc định lắng nghe tại `http://127.0.0.1:3210`.

### 1. Chuẩn bị các file

Tải đầy đủ các file dưới đây về **cùng một thư mục**:

```text
Backend-OS/
├─ manifest.json
├─ gpt_agent.exe.part001
├─ gpt_agent.exe.part002
├─ merge.bat
├─ get_hdid.exe
└─ ...
```

`manifest.json` là nguồn thông tin cho tên file output, thứ tự các part và SHA-256 cần kiểm tra.

### 2. Ghép executable

Double-click:

```text
merge.bat
```

Script sẽ ghép các part thành:

```text
gpt_agent.exe
```

Sau khi ghép, script tự tính SHA-256 của file output và dừng nếu không khớp với…
