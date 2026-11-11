---
repo: "lishize20040802-rgb/dsh-deep-ptc-mode"
name: "dsh-deep-ptc-mode"
description: "Deep PTC mode for DeepSeek Harness: interruptible background jobs, selectable shells, a right-sidebar panel with output files and SSH, a bilingual UI, and compatibility with official and third-party plugins."
readmeQualityOk: true
url: "https://github.com/lishize20040802-rgb/dsh-deep-ptc-mode"
homepage: "https://github.com/lishize20040802-rgb/dsh-deep-ptc-mode#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-preset", "deepseek-harness", "dsh-plugin", "deepseek", "dsh", "open-source", "prompt-engineering", "ptc", "powershell", "wsl"]
stars: 34
forks: 4
openIssues: 11
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T17:44:21Z"
lastCommitAt: "2026-11-11T19:45:15Z"
lastReleaseAt: "2026-11-07T20:57:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 36
maintainers: ["lishize20040802-rgb", "GYT-Lucas"]
openGraphImageUrl: "https://opengraph.githubassets.com/28e5b79093c3dd4e601454758c0ca8360e004ee9624198009e73a0bc9b603187/lishize20040802-rgb/dsh-deep-ptc-mode"
---

# Deep PTC mode

[中文](https://github.com/lishize20040802-rgb/dsh-deep-ptc-mode/blob/HEAD/README.zh.md) · MIT · **1.9.1**

[Changelog](https://github.com/lishize20040802-rgb/dsh-deep-ptc-mode/blob/HEAD/CHANGELOG.md) · [Test report](https://github.com/lishize20040802-rgb/dsh-deep-ptc-mode/blob/HEAD/TEST_REPORT.md)

Deep PTC is a DeepSeek Harness agent mode with progress reports, clarifying questions, task-size planning, and interruptible background work. It builds on the installed official PTC preset with selectable shells, on-demand tools and skills, and a two-layer preset identity adapter for third-party plugins.

1.9.0 moves the panel into DSH's official entry points: a Deep PTC settings page, and a Deep PTC tab in the right sidebar (environment, subagents, background jobs, output files, SSH connections, tool state) that the capsule under the composer opens. Visual effects render lightly and start off when an appearance plugin is installed. The plugin adds no keyboard shortcuts.

## Five basic problems

| # | Problem | What Deep PTC does |
| --- | --- | --- |
| 1 | **Working silently without reporting** | One sentence before every `run_code`; a longer update at milestones; never…
