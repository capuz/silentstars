---
repo: "RC-CHN/ReuleauxCoder"
name: "ReuleauxCoder"
description: "Reinventing the wheel, but only for those who prefer it non-circular."
readmeQualityOk: true
url: "https://github.com/RC-CHN/ReuleauxCoder"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-07T06:42:02Z"
lastCommitAt: "2026-09-11T08:15:54Z"
lastReleaseAt: "2026-04-24T15:17:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["RC-CHN", "Creammm-kk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff598fefc5e55add0a3855192584a85a45ab8f717e12740b294582ffc74ddf94/RC-CHN/ReuleauxCoder"
---

# ReuleauxCoder

> Reinventing the wheel, but only for those who prefer it non-circular.

A terminal-native AI coding agent with a FORGE-styled CLI, scoped subagents,
approvals, sessions, MCP, skills, LSP, and a thin remote execution peer.

The CLI uses native terminal scrollback, Rich Markdown output and prompt_toolkit
line editing. The independent React + Ink TUI lives in `reuleauxcoder-tui/`.
Both frontends use the same JSON-RPC runtime for chat, slash commands and approvals.

Inspired by and started as a complete rewrite of [CoreCoder](https://github.com/he-yufeng/CoreCoder).

[中文](https://github.com/RC-CHN/ReuleauxCoder/blob/HEAD/README_CN.md)

## Install

### Install globally (recommended)

Install [`pipx`](https://pipx.pypa.io/stable/how-to/install-pipx/) first, then install the release wheel globally:

```bash
pipx install https://github.com/RC-CHN/ReuleauxCoder/releases/download/v0.9.2/reuleauxcoder-0.9.2-py3-none-any.whl
```

Or use [`uv`](https://docs.astral.sh/uv/):

```bash
uv tool install https://github.com/RC-CHN/ReuleauxCoder/releases/download/v0.9.2/reuleauxcoder-0.9.2-py3-none-any.whl
```

The wheel includes the React TUI and its JavaScript dependencies.…
