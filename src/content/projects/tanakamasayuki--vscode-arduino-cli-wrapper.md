---
repo: "tanakamasayuki/vscode-arduino-cli-wrapper"
name: "vscode-arduino-cli-wrapper"
description: "VS Code extension that enhances Arduino CLI with colored logs, profile-aware boards, and smart includePath for IntelliSense."
readmeQualityOk: true
url: "https://github.com/tanakamasayuki/vscode-arduino-cli-wrapper"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [58, 42]
stars: 5
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-10T05:55:42Z"
lastCommitAt: "2026-08-29T10:20:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 41
maintainers: ["tanakamasayuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/698217ca906dad4172aac9d082f46f0056389d188cfd55a990339ac3ce78b363/tanakamasayuki/vscode-arduino-cli-wrapper"
---

# Arduino CLI Wrapper (VS Code Extension)

[日本語READMEはこちら](https://github.com/tanakamasayuki/vscode-arduino-cli-wrapper/blob/HEAD/README.ja.md)

VS Code extension to run Arduino CLI from the command palette, status bar, and an Explorer view. It streams colored logs to a pseudo terminal, supports sketch.yaml profiles, and updates IntelliSense includePath during builds.

*The Explorer view keeps sketches, profiles, and common actions together so you can launch tasks with a click.*

## Concept

This extension brings the Arduino CLI—normally invoked under the hood of the Arduino IDE—into VS Code so you can reach feature parity (and more) without leaving your editor. By leaning on Arduino CLI profiles, you can pin different versions of platforms and libraries per project through `sketch.yaml`, something that is hard to maintain inside the IDE alone. The helper UIs guide you through editing those profiles and even compare them with the latest releases to suggest upgrades.

Because you are already working inside VS Code, the extension connects build results with the Microsoft C/C++ extension: include paths, IntelliSense, diagnostics, and the generated `compile_commands.json` all stay in…
