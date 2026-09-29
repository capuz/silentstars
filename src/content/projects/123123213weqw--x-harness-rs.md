---
repo: "123123213weqw/x-harness-rs"
name: "x-harness-rs"
description: "A Linux Server AI Agent Harness implemented from scratch using Rust to build the core Loop, Provider, and tool runtime"
originalDescription: "从零实现的 Linux Server AI Agent Harness，使用 Rust 构建核心 Loop、Provider 与工具运行时"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/123123213weqw/x-harness-rs"
homepage: "https://gitee.com/wangyue2006/x-harness-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 6
forks: 2
openIssues: 6
closedIssues: 29
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-19T07:03:10Z"
lastCommitAt: "2026-09-29T08:10:09Z"
lastReleaseAt: "2026-09-09T08:22:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 69
maintainers: ["123123213weqw"]
openGraphImageUrl: "https://opengraph.githubassets.com/018d112cd6d8af0ab7cbf1383522924a93f1c4deeee2e880348e6fc7fb5d7dc5/123123213weqw/x-harness-rs"
---

XHarness is an open-source, cross-platform coding-agent runtime written in Rust. It combines a durable agent loop, an OpenAI-compatible model adapter, native tools, and a Web interface that can also run inside a Tauri desktop application.

The project is under active development. The desktop and Web experiences share the same Rust Host, but platform capabilities and release availability differ. XHarness is an independent project; its versioned Web UI incorporates components from DeepSeek Harness under their respective licenses. See [Third-Party Notices](https://github.com/123123213weqw/x-harness-rs/blob/HEAD/THIRD_PARTY_NOTICES.md).

A [read-only Gitee mirror](https://gitee.com/wangyue2006/x-harness-rs) is available for access from China; development and pull requests take place on GitHub.

## What it does

- **Runs multi-step agents.** Streams text, reasoning, and tool calls; supports steering, cancellation, approval, and supervised background work.
- **Keeps recoverable state.** Append-only session logs, durable input queues, and checkpoints allow the Host to reconstruct conversations after a restart. Interrupted side-effecting tool calls are not silently replayed.
-…
