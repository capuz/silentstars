---
repo: "LiarrDev/taobao-browse-tasks"
name: "taobao-browse-tasks"
description: "Agent Skill: uses mobile-mcp to drive a connected Android phone and automatically complete browse-type tasks in Taobao's Baba Farm / Taojinbi (Taobao Coins) features"
originalDescription: "Agent Skill：用 mobile-mcp 驱动 Android 真机，自动完成淘宝芭芭农场 / 淘金币的浏览类任务"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LiarrDev/taobao-browse-tasks"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-14T02:30:57Z"
lastCommitAt: "2026-10-25T08:41:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 30
maintainers: ["LiarrDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/c48518db44c609d76f0b5912d9cb02fd426690aa80b53a2ce6c159589e0220e6/LiarrDev/taobao-browse-tasks"
---

# taobao-browse-tasks

An Agent Skill that uses [mobile-mcp](https://github.com/mobile-next/mobile-mcp) to drive a connected phone and automatically complete the **browse-type tasks** (browsing / visiting shops for 15~30 seconds to earn rewards) in the Taobao app for “Baba Farm”, “Taojinbi” (Taobao Coins), and “Taobao check-in (red-packet check-in · earn Yuanbao)”.

Say something like “刷淘宝任务” (“run Taobao tasks”), “做芭芭农场” (“do Baba Farm”), or “赚更多金币” (“earn more coins”) to trigger it. Say “做签到任务” (“do check-in tasks”), “红包签到” (“red-packet check-in”), or “赚元宝” (“earn Yuanbao”) to trigger the check-in module. Say “做小黑盒任务” (“do Xiaoheihe tasks”) or “集钥匙” (“collect keys”) to trigger the Xiaoheihe module. Default runs do not include these modules.

> ⏳ **Temporary event modules**: There are also two temporary event modules, “Double 11 live-stream energy” and “Double 11 racing event”. **Both run only when you explicitly name them**. They are not triggered automatically. After the event ends, delete the whole module by following the “removal checklist” at the top of its reference document.
>
> - “Double 11 live-stream energy” (deeplink into the event page → “earn steps” → only do the…
