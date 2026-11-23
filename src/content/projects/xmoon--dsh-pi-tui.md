---
repo: "XMoon/dsh-pi-tui"
name: "dsh-pi-tui"
description: "A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui. npm @xmoon76/dsh-pi-tui"
originalDescription: "A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui. npm @xmoon76/dsh-pi-tui"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XMoon/dsh-pi-tui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["dsh", "dsh-plugin", "deepseek-harness"]
stars: 23
forks: 3
openIssues: 17
closedIssues: 55
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T15:23:07Z"
lastCommitAt: "2026-11-23T13:28:41Z"
lastReleaseAt: "2026-09-13T13:12:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 48
maintainers: ["XMoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd3b9547dd90fc30471be6d417189729c884490de517e4f1d866f3a9676d9171/XMoon/dsh-pi-tui"
discussionCount: 1
---

# dsh-pi-tui

[English](https://github.com/XMoon/dsh-pi-tui/blob/HEAD/README.en.md) | Simplified Chinese

**A terminal interface for DeepSeek Harness. One Host lets terminal, Web, and ACP clients access the same Agent Session.**

It runs in **Direct** mode by default and works out of the box. Starting with **0.5.8**, you can explicitly choose **Daemon** on Linux/macOS: a standalone local Host holds the Session and any work in progress, and terminal Clients can disconnect and reconnect. Other TUIs, the official Web interface, and local ACP clients can also access sessions on the same Host.

The Agent Loop, models, tools, persistence, permissions, and concurrent-write authority belong to [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). `dsh-pi-tui` is a third-party frontend, not a separate Agent Runtime.
