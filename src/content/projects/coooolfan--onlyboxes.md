---
repo: "Coooolfan/onlyboxes"
name: "onlyboxes"
description: "Code Execution Sandbox Platform Solution for Individuals and Small Teams with MCP"
readmeQualityOk: true
url: "https://github.com/Coooolfan/onlyboxes"
homepage: "https://onlybox.es"
language: "Go"
languages: ["Go"]
languagePcts: [61]
topics: ["mcp", "mcp-server", "sandbox"]
stars: 49
forks: 13
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T12:58:10Z"
lastCommitAt: "2026-09-18T14:02:46Z"
lastReleaseAt: "2026-04-01T13:49:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 38
maintainers: ["Coooolfan"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fa38d70d0c7424ff3956790d4996145f99fbcac5a2c2f9e5c07499abf496d2f/Coooolfan/onlyboxes"
---

# Onlyboxes

[简体中文](https://github.com/Coooolfan/onlyboxes/blob/HEAD/docs/README.zh-CN.md)

Onlyboxes is a self-hosted code execution sandbox platform for individuals and small teams.

It uses a control-plane (`console`) and execution-plane (`worker`) architecture, and exposes both REST APIs and MCP tools.

## Key Features

- Self-hosted all components: control node (`console`) + worker nodes (`worker`)
- Separated control and execution planes:
  - Workers support **horizontal scaling**
  - Workers support multi-language **heterogeneous** implementations
  - Workers support **multiple runtimes**
- Full account system: resource isolation (stateful containers, sessions) between accounts
- MCP tools:
  - `pythonExec`: Python code execution
  - `terminalExec`: stateful terminal sessions
  - `readImage`: model-readable images
- REST API: all MCP tools also available via HTTP + async task API

> [!WARNING]
>
> In the current release, console (gRPC + HTTP) does not provide built-in TLS/mTLS.
>
> `worker` rejects insecure console endpoints by default; plaintext is allowed only when `WORKER_CONSOLE_INSECURE=true` is explicitly set.
>
> Put both console HTTP (`:8089`) and gRPC (`:50051`)…
