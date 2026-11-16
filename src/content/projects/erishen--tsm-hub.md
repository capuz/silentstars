---
repo: "erishen/tsm-hub"
name: "tsm-hub"
description: "AI Capability Hub & LLM Gateway - unify models, tools, skills, MCPs, sandbox, memory with discovery and promotion across 13+ providers"
readmeQualityOk: true
url: "https://github.com/erishen/tsm-hub"
homepage: "https://github.com/erishen/tsm-hub"
language: "Go"
languages: ["Go"]
languagePcts: [67]
topics: ["ai-gateway", "angular", "golang", "llm", "llm-gateway", "mcp", "model-router", "openai", "openai-compatible", "skills"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-11T05:14:18Z"
lastCommitAt: "2026-11-16T11:45:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 60
maintainers: ["erishen"]
openGraphImageUrl: "https://opengraph.githubassets.com/2adfc27f6e76c5ff185acfd723251f98803c743a08a33c82a58f99fb108ee7db/erishen/tsm-hub"
---

# tsm-hub

> **AI Capability Hub & LLM Gateway** — unify models, tools, skills, MCPs, sandbox, memory with discovery and promotion across 13+ providers.
> Expose only your own `sk-tr-…` keys to clients; internally route OpenAI-compatible requests to multiple configured upstream providers,
> with a built-in capability pool (generic tools + Agent Skills + MCP servers + Docker sandbox + session memory) that every downstream client gets for free.

- **Backend**: Go 1.26.11, single binary, stdlib-first — three direct dependencies: `modernc.org/sqlite` (pure-Go driver), `github.com/dop251/goja` (JS runtime for the Fastpath detector sandbox), and `github.com/fsnotify/fsnotify` (config hot-reload watcher)
- **Frontend**: Angular 19 (standalone + signals), build output `embed`ded into the Go binary
- **Storage**: JSON config (atomic writes) + JSONL usage logs + SQLite (memory/audit logs), no external DB required
- **Protocol**: OpenAI-compatible client API (`/v1/chat/completions`, `/v1/models`, …), with SSE streaming passthrough; **upstream protocol adapter layer** supports 13 protocols…
