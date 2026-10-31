---
repo: "ANDRS-Projects/cloudflare-uptime-oss"
name: "cloudflare-uptime-oss"
description: "Self-hosted uptime monitoring on Cloudflare Workers with public status pages"
readmeQualityOk: true
url: "https://github.com/ANDRS-Projects/cloudflare-uptime-oss"
homepage: "https://cloudflare-uptime.andrs.nu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["cloudflare-workers", "public-status-pages", "self-hosted", "uptime-monitor", "endpoint", "history-page", "monitoring", "agentsmd", "ai-agents", "claude-code"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-26T10:07:59Z"
lastCommitAt: "2026-10-31T09:53:52Z"
lastReleaseAt: "2026-05-30T17:28:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 61
maintainers: ["carolinevrauwdeunt-lab", "claude", "ourpxi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1250108950/06ac1aa1-a911-4b14-ba91-ad0bd209fff1"
fundingLinks: ["GITHUB:https://github.com/carolinevrauwdeunt-lab", "GITHUB:https://github.com/ANDRS-Projects", "BUY_ME_A_COFFEE:https://buymeacoffee.com/dare2create"]
discussionCount: 3
---

# cloudflare-uptime

Self-hosted uptime monitoring on Cloudflare Workers with public status pages — no servers, no monthly fees.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Deployment Guide](#deployment-guide)
- [Configuration Reference](#configuration-reference)
- [Development](#development)
- [Caveats](#caveats)
- [Using with Claude Code](#using-with-claude-code)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Multi-monitor support** — track any HTTP endpoint or TCP socket (via `tcp://`) with configurable check intervals and timeouts
- **Keyword monitors** — an HTTP check that also requires a given piece of text to appear in the page; goes down when the page loads but the text is missing
- **Push (heartbeat) monitors** — for cron jobs, backups and anything else you can't poll: your job calls a secret URL when it runs, and the monitor goes down if the call doesn't arrive in time. An *upside-down* variant goes down when its URL is called. **Manual monitors** let you set a status by hand. See [Push, keyword and manual…
