---
repo: "Emilelu/UniXNU-mondrian"
name: "UniXNU-mondrian"
description: "UniXNU device support for Redmi K60 (mondrian / SM8475)"
readmeQualityOk: true
url: "https://github.com/Emilelu/UniXNU-mondrian"
language: "Python"
languages: ["Python", "C", "C++"]
languagePcts: [42, 28, 20]
stars: 8
forks: 7
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-10-27T12:52:50Z"
lastCommitAt: "2026-11-19T11:58:47Z"
lastReleaseAt: "2026-11-19T10:46:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 66
maintainers: ["Emilelu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1102fe3006f526847bba73127b0337ac580286232111c858a02af71c531138a/Emilelu/UniXNU-mondrian"
discussionCount: 1
---

# UniXNU-mondrian

Redmi K60（代号 **mondrian**，高通 **SM8475**）的 UniXNU 设备支持仓库。

**当前目标：iOS 16.6.1（20G81）/ darwin22 上跑通完整硬件。**

[English](https://github.com/Emilelu/UniXNU-mondrian/blob/HEAD/README_EN.md)

> 最后更新：2026-11-16。详细状态与变更记录见
> [`docs/engineering/STATUS.md`](https://github.com/Emilelu/UniXNU-mondrian/blob/HEAD/docs/engineering/STATUS.md)。

## 八步流程进度

| 硬件 | ① 同型 | ② 官方 | ③ 反编译 | ④ 广域 | ⑤ 方案 | ⑥ 深挖 | ⑦ 核验 | ⑧ 上机 | 当前状态 |
|---|---|---|---|---|---|---|---|---|---|
| **触摸（Goodix GT9916R / BERLIN）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **GPU（Adreno 730v3 / Metal）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | 可刷机（⑦ 已核验） |
| **存储（UFS 3.1 / unixnu 三窗分区）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **显示（m11a 面板 / DSI / 背光 / 120Hz）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **亮度（12-bit DBV / 背光一致性）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **固件与启动链（UEFI / DarwinBoot / payload）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **按键（power / volume）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **八步全通** |
| **蓝牙（QCA6490 / HCI over UART）** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | 可刷机（⑦ 已核验） |
| **无线（QCA6490 / PCIe + MHI）** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | 进行中 |
