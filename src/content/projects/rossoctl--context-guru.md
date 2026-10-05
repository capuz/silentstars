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
stars: 56
forks: 23
openIssues: 78
closedIssues: 60
watchers: 0
contributors: 20
recentReleases: 10
createdAt: "2026-06-23T07:38:30Z"
lastCommitAt: "2026-10-05T10:47:48Z"
lastReleaseAt: "2026-10-01T07:33:02Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 42
maintainers: ["amiddavid", "OsherElhadad", "itay-nakash"]
openGraphImageUrl: "https://opengraph.githubassets.com/d400b674e0904af85d36322296d64598a31674e161eaa914ed1367103c98d611/rossoctl/context-guru"
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

## Presets

It's an effort ladder — each tier is everything in the one before it, plus more:

| Preset | What it adds | Spends on its own |
|---|---|---|
| `off` | nothing — requests forwarded untouched (the default; only keep-alive spends, if that's on) | no |
| `conservative` | deterministic trimming of tool output (repeats, dead runs) — no model calls | no |
| `medium` | `conservative` plus a cheap model that keeps only…
