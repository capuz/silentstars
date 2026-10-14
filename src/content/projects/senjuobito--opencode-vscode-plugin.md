---
repo: "SenjuObito/opencode-vscode-plugin"
name: "opencode-vscode-plugin"
description: "A VS Code extension for opencode that provides a GUI."
originalDescription: "opencode的vscode的插件，实现gui"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SenjuObito/opencode-vscode-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 11
forks: 1
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-08-25T02:30:29Z"
lastCommitAt: "2026-10-14T08:58:32Z"
lastReleaseAt: "2026-10-12T02:18:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 38
maintainers: ["SenjuObito"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d40fc77eff8df4ec5347919a5a157dd527a94a0a2846f8c1146f10788134c3e/SenjuObito/opencode-vscode-plugin"
---

# OpenCode Buddy

A VS Code extension that brings the **opencode** agent into a full chat GUI. The original motivation was that the existing VS Code opencode plugin was too difficult to use, and the cc-gui open source project was found on GitHub. It is a greenfield port of the IntelliJ plugin [`jetbrains-cc-gui`](https://github.com/zhukunpenglinyutong/jetbrains-cc-gui): the React webview is carried over verbatim, the Java backend is rewritten in TypeScript, and only the **opencode** provider is kept (Claude / Codex / Grok / Kimi / PI branches removed).

Unlike the original plugin — which spawned a fresh `opencode run` process for every message — this extension keeps a **persistent `opencode serve` daemon** (via `@opencode-ai/sdk`) alive across all tabs and conversations, managed by a daemon bridge with prewarm, heartbeat, crash-restart, and session reuse.

## Philosophy

[`jetbrains-cc-gui`](https://github.com/zhukunpenglinyutong/jetbrains-cc-gui) aims to provide a unified experience across different AI providers. This project takes a different approach — it **reuses opencode's capabilities without secondary development**, focusing on providing a native GUI experience for…
