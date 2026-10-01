---
repo: "CorvinLabs/CorvinOS"
name: "CorvinOS"
description: "Self-hosted agentic OS — a Vibe-Engineering platform for Builders. Connect Claude Code, Codex or Hermes Agent to Discord, Telegram, WhatsApp, Slack & Email. EU AI Act 2026 & GDPR compliance by architecture."
readmeQualityOk: true
url: "https://github.com/CorvinLabs/CorvinOS"
homepage: "https://corvin-labs.com"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agentic-ai", "ai-assistant", "eu-ai-act", "llm", "ollama", "privacy", "self-hosted", "agentic", "agentic-os", "claude-code"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-06-28T23:12:56Z"
lastCommitAt: "2026-10-01T10:23:16Z"
lastReleaseAt: "2026-07-22T09:38:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["veegee82"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b09375b2dac6d0303fd2cbd3725cf453e3a0d8458a91f0d1b7ebc73aff97e97/CorvinLabs/CorvinOS"
fundingLinks: ["GITHUB:https://github.com/veegee82"]
---

# CorvinOS — The Self-Learning AI Operating System

> **CorvinOS is an operating system for AI workflows that learns, optimizes costs, and proves everything.**

---

## ⚡ Quick Start (2 minutes)

### Installation

**All platforms (macOS, Linux, Windows):**

```bash
# macOS / Linux / WSL — always the current main
curl -fsSL https://raw.githubusercontent.com/CorvinLabs/CorvinOS/main/install.sh | sh

# Windows (PowerShell)
irm https://raw.githubusercontent.com/CorvinLabs/CorvinOS/main/install.ps1 | iex
```

Without a checkout the installer fetches `main` into a managed source tree
(`~/.local/share/corvinos/src`, Windows `%LOCALAPPDATA%\corvinos\src`) — with
git when present, as a tarball otherwise — so `update.sh` can refresh it in
place. PyPI lags `main`; `--pypi` installs the published wheel instead.

**From a local checkout** (detected automatically — no arguments needed):

```bash
git clone https://github.com/CorvinLabs/CorvinOS.git
cd CorvinOS
./install.sh

# or on Windows (PowerShell):
install.ps1 -Editable .\
```

**What happens:**
1. ✅ Bootstraps a fresh Python environment (no system Python required)
2. ✅ Installs CorvinOS + voice models (STT + TTS, offline)
3. ✅ Auto-detects…
