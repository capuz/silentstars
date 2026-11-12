---
repo: "MiiKiyoshi/tex-mcp-web"
name: "tex-mcp-web"
description: "Review a LaTeX paper from its PDF while an AI agent edits the source."
readmeQualityOk: true
url: "https://github.com/MiiKiyoshi/tex-mcp-web"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["claude-code", "codex", "latex", "mcp", "mcp-server", "pdf"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-12T08:24:17Z"
lastCommitAt: "2026-11-12T11:42:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["MiiKiyoshi", "OR0T"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1298108038/8a1e6559-b56b-461d-bce4-cd6785fca874"
---

# tex-mcp-web

Review a LaTeX paper from its rendered PDF, on a desktop, tablet, or phone, while Claude Code or Codex edits the source.

> ⭐ **If this helps your writing, please give it a star.** It helps others find the project.

## Writes in your field's terms

Left alone, an agent describes a concept in words of its own where the papers of your field
use one term. Give tex-mcp those papers and, in Claude Code, its tools stay locked until the
agent has read the terms they share, and they lock again after every compaction.

To set it up, convert the papers yours builds on to Markdown with
[marker](https://github.com/datalab-to/marker), keep them in one folder, and set `references`
to it.

## Install

Paste this into Claude Code or Codex:

```
Install tex-mcp-web by following https://raw.githubusercontent.com/MiiKiyoshi/tex-mcp-web/main/INSTALL.md
```

The agent checks for Python 3.10 or newer and `latexmk`, shows where it will install and
which agents it will register with, and installs once you agree. Start the agent again
afterwards.

## Init

Once per paper, start the agent in the paper's folder and say:

```
do tex init
```

The agent finds the main `.tex` file and a free…
