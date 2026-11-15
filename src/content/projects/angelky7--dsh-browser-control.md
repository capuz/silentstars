---
repo: "angelky7/dsh-browser-control"
name: "dsh-browser-control"
description: "A Chrome browser extension + DeepSeek Harness plugin that lets AI agents directly control your real browser."
originalDescription: "Chrome 浏览器扩展 + DeepSeek Harness 插件，让 AI Agent 直接操控你的真实浏览器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/angelky7/dsh-browser-control"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["browser-automation", "cdp", "chrome-extension", "deepseek-harness", "dsh-plugin", "websocket", "dsh-browser"]
stars: 71
forks: 7
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-22T15:17:41Z"
lastCommitAt: "2026-11-15T11:22:40Z"
lastReleaseAt: "2026-10-10T13:34:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 39
maintainers: ["kwanch27", "angelky7", "long-arm-ape"]
openGraphImageUrl: "https://opengraph.githubassets.com/97af2974d63fb9816df06322f134122d80eef296c3b3eb5128b37c9937f04efe/angelky7/dsh-browser-control"
---

# DSH Browser Control

**Let AI do the work in your own browser: logged-in accounts, visible actions, and local files.**

## What is this

A dsh plugin plus a Chrome extension. The extension connects to dsh over local loopback (default `127.0.0.1:9777`), so the model can navigate, read pages, click, type, drag, upload, take screenshots, export PDF/MHTML, read and write cookies, and view performance metrics in **the browser you use every day**.

No headless mode, no moving login state around, and no MCP needed. It drives the Chrome on your screen that is already logged in.

- 30 `browser_*` tools that the agent can use with plain-language instructions
- Visible actions: tabs the agent opens automatically join the `DSH` group, and the extension popup locks them with one click
- Local gates: read-only, scripts disabled, upload allowlist
- Accountable: action audit plus a journal that persists across restarts
- Install the extension once: routine feature updates only require updating the plugin (extension-side security/platform fixes excepted)

## Installation

### 1. Chrome extension

Download…
