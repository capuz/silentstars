---
repo: "ChicagoDave/sharpee"
name: "sharpee"
description: "Parser-Based Interactive Fiction Platform developed in Typescript with a Custom Modeling Language"
readmeQualityOk: true
url: "https://github.com/ChicagoDave/sharpee"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [58, 32]
stars: 15
forks: 2
openIssues: 52
closedIssues: 103
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-03-29T09:11:22Z"
lastCommitAt: "2026-08-11T04:49:39Z"
lastReleaseAt: "2026-06-18T23:33:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 67
maintainers: ["ChicagoDave"]
openGraphImageUrl: "https://opengraph.githubassets.com/bccfe46cd3387067d03fbecd634aad8a72fd74c8e10446f61f33662cf3c4ce1c/ChicagoDave/sharpee"
---

# Sharpee

A parser-based Interactive Fiction authoring platform built in TypeScript.

## Quick Start

The `sharpee` CLI ships in `@sharpee/devkit` — install it globally:

```bash
npm install -g @sharpee/devkit
```

Scaffold a project, then build and play:

```bash
sharpee init my-adventure
cd my-adventure
npm install
sharpee build
open dist/web/index.html
```

| Command | What it does |
|---------|-------------|
| `sharpee init <name>` | Create a new story project |
| `sharpee init-browser` | Add browser client to existing project |
| `sharpee build` | Build `.sharpee` bundle + browser client |
| `sharpee build-browser` | Build browser client only |
| `sharpee ifid` | Generate or validate an IFID |

## What's Included

`@sharpee/sharpee` is the umbrella package — it re-exports the **story runtime baseline** (ADR-178), the imports a story author needs. It deliberately does *not* re-export every symbol; for advanced use, import a sub-package directly. All 28 packages below are published individually on npm under the `@sharpee` scope.

| Package | Description |
|---------|-------------|
| `@sharpee/sharpee` | Umbrella package — re-exports the story runtime baseline (ADR-178) |
|…
