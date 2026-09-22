---
repo: "aletheics/zeno"
name: "zeno"
description: "Desktop shell for the pi coding agent"
readmeQualityOk: true
url: "https://github.com/aletheics/zeno"
homepage: "https://aletheics.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 89
forks: 9
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-11T07:55:43Z"
lastCommitAt: "2026-09-22T08:44:46Z"
lastReleaseAt: "2026-09-18T02:24:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 38
maintainers: ["aletheics", "angexqc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b82659437d91515a4e9d6ae30e46aafa19a336eb1522a481c025a260b41ec46f/aletheics/zeno"
---

# Zeno

[English](https://github.com/aletheics/zeno/blob/HEAD/README.md) | [简体中文](https://github.com/aletheics/zeno/blob/HEAD/README.zh-CN.md)

Zeno is a desktop shell for the [pi](https://pi.dev) coding agent: a Codex-style UI that keeps configuration, packages, sessions, and tools on the native pi side (`~/.pi/agent`).

## Screenshots

Zeno desktop shell — sidebar, session workspace, and composer:

Animated demo:

## Requirements

- Node.js 22.19 or newer
- pnpm 11.15.1

## Setup

```bash
pnpm install
pnpm electron:install
```

`electron:install` downloads the Electron 43 runtime for your platform.

## Develop

Apps have **independent** `dev` / `build` entry points at the repo root:

| App                          | Dev                | Build                | Notes                                                          |
| ---------------------------- | ------------------ | -------------------- | -------------------------------------------------------------- |
| **Desktop** (`apps/desktop`) | `pnpm dev`         | `pnpm build:desktop` | Hot reload (HMR + auto-restart). One-shot: `pnpm run dev:once` |
| **Landing** (`apps/landing`) | `pnpm dev:landing` | `pnpm build:landing` |…
