---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Shared Context"
readmeQualityOk: true
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [76]
topics: ["agents", "harness", "ai", "llm", "ocaml", "tui"]
stars: 5
forks: 0
openIssues: 880
closedIssues: 7417
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-11-05T11:26:29Z"
lastReleaseAt: "2026-09-17T16:46:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 75
maintainers: ["jeong-sik"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b373ffeabd4aa715a1795855b55a17d04cd585e3f8fd1bb3401d273d93173d6/jeong-sik/masc"
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

- **Keep the work between conversations.** Keeper records, memory, tasks and
  decisions live in the workspace, with tools to inspect what went into a turn.
- **Give agents shared ground.** Goals describe the outcome, Tasks record who
  is doing what, and the Board holds discussion across Keepers and MCP clients.
- **Choose the runtime.** Configure model providers, authenticated CLIs or local
  model servers, then assign…
