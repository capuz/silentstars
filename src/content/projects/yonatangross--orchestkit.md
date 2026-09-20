---
repo: "yonatangross/orchestkit"
name: "orchestkit"
description: "The Complete AI Development Toolkit for Claude Code. 106 skills, 36 agents, 171 hooks. Install `ork` for stable (v9.x), or `ork-alpha` for the v10 line, which ships daily."
readmeQualityOk: true
url: "https://github.com/yonatangross/orchestkit"
homepage: "https://orchestkit.yonyon.ai"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [49, 27]
topics: ["agents", "ai-development", "claude-code", "claude-plugin", "langgraph", "llm", "rag", "react", "typescript", "fastapi"]
stars: 278
forks: 33
openIssues: 73
closedIssues: 2038
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2025-12-31T05:58:52Z"
lastCommitAt: "2026-09-20T08:47:13Z"
lastReleaseAt: "2026-02-23T09:59:30Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 99
undervaluedScore: 34
maintainers: ["yonatangross", "orchestkit-release-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1125663750/3c6d87a4-e19d-472f-9f59-62a0d6f9a19a"
discussionCount: 2
---

**107 skills · 36 agents · 171 hooks**

</div>

---

  <sub>Skill browser, demo gallery, setup wizard</sub>
</p>

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

Measured 2026-09-08 on pi 0.85, Codex CLI and cursor-agent. Details, commands and the lane model: [OrchestKit on pi, Codex and Cursor](https://orchestkit.yonyon.ai/docs/guides/orchestkit-on-pi-codex-cursor). Antigravity measured 2026-09-18 on agy 1.2.6; full evidence in `docs/audits/agy-host-support-2026-09-18.md`.

| Surface | Claude Code | Cursor | Codex | pi | Devin | Antigravity |
|---|---|---|---|---|---|---|
| Skills (SKILL.md) | all | all, via…
