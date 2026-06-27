---
repo: "dirge-code/dirge"
name: "dirge"
description: "Dynamic Intent Resolution Grounding Engine"
url: "https://github.com/dirge-code/dirge"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["agent", "agentic-workflow", "janet", "llm", "rust"]
stars: 176
forks: 10
openIssues: 6
closedIssues: 18
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2026-05-18T18:54:45Z"
lastCommitAt: "2026-06-27T00:38:10Z"
lastReleaseAt: "2026-06-08T17:44:30Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["yogthos", "github-actions[bot]", "nikolap"]
openGraphImageUrl: "https://opengraph.githubassets.com/9152631cfc63dc5fdaa21874d079ff0639c050b429e5d1c1f4d6ee5c85f9d50e/dirge-code/dirge"
---

# dirge

A minimal, fast coding agent written in Rust — inspired by [pi](https://pi.dev/docs/latest/usage), [opencode](https://opencode.ai/), and [maki](https://github.com/tontinton/maki).

A dirge is a song to keep the dead from losing their way. It turns grief into something that is remembered. Agents are like mayflies awoken for a moment to work and to forget, with every new session effacing the old one. Dirge keeps watch over things said and done, always folding context into memory to carry past mistakes and preferences across the gulf between sessions. It sings the past forward, so that no grave need be dug twice. Dirge grieves for nothing, since nothing is truly buried under its care, and its lament is a promise that what was built here once will be remembered.

## Why dirge

What sets dirge apart from other agentic editors:

- **Tiny and fast.** Roughly 8 MB RAM idle, 15 MB working, 36 MB binary (approximate, measured on a Linux release build: `opt-level=3` + LTO) — versus ~300 MB for JS-based agents. Native Rust, no runtime.
- **Built to keep weaker/cheaper models on the rails.** A [robust agent loop](docs/features.md#robust-agent-loop) repairs malformed tool calls,…
