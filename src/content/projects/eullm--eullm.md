---
repo: "eullm/eullm"
name: "eullm"
description: "Open-source platform for creating, distributing and running sovereign EU-compliant LLMs. Verticalize any model for your domain, language and brand. AI Act ready."
readmeQualityOk: true
url: "https://github.com/eullm/eullm"
homepage: "https://www.eullm.eu"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [47, 37]
topics: ["ai-sovereignty", "data-sovereignty", "eu-ai-act", "europe", "fine-tuning", "gdpr", "gguf", "llm", "local-llm", "ollama"]
stars: 61
forks: 6
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T20:43:57Z"
lastCommitAt: "2026-11-23T12:20:18Z"
lastReleaseAt: "2026-03-30T14:20:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["primoco", "Gabriele06-local"]
openGraphImageUrl: "https://opengraph.githubassets.com/049d6849640a177fcf60a31ce7f8cca87ab3c250d32d55ac7a8493057daa85ce/eullm/eullm"
discussionCount: 1
---

🔒 Local-first and sovereign by design &nbsp;·&nbsp; 🇪🇺 Tested on EuroHPC supercomputers &nbsp;·&nbsp; 🇮🇹 Developed in Italy

---

## Quick start

From nothing to a chat in three steps. No Python, no Docker, no account.

**1. Install** one binary:

```bash
# Linux / macOS: detects the OS and an NVIDIA GPU, checks the release checksums
curl -fsSL https://raw.githubusercontent.com/eullm/eullm/main/installer/install.sh | sh
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/eullm/eullm/main/installer/install.ps1 | iex
```

**2. Run a model**, any GGUF (Qwen, Mistral, DeepSeek, Gemma, …):

```bash
eullm run hf.co/Qwen/Qwen3-8B-GGUF:Q4_K_M
```

**3. Open the chat** on `http://localhost:11435/`, or talk to it with the tools you already use:

```bash
# The same API your existing tooling already speaks
curl http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "qwen3", "messages": [{"role": "user", "content": "Ciao!"}]}'
```
