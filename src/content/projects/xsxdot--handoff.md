---
repo: "Xsxdot/handoff"
name: "handoff"
description: "把实现计划派发给另一个 AI 执行，你只负责审——纯 CLI 的协调者/executor 两角色协作工具（opencode / Claude Code / grok / codex，支持远程开发机）"
readmeQualityOk: true
url: "https://github.com/Xsxdot/handoff"
homepage: "https://handoff.gosuper.dev"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["agent-orchestration", "ai-agent", "claude-code", "cli", "code-review", "codex", "developer-tools", "golang", "grok", "opencode"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-07T14:22:37Z"
lastCommitAt: "2026-08-20T04:08:47Z"
lastReleaseAt: "2026-08-20T01:28:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7a2006cc148df7aa9ad553e2d286e4a8a5f2deae757c63a6e9a697c76dd3e33d/Xsxdot/handoff"
---

</p>

<h1 align="center">handoff</h1>

</p>

</p>

handoff is a CLI-only, two-role collaboration tool. You — or any coding-agent session: Claude Code, opencode, grok, and codex all work — play the **coordinator**: write the plan, dispatch the task, rule on permissions, review the changes. The **executor** (opencode / Claude Code / grok / codex) does the actual work in its own independent session — on the same machine, or on any dev box you can reach over the network (see "Connecting a Remote Executor Machine").

```
write plan → handoff dispatch → executor works independently
                  ↑                        │
     reply: approve/answer ←── permission gate / question wakes you
                  │                        │
      handoff diff to review ←──────── turn finished
                  │
  not satisfied: continue / satisfied: done → archive
```

**Why not just open a terminal and let the AI run?**

- **Execution is separated from review**: the executor works in its own session, on its own branch (optionally its own worktree). Dangerous operations are stopped at the permission gate and put to you — it moves one step per approval you give.
- **Nothing is lost when you…
