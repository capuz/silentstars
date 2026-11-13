---
repo: "Data-Masterclass/sovereign-agentic-os"
name: "sovereign-agentic-os"
description: "Sovereign Agentic OS — self-hostable, EU-sovereign agentic data platform on Kubernetes (pre-beta). One Helm chart, runs in your own cluster."
readmeQualityOk: true
url: "https://github.com/Data-Masterclass/sovereign-agentic-os"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agents", "data-platform", "helm", "kubernetes", "llm", "mcp", "rag", "self-hosted", "sovereign-ai"]
stars: 5
forks: 7
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-28T11:33:26Z"
lastCommitAt: "2026-11-13T11:22:25Z"
lastReleaseAt: "2026-06-30T03:17:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 72
maintainers: ["aborek", "KamalGalrani", "mohitarathour10"]
openGraphImageUrl: "https://opengraph.githubassets.com/7832acfdada02ebd526e96fcd22170369adcc1255efaed75796f1f3bd4a2e9f5/Data-Masterclass/sovereign-agentic-os"
---

# Sovereign Agentic OS

A governed operating system for building and running AI agents on your own infrastructure.
Agents are built as **LangGraph** graphs, call tools through **one** MCP dispatcher, read data,
files, knowledge and connections through **policy-checked** paths, route every model call through
**LiteLLM**, and emit **one trace per run**. Everything runs in your cluster — no SaaS dependency.

It runs on a laptop first. The same chart runs on a managed Kubernetes cluster.

---

## Quickstart

```bash
git clone https://github.com/Data-Masterclass/sovereign-agentic-os.git
cd sovereign-agentic-os
./scripts/os up
```

Prerequisites: Docker (Colima or Docker Desktop, ~8 GB to the VM), `kind`, `helm`, `kubectl`, `python3`.

`os up` creates a kind cluster, builds the images for your architecture, installs the chart and
prints the URL. First run takes ~10–15 minutes (image builds); later runs a few minutes.

```
UI:     http://localhost:8080     login: admin / admin  (you set a real email + password on first login)
MCP:    http://localhost:8080/api/mcp
```

Without an API key the OS serves a **mock model** so everything is clickable offline. For real
models, export a key for…
