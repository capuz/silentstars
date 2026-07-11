---
repo: "tinyfatco/troublemaker"
name: "troublemaker"
description: "Mom, liberated. Multi-platform AI agent runtime."
readmeQualityOk: true
url: "https://github.com/tinyfatco/troublemaker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 50
forks: 1
openIssues: 23
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T19:25:02Z"
lastCommitAt: "2026-07-11T05:56:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 28
maintainers: ["alosec"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac978a14384a26ef6470e8e2cc24d3874c946f404063f77c801f13cc36d1b0d7/tinyfatco/troublemaker"
---

# Troublemaker

An AI agent runtime with multi-platform adapters. Connects to Slack, Telegram, and Email — runs tools, manages files, and maintains persistent memory across sessions.

Built on [mom](https://github.com/badlogic/pi-mono) by [Mario Zechner](https://mariozechner.at/). Troublemaker extracts mom's agent core into a standalone runtime with multi-platform adapters. Mom does the thinking — troublemaker gets it to more places.

## Don't want to self-host?

[tinyfat.com](https://tinyfat.com) runs troublemaker for you — managed agents with sandboxed containers, multi-channel delivery, and scheduled events. No servers, no Docker, no ops.

## How It Works

When a message arrives from any platform, troublemaker hands it to the mom agent. Mom is **self-managing**: she installs her own tools, writes [CLI tools ("skills")](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/), configures credentials, and maintains her workspace autonomously.

**For each conversation** (Slack channel, Telegram chat, email thread), the agent maintains:
- **Persistent memory** — `MEMORY.md` files (global + per-channel) loaded into every prompt
- **Full history** — `log.jsonl` with…
