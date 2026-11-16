---
repo: "Yukstarlight/NekoType"
name: "NekoType"
description: "Android system-level text rewriting tool: floating ball / keyboard tampering / sentence-break append / shake-to-trigger, four modes; prefix · suffix · random tail suffix · text replacement, rewrite and send in one tap; Shizuku / Root channel, fully offline, no network permission"
originalDescription: "Android 系统级文本改写工具：悬浮球 / 篡改键盘 / 断句追加 / 摇一摇四种模式，前缀·后缀·随机尾缀·文本替换一键改写并发送；Shizuku / Root 通道，完全离线，无网络权限"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Yukstarlight/NekoType"
homepage: "https://nekotype.top/"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [64, 34]
topics: ["android", "offline", "shizuku", "text-expander", "dhizuku"]
stars: 32
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-08-24T08:28:15Z"
lastCommitAt: "2026-11-15T03:04:29Z"
lastReleaseAt: "2026-09-19T04:06:28Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 48
maintainers: ["Yukstarlight", "TR114512"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1344717789/21066464-745f-4880-8323-7bb4fba63a4f"
fundingLinks: ["CUSTOM:https://ifdian.net/a/Yukstarlight"]
---

NekoType

> A system-level message text customization tool for Android. A floating button applies custom rules (prefix / suffix / random suffix / text replacement) to the input box content and sends it automatically.

> License: [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)　|　Website / Download: <https://nekotype.top/>　|　Current version: **v3.0.0**

NekoType is a system-level message processing tool that runs on Android. It has one core goal: **to let the user rewrite the text in a chat input box according to custom rules and send it with one tap, at minimal cost in operations**. You type normally, tap the floating button that stays on the edge of the screen, and the message automatically goes through the full pipeline: text replacement → prefix → random prefix → suffix → random suffix → auto-send. For example, if you add a prefix rule with the value `~` and a suffix rule with the value `喵`, then typing `好的` (meaning 'OK') sends `~好的喵`. If you add a random suffix rule, each message also gets a different random tail appended according to its trigger probability, so the content does not look the same every time.

It is not an input method skin or a chat beautification plugin.…
