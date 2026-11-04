---
repo: "flisk-sh/flisk"
name: "flisk"
description: "Flisk: your whole app, running on your computer with one command"
readmeQualityOk: true
url: "https://github.com/flisk-sh/flisk"
homepage: "https://flisk.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [55]
topics: ["tilt", "developer-experience", "developer-tools", "devops", "local-development", "docker-compose", "hacktoberfest", "hacktoberfest2026", "traefik", "tiltfile"]
stars: 35
forks: 51
openIssues: 420
closedIssues: 885
watchers: 4
contributors: 53
recentReleases: 10
createdAt: "2026-09-19T11:44:49Z"
lastCommitAt: "2026-11-04T13:05:29Z"
lastReleaseAt: "2026-10-09T16:46:46Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["odykyi", "sunny-kavixo", "kburym"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377087398/08efbba4-03f7-4a4b-aa26-227f122d7dcf"
fundingLinks: ["GITHUB:https://github.com/flisk-sh"]
discussionCount: 84
---

# Flisk: your whole app, running on your computer with one command

**[What is Flisk?](#what-is-flisk) · [Key features](#key-features) · [Quick start](#quick-start) · [Commands](#commands) · [Configuration](#configuration) · [With your AI agent](#use-flisk-with-your-ai-agent) · [FAQ](#faq) · [Docs](#docs)**

## What is Flisk?

Flisk is a command-line tool for local development. It runs every part of your app (API, website, workers, AI agents, database) on your computer with one command. Docker is optional: a small app runs as plain local processes, and a bigger one gets containers, one address in front of every part and live reload on Docker and Tilt. Have a `docker-compose.yml`? `flisk import` reads it. Otherwise describe each part in a small `service.json`; for the Docker path Flisk writes the Dockerfiles, the Compose file and the Tiltfile from it, and keeps them in sync. An MCP server lets your AI agent run it too. It does not deploy: production stays with your own tools.

Try it first. One command, nothing to install except Node.js 22.12+, and no Docker needed:

```bash
npx @flisk-sh/flisk demo
```

With Docker running and Tilt installed, that starts the full restaurant demo:…
