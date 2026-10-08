---
repo: "AmerSarhan/darce-cli"
name: "darce-cli"
description: "AI coding agent for your terminal. 300+ models, model derby, rewind, risk-scored approvals, skills and memory. Open source."
readmeQualityOk: true
url: "https://github.com/AmerSarhan/darce-cli"
homepage: "https://cli.darce.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "ai-agent", "automation", "cli", "code-generation", "coding-agent", "command-line", "deepseek", "developer-tools", "devtools"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-03-31T18:14:03Z"
lastCommitAt: "2026-10-08T10:51:47Z"
lastReleaseAt: "2026-10-08T09:54:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["AmerSarhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9ad2c14d009c48bf3f9049b3e71339bad46e8ddff080d15eb06b33036b35bf/AmerSarhan/darce-cli"
---

Reads, writes, edits code, runs commands, searches codebases.<br>
  One command to install. One command to start.

---

```
> fix the authentication bug in login.ts

  I'll read the file first.

  ○ Read src/auth/login.ts
    1  import { verify } from './jwt'
    ... 45 more lines

  Found it — token expiry compares seconds vs milliseconds.

  ● Edit src/auth/login.ts
    File updated

  ● Bash npm test
    24/24 tests passing

  Fixed. Wrapped the Unix timestamp in * 1000.

qwen3-coder · 3.1k tokens · $0.0008 · 6s
```

## Why Darce?

- **Any model** — 300+ tool-capable models via OpenRouter: Claude, GPT, Gemini, Grok, DeepSeek, Kimi, GLM, Qwen. Switch mid-conversation.
- **Always current** — the model list is fetched live, so new models show up the day they launch.
- **Lightweight** — a ~70 kB package that installs in seconds and starts instantly.
- **Free tier** — start without a credit card or an API key.
- **Open source** — MIT licensed.

## What's New in 0.11.0

- **Easier model picking.** `/model` (or Ctrl+P) now opens with your recent models, then OpenRouter's live **most popular** ranking, then everything else. Each row shows a friendly name, vendor, price level ($ to…
