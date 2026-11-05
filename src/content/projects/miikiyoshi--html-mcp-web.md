---
repo: "MiiKiyoshi/html-mcp-web"
name: "html-mcp-web"
description: "Review agent-made slides in the browser and export them to PowerPoint."
readmeQualityOk: true
url: "https://github.com/MiiKiyoshi/html-mcp-web"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [73, 22]
topics: ["claude-code", "codex", "html", "mcp", "mcp-server", "powerpoint", "pptx", "slides"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T05:19:27Z"
lastCommitAt: "2026-11-05T11:24:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["MiiKiyoshi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1339121174/55cbb1f0-4dfd-4366-b1a2-8000ff2aef48"
---

# html-mcp-web

Review an AI agent's HTML slides or report from the rendered page, on a desktop, tablet, or phone, while Claude Code or Codex edits the source. Hand the finished slides over as an editable PowerPoint deck.

> ⭐ **If this helps your reviews, please give it a star.** It helps others find the project.

**[Slides example](https://github.com/MiiKiyoshi/html-mcp-web/blob/HEAD/examples/neutral-slides/)**

**[Report example](https://github.com/MiiKiyoshi/html-mcp-web/blob/HEAD/examples/neutral-report/)**

## What keeps the agent on track

- **It reads the rules, and reads them again.** In Claude Code, html-mcp's tools stay locked
  until the agent has read the template's rules and the writing guideline in full, and they
  lock again after every compaction. A long session keeps working from the rules, not from a
  fading memory of them.
- **It fixes its own layout.** The way a programmer works through compiler errors, the agent
  checks each page it changes, gets a plain list of layout faults such as text spilling out of
  its box or a last line left nearly empty, fixes them, and checks again before you look.

## Install

Paste this into Claude Code or Codex:

```
Install…
