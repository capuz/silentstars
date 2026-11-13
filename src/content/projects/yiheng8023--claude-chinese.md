---
repo: "yiheng8023/claude-chinese"
name: "claude-chinese"
description: "High-performance, non-invasive, self-healing Chinese localization toolkit for Claude Desktop clients (Windows MSIX/Win32 / macOS / Linux)."
originalDescription: "High-performance, non-invasive, self-healing Chinese localization toolkit for Claude Desktop clients (Windows MSIX/Win32 / macOS / Linux)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yiheng8023/claude-chinese"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["chinese", "claude", "claude-code", "claude-desktop", "cowork", "deepseek", "electron", "i18n", "localization", "msix"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-23T02:06:24Z"
lastCommitAt: "2026-11-13T05:36:39Z"
lastReleaseAt: "2026-08-23T08:27:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["yiheng8023"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc11c88c862e6999706b2650b867dc58c77e5955a82ffec48e33d43d68a2c80d/yiheng8023/claude-chinese"
discussionCount: 0
---

# Claude Desktop Self-Healing Chinese Localization Toolkit (Claude Chinese Toolkit)

A recoverable Chinese localization toolkit for the Anthropic **Claude Desktop** desktop client (code version **v1.2.98**, adapted to **5.11492.2** in this round). It performs incremental maintenance on the official i18n resources and preserves existing translations and terminology rules.

---

## 🌟 Core Features

- **Native i18n reuse**: Incrementally generates Chinese resources and keeps the official English as a fallback.
- **Terminology rules preserved**: Distinguishes Diff (差异) from Change (变更), and Branch (分支) from Fork (分叉). Config keys, model IDs, protocol names, etc. are kept in English according to context.
- **Four-layer glossary**: Shell 1,664 entries (current English baseline 1,310 entries), Web UI 32,246 entries, 52 dynamic glossary entries, and 362 long-form descriptions. The counts include historical compatibility entries and intentionally retained English, and do not represent the current UI localization rate.
- **Collapsed body text checks** cover 147 'Learn more' references and 145 distinct body texts. The original description modules of 5.11492.2 have been verified, 12 newly…
