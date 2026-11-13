---
repo: "EnvSync-Cloud/envsync"
name: "envsync"
description: "@envsync/monorepo - EnvSync Monorepo Codebase"
readmeQualityOk: true
url: "https://github.com/EnvSync-Cloud/envsync"
homepage: "https://envsync.cloud"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 9
forks: 8
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-15T12:37:49Z"
lastCommitAt: "2026-11-13T10:23:04Z"
lastReleaseAt: "2026-04-02T21:12:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 71
maintainers: ["BRAVO68WEB", "XxThunderBlastxX"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a904e5eaf4d5a6fea0c7dfcbb624df5efb34d39847d180b6fd974a7b47ee79/EnvSync-Cloud/envsync"
---

CLI-first secrets and config delivery for dev, staging, CI, and production.

---

## Why EnvSync?

**The problem:** `.env` files are the #1 source of credential leaks. Teams share secrets via Slack DMs, email threads, and Google Docs. Each copy is a potential breach.

**The solution:** EnvSync provides a single source of truth for environment variables and secrets, with:
- 🔄 **Point-in-time rollback** — Undo any secret change to any previous state
- ✅ **Approval workflows** — Require review before production changes
- 🔐 **End-to-end encryption** — AES-256 at rest, TLS in transit
- 🚀 **CLI-first workflow** — `envsync pull` and `envsync push` in your terminal
- 🌐 **28+ integrations** — GitHub, GitLab, Vercel, AWS, and more

---

## Quick Start

```bash
# Install CLI
curl -fsSL https://cli.envsync.cloud/install.sh | sh

# Login
envsync auth login

# Pull secrets
envsync pull --env development

# Push changes
envsync push --env staging
```

---

## Architecture

**One API process** serves both product routes (`/api/...`) and, when Enterprise modules are enabled, manage routes (`/api/v1/manage/{module}/...`). There is no separate management API process or management SDK package.…
