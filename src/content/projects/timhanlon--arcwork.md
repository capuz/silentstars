---
repo: "timhanlon/arcwork"
name: "arcwork"
description: "Arc Work is my exploration of a unified development environment, where conversations, tasks, diffs, and multiple harnesses, are part of the same application and workflows."
readmeQualityOk: true
url: "https://github.com/timhanlon/arcwork"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agents", "developer-tools", "effect-ts"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-20T06:23:17Z"
lastCommitAt: "2026-07-19T00:50:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["timhanlon"]
openGraphImageUrl: "https://opengraph.githubassets.com/42e664e94a6aee978c7dd16d32d661d8b7b8300eef291acd3d81e9be7b0a9be4/timhanlon/arcwork"
---

# Arc Work

I'm building this because I’m not convinced we know what the end-game UI for agentic development looks like yet.

I actively use Claude Code, Codex, and Cursor CLI. I feel like using them together gets a better (and cheaper) result, but I was finding it impossible to stay on track while juggling terminal panes and a sprawl of Markdown. Particularly while working on more than one project at a time.

Arc Work is my exploration of a unified development environment, where conversations, tasks, diffs, and multiple harnesses, are part of the same application and workflows.

It’s built primarily for myself, but I’m putting it out into the world to see if it resonates.

> **Status:** early, macOS-only, distributed source-only —
> run it with `pnpm dev` (see below). No packaged build yet.

## Requirements

- Node.js 22 or newer
- pnpm 10.24 or newer
- macOS for the current Electron development target

## Development

```bash
pnpm install
pnpm dev
```

Useful commands:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm storybook
```

Launching a live session needs `node-pty` and `better-sqlite3` compiled for
Electron's ABI. `pnpm install` builds them; if a native-module ABI error…
