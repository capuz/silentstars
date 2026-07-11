---
repo: "amarnai/amarnai"
name: "amarnai"
description: "Open-source, self-hostable AI email triage assistant for Gmail. Sorts your inbox into a custom taxonomy; drafts require approval, never auto-sends."
readmeQualityOk: true
url: "https://github.com/amarnai/amarnai"
homepage: "https://amarnai.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai-agent", "ai-email-assistant", "email-automation", "gemini", "gmail", "inbox-zero", "llm", "open-source-saas", "self-hosted"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T13:42:56Z"
lastCommitAt: "2026-07-11T05:56:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["BenAzlay"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1241516226/d9925d0b-fc00-4d6b-96be-dd80c275f556"
---

# Amarnai

Gmail-first AI email triage assistant, with read-only Outlook support in beta. Both connections are read-only: Amarnai sorts and labels your inbox but never sends or mutates mail, and drafts always require your approval.

## Prerequisites

- Node.js 24+ (see `.nvmrc` — run `nvm use`). The Lingui 6 i18n CLI requires Node 24.2 or newer.
- pnpm (`npm install -g pnpm`)
- Docker (for local Postgres and Redis)

## Environment

`.env` is the base env file at the monorepo root. All apps read from it automatically.  
`.env.local` is for local overrides and is never committed.

```bash
cp .env.example .env              # base config (fill in secrets)
cp .env.local.example .env.local  # local overrides (optional)
```

Values in `.env.local` take precedence over `.env`.

### Local Ollama testing

Amarnai can use an Ollama instance running on your machine.

```bash
# 1. Install Ollama if needed
# https://ollama.com/download

# 2. Start Ollama
ollama serve

# 3. Pull the local models
ollama pull qwen3:14b         # LLM (used at runtime)
ollama pull qwen3-embedding   # embeddings (used for sorting)

# 4. Copy local overrides
cp .env.local.example .env.local
````

Make sure…
