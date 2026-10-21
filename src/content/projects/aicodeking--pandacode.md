---
repo: "aicodeking/pandacode"
name: "pandacode"
description: "PandaCode: a calm desktop workspace for coding agents"
readmeQualityOk: true
url: "https://github.com/aicodeking/pandacode"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [47, 43]
stars: 352
forks: 50
openIssues: 7
closedIssues: 13
watchers: 5
contributors: 7
recentReleases: 10
createdAt: "2026-10-18T02:21:29Z"
lastCommitAt: "2026-10-21T17:31:55Z"
lastReleaseAt: "2026-10-21T00:26:59Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 28
maintainers: ["aicodeking", "ExcuseMeBro"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff6c4313675cd02a4b6a8127884c0b6f0e9a54a33f87303704b593a1fccba15/aicodeking/pandacode"
---

# PandaCode

A small, native desktop workspace for coding agents. PandaCode runs the coding
CLIs you already use — **Claude Code, Codex, Kimi Code, OpenCode, GLM Coding
Plan and Xiaomi MiMo** (through Claude Code), **Antigravity and xAI's Grok
Build** (through ACP) **Pi** (through its RPC mode) and **DeepSeek** (through ACP) — side by side, with
your projects, Git, a terminal and a browser in one window.

PandaCode is free and open source under the [PandaCode License](https://github.com/aicodeking/pandacode/blob/HEAD/LICENSE), the MIT
License with one addition: forks that are used commercially or released publicly
must say "This is a fork of PandaCode" and link to this repository. There is no
account, no license key and no telemetry.

Built with Tauri 2, Rust, SQLite and plain TypeScript. It uses the operating
system's webview: no bundled Chromium, resident Node server, React runtime or
embedded editor engine.

## Features

- **Every harness in one place.** Pick the harness, model and reasoning effort
  per task; switch between them from the composer. See [providers](https://github.com/aicodeking/pandacode/blob/HEAD/docs/providers.md).
- **Tasks and a task board.** Parallel tasks…
