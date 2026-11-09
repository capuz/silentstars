---
repo: "leonlee/cc-pair"
name: "cc-pair"
description: "Claude Code and Codex review each other's work."
readmeQualityOk: true
url: "https://github.com/leonlee/cc-pair"
homepage: "https://www.npmjs.com/package/claude-codex-pair"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 50]
topics: ["claude-code", "codex", "pair-programming"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-07T02:53:29Z"
lastCommitAt: "2026-11-09T12:00:06Z"
lastReleaseAt: "2026-10-30T06:20:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["leonlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/fee4bef3ee07dc52f2ee4d939d5bd898b5f7f63e9e496ee8ce5a931f8af360a4/leonlee/cc-pair"
---

# cc-pair

**Abstract.** `pair` lets Claude Code and Codex review each other's work, or their own: Claude can
review Claude, and Codex can review Codex. One agent authors a change, the other reviews it, and they
exchange messages through files in a shared directory. Roles are symmetric. In auto mode,
`pair start` opens the author and runs a reviewer for each round. In manual mode, you run both
agents yourself.

Features:

- **Two modes.** Auto mode runs the author and starts the reviewer for each round, returning the
  review inline ([Auto mode](#3-auto-mode)). In manual mode you run both agents, and an MCP server
  wakes Codex without polling ([Manual mode](#5-manual-mode)).
- **Any pairing.** Cross-vendor by default; same-vendor pairs and any named participants, such as
  `alice` and `bob`, in either mode ([Participants](#4-participants)).
- **Code review.** Numbered findings with severity and an `approve` or `changes` verdict. Findings
  still open at the round cap escalate to you ([Workflows](#6-workflows)).
- **Spec review.** Plans and design docs in any format, such as a Markdown plan or an OpenSpec
  change; a later code review can cite the approved spec ([Spec…
