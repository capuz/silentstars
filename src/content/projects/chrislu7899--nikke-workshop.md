---
repo: "ChrisLu7899/NIKKE-Workshop"
name: "NIKKE-Workshop"
description: "[Kingdom Study Session] NIKKE Tactical Preparation Room, integrating character data retrieval and a stat-reroll calculator."
originalDescription: "【王国大学习】NIKKE 战术整备室，集成角色数据获取与洗词条计算器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ChrisLu7899/NIKKE-Workshop"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
stars: 27
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-18T08:48:40Z"
lastCommitAt: "2026-10-16T08:27:10Z"
lastReleaseAt: "2026-09-08T03:50:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 27
maintainers: ["ChrisLu7899"]
openGraphImageUrl: "https://opengraph.githubassets.com/69601639b584910a369f214da50422432ebf4d235f667c0d1aaf8462de8c03fb/ChrisLu7899/NIKKE-Workshop"
---

# [Kingdom Study Session] NIKKE Tactical Preparation Room

NIKKE Workshop is a local extension for Chromium browsers. It integrates account character data retrieval, Nikke encyclopedia and list management, equipment affix reading, a finite-state MDP calculator for affix rerolling, and Excel export.

Current version: `1.0.15`　|　Supports: Google Chrome, Microsoft Edge

1.0.15 keeps the whole-task Web Worker and optimizes reroll-affix solving, probability transition reuse, and global candidate computation. The default is the “old rules,” and you can switch to the “new rules.” After a sync failure, the normal retry wait is shortened to 10 seconds. The 60-second cooldown after a successful sync and the server-side rate-limit protection are unchanged. This release also ships the previously accepted new characters, skins, and local avatars. Performance samples and validation boundaries are in [Calculation Optimization Validation](https://github.com/ChrisLu7899/NIKKE-Workshop/blob/HEAD/docs/计算优化验证-20261016.md).

The current client static value package is still pending compatibility with the parsing configuration. This release did not modify probabilities based on the old package, and it…
