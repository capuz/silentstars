---
repo: "kurzcraft/DeepTask"
name: "DeepTask"
description: "open source agent in vscodium"
originalDescription: "open source agent in vscodium"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kurzcraft/DeepTask"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 126
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-25T13:31:39Z"
lastCommitAt: "2026-11-25T03:15:34Z"
lastReleaseAt: "2026-08-09T00:22:04Z"
status: "thriving"
tags: []
healthScore: 77
undervaluedScore: 21
maintainers: ["kurzcraft", "kurz"]
openGraphImageUrl: "https://opengraph.githubassets.com/14509c22e2ff1f9d59adc2ffa81bdc3ac140986a19d2957bd0c480b4850fcb5b/kurzcraft/DeepTask"
---

长时间运行不失控，随时补充意见不中断，自动执行与人工审查自由切换。

  ·
  ·
  ·
  ·

> **Deeptask 9.3.8** Projects after collapsing command/MCP sequences: the host already truncates each `command_output` to 8k, but ChatView used to concatenate these blocks into the command line without any limit and cache the concatenated string, so long wait-command sessions still grew after projection. Collapsed commands now stop at the 8k tail / 120 characters of history; disk and model I/O remain full text. Falsification condition: if a collapsed command line still exceeds 8k and history lines still exceed 120 characters, this fix is refuted.
>
> **9.3.6** History commands are collapsed by default: only the currently last command auto-expands, and history lines use `txt` to skip Shiki; diff highlighting goes through the same skip gate. The chat body is a single continuous, complete-history Virtuoso list, no longer paging with a 64-line sliding window. **9.3.5** compacts the host→webview transcript into a compact shape, and forbids splitting oversized JSON at the 3000th character. **9.3.4** tombstones history lines before postState.
