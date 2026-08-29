---
repo: "pomelohq/pomelo"
name: "pomelo"
description: "A dev environment. One per branch. Native macOS app for per-branch runnable multi-repo environments."
readmeQualityOk: true
url: "https://github.com/pomelohq/pomelo"
homepage: "https://pomelohq.app"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [52, 46]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-24T21:09:06Z"
lastCommitAt: "2026-08-29T17:26:02Z"
lastReleaseAt: "2026-08-26T23:19:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["toantran292", "NBVTien", "dattamlong"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3bfa0f05d41ea34f5c685686a963206736b82587e4c03bd3e795891f86a6b60/pomelohq/pomelo"
---

</p>

<h1 align="center">Pomelo</h1>

  A dev environment. One per branch.<br>
  A native macOS app for multi-repo projects — free and open source.
</p>

</p>

</p>

## About

Pomelo spins up a full, isolated, runnable environment for **every branch** of a
multi-repo project — services, databases, and shared infrastructure, wired
automatically. Each branch is a real git worktree with its own services, ports,
and databases, so two branches never collide. No YAML archaeology, no port
juggling.

## What's inside

- **One branch, one full stack.** Every workspace is a real git worktree with its
  own services, ports, and databases. Two branches never collide.
- **Fast switches.** New workspaces clone databases from a prepared `main`
  (`CREATE DATABASE … TEMPLATE`) and materialize `node_modules` via APFS
  copy-on-write — seconds, not rebuilds.
- **Native services, Docker only for data.** Your repos' services run as real
  native processes on self-managed PTY holders — lighter and faster than wrapping
  everything in containers. Only databases and shared infra
  (Postgres/Redis/MinIO/OpenSearch) run in Docker.
- **Native app, not Electron.** SwiftUI linking a Go core in-process over…
