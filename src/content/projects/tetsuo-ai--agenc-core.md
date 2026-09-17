---
repo: "tetsuo-ai/agenc-core"
name: "agenc-core"
description: "Private AgenC core runtime repository"
readmeQualityOk: true
url: "https://github.com/tetsuo-ai/agenc-core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 35
forks: 11
openIssues: 41
closedIssues: 405
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-03-18T05:18:14Z"
lastCommitAt: "2026-09-17T08:51:35Z"
lastReleaseAt: "2026-04-12T08:18:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["signerless", "7etsuo", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a7521f13a3360b89e64a78389dacc4043475e730d2a821d339191c25054989/tetsuo-ai/agenc-core"
---

# AgenC Core

> Daemon-backed coding agent: interactive TUI, headless print mode, background
> agents, multi-channel gateway, budget-bounded autonomy, and a typed embedding SDK.

**AgenC Core** is the implementation repository for the `agenc` CLI. A local
daemon owns agent/session lifecycle, permissions, provider calls, and command
execution. The interactive TUI, headless `--print` / `--no-tui` CLI, background
agents, channel gateway, and remote phone bridge are all clients of that daemon.

| Package | Path | Role |
| --- | --- | --- |
| `@tetsuo-ai/agenc` `0.17.0` | `packages/agenc/` | Public launcher binary |
| `@tetsuo-ai/runtime` `0.17.0` | `runtime/` | Daemon, TUI, tools, providers, tests |
| `@tetsuo-ai/agenc-sdk` `0.3.0` | `packages/agenc-sdk/` | Typed embedding SDK (daemon protocol) |

Documentation map: [`docs/INDEX.md`](https://github.com/tetsuo-ai/agenc-core/blob/HEAD/docs/INDEX.md). Architecture:
[`docs/ARCHITECTURE.md`](https://github.com/tetsuo-ai/agenc-core/blob/HEAD/docs/ARCHITECTURE.md). CLI reference:
[`docs/reference/cli.md`](https://github.com/tetsuo-ai/agenc-core/blob/HEAD/docs/reference/cli.md).

## Contents

- [Features](#features)
- [Project…
