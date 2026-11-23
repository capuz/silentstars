---
repo: "MikeGT4/agent-tree"
name: "agent-tree"
description: "Terminal side pane for Claude Code that shows a session's agents as a live tree, with tabs for full reports, files, log and usage. Stop a running sub-agent, send it new instructions mid-task, switch its model by click, customize the look. Works in Code Mode. Updates itself and shows what is new."
readmeQualityOk: true
url: "https://github.com/MikeGT4/agent-tree"
homepage: "https://www.digitalroots.de/en/leistungen/software/agent-tree/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agents", "claude-code", "claude-code-mod", "claude-code-plugin", "developer-tools", "subagents", "terminal", "tui", "agent-monitoring", "agentic-coding"]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T11:34:58Z"
lastCommitAt: "2026-11-23T10:20:17Z"
lastReleaseAt: "2026-10-28T21:41:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["MikeGT4"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1429657973/0ceb2191-fd14-4ffb-8f1c-b250ca5d1d3f"
discussionCount: 0
---

# Agent Tree

[Deutsch](https://github.com/MikeGT4/agent-tree/blob/HEAD/README.de.md)

A side pane for Claude Code that shows a session's agents as a live tree.

Stop and correct running sub-agents, switch model and effort for them and the main session, toggle the advisor, change the look, watch your limits.

Tabs: each agent's full report, files, log, usage.

## Install

In your terminal:

```bash
claude plugin install agent-tree --marketplace MikeGT4/agent-tree
```

Then start Claude Code; the pane opens.

Inside a session: `/plugin install agent-tree --marketplace MikeGT4/agent-tree`

Needs Claude Code 2.1.292+, tested with 2.1.328.

## What it runs

Once a day, in interactive sessions, it runs Claude Code's `plugin list --json`, reads its version from raw.githubusercontent.com and, if newer, runs `plugin update agent-tree`. It sends nothing else ([PRIVACY.md](https://github.com/MikeGT4/agent-tree/blob/HEAD/PRIVACY.md)).

Its hooks act only after you act in the pane; typing only ends intro or card.

[Guide](https://github.com/MikeGT4/agent-tree/blob/HEAD/docs/GUIDE.md) · [PDF](https://github.com/MikeGT4/agent-tree/releases/download/v0.7.15/agent-tree-guide.pdf)
