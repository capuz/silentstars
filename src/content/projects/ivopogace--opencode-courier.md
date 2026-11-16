---
repo: "ivopogace/opencode-courier"
name: "opencode-courier"
description: "Multi-session orchestration for OpenCode V2: spawn child sessions, be woken by them."
readmeQualityOk: true
url: "https://github.com/ivopogace/opencode-courier"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["ai-agents", "git-worktree", "multi-agent", "opencode", "opencode-plugin", "opencode-plugins", "orchestration", "subagents", "webhooks", "agent-orchestration"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 241
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T08:20:32Z"
lastCommitAt: "2026-11-16T11:57:02Z"
lastReleaseAt: "2026-10-15T07:38:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["ivopogace", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27d6979e32d6e956dc1571fd257f379e46f498ae3f73fda3e6e1165ab8d10f7d/ivopogace/opencode-courier"
discussionCount: 0
---

# opencode-courier

**Your OpenCode session hands work to other sessions, ends its turn, and is woken when they
report.** Multi-session orchestration for OpenCode V2: spawn child sessions, be woken by them. No
polling.

The main case in the `/courier tree` panel: two issues, a lead per issue, two workers under each. A
worker's finding wakes its lead as it comes, the lead passes it on, and the sibling rewrites its
test. Each lead's report wakes the orchestrator as it comes.

## Quickstart

```bash
npm install -g @opencode/cli@2.3.0   # OpenCode V2, the version courier is tested on
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

OpenCode's own [`subagent`…
