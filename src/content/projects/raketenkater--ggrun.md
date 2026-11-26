---
repo: "raketenkater/ggrun"
name: "ggrun"
description: "llama.cpp/ik_llama.cpp launcher: loads big MoE models across mismatched multi-GPU rigs by exact VRAM math."
readmeQualityOk: true
url: "https://github.com/raketenkater/ggrun"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["cuda", "gguf", "llama-cpp", "llm", "metal", "moe", "multi-gpu", "golang", "inference-server", "llamacpp"]
stars: 284
forks: 18
openIssues: 13
closedIssues: 30
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-03-11T11:15:58Z"
lastCommitAt: "2026-11-26T22:38:26Z"
lastReleaseAt: "2026-10-18T15:00:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 33
maintainers: ["raketenkater"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c0de62a79c3b4cfa388bef21bc6194efa756cb4a6151c59edaf966019eb1860/raketenkater/ggrun"
discussionCount: 1
---

# ggrun

A launcher for llama.cpp and ik_llama.cpp. It recommends a model for your machine, places it across mismatched GPUs and RAM, and checks that it fits before it serves.

ggrun is not an inference engine. It reads the GGUF and the hardware: CPU, RAM, GPUs and PCIe links. From those it builds a `llama-server` command for a backend that supports the model's architecture, and checks that command against the backend's own memory measurement before it starts the server. The generated command stays visible (`--dry-run`), and flags ggrun does not handle are passed to `llama-server` unchanged. Linux with NVIDIA is the tested path.

Recorded October 14, 2026 at `16c2ae1` (v3.2.11 plus fixes) on 3 GPUs. It shows a public install, the recommended model, the download, an automatic launch, and Claude Code fixing a failing test. Sped-up parts are captioned with their real duration.

## Install

Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/raketenkater/ggrun/main/setup.sh | bash
```

Windows (PowerShell):

```powershell
iwr -useb https://raw.githubusercontent.com/raketenkater/ggrun/main/install.ps1 | iex
```
