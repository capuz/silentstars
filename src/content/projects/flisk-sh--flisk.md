---
repo: "flisk-sh/flisk"
name: "flisk"
description: "Generate and Run your whole Tech Stack without the setup pain.  💚 AI.  💚https://github.com/flisk-sh/flisk 💚 🫧https://demo.flisk.sh  ⚡️https://flisk.sh  "
readmeQualityOk: true
url: "https://github.com/flisk-sh/flisk"
homepage: "https://flisk.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [54]
topics: ["tilt", "developer-experience", "developer-tools", "docker", "microservices", "devops", "local-development", "docker-compose", "hacktoberfest", "hacktoberfest2026"]
stars: 28
forks: 49
openIssues: 367
closedIssues: 794
watchers: 4
contributors: 51
recentReleases: 10
createdAt: "2026-09-19T11:44:49Z"
lastCommitAt: "2026-10-30T10:22:38Z"
lastReleaseAt: "2026-10-09T16:46:46Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "community_hub", "fork_magnet"]
healthScore: 94
undervaluedScore: 58
maintainers: ["odykyi", "sunny-kavixo", "kburym"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377087398/08efbba4-03f7-4a4b-aa26-227f122d7dcf"
fundingLinks: ["GITHUB:https://github.com/flisk-sh"]
discussionCount: 83
---

# Flisk: your whole app, running on your computer with one command

**[What is Flisk?](#what-is-flisk) · [Key features](#key-features) · [Quick start](#quick-start) · [Commands](#commands) · [Configuration](#configuration) · [With your AI agent](#use-flisk-with-your-ai-agent) · [FAQ](#faq) · [Docs](#docs)**

## What is Flisk?

Flisk is a command-line tool for local development. It runs every part of your app (API, website, workers, AI agents, database) on your computer behind one local address, and reloads a part when you save it. You describe each part in a small `service.json`; Flisk writes the Dockerfiles, the Compose file and the Tiltfile from it, and keeps them in sync. It does not deploy: production stays with your own tools.

```bash
npm install -g @flisk-sh/flisk
mkdir my-shop && cd my-shop
flisk project --yes
flisk resource orders-api --type backend --stack shop --yes
flisk resource shop-web --type frontend --stack shop --yes
flisk up shop
```

That starts an orders API and a storefront behind one gateway, with Postgres and live reload, and prints their URLs. It needs [Docker](https://github.com/flisk-sh/flisk/blob/HEAD/docs/start/words.md#docker),…
