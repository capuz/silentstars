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
stars: 9
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T06:31:00Z"
lastCommitAt: "2026-10-24T08:09:01Z"
lastReleaseAt: "2026-06-16T09:18:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["Exelord"]
openGraphImageUrl: "https://opengraph.githubassets.com/f689ef6ce6dd858f3a09cae62513af5473136d5055f265535b471cc0b56fd95c/vznjs/vx"
discussionCount: 1
---

Correct, sandboxed, extensible. No cloud, no account, no paywall.<br>

## What vx is

Task orchestration with a cache you can trust, on a core you can extend.
Each task is one shell command with declared inputs and outputs; vx runs
them in dependency order and replays results from a content-addressed cache.

## Quick start

In a git repo:

```sh
bunx @vzn/vx init   # installs vx, writes an empty root vx.config.ts and the lockfile plugin
```

A prebuilt binary for Linux (glibc, not Alpine's musl) and macOS, x64 and
arm64. Windows: run vx inside WSL2.

A task runs its tool directly, never through a package script. Cache one by
saying what it reads and writes:

```ts
// packages/app/vx.config.ts
import { defineProject } from '@vzn/vx/config'

export default defineProject({
  tasks: {
    build: {
      exec: { command: 'tsc -b' },
      dependsOn: ['^build'], // dependencies build first
      inputs: { files: ['src/**', 'tsconfig.json'] },
      cache: {
        outputs: { files: ['dist/**'] },
      },
    },
  },
})
```

```sh
vx run build --all    # builds, in dependency order; stores the results
vx run build --all    # nothing changed: up-to-date, in milliseconds
rm -rf…
