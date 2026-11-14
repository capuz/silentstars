---
repo: "Icather/dsh-clean-desktop-shell"
name: "dsh-clean-desktop-shell"
description: "Clean desktop shell for DSH — one-click launch like a normal app, live backend monitoring with quick tray start/stop, zero visual changes."
originalDescription: "DSH 纯净桌面壳：双击像普通软件一样一键启动，后端活性实时监测 + 托盘快捷启停，零视觉改造。Clean desktop shell for DSH — one-click launch like a normal app, live backend monitoring with quick tray start/stop, zero visual changes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Icather/dsh-clean-desktop-shell"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["deepseek-harness", "desktop", "dsh", "dsh-plugin", "electron", "macos", "windows"]
stars: 7
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-19T23:51:53Z"
lastCommitAt: "2026-11-14T22:01:41Z"
lastReleaseAt: "2026-08-31T12:12:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 63
maintainers: ["github-actions[bot]", "Icather", "lispv"]
openGraphImageUrl: "https://opengraph.githubassets.com/968d35e92ecee7196a4e34c6eb4e60f0b7d967b8a10b2aac789fdfcc0dbf1b95/Icather/dsh-clean-desktop-shell"
---

# dsh-clean-desktop-shell

**Clean desktop shell for DeepSeek Harness (DSH plugin form)**

It does one thing: it adds a clean desktop window layer to an already configured DSH Web instance, with a system tray, single-instance behavior, and use like a regular app. No frosted glass, no flashy materials. **Clean**.

[English](https://github.com/Icather/dsh-clean-desktop-shell/blob/HEAD/README.en.md) · [中文](https://github.com/Icather/dsh-clean-desktop-shell/blob/HEAD/README.md)

## What is this

`dsh-clean-desktop-shell` is a **DSH plugin-form** clean desktop shell. It wraps an already running DSH Web instance (default `http://127.0.0.1:3080`) in a native desktop window, with a system tray and single-instance behavior, so it can be used like a regular desktop app. **No visual changes**: no frosted glass, no UI modifications. It is purely a "window shell".

The main difference from other desktop solutions in the ecosystem:

| | Other desktop solutions (e.g., the dsh-desktop series) | This plugin |
|:--|:--|:--|
| **Form** | Standalone Electron app with its own profile | **DSH plugin**, mounted into the existing profile |
| **Profile** | New desktop profile; plugins/config must be…
