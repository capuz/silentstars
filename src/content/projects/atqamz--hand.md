---
repo: "atqamz/hand"
name: "hand"
description: "Things getting out of hand? You may need second `hand`."
readmeQualityOk: true
url: "https://github.com/atqamz/hand"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 25
forks: 0
openIssues: 8
closedIssues: 300
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-24T13:59:50Z"
lastCommitAt: "2026-10-08T10:51:09Z"
lastReleaseAt: "2026-08-21T01:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 48
maintainers: ["atqamz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9d00b78771faf6911fe550e487b8f08515e2cde81d60c849d52b02e77eef04c/atqamz/hand"
---

# Hand

Hand is a personal supervisor layer for coding agents. You talk to one supervisor agent. It captures every request as a task, starts Claude Code, Codex, opencode or Antigravity workers in isolated git worktrees through [Luvus](https://github.com/RizRiyz/luvus), waits for them with zero tokens, reads their reports, and asks you only through decisions. Each fleet is a folder with its own SQLite state, and one `hand board` shows every fleet.

Hand is built for one operator on Linux or macOS, not as a product for other users. Native Windows is **experimental**: see [Windows](#windows-experimental). The design and its non-goals are in [`docs/spec.md`](https://github.com/atqamz/hand/blob/HEAD/docs/spec.md), and every term used here is defined in [`docs/vocabulary.md`](https://github.com/atqamz/hand/blob/HEAD/docs/vocabulary.md).

Wiki: [deepwiki.com/atqamz/hand](https://deepwiki.com/atqamz/hand), a generated overview for browsing the code.

```mermaid
flowchart LR
    operator["Operator"] -- "messages, answers" --> board["hand board"]
    board -- "messages" --> supervisor["Supervisor sN"]
    supervisor -- "tasks, plans, decisions" --> state[("hand.db")]
    supervisor -- "hand…
