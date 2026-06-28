---
repo: "nextpress-ai/nextpress"
name: "nextpress"
description: "All of WordPress on JavaScript."
url: "https://github.com/nextpress-ai/nextpress"
homepage: "https://nextpress.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "caddy", "cms", "wordpress"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-07-29T19:58:46Z"
lastCommitAt: "2026-06-28T01:34:41Z"
lastReleaseAt: "2026-06-28T01:35:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 68
maintainers: ["Hussseinkizz", "pabloh3"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4b3558ea73712a0fe30b01df429e0ee26ca60e3500e019aa3d399657f89887b/nextpress-ai/nextpress"
---

# Nextpress Beta

A self-hostable WordPress-compatible CMS built in JavaScript/TypeScript.

## Quick Start

Get started quickly with local development:

```bash
git clone https://github.com/nextpress-ai/nextpress nextpress
pnpm install
pnpm dev
```

This uses [PGlite](https://pglite.dev/) (embedded PostgreSQL) for development, so you do not need Docker locally.

## Self-Hosting

### NextPress Installer

Install NextPress from the GitHub repo with one command. The installer adds the standalone **`nextpress`** command, provisions the server, and leaves the command available for install, upgrade, status, logs, restart, reload, and uninstall operations.

```bash
curl -fsSL https://raw.githubusercontent.com/nextpress-ai/nextpress/main/install.sh | bash
```

The installer checks for Docker Compose v2, installs the **`nextpress`** command into **`/usr/local/bin`**, verifies the command, and runs **`nextpress install`** before finishing.

References:

- [`docs/cli-usage.md`](docs/cli-usage.md), command usage and options.
- [`docs/upgrade-flow.md`](docs/upgrade-flow.md), schema-aware upgrades and override mode.
- [`packages/cli/README.md`](packages/cli/README.md), command package notes.…
