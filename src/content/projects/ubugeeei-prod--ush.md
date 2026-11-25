---
repo: "ubugeeei-prod/ush"
name: "ush"
description: "ush is modern sh"
readmeQualityOk: true
url: "https://github.com/ubugeeei-prod/ush"
homepage: "https://ubugeeei-prod.github.io/ush/"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["posix", "shell"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 50
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-30T10:02:13Z"
lastCommitAt: "2026-11-25T13:19:51Z"
lastReleaseAt: "2026-04-02T06:31:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["ubugeeei", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ddb674f2d531aa23834e066cf6568b3cdcac2edf424c87e0a2395f13418b103/ubugeeei-prod/ush"
---

# ush

`ush` is an experimental Rust shell with a simple idea:

- Be POSIX-first. Existing shell scripts and one-liners should keep working.
- Keep stdio Unix-simple by default, but allow richer human-facing output with `--stylish`.
- Add a modern `.ush` language, but compile it to portable `sh` instead of inventing a separate runtime.
- Make the interactive shell feel fast, lightweight, and pleasant to edit in.

> **Warning**
>
> ush is pre-1.0. Pin the compiler version when committing generated scripts.
> It is not yet a production shell replacement.

## Concept

`ush` is split into two layers:

- `ush_shell`: an interactive shell runtime with POSIX-friendly execution, REPL UX, stylish mode, and structured helper pipelines
- `ush_compiler`: a `.ush` to `sh` compiler, where scripts stay portable because execution still happens through POSIX `sh`

That means the project can explore a more modern shell language without giving up the portability and compatibility of `sh`.
The `no_std` target is only the compiler core. The app binary and interactive shell runtime are still intentionally `std`-based because they need processes, terminals, files, and OS integration.
