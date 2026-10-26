---
repo: "Mubder/kazma"
name: "kazma"
description: "Self-hosted AI agent platform, bilingual by design (English + Arabic). One agent across Web, TUI, CLI, Telegram, Discord and Slack: long-term memory, approval before risky actions, Web IDE, X Studio, Knowledge Base and Deep Research. MIT licensed."
readmeQualityOk: true
url: "https://github.com/Mubder/kazma"
homepage: "https://kazma.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["ai-agent", "ai-agents", "arabic", "arabic-ai", "arabic-nlp", "langgraph", "rag", "swarm", "swarm-intelligence", "hitl"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 40
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-06-20T21:09:02Z"
lastCommitAt: "2026-10-26T20:57:31Z"
lastReleaseAt: "2026-09-12T00:49:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/46348e2f73e6481515629888fc9e8406964268d161e171024004af4056962625/Mubder/kazma"
---

# Kazma

  **The self-hosted AI agent that asks before it acts.**

  One agent, bilingual in English and Arabic, that you reach from the browser,
  the terminal, Telegram, Discord or Slack. It works in your repository,
  researches, writes and posts, and runs your schedule; it pauses for your
  approval before anything risky, remembers what you tell it, and says so when
  it fails instead of inventing an answer.

| Codebase | Test suite | History | Talk to it from |
|---|---|---|---|
| **~718K LOC** (573K Python code + 45K JS) | **17,685 tests** (1,279 test files) | **4,407+ commits** across 6 packages | Web · TUI · CLI · Telegram · Discord · Slack |

---

## Quick start

**You need:** Python 3.11 to 3.14 (3.12 or 3.13 recommended), Git, and one model:
an API key from a provider (OpenAI, Anthropic, Google, DeepSeek, OpenRouter and
[others](https://kazma.ai/docs/configuration/)) or a model running locally in
Ollama or LM Studio.

### 1. Setup script (recommended)

**Linux, macOS or WSL**

```bash
git clone https://github.com/Mubder/kazma.git
cd kazma
./setup.sh
source .venv/bin/activate
kazma serve
```

**Windows (PowerShell)**

```powershell
git clone…
