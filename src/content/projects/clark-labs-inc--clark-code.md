---
repo: "clark-labs-inc/clark-code"
name: "clark-code"
description: "Open-source clean-room desktop client for the Clark coding agent — Tauri 2 + React + Rust (agent-core, ACP), with a Clark provider."
readmeQualityOk: true
url: "https://github.com/clark-labs-inc/clark-code"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [78, 21]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T22:47:26Z"
lastCommitAt: "2026-08-11T04:48:16Z"
lastReleaseAt: "2026-07-02T23:35:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 26
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6905e5543559efe7727288b8cc2ff3f8f10a27720a7320892de95edcec0e5c84/clark-labs-inc/clark-code"
---

# Clark Code

Clark Code is an open-source desktop coding agent for working across real
projects with local tools, explicit permissions, and resumable sessions.

## What it does

- Works with local coding models and Agent Client Protocol (ACP) providers.
- Reads, edits, searches, and runs commands inside project-scoped sandboxes.
- Keeps tool calls, plans, progress, diffs, and artifacts visible while work is
  running.
- Supports multiple projects, Git worktrees, remote SSH environments, quick
  chats, and durable conversation history.
- Uses explicit approval boundaries for sensitive filesystem, network, and
  computer-use actions.
- Runs as a native Tauri application on macOS, Linux, and Windows.

## Build from source

You need a current Rust toolchain, Node.js, Corepack, and the platform
dependencies required by [Tauri 2](https://v2.tauri.app/start/prerequisites/).

```bash
git clone https://github.com/clark-labs-inc/clark-desktop.git
cd clark-desktop/app
corepack pnpm install --frozen-lockfile
cd ..
```

On macOS, build and launch the development app with:

```bash
./script/build_and_run.sh
```

For browser-only interface development:

```bash
cd app
pnpm dev
```

##…
