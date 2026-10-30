---
repo: "Ariestar/sivtr"
name: "sivtr"
description: "A unified agent memory workspace for human and agent | A unified agent memory workspace"
originalDescription: "A unified agent memory workspace for human and agent | 一个统一的agent记忆工作空间"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ariestar/sivtr"
homepage: "https://sivtr.pages.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["agent", "cli", "rust", "sivtr", "output", "workspace", "search", "dsh-plugin", "dsh-plugins"]
stars: 253
forks: 24
openIssues: 30
closedIssues: 7
watchers: 0
contributors: 10
recentReleases: 3
createdAt: "2026-04-20T12:31:22Z"
lastCommitAt: "2026-10-30T11:02:56Z"
lastReleaseAt: "2026-08-18T05:09:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 83
undervaluedScore: 28
maintainers: ["renovate[bot]", "is52hertz", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d8861b19a579e801c9fcaaba5c5304637175480631815066e7fb47836c4a1c3/Ariestar/sivtr"
fundingLinks: ["CUSTOM:https://paypal.me/wolllf987", "CUSTOM:https://sivtr.pages.dev/zh-cn/project/sponsor/"]
discussionCount: 0
---

A unified memory space for agents and humans, letting agents and terminals share the same context

  ·
  ·
  ·

---

## Why sivtr?

Developers and agents often waste time rebuilding context that already exists: terminal errors, test output, tool logs, earlier AI sessions. `sivtr` turns this local work into searchable memory, without requiring you to adopt a heavy knowledge system.

With `sivtr`, you can:

- Have an agent fix the most recent failure without you pasting logs;
- Recover yesterday's test output, build errors, or key decisions within seconds;
- Jump from a summary back to the original command output or agent reply;
- Save a set of useful results as a variable such as `@failures` and keep using it in the next command.

> [!IMPORTANT]
> For agent workflows, install the `sivtr` CLI, register MCP with `sivtr mcp install`, and optionally use the built-in `sivtr-memory` skill. MCP is the main path for agents to read local evidence; the skill teaches the agent when and how to call it.

## Features

- **MCP-first agent memory**: With a single `sivtr mcp install`, agents directly call the search/show/zoom/filter/status/usage/stats tools, without you pasting logs.
- **Terminal…
