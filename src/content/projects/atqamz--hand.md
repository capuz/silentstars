---
repo: "atqamz/hand"
name: "hand"
description: "Things getting out of hand? You may need second `hand`."
readmeQualityOk: true
url: "https://github.com/atqamz/hand"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["agent-orchestration", "claude-code", "codex", "coding-agents", "git-worktree", "opencode", "parallel-agents"]
stars: 31
forks: 3
openIssues: 31
closedIssues: 336
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-07-24T13:59:50Z"
lastCommitAt: "2026-10-30T10:22:54Z"
lastReleaseAt: "2026-08-21T01:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 47
maintainers: ["atqamz", "dependabot[bot]", "ssFari"]
openGraphImageUrl: "https://opengraph.githubassets.com/25e82b9ed68a559c2e0579173ad320527c93acceb7a82ad909840d2a1729658e/atqamz/hand"
fundingLinks: ["GITHUB:https://github.com/atqamz"]
---

# Hand

Hand is a personal supervisor layer for agents. You talk to one supervisor agent. It captures every request as a task, starts Claude Code, Codex, opencode, Antigravity or GitHub Copilot workers in isolated git worktrees through [Luvus](https://github.com/RizRiyz/luvus), waits for them with zero tokens, reads their reports, and asks you only through decisions. Each fleet is a folder with its own SQLite state, and one `hand board` shows every fleet.

## Platform support

Hand is built for one operator, who runs it every day on Linux. macOS (Apple silicon) and native Windows (amd64) are supported best effort, with no timeline for fixes: CI runs the tests on both, one real Mac has run a fleet with a stand-in `claude`, and no real Windows machine has run one yet, so they rely on your reports. [`docs/platforms.md`](https://github.com/atqamz/hand/blob/HEAD/docs/platforms.md) says how each part is verified.

## Install

You need git and at least one harness, logged in: Claude Code (`claude`), Codex (`codex`) or opencode (`opencode`). `hand init` downloads the tested Luvus when none is on `PATH`. [Requirements](https://github.com/atqamz/hand/blob/HEAD/docs/install.md#requirements)…
