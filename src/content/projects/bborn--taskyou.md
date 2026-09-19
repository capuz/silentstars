---
repo: "bborn/taskyou"
name: "taskyou"
description: "Personal task queue"
readmeQualityOk: true
url: "https://github.com/bborn/taskyou"
homepage: "http://taskyou.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 59
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-07T14:39:49Z"
lastCommitAt: "2026-09-19T01:17:17Z"
lastReleaseAt: "2026-02-04T16:34:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["bborn", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1129756059/6131cc26-303a-48ed-958b-7fa06537ba94"
---

<p><img src="docs/images/logo.webp" alt="TaskYou coffee mug" width="64"></p>

# TaskYou

**Kanban for code agents.**

Calm, cool, a little crazy. An agent for every task. A worktree for every agent.

A Kanban board where the cards do the work. Pick an agent, give it a task, and `ty` starts it in its own git worktree. Stack up a few. Open any card to see what's happening.

Works with Claude Code, Codex, and more. Terminal first, with a CLI, desktop app, and browser UI too.

[Website](https://taskyou.dev) · [First task](https://github.com/bborn/taskyou/blob/HEAD/docs/getting-started.md) · [Workflow recipes](https://github.com/bborn/taskyou/blob/HEAD/docs/workflows.md) · [Reference](https://github.com/bborn/taskyou/blob/HEAD/docs/reference.md)

## Get started

On **macOS or Linux**, with **Git**, **tmux**, and at least one installed, authenticated coding agent:

```sh
curl -fsSL https://taskyou.dev/install.sh | bash
```

Then open TaskYou from the root of an existing Git repository:

```sh
ty
```

Accept the detected project, press **n** to add a small task, choose your agent, and save. Select the card and press **x** to queue it; **Enter** opens its live output. When it needs input,…
