---
repo: "TwoWells/Catenary"
name: "Catenary"
description: "A bridge between MCP (Model Context Protocol) and LSP (Language Server Protocol)"
readmeQualityOk: true
url: "https://github.com/TwoWells/Catenary"
homepage: "https://twowells.github.io/Catenary/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["gemini-cli-extension", "claude-code-extension"]
stars: 8
forks: 6
openIssues: 5
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T16:02:11Z"
lastCommitAt: "2026-07-17T05:58:30Z"
lastReleaseAt: "2026-02-04T23:00:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 65
maintainers: ["m-wells"]
openGraphImageUrl: "https://opengraph.githubassets.com/2adbe289f6a56742d7ed0c4ce35aa7cfc4d792a6d09a25f47904fa227afc96a4/TwoWells/Catenary"
fundingLinks: ["GITHUB:https://github.com/TwoWells", "KO_FI:https://ko-fi.com/twowells"]
---

# Catenary

Catenary hands an AI coding agent a small, opinionated set of
code-intelligent commands — and a hook that keeps it on them. Reach for
`grep` and you're redirected to `catenary grep`; reach for `ls` or `find`
and you get `catenary glob`. Every command the agent can run is backed by a
language server, so it navigates code by meaning instead of brute-forcing
text. The generic path isn't blocked for safety — it's off the menu, so
the code-intelligent one is the only path left.

## Why Catenary

Exposing language-server tools to an agent isn't novel anymore — most
coding CLIs do it, and Catenary did it early. But *having* a tool and
*using* it are different things. Give an agent `grep`, `find`, raw file
reads, **and** LSP navigation, and it reaches for whatever's nearest —
usually brute-force text scanning that burns context and misses structure.

Catenary takes the choice away. It exposes one curated, code-intelligent
surface and enforces it:

- A `PreToolUse` hook runs an **allowlist** over every shell command the
  agent issues.
- Denied commands aren't dead ends — each denial **names the
  code-intelligent command to run instead** (`grep` → `catenary grep`,…
