---
repo: "agnitum2009/atlas-archify-coding"
name: "atlas-archify-coding"
description: "Atlas-Archify-Coding (aac) — ADD 图谱驱动研发的 L2 状态机内核：三轴账本 + 证据锚 + 图账对账 + 门禁执法；零依赖 CLI。"
readmeQualityOk: true
url: "https://github.com/agnitum2009/atlas-archify-coding"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cli", "evidence", "ledger", "state-machine", "atlas-driven-development"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-09-01T03:51:50Z"
lastCommitAt: "2026-09-18T14:03:36Z"
lastReleaseAt: "2026-09-15T15:14:09Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 29
maintainers: ["she520oo-debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9ac49091c0954e1d7584adf52519f34811c775dea8d6c0b3c46cf44fa938c1/agnitum2009/atlas-archify-coding"
---

# atlas-archify-coding (aac)

**Atlas + Archify + Coding** —— 图谱驱动研发（**ADD**, Atlas-Driven Development）的可执行内核。
零运行时依赖的 Node CLI（Node 18/20/22/24 均已验证），克隆即用：入口是 `bin/atlas-engine.mjs`，
安装后 `atlas-engine` 与 `aac` 是同一个命令的两个名字。

## 它解决什么

项目开工到中后期，**进度掌控会丢失**：谁在做什么、哪条声称有证据、哪笔账没销、图与码何时分叉，
全靠人记。aac 把这些变成**一份机器可校验的账本**：

- **三轴状态机**（真相 truth / 进度 progress / 账本 ledger）—— 状态怎么变由迁移表规定，非法跳转直接被拒；
- **证据锚**（`文件:行` + 该行内容哈希）—— 声称"已完成/已验证"就必须挂锚；那行代码一改，锚立刻被标成
  `drifted`（漂移），不用人盯；
- **图与账交叉核对**（`report` / `gate`）—— 架构图谱（archify spec）里的节点与账本逐条比，"图上有、
  账上还没销"这类不一致会被点名（该规则代号 A1）；
- **门禁执法**（`gate` = validate → deliver → visual-check 三闸串行；`doctor` = 环境与账本健康自检）；
- **经验池与轨迹**（`lessons` / `trace`）—— 踩过的坑和时间线是账本里的正式条目：可查询、可退役、可统计，
  不是散在聊天记录里的口头经验。

> **适用边界（请先读）**：aac 服务的是**已经开工、到中后期失去进度掌控**的项目。
> 从零起的新项目不是它的场景 —— 因此它不做脚手架式生成、不做代码补全、也不替你判断业务优先级。
> 如果你的痛点是"项目跑了一半没人说得清现在到底什么状态"，它是为这个写的。

## 60 秒上手

```bash
git clone https://github.com/agnitum2009/atlas-archify-coding.git && cd atlas-archify-coding
node bin/atlas-engine.mjs --help
node --test test/*.test.mjs            # 全部离线，用临时目录，不碰任何真实账本
```

**关于图形内核 archify**：`gate` 与 `report --spec` 用它做图的校验与交付。本仓**不含** archify ——…
