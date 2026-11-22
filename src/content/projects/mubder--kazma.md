---
repo: "Mubder/kazma"
name: "kazma"
description: "Self-hosted AI agent platform, bilingual by design (English + Arabic). One agent across Web, TUI, CLI, Telegram, Discord and Slack: long-term memory, approval before risky actions, Web IDE, X Studio, Knowledge Base and Deep Research. MIT licensed."
readmeQualityOk: true
url: "https://github.com/Mubder/kazma"
homepage: "https://kazma.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agent", "ai-agents", "arabic", "arabic-ai", "arabic-nlp", "langgraph", "rag", "swarm", "swarm-intelligence", "hitl"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 40
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-06-20T21:09:02Z"
lastCommitAt: "2026-11-22T01:41:33Z"
lastReleaseAt: "2026-11-12T03:21:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 63
maintainers: ["Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275555421/af5ee703-2abe-49fa-b2d3-71fd4684cc58"
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
| **~980K LOC** (774K Python code + 51K JS) | **27,244 tests** (1,907 test files) | **5,748+ commits** across 6 packages | Web · TUI · CLI · Telegram · Discord · Slack |

---

## Quick start

**You need:** Git and one model (the setup script installs Python 3.11 to 3.14 through uv when there is none):
an API key from a provider (OpenAI, Anthropic, Google, DeepSeek, OpenRouter and
[others](https://kazma.ai/docs/configuration/)) or a model running locally in
Ollama or LM Studio.

### 1. Setup script (recommended)

**Linux, macOS or WSL**

```bash
git clone https://github.com/Mubder/kazma.git
cd kazma
./setup.sh
```

**Windows (PowerShell or Command Prompt)**
