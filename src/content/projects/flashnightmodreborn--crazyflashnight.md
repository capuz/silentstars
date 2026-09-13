---
repo: "FlashNightModReborn/CrazyFlashNight"
name: "CrazyFlashNight"
description: "闪7重置版项目"
readmeQualityOk: true
url: "https://github.com/FlashNightModReborn/CrazyFlashNight"
language: "ActionScript"
languages: ["ActionScript", "JavaScript", "C#"]
languagePcts: [31, 25, 21]
stars: 55
forks: 7
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2024-09-26T07:08:46Z"
lastCommitAt: "2026-09-13T08:28:24Z"
lastReleaseAt: "2025-10-31T01:17:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["Crazyfs", "aka-flashNight"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf44b1a747cc95d483408c9ef8f2fae2b2a97566e4222bb42dae7759faaedfc/FlashNightModReborn/CrazyFlashNight"
---

# 闪客快打7佣兵帝国 单机版 MOD

**《闪客快打7佣兵帝国》（Crazy Flasher 7: Mercenary Empire）单机版 MOD 开发工程**  
**最后核对代码基线**：release source commit `85b168e35222f1e2a750ce89481f3aa416a73467`（2026-09-11，任务交付选择、单次返回与走门保护），当前正式 runtime 为 `HUMAN_ACCEPTANCE_PASSED / promoted`。发布身份、共识与验收边界只读 [runtime 构建复现文档](https://github.com/FlashNightModReborn/CrazyFlashNight/blob/HEAD/docs/runtime-build-reproducibility.md)。

**斗兽专项历史快照**：斗兽星期级全量标定 Gate F release source commit `c64a5440e5506a3f1567143711f984d063e56505`（2026-08-28；deployment `693baf7051d9e67be8930b309dc14eea65c0eab6`）；正式 runtime 已 `promoted`。`gate-f-week-full-v4` 三份 fresh soak 为 30/30 finished；全量累计 16 个 completed shard + 1 个 F2 timeout-anomaly shard、280 条 durable row，0 error，runtime/save/shutdown 均正常。F2 的 20 行中原向 10/10 finished、换边 5 finished + 5 timeout，旧 driver 把有效候选异常误作基础设施失败而暂停；v5 草案已拆分 execution health 与 candidate quality，纯 timeout-rate 进入 deferred anomaly 后继续，error/runtime/save/disk/时长漂移仍 fail closed。v4 事实原样保留但不跨 plan hash 混计，v5 重新冻结与 fresh soak 前不称 Gate F 完成；身份、共识与证据边界见 [runtime 构建复现文档](https://github.com/FlashNightModReborn/CrazyFlashNight/blob/HEAD/docs/runtime-build-reproducibility.md)。

CF7:ME 是一个 **Flash 起源、当前已演化为多栈运行时** 的单机 MOD 工程。  
游戏核心仍运行在…
