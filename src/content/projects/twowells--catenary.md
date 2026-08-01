---
repo: "TwoWells/Catenary"
name: "Catenary"
description: "Giving AI coding agents LSP-powered code intelligence."
readmeQualityOk: true
url: "https://github.com/TwoWells/Catenary"
homepage: "https://twowells.github.io/Catenary/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["claude-code-extension", "ai-agents", "antigravity-cli-extensions", "coding-agents", "developer-tools", "language-server-protocol", "llm-tools", "lsp", "mcp", "model-context-protocol"]
stars: 9
forks: 6
openIssues: 5
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T16:02:11Z"
lastCommitAt: "2026-08-01T06:11:27Z"
lastReleaseAt: "2026-02-04T23:00:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 63
maintainers: ["m-wells", "vabaimova"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1143463460/ed007254-c1e8-4b8f-9981-b3e214d854bf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061719Z&X-Amz-Expires=300&X-Amz-Signature=62456493b7e773241c4d74eac2fb7f2c6b4f536ecefb769e4aff0aea40cbc250&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMzOSwibmJmIjoxNzg1NTY1MDM5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.SICBZYiGnSnpM9yzQVurDPst92rXofrQh_qUvsaNJlA"
fundingLinks: ["GITHUB:https://github.com/TwoWells", "KO_FI:https://ko-fi.com/twowells"]
discussionCount: 1
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
