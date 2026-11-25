---
repo: "marimo-team/marimo-pair"
name: "marimo-pair"
description: "Drop agents inside running marimo notebook sessions"
readmeQualityOk: true
url: "https://github.com/marimo-team/marimo-pair"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
topics: ["agents", "ai", "data", "marimo", "ml", "notebook"]
stars: 437
forks: 36
openIssues: 4
closedIssues: 21
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2026-02-24T18:35:54Z"
lastCommitAt: "2026-11-25T03:15:35Z"
lastReleaseAt: "2026-04-07T17:35:03Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 20
maintainers: ["manzt", "mscolnick", "github-actions[bot]"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/98563464?s=400&v=4"
---

/marimo-pair
  reactive Python notebooks as environments for agents

[marimo-pair](https://github.com/marimo-team/marimo-pair/blob/HEAD/skills/marimo-pair/SKILL.md) is a skill that teaches your coding
agent to use the Pair CLI (`marimo pair`) or MCP to work in the same reactive
notebook as you. The agent can start a notebook or join one you already have
open, where you can both inspect data, edit cells, and see the results.

## Prerequisites

marimo 0.26 or newer, or uv.

## Install

### Agent Skills (any tool)

Works with any agent that supports the [Agent Skills](https://agentskills.io)
open standard:

```bash
npx skills add marimo-team/marimo-pair

# or upgrade an existing install
npx skills upgrade marimo-team/marimo-pair
```

If you don't have `npx` installed but have `uv`:

```bash
uvx deno -A npm:skills add marimo-team/marimo-pair
```

### Claude Code (plugin)

Add the marketplace and install the plugin:

```
/plugin marketplace add marimo-team/marimo-pair
/plugin install marimo-pair@marimo-pair
```

To opt in to auto-updates (recommended), so you always get the latest version:

```
/plugin → Marketplaces → marimo-pair → Enable auto-update
```
