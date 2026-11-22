---
repo: "boringstudent/codebuddy-switch"
name: "codebuddy-switch"
description: "Desktop app (Tauri) for WorkBuddy / CodeBuddy multi-account switching, credit monitoring, and local API proxy relay. Integrates changexbc/workbuddy-switch and hailinzhao/antigravity-tools."
originalDescription: "WorkBuddy / CodeBuddy 多账号切换、积分监控与本地 API 代理中转桌面 App（Tauri）。整合 changexbc/workbuddy-switch 与 hailinzhao/antigravity-tools。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/boringstudent/codebuddy-switch"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["account-switcher", "antigravity-tools", "api-proxy", "codebuddy", "rust", "tauri", "workbuddy", "workbuddy-switch"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 8
createdAt: "2026-10-04T12:21:44Z"
lastCommitAt: "2026-11-22T02:07:55Z"
lastReleaseAt: "2026-10-17T03:19:06Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 54
maintainers: ["changexbc", "boringstudent", "coderDJing"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c0ffbe6d2d6d1a79ba3674b9f3e751e72932a0e4682925eeedd9e32623870b/boringstudent/codebuddy-switch"
---

# CodeBuddy

A multi-account switching desktop app (Tauri, Windows only) for WorkBuddy and the CodeBuddy IDE. It manages China and international edition accounts in one place, and provides credit expiration monitoring, token usage statistics, and a local API proxy relay.

This project combines the work of two open-source projects: [changexbc/workbuddy-switch](https://github.com/changexbc/workbuddy-switch) (account switching, credit monitoring and statistics, Agent status floating window) and [hailinzhao/antigravity-tools](https://github.com/hailinzhao/antigravity-tools) (batch check-in, API Key proxy). It has been merged and evolved on that basis into a unified desktop application.

Multiple accounts share login state, and you can switch the WorkBuddy / CodeBuddy IDE login account with one click. **Session copy**: when switching accounts, you can copy the current account's sessions to the target account with new IDs. The source account's data is unaffected, and in the cloud the copied sessions belong to the target account.

## Quick Start

Go to [GitHub Releases](https://github.com/boringstudent/codebuddy-switch/releases/latest) to download an installer:
