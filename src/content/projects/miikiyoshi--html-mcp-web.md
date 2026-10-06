---
repo: "MiiKiyoshi/html-mcp-web"
name: "html-mcp-web"
description: "Review agent-made slides in the browser and export them to PowerPoint."
readmeQualityOk: true
url: "https://github.com/MiiKiyoshi/html-mcp-web"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [75, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T05:19:27Z"
lastCommitAt: "2026-10-06T10:41:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["MiiKiyoshi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1339121174/55cbb1f0-4dfd-4366-b1a2-8000ff2aef48"
---

# html-mcp-web

Review an AI agent's HTML slides or report from the rendered page, on a desktop, tablet, or phone, while Claude Code or Codex edits the source. Hand the finished slides over as an editable PowerPoint deck.

> ⭐ **If this helps your reviews, please give it a star.** It helps others find the project.

**[Slides example](https://github.com/MiiKiyoshi/html-mcp-web/blob/HEAD/examples/neutral-slides/)**

**[Report example](https://github.com/MiiKiyoshi/html-mcp-web/blob/HEAD/examples/neutral-report/)**

## Install

Paste this into Claude Code or Codex:

```
Install html-mcp-web by following https://raw.githubusercontent.com/MiiKiyoshi/html-mcp-web/main/INSTALL.md
```

The agent checks for Python and Firefox, shows you what it will install, and installs once
you agree. Start the agent again afterwards.

## Init

Once per folder, start the agent in the folder that holds (or will hold) your artifact and say:

```
do html init
```

Choose slides (16:9) or a report (A4). Slides default to `neutral-slides`, a plain template
without organization marks, and `neutral`, writing rules the agent follows for slides. Reports
default to `neutral-report`, with a cover and one page per…
