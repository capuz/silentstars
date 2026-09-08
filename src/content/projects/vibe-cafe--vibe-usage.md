---
repo: "vibe-cafe/vibe-usage"
name: "vibe-usage"
description: "Token 使用量统计工具（CLI）"
readmeQualityOk: true
url: "https://github.com/vibe-cafe/vibe-usage"
homepage: "https://vibecafe.ai/usage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "codex", "hermes"]
stars: 126
forks: 38
openIssues: 5
closedIssues: 28
watchers: 0
contributors: 22
recentReleases: 9
createdAt: "2026-02-24T09:38:12Z"
lastCommitAt: "2026-09-08T08:16:41Z"
lastReleaseAt: "2026-09-03T05:14:54Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["kalasoo", "park0er", "Glowin"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f348efa270c84235bdc0d76e1d7dd23f68de80c51af59f2944c84fd09c7bd9e/vibe-cafe/vibe-usage"
---

# vibe-usage

Track your AI coding tool token usage and sync to [vibecafe.ai](https://vibecafe.ai).

## Quick Start

```bash
npx @vibe-cafe/vibe-usage
```

That's it. The CLI opens [vibecafe.ai/usage/device](https://vibecafe.ai/usage/device) in your browser; sign in, confirm the verification code shown in your terminal, click 「确认链接」, and the CLI receives an API key automatically.

After approval, it will:
1. Save your API key to `~/.vibe-usage/config.json`
2. Detect installed AI coding tools
3. Run an initial sync of your usage data
4. Prompt you to enable the background daemon for continuous syncing (recommended)

### CI / Headless

If you don't have a local browser (CI, remote SSH session, container), pre-issue a key at [vibecafe.ai/usage/setup](https://vibecafe.ai/usage/setup) and pass it on the command line:

```bash
npx @vibe-cafe/vibe-usage init --manual-key vbu_xxxxxxxxxxxx
```

## Commands

```bash
npx @vibe-cafe/vibe-usage              # Init (first run, browser login) or sync (subsequent runs)
npx @vibe-cafe/vibe-usage init         # Re-run setup via browser login
npx @vibe-cafe/vibe-usage init --manual-key <vbu_...>   # Skip browser, use pre-issued key (CI/headless)
npx…
