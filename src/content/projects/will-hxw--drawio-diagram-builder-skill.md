---
repo: "Will-hxw/drawio-diagram-builder-skill"
name: "drawio-diagram-builder-skill"
description: "Portable agent skill for research-style editable draw.io diagrams and screenshot-driven refinement"
url: "https://github.com/Will-hxw/drawio-diagram-builder-skill"
homepage: "https://xiaoweihua.cn"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-29T21:47:40Z"
lastCommitAt: "2026-06-30T06:51:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 25
maintainers: ["Will-hxw"]
openGraphImageUrl: "https://opengraph.githubassets.com/33cbb9bc0b533585c20cf0449bb0d2c540de8512f4ec7dba165b0e9cda647bdf/Will-hxw/drawio-diagram-builder-skill"
---

# Research Draw.io Diagram Skill

A portable agent skill for producing publication-style, editable diagrams.net / draw.io figures from papers, prompts, codebases, or screenshots.

```bash
npx skills add Will-hxw/drawio-diagram-builder-skill
```

> [中文版](README-cn.md)

## Quick Install With An Agent

Copy this prompt into Codex, Claude Code, or another local coding agent:

```text
Install and test the drawio-diagram-builder skill from:
https://github.com/Will-hxw/drawio-diagram-builder-skill

After installing, run its smoke test and tell me the exact skill path.
```

## Prerequisites

| Requirement | Why |
|-------------|-----|
| **Python 3** (3.7+) | Preview and validation scripts |
| **Browser automation** (Playwright MCP, Puppeteer, browser tools, etc.) | Screenshot feedback loop — the skill is evidence-driven |
| **Internet access** | Preview loads `https://embed.diagrams.net/` |

Without browser automation the agent can still generate `.drawio` XML, but cannot visually verify the result. The iterative refinement loop is the skill's main value.

## Why This Exists

LLMs can write draw.io XML, but the first result is usually not right:

- text overlaps or escapes boxes
- arrows…
