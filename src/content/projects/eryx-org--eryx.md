---
repo: "eryx-org/eryx"
name: "eryx"
description: "A shell, Python and Javascript sandbox using Wasmtime"
readmeQualityOk: true
url: "https://github.com/eryx-org/eryx"
homepage: "https://eryx.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 86
forks: 17
openIssues: 21
closedIssues: 170
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-11T22:42:47Z"
lastCommitAt: "2026-11-26T13:00:23Z"
lastReleaseAt: "2026-01-30T23:42:48Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 48
maintainers: ["sd2k", "renovate[bot]", "eryx-release-plz[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce1e5db66523c95805ebfba601bc78d999ee1742e01af4b82131044dc2bfdf79/eryx-org/eryx"
---

# Eryx

A WebAssembly sandbox for running untrusted code from AI agents and users: **Python** (real CPython 3.14), **JavaScript** (QuickJS), and a **bash-compatible shell** that runs real CLI tools such as coreutils, ripgrep, jq, curl, git and gh. It has memory and CPU limits, and no filesystem or network access by default. Networking and secrets are host-controlled, and async host callbacks give the access you _do_ want to allow.

Embed it from **Rust**, **Python** or **JavaScript**, or run it as an **MCP server** or a **gRPC server**. [Try the demo](https://demo.eryx.run) or [read the docs](https://docs.eryx.run).

> **Used in production at [Grafana](https://grafana.com/).**

> **eryx** (noun): A genus of sand boas (Erycinae) — non-venomous snakes that live _in_ sand.
> Perfect for code running inside a sandbox.
