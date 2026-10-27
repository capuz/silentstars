---
repo: "yonatangross/orchestkit"
name: "orchestkit"
description: "The Complete AI Development Toolkit for Claude Code. 106 skills, 36 agents, 171 hooks. Install `ork` for stable (v9.x), or `ork-alpha` for the v10 line, which ships daily."
readmeQualityOk: true
url: "https://github.com/yonatangross/orchestkit"
homepage: "https://orchestkit.dev"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [47, 25]
topics: ["agents", "ai-development", "claude-code", "claude-plugin", "langgraph", "llm", "rag", "react", "typescript", "fastapi"]
stars: 298
forks: 37
openIssues: 104
closedIssues: 2112
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-12-31T05:58:52Z"
lastCommitAt: "2026-10-27T09:17:19Z"
lastReleaseAt: "2026-02-23T09:59:30Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 99
undervaluedScore: 35
maintainers: ["yonatangross", "orchestkit-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1125663750/3c6d87a4-e19d-472f-9f59-62a0d6f9a19a"
discussionCount: 2
---

**115 skills · 36 agents · 161 hooks**

## Start here

OrchestKit is a free, open source Claude Code plugin: skills, agents and hooks for review, testing, security and memory.

```bash
claude plugin marketplace add yonatangross/orchestkit && claude plugin install ork@orchestkit
```

[Docs](https://orchestkit.dev/docs) · [What's new in v10](https://orchestkit.dev/docs/whats-new-v10) · [yonyon.ai](https://yonyon.ai)

---

---

## Contents

- [Quick Start](#quick-start)
- [Why OrchestKit?](#why-orchestkit)
- [What You Get](#what-you-get)
- [Key Commands](#key-commands)
- [Configuration](#configuration)
- [What OrchestKit observes](#what-orchestkit-observes)
- [Install](#install)
- [FAQ](#faq)
- [Development](#development)
- [What's New](#whats-new)
- [Community](#community)

## Quick Start

Pick the host you actually use. Claude Code is the full plugin (skills + agents + hooks). Cursor gets the same `ork` plugin minus Claude hook scripts. skills.sh is skills only — start with the 12 below, not the whole catalog.

#### Host support matrix

Measured 2026-09-08 on pi 0.85, Codex CLI and cursor-agent. Details, commands and the lane model: [OrchestKit on pi, Codex and…
