---
repo: "poe-platform/poe-code"
name: "poe-code"
description: "Use Poe to power your favorite coding agents (Claude Code, Codex, OpenCode, etc). No need for multiple subscriptions."
readmeQualityOk: true
url: "https://github.com/poe-platform/poe-code"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["claude", "code", "codex", "opencode"]
stars: 95
forks: 14
openIssues: 1
closedIssues: 392
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-10-17T20:26:49Z"
lastCommitAt: "2026-08-29T17:28:13Z"
lastReleaseAt: "2025-11-30T03:41:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["kamilio"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8e2f9038d90b9df71e237890e88028be0110745d2b57fdd4eadc3f22f722093/poe-platform/poe-code"
---

<h1>Poe Code ⚡</h1>

</div>

Power your favorite coding agents (Claude Code, Codex, OpenCode, and more) with your Poe subscription—**no need to handle multiple providers/accounts.** Poe Code routes everything through the [Poe API](https://poe.com/api) .

Configure an agent once and use its normal CLI or desktop app, or spawn one-off prompts through Poe.

## Quickstart

### Set it as your default (works with CLIs and desktop apps)

This updates the provider’s config files and continue using your tools normally.

```bash
# Start the interactive setup
npx poe-code@latest configure

# Setup a specific agent
npx poe-code@latest configure codex # (or claude, opencode, kimi, goose)
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

# Or set it as an environment variable
export POE_API_KEY=<your-key>…
