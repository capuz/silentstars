---
repo: "mreasonyang/codex-hongguo"
name: "codex-hongguo"
description: "Watch Hongguo short dramas in the Codex desktop chat sidebar; playback pauses and progress is saved automatically when a task ends."
originalDescription: "在 Codex 桌面对话侧栏观看红果短剧，任务结束自动暂停并保存进度。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mreasonyang/codex-hongguo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [76]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-05T17:14:39Z"
lastCommitAt: "2026-11-19T11:57:41Z"
lastReleaseAt: "2026-11-10T04:13:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["mreasonyang", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2358b1a83b9caaf4672d8443cf85276c2b5acc51dfdca86ecf350acb05f660d1/mreasonyang/codex-hongguo"
---

Chinese · <a href="README.en.md">English</a><br>

Watch Hongguo short dramas in the sidebar of the Codex desktop session, with support for selecting shows, searching, resuming, and autoplay. By default, the selected show resumes when a new task starts, and playback pauses and progress is saved when a task ends or is interrupted. Both behaviors can be turned off independently in Settings. The plugin is for Codex desktop chats that use a local executor.

Supports the official Codex desktop App, and adds experimental [Antigravity App adaptation](#antigravity-app实验性). Third-party clients such as T3 Code and Paseo, or unrecognized hosts, are not recommended automatically, and no player background requests are started for them. The following sections describe Codex usage by default.

Includes built-in Hongguo, Bilibili, and Huangguo (NSFW) sources. You can also connect your own sources through the `hongguo-provider` Skill ([connecting your own sources](#接入自己的片源)).
