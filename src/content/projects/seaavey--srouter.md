---
repo: "seaavey/SRouter"
name: "SRouter"
description: "Local-first AI Gateway: Connect Claude Code, Cursor, Windsurf, & Cline to Antigravity, OpenAI, Claude, & Gemini. One endpoint, OAuth auto-refresh, quota pooling & failover."
readmeQualityOk: true
url: "https://github.com/seaavey/SRouter"
homepage: "https://www.npmjs.com/package/@srouter/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-gateway", "llm-proxy", "openai", "self-hosted", "ai-router", "antigravity", "auto-fallback", "claude", "claude-code", "cline"]
stars: 22
forks: 11
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-08-09T04:26:01Z"
lastCommitAt: "2026-09-20T08:45:59Z"
lastReleaseAt: "2026-09-19T03:43:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["seaavey", "Synthever"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e92031628ee1f756de88e4d8aa957ac2338681388c49fbac1824994e08125a5/seaavey/SRouter"
---

# SRouter

**A local-first AI gateway and LLM proxy for OpenAI, Anthropic, and custom models.**

Use one local endpoint to route requests, manage provider authentication, enforce quotas, and inspect usage.

<p>
</p>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/demo-dark.gif">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/demo-light.gif">
  </picture>
</p>

</div>

## Dashboard showcase

Watch the short walkthrough to see the dashboard, provider controls, routing surface, quotas, logs, and supporting features in context.

## Contents

- [Quick start](#quick-start)
- [Connect coding tools](#connect-coding-tools)
- [Configure a client](#configure-a-client)
- [Supported providers](#supported-providers)
- [API endpoints](#api-endpoints)
- [Development](#development)
- [Docker Compose](#docker-compose)

## Quick Start

### Docker

```bash
docker run -d \
  --name srouter \
  --restart unless-stopped \
  -p 3000:3000 \
  -p 1455:1455 \
  -v "$HOME/.srouter:/root/.srouter" \
  ghcr.io/seaavey/srouter:latest
```

SRouter stores its SQLite database and provider credentials in `~/.srouter` on the host.

Open `http://localhost:3000`…
