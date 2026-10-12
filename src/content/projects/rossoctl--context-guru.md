---
repo: "rossoctl/context-guru"
name: "context-guru"
description: "Context optimization for AI coding agents — lower token cost and latency without sacrificing accuracy."
readmeQualityOk: true
url: "https://github.com/rossoctl/context-guru"
homepage: "https://rossoctl.github.io/context-guru/"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["agentic-ai", "ai", "ai-agents", "claude-code", "claude-code-plugin", "codex", "codex-plugin", "context-engineering", "context-management", "golang"]
stars: 68
forks: 24
openIssues: 106
closedIssues: 77
watchers: 0
contributors: 21
recentReleases: 10
createdAt: "2026-06-23T07:38:30Z"
lastCommitAt: "2026-10-12T11:15:30Z"
lastReleaseAt: "2026-10-01T07:33:02Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 40
maintainers: ["amiddavid", "OsherElhadad"]
openGraphImageUrl: "https://opengraph.githubassets.com/95276aa3417e52707b9f0f333b4b997c4dddd87a905bd98dabe461e62ffd9577/rossoctl/context-guru"
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

For local Codex use, register only the marketplace paths Codex needs; cloning the whole monorepo
can exceed Codex's marketplace timeout:

```sh
codex plugin marketplace add rossoctl/context-guru --sparse .agents --sparse codex-marketplace
codex plugin add context-guru@context-guru
```

## Presets

It's an effort ladder — each tier is everything in the one before it, plus more:

| Preset | What it adds | Spends on its own |…
