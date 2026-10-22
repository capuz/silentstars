---
repo: "vznjs/vx"
name: "vx"
description: "Task orchestration you own. Correct, sandboxed, extensible. No cloud, no account, no paywall."
readmeQualityOk: true
url: "https://github.com/vznjs/vx"
homepage: "https://vznjs.github.io/vx/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["bazel", "build-cache", "build-system", "build-tool", "bun", "ci", "ci-cd", "developer-tools", "incremental-builds", "javascript"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T06:31:00Z"
lastCommitAt: "2026-10-22T08:53:46Z"
lastReleaseAt: "2026-06-16T09:18:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["Exelord", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/29a7607fe994dde7f7a7e52d228b739b3041f5f7eb6f6c6e2cb1698d4d6bd40b/vznjs/vx"
discussionCount: 1
---

Correct, sandboxed, extensible. No cloud, no account, no paywall.<br>

## What vx is

Task orchestration with a cache you can trust, on a core you can extend.
Each task is one shell command with declared inputs and outputs; vx runs
them in dependency order and replays results from a content-addressed cache.

## Install

```sh
npm install -D @vzn/vx     # or: pnpm add -D -w · yarn add -D (-W on Yarn 1) · bun add -d
```

A prebuilt binary for Linux (glibc, not Alpine's musl) and macOS, x64 and arm64; no Bun needed. The
[release](https://github.com/vznjs/vx/releases) binary needs no Node either.
Windows: run vx inside WSL2.

## Quick start

In a git repo:

```sh
npx @vzn/vx init       # installs vx globally and in the repo; beside turbo.json or nx.json: migrates them; else a root vx.config.ts
vx run build --all     # builds in dependency order and stores the results
vx run build --all     # nothing changed: every task up-to-date
```

Bun workspaces: `bun add -d @vzn/vx` and `bunx @vzn/vx` (npm refuses to run in
a repo whose `devEngines` names Bun).

Without Turbo or Nx, tasks run uncached until you declare what they read (below).

`init` prints what it wrote and anything left to…
