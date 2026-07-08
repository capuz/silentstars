---
repo: "vibe-cafe/vibe-usage"
name: "vibe-usage"
description: "Token usage statistics tool (CLI)"
originalDescription: "Token 使用量统计工具（CLI）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vibe-cafe/vibe-usage"
homepage: "https://vibecafe.ai/usage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "codex", "hermes"]
stars: 78
forks: 17
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-24T09:38:12Z"
lastCommitAt: "2026-07-08T05:41:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 34
maintainers: ["kalasoo", "park0er", "EagleFandel"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1dd653f1defdc712c52a111e0c958873a7ecaea47ea7628360b52cc5ab84f72/vibe-cafe/vibe-usage"
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
