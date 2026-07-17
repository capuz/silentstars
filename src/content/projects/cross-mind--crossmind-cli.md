---
repo: "cross-mind/crossmind-cli"
name: "crossmind-cli"
description: "Agent-native CLI for 15 social platforms. Compact output by default, --json for structured data."
readmeQualityOk: true
url: "https://github.com/cross-mind/crossmind-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["agent-tools", "ai-agent", "automation", "developer-tools", "llm-tools", "social-media", "twitter", "twitter-client"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-25T23:59:44Z"
lastCommitAt: "2026-07-17T05:57:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 28
maintainers: ["cestivan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae27931fa7ef4802bab23b601b50fb3538acc30465bc07ceb6cd4647e9aa37b0/cross-mind/crossmind-cli"
---

# crossmind

Agent-native CLI for 15 social platforms. Token-efficient output, multi-account, built-in safety policies.

```bash
npm install -g crossmind
```

> **Don't want to manage the CLI yourself?** [crossmind.io](https://crossmind.io) runs the full growth strategy autonomously — no setup, no scripts, just results.

## Why crossmind

Most social CLIs are built for humans. crossmind is built for AI agents:

- **Compact output by default** — single-line `key:value` format, no emoji, no decorative whitespace
- **`--json` for structured pipelines** — clean arrays with no outer wrapper
- **No-auth first** — public platforms work out of the box, no configuration required
- **Built-in write safety** — write dedup, DM frequency control, random jitter delays, exponential backoff

## Token Benchmark

Measured on `x search "AI agent" 10` against raw X GraphQL JSON output (the format agents would otherwise consume):

| Format | Bytes | Approx tokens | vs raw |
|--------|-------|---------------|--------|
| Raw X GraphQL JSON | 15,568 | ~3,892 | baseline |
| `crossmind x search` (compact) | 2,663 | ~666 | **−83%** |
| `crossmind x search --json` | 4,687 | ~1,172 | **−70%** |

Per tweet:…
