---
repo: "ivopogace/opencode-courier"
name: "opencode-courier"
description: "Multi-session orchestration for OpenCode V2: spawn child sessions, be woken by them. No polling."
readmeQualityOk: true
url: "https://github.com/ivopogace/opencode-courier"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai-agents", "git-worktree", "multi-agent", "opencode", "opencode-plugin", "opencode-plugins", "orchestration", "subagents", "webhooks"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 147
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T08:20:32Z"
lastCommitAt: "2026-10-27T09:16:38Z"
lastReleaseAt: "2026-10-15T07:38:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["ivopogace", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402879368/940a6d7f-fab7-43df-953d-812a93e7b121"
discussionCount: 0
---

# opencode-courier

**Your OpenCode session hands work to other sessions, ends its turn, and is woken when they
report.** Multi-session orchestration for OpenCode V2: spawn child sessions, be woken by them. No
polling.

https://github.com/user-attachments/assets/d7cf74f8-15b3-4cc1-866e-b75ba0ac3f8a

A narrated tour of the terminal UI: the tree panel, the asks inbox, failing children and memory.

## Quickstart

```bash
npm install -g @opencode/cli@2.1.4   # OpenCode V2, the version courier is tested on
opencode plugin add opencode-courier
opencode
```

Paste this prompt:

> Start two helper sessions with courier_spawn and have each report back to you. One runs
> `` `sleep 20; echo $((17 * 23))` ``, the other `` `sleep 40; echo $((2 ** 10))` ``. Do not run the
> commands yourself. When both have reported, reply with one line: RESULTS \<first\> \<second\>

The parent starts both children and ends its turn. Each report wakes it, and it replies
`RESULTS 391 1024`. Free models sometimes stall; if nothing moves for a few minutes, send the
prompt again.

## Why courier

OpenCode's own [`subagent` tool](https://opencode.ai/v2/docs/agents) hands back a child's final
answer. Use it when one…
