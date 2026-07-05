---
repo: "CorvinLabs/CorvinOS"
name: "CorvinOS"
description: "Self-hosted agentic OS — connects Claude Code, Codex or Hermes Agent to Discord, Telegram, WhatsApp, Slack & Email. EU AI Act 2026 & GDPR compliance by architecture."
readmeQualityOk: true
url: "https://github.com/CorvinLabs/CorvinOS"
homepage: "https://corvin-labs.com"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agentic-ai", "ai-assistant", "eu-ai-act", "gdpr", "llm", "ollama", "privacy", "self-hosted", "agentic", "agentic-framework"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-28T23:12:56Z"
lastCommitAt: "2026-07-05T20:58:43Z"
lastReleaseAt: "2026-07-01T17:53:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 57
maintainers: ["veegee82"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc659a780a157ef14d34b665084a99e1dfdc958ae69107e875f44d093ddcdd14/CorvinLabs/CorvinOS"
fundingLinks: ["GITHUB:https://github.com/veegee82"]
---

<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="docs/assets/banner.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/banner.svg">
</picture>

</p>

</p>

---

**One install. Any bridge. Any LLM.**

CorvinOS is a self-hosted agentic OS that connects **Claude Code, Codex, Hermes, Ollama and any OpenRouter model** to **Discord, Telegram, WhatsApp, Slack, Email, Teams, Signal and more** — through a single pip package.

- **Local-first** — run 100 % offline with Ollama and `--engine hermes`. No API key needed.
- **Agentic** — generates sandboxed tools and new skills at runtime; delegates subtasks across any number of AI engines.
- **Compliance by architecture** — EU AI Act 2026 + GDPR enforced in code, not policy documents.
- **Multi-tenant** — one instance, multiple users, personas, and teams, all isolated.

---

## Quick Start

```bash
# macOS / Linux — no Python or package manager required
curl -fsSL https://corvin-labs.com/install.sh | sh

# Windows (PowerShell)
irm https://corvin-labs.com/install.ps1 | iex
```

The installer brings its own Python via [uv](https://docs.astral.sh/uv/) — no prerequisites needed. It sets up Hermes (local…
