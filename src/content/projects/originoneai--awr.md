---
repo: "originoneai/awr"
name: "awr"
description: "Persistent work state and minimal context for long-running AI agents."
readmeQualityOk: true
url: "https://github.com/originoneai/awr"
homepage: "https://awr.originoneai.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 136
forks: 19
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 7
createdAt: "2026-09-07T16:09:21Z"
lastCommitAt: "2026-09-24T08:42:03Z"
lastReleaseAt: "2026-09-20T08:22:09Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 38
maintainers: ["FreeOnePlus"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f3651a8a84a3d9e700522c69877f3ca3114d887e899592fa65bd1aa63ee106/originoneai/awr"
---

# AWR · Agent Work Runtime

[English](https://github.com/originoneai/awr/blob/HEAD/README.md) · [简体中文](https://github.com/originoneai/awr/blob/HEAD/README.zh-CN.md) · [Apache-2.0](https://github.com/originoneai/awr/blob/HEAD/LICENSE)

**Persistent project state and focused context for coding agents.**

A new chat should be able to find the current goal, unfinished work, constraints
and next action without rereading the entire project history. AWR indexes your
existing Markdown/YAML sources, records execution checkpoints and compiles a
bounded context packet for the task at hand. Use it through a native Rust CLI or
an MCP client. Context compilation runs locally and makes no model calls.

AWR is host-agnostic. Any coding agent that can run the CLI or speak MCP uses
the same project state. Deep lifecycle automation is optional; it is not the
product boundary. See [host integration layers](https://github.com/originoneai/awr/blob/HEAD/docs/integrations/README.md).

```text
Your project sources → AWR index + checkpoints → focused context → coding agent
       ↑                                                      │
       └──────── reviewed changes and recorded progress ───────┘
```…
