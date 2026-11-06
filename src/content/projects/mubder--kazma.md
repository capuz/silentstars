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
stars: 10
forks: 2
openIssues: 1
closedIssues: 40
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-06-20T21:09:02Z"
lastCommitAt: "2026-11-06T02:42:14Z"
lastReleaseAt: "2026-09-12T00:49:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["Copilot", "Mubder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4812d9dbfb99e4fb92d6cd4fdc9f56ee6d59bf8542b76095e1d267094495375/Mubder/kazma"
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
| **~785K LOC** (623K Python code + 46K JS) | **19,920 tests** (1,524 test files) | **4,488+ commits** across 6 packages | Web · TUI · CLI · Telegram · Discord · Slack |

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
