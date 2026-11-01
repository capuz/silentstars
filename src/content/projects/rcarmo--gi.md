---
repo: "rcarmo/gi"
name: "gi"
description: "An elegant Go coding agent, for more civilized times"
readmeQualityOk: true
url: "https://github.com/rcarmo/gi"
homepage: "https://rcarmo.github.io/projects/gi/"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["agents", "go", "harness", "clojure"]
stars: 24
forks: 2
openIssues: 3
closedIssues: 61
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-04-22T08:20:22Z"
lastCommitAt: "2026-11-01T10:43:45Z"
lastReleaseAt: "2026-10-30T15:21:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["rcarmo", "piclaw-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1217796049/7ac53c2a-6a44-427c-ad9e-0b2dd6a7b5bc"
---

# gi

A coding agent built on `go-ai`, informed by lessons learned from Pi, Piclaw, and Vibes.

## Why

In short, I needed to run `pi` and `piclaw` on RISC-V, and `bun` didn't run there. Then I realized that having a single binary with _everything_ I needed was a much nicer way to deploy an agent overall, and that Go and `go-joker` were a much nicer (and less resource-intensive) thing to use, especially considering that the Rust compiler is slow as molasses and kept filling the disk on all my sandboxes.

So this was the result. If you like `pi`, you should feel very much at home. If you use `piclaw` or love the Vibes web UI (like I do), the same should be true--even if in either case there will be differences. The goal was not to achieve full parity, but to be a tight, efficient bundle of core features that I can rely upon.

## Status

Gi runs a terminal UI (the default) and a web UI (`gi -web`) from one pure-Go binary, with embedded web assets and SQLite-backed sessions, messages and turns. Builds use Go 1.27.2. Bun is needed to build the browser assets; there is no Node or Bun runtime dependency.

The terminal targets Pi TUI 1.3.0 workflows and keybindings, with alignment…
