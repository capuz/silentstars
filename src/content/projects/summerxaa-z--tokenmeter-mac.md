---
repo: "SummerXaa-Z/tokenmeter-mac"
name: "tokenmeter-mac"
description: "TokenMeter — macOS Menu Bar AI Usage Monitoring: DeepSeek Balance/Consumption + Claude/Codex Local Token Statistics + Cursor Subscription Usage, Native Swift"
originalDescription: "TokenMeter — macOS 菜单栏 AI 用量监控:DeepSeek 余额/消费 + Claude/Codex 本地 token 统计 + Cursor 订阅用量,原生 Swift"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SummerXaa-Z/tokenmeter-mac"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["deepseek", "macos", "menubar", "react", "rust", "tauri", "swiftui", "token-usage"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T05:00:10Z"
lastCommitAt: "2026-09-27T09:29:00Z"
lastReleaseAt: "2026-06-12T06:40:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["SummerXaa-Z"]
openGraphImageUrl: "https://opengraph.githubassets.com/d01099d015eaa8961859218f0b48ae09d54c7bc62d2efd6c5f6db2ec4eb51f66/SummerXaa-Z/tokenmeter-mac"
---

# TokenMeter

> Originally named DeepSeek Monitor for macOS, renamed starting from v3.0.

TokenMeter is a persistent macOS menu bar AI usage monitoring application: unified view of AI Coding Token, costs, quotas, trends, and local personal profiles for Claude, Codex, Kimi Code, OpenCode, Gemini CLI, GitHub Copilot CLI, Qwen Code, and Cursor, and displays DeepSeek platform API consumption and balance as a separate account dimension. Click the menu bar icon, and the panel drops down as a native NSPopover next to the icon.

The current main version is **native Swift implementation** (SwiftUI + AppKit), and the earlier Tauri 2 + React + Rust version (v1.1.0) is preserved in the `tauri-version` branch.

Disclaimer: This project is not an official DeepSeek product.

## Installation

Download the latest `TokenMeter_<version>_aarch64.dmg` (Apple Silicon) from [Releases](https://github.com/SummerXaa-Z/tokenmeter-mac/blob/HEAD/../../releases), open the dmg and drag `TokenMeter.app` into Applications.

### First Launch Shows "Cannot Open" "Cannot Verify Developer"

This project is an open-source self-signed application **without Apple's paid notarization**, so it will be blocked by…
