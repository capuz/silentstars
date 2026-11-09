---
repo: "fivetaku/insane-review"
name: "insane-review"
description: "Use GPT-5.5 Pro (web-only, no API) from inside Claude Code — repomix-pack the relevant code, send to subscription ChatGPT Pro, harvest the review (API cost $0)"
readmeQualityOk: true
url: "https://github.com/fivetaku/insane-review"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 127
forks: 22
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T00:41:04Z"
lastCommitAt: "2026-11-09T00:53:23Z"
lastReleaseAt: "2026-06-22T07:31:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 74
undervaluedScore: 17
maintainers: ["fivetaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/d86ea9ce67218dc04971ed839d19830df53ec7e62dcd8fbe4cccb9402782f129/fivetaku/insane-review"
fundingLinks: ["GITHUB:https://github.com/fivetaku"]
---

English | [한국어](https://github.com/fivetaku/insane-review/blob/HEAD/README.ko.md) | [中文](https://github.com/fivetaku/insane-review/blob/HEAD/README.zh.md) | [日本語](https://github.com/fivetaku/insane-review/blob/HEAD/README.ja.md) | [Español](https://github.com/fivetaku/insane-review/blob/HEAD/README.es.md)

# insane-review

> **GPT Pro (the Pro reasoning tier of the current flagship — currently GPT-5.6 Sol) has no API. This plugin uses it from inside Claude Code anyway.**

GPT Pro lives only in the ChatGPT web app (subscription) — there is no official API, so you can't reach it from Codex CLI, `omc ask`, or an agent-council API provider. insane-review drives your **logged-in ChatGPT web session over CDP**: it packs the relevant code with repomix, sends it to Pro, and harvests the review. **Zero API cost** — it runs on your existing ChatGPT plan.

[Quick Start](#quick-start) • [Why insane-review?](#why-insane-review) • [How it works](#how-it-works) • [Features](#features) • [Tuning & timeouts](#tuning--timeouts) • [Requirements](#requirements)

---

## Quick Start

### 1. Add the marketplace (once)

```
/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git
```

###…
