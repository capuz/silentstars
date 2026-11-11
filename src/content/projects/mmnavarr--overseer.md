---
repo: "mmnavarr/overseer"
name: "overseer"
description: "Mission control for parallel agent work: worktrees, sessions, agents, PRs and tickets in one Tern panel."
readmeQualityOk: true
url: "https://github.com/mmnavarr/overseer"
language: "Luau"
languages: ["Luau"]
languagePcts: [79]
topics: ["ai-agents", "developer-tools", "git-worktree", "tern", "worktrunk", "oh-my-pi", "omp", "omp-extension", "tern-plugin", "agent-orchestration"]
stars: 107
forks: 12
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-10-08T18:21:44Z"
lastCommitAt: "2026-11-11T19:47:07Z"
lastReleaseAt: "2026-11-11T19:47:15Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 37
maintainers: ["mmnavarr", "cxxzsh", "sinkr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1410786509/13e1b7a4-58cc-465b-8bc5-4ab134b7d0b1"
---

**Mission control for parallel agent work.**

One panel for every branch you have in flight: its worktree, its agents, its pull request and its ticket.<br>
Click a row and you're in that branch's own workspace.

---

Running five agents on five branches means five checkouts, a pile of terminals, and losing track of which agent is stuck waiting for you. Overseer is a [Tern](https://docs.stencil.so/tern/) plugin that keeps them all in one panel.

- **One session per worktree.** Each branch gets its own Tern session with its own tabs and agents. Switching is one click.
- **See every agent at a glance.** Working, waiting for you, finished or failed, right on the row.
- **Sub-worktrees.** When an agent splits a task into one branch per fix, the fixes nest under the task, and their agents keep each other informed.
- **PRs and tickets on the row.** GitHub PR state and the Linear ticket, one click away.
- **Quiet worktrees.** Creation and deletion run through [Worktrunk](https://worktrunk.dev) in the background, hooks and all.
- **Visualize PR.** Turns a pull request into a diagram-first outline for review.

### Works with your agents

| | Any agent CLI | [omp](https://omp.sh) |…
