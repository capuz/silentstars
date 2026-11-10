---
repo: "pht88888888/DSHAPP"
name: "DSHAPP"
description: "DSH Android client: runs Node in the built-in Termux environment, runs the DSH engine on Node, and loads the official Web GUI in a WebView"
originalDescription: "DSH Android 客户端：内置 Termux 环境跑 Node，在 Node 上跑 DSH 引擎，WebView 加载官方 Web GUI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pht88888888/DSHAPP"
language: "JavaScript"
languages: ["JavaScript", "Kotlin"]
languagePcts: [52, 41]
topics: ["ai-agent", "android", "coding-agent", "geckoview", "kotlin", "llm", "termux", "webview"]
stars: 77
forks: 4
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-11T00:30:29Z"
lastCommitAt: "2026-11-10T11:38:58Z"
lastReleaseAt: "2026-10-19T15:08:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 29
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b93d8fa5ff8b5d9f3182dd02b21cd13d85d57d8cf5038e8b8226a830385f5aab/pht88888888/DSHAPP"
discussionCount: 0
---

# DSH for Android

**Run a complete AI coding agent on your Android phone.**

[English](https://github.com/pht88888888/DSHAPP/blob/HEAD/README.en.md) · [Docs](https://github.com/pht88888888/DSHAPP/blob/HEAD/docs/agents/README.md) · [Contributing](https://github.com/pht88888888/DSHAPP/blob/HEAD/CONTRIBUTING.md)

---

## What is this

DSH for Android moves the [DSH](https://github.com/deepseek-ai) (DeepSeek Harness) desktop engine onto the phone as-is: it runs a Node inside the built-in Termux environment, runs the DSH engine on Node, and then uses a WebView to load DSH's bundled Web GUI.

**It does not draw its own chat UI.** The UI fully reuses the official frontend, and only on narrow screens do built-in plugins provide mobile adaptation. So what you get is not a "cut-down mobile version" but **the same frontend as the desktop app**, just small enough to fit in your pocket.

```
APK
 ├─ Termux bootstrap        bash / dpkg / apt + 64 .so files
 ├─ Node runtime             Termux official arm64 node 26.4.0
 ├─ DSH engine               node_modules, fully unpacked into a private directory
 ├─ Native plugins (self-compiled)  require-builtin / flock / node-pty
 ├─ Web engine (gecko…
