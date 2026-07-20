---
repo: "siumiu1968/codex-accounts"
name: "codex-accounts"
description: "macOS helper for multiple Codex/OpenAI profiles with quota meters, local history/memory sync, three-level Keep Awake, and multi-theme SwiftUI."
originalDescription: "macOS helper for multiple Codex/OpenAI profiles with quota meters, local history/memory sync, three-level Keep Awake, and multi-theme SwiftUI."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/siumiu1968/codex-accounts"
language: "Swift"
languages: ["Swift", "Shell"]
languagePcts: [68, 28]
topics: ["codex", "macos", "multi-account", "openai", "productivity", "swiftui"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-05T08:19:27Z"
lastCommitAt: "2026-07-20T06:34:30Z"
lastReleaseAt: "2026-05-15T19:00:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 43
maintainers: ["siumiu1968"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fd3a2a9d6548293f4ee983810ff274c27f8b8e264b9aa12846d8d136709c13a/siumiu1968/codex-accounts"
---

# Codex Accounts

**Languages:** [繁體中文](#繁體中文) | [简体中文](#简体中文) | [English](#english)

> Privacy: All profile names, `/tmp/demo-profiles` paths, and quota values shown above are fictional demo data.

---

## English

Codex Accounts is a macOS utility for managing multiple Codex / OpenAI accounts. It opens a separate Codex desktop window for each profile and separates `CODEX_HOME` and Electron `user-data-dir`, so different profiles can maintain different login states without needing to log out and log back in repeatedly.

### V2.6.0 Update Introduction

V2.6.0 reorganizes the display of quota and login status: when credentials are confirmed to be invalid, it will clearly display "Login Expired" or "Login Required"; if logged in but temporarily unable to retrieve official usage, it will display "Unable to Retrieve Temporarily". During Reload, it will no longer flash false `0%` or `00/00`. Only when the official OAuth explicitly responds that the token is invalid will it be determined that the login has expired; general network errors or 5xx will retain the last available quota. Backup quota queries will also disable MCP and plugins to reduce background processes and system load. An…
