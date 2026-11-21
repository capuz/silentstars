---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Shared Context"
readmeQualityOk: true
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [80]
topics: ["agents", "harness", "ai", "llm", "ocaml", "tui"]
stars: 5
forks: 0
openIssues: 702
closedIssues: 8524
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-11-21T11:27:52Z"
lastReleaseAt: "2026-09-17T16:46:06Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 78
maintainers: ["jeong-sik", "anyang-keepers", "pangyo-preachers"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cc746f8f90b40ac03e299082813ddc38527121deac993432d34aac212bdee2b/jeong-sik/masc"
discussionCount: 1
---

MASC (**Multi-Agent Shared Context**) runs persistent agents (**Keepers**) and
external MCP clients against a shared workspace. Keepers retain turn history and
working memory, coordinate through Goals, Tasks, and the Board, and submit
completed work for verification. You configure models and sandboxes, follow
turns in the terminal UI, and approve gated actions when needed.

> **Pre-1.0.** Built for local, trusted workspaces. APIs and configuration can
> change. See [Limits](#limits) before running unattended or exposing a server.
> This README describes `main`; use your release tag's docs for installed behavior.

## Why MASC?

MASC provides shared workspace state so agents can inspect current goals, prior
turns, and active tasks before deciding what to do.
