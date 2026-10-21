---
repo: "rossoctl/context-guru"
name: "context-guru"
description: "Context optimization for AI coding agents — lower token cost and latency without sacrificing accuracy."
readmeQualityOk: true
url: "https://github.com/rossoctl/context-guru"
homepage: "https://rossoctl.github.io/context-guru/"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["agentic-ai", "ai", "ai-agents", "claude-code", "claude-code-plugin", "codex", "codex-plugin", "context-engineering", "context-management", "golang"]
stars: 70
forks: 24
openIssues: 165
closedIssues: 96
watchers: 0
contributors: 22
recentReleases: 10
createdAt: "2026-06-23T07:38:30Z"
lastCommitAt: "2026-10-21T17:30:57Z"
lastReleaseAt: "2026-10-01T07:33:02Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 39
maintainers: ["OsherElhadad", "amiddavid", "boazdavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/79986be1c6627367b40d6389e87d2d29a511a94586d75344cea8b39f357f1466/rossoctl/context-guru"
discussionCount: 0
---

# context-guru

**Provider-agnostic context engineering for LLM agents.**

**[▶ Watch the demo](https://rossoctl.github.io/context-guru/#demo)**

---

context-guru cuts the token cost of your agent's traffic in two ways: **carry less context**
(drop redundant tool output, collapse superseded runs, summarize before you hit the limit), and
**pay less for what you still carry** (keep your prompt cache warm, split the volatile tail off
the system prompt so the rest stays cacheable). Paying less is the **default** — it's on out of
the box, before you opt into anything that trims content.

Full docs: **[rossoctl.github.io/context-guru](https://rossoctl.github.io/context-guru/)**.

## Install

Choose your setup. Each button opens only the instructions for that path.

## What's cool

**The status line shows your savings live, for the main session and for every subagent.** It also shows the cache
clock, the context fill and the keep-alive pings. This frame comes from a real, week-long release session:

**`/context-guru:insights` tells you what you saved, what your cache costs you, and what you carry and never use.**
Real output, 7 days of one developer's work:

More:

- **[Save…
