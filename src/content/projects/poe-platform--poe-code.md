---
repo: "poe-platform/poe-code"
name: "poe-code"
description: "Use Poe to power your favorite coding agents (Claude Code, Codex, OpenCode, etc). No need for multiple subscriptions."
readmeQualityOk: true
url: "https://github.com/poe-platform/poe-code"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 25]
topics: ["claude", "code", "codex", "opencode"]
stars: 100
forks: 15
openIssues: 0
closedIssues: 628
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-10-17T20:26:49Z"
lastCommitAt: "2026-11-08T14:15:38Z"
lastReleaseAt: "2025-11-30T03:41:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 47
maintainers: ["kamilio"]
openGraphImageUrl: "https://opengraph.githubassets.com/328a3d44f29a33702a7118e0a1cf03acec88df2694747b2a752770f6f86f1c32/poe-platform/poe-code"
---

Power your favorite coding agents (Claude Code, Codex, OpenCode, and more) with your Poe subscription—**no need to handle multiple providers/accounts.** Poe Code routes everything through the [Poe API](https://poe.com/api) .

Configure an agent once and use its normal CLI or desktop app, or spawn one-off prompts through Poe. Installing or updating Poe Code leaves your skills untouched.

## Quickstart

### Set it as your default (works with CLIs and desktop apps)

This updates the provider’s config files and continue using your tools normally.

```bash
# Start the interactive setup
npx poe-code@latest configure

# Setup a specific agent
npx poe-code@latest configure codex # (or claude, opencode, goose)
```

### Unconfigure (remove overrides)

```bash
npx poe-code@latest unconfigure claude
```

## Authentication

Poe Code uses your [Poe API key](https://poe.com/api) for authentication. On first run, you'll be prompted to log in via your browser (OAuth). You can also provide your key directly:

```bash
# Interactive login (opens browser)
npx poe-code@latest login

# Or pass your API key directly
npx poe-code@latest login --api-key <your-key>

# Or set it as an environment variable…
