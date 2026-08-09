---
repo: "lis186/ccxray"
name: "ccxray"
description: "X-ray vision for AI agent sessions — a transparent HTTP proxy and dashboard for Claude Code"
readmeQualityOk: true
url: "https://github.com/lis186/ccxray"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 236
forks: 36
openIssues: 60
closedIssues: 180
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-04-03T05:19:06Z"
lastCommitAt: "2026-08-09T04:47:49Z"
lastReleaseAt: "2026-04-21T12:44:54Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 26
maintainers: ["lis186", "lolxl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9054514d50483f1eac98a486d5fe309df134ae9acd30c585eddf288b877db03/lis186/ccxray"
---

# ccxray

**English** | [正體中文](https://github.com/lis186/ccxray/blob/HEAD/README.zh-TW.md) | [日本語](https://github.com/lis186/ccxray/blob/HEAD/README.ja.md)

X-ray vision for AI agent sessions. A zero-config HTTP proxy that records every API call between Claude Code, Codex, and their upstream APIs, with a real-time dashboard and workflow timeline to inspect what's actually happening inside your agent.

## Why

Claude Code is a black box. You can't see:
- What system prompts it sends (and how they change between versions)
- How much each tool call costs
- Why it's thinking for 30 seconds
- What context is eating your 200K token window

ccxray makes it a glass box.

## Quick Start

```bash
npx ccxray claude
# or
npx ccxray codex
# or
npx ccxray grok
```

That's it. Proxy starts, the selected CLI launches through it, and the dashboard opens automatically in your browser. Run it in multiple terminals — they automatically share one dashboard.

The launcher argument is provider-backed. Today `claude`, `codex`, and `grok` are supported; unknown provider commands fail fast instead of silently starting an unconfigured proxy.

### Other ways to run

```bash
ccxray                           #…
