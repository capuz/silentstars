---
repo: "getsentry/cli"
name: "cli"
description: "Sentry CLI"
url: "https://github.com/getsentry/cli"
homepage: "https://cli.sentry.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["tag-production"]
stars: 89
forks: 10
openIssues: 29
closedIssues: 169
watchers: 2
contributors: 235
recentReleases: 0
createdAt: "2025-12-11T14:28:23Z"
lastCommitAt: "2026-07-03T12:39:08Z"
lastReleaseAt: "2026-01-31T02:04:23Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 36
maintainers: ["BYK", "betegon", "jared-outpost[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fde6b3e8a7a5869f2cbd1bbb22b1fa28053b29b99e1d1af225f79fa6ce076fb4/getsentry/cli"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
---

</p>

  The command-line interface for Sentry. Built for developers and AI agents.
</p>

</p>

---

## Installation

### Install Script (Recommended)

```bash
curl https://cli.sentry.dev/install -fsS | bash
```

### Homebrew

```bash
brew install getsentry/tools/sentry
```

### Package Managers

```bash
npm install -g sentry
pnpm add -g sentry
yarn global add sentry
bun add -g sentry
```

> The npm/pnpm/yarn packages require Node.js 22.15+.

### Run Without Installing

```bash
npx sentry@latest
pnpm dlx sentry --help
yarn dlx sentry --help
bunx sentry --help
```

## Quick Start

```bash
# Authenticate with Sentry
sentry auth login

# List issues (auto-detects project from your codebase)
sentry issue list

# Get AI-powered root cause analysis
sentry issue explain PROJ-ABC

# Generate a fix plan
sentry issue plan PROJ-ABC
```

## Features

- **DSN Auto-Detection** - Automatically detects your project from `.env` files or source code. No flags needed.
- **Seer AI Integration** - Get root cause analysis and fix plans directly in your terminal.
- **Monorepo Support** - Works with multiple projects, generates short aliases for easy navigation.
- **JSON Output** - All commands support…
