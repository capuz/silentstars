---
repo: "crafteve/BioCraft"
name: "BioCraft"
description: "硬核生物化学/工业模组：将真实的代谢通路、中心法则、酶动力学机制完整搬进 Minecraft，构建以分子/原子为基本操作单元、以化学势能与物质循环为驱动力的工业体系"
readmeQualityOk: true
url: "https://github.com/crafteve/BioCraft"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-12T00:28:05Z"
lastCommitAt: "2026-08-20T04:09:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["crafteve"]
openGraphImageUrl: "https://opengraph.githubassets.com/824240b8dbf463b0caa68a2f13e02a5159f9bedeb0854d0a275b0cd7e421e7eb/crafteve/BioCraft"
---

# BioCraft · 生物工艺

> 硬核生物化学科技模组 | Minecraft 1.21.1 / NeoForge | 将真实的代谢通路、中心法则、酶动力学完整搬进 Minecraft

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=117094431790211&bvid=BV1VcgK6PERE&cid=40914062111&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 创意与设想

### 设计理念：科学性是基石，游戏性是纽带

本模组的第一准则是尽可能忠实于生物化学与分子生物学的真实原理。游戏性是连接玩家与科学的桥梁，但桥梁不能扭曲基石的形状。

**你操作的将不再是"粉"与"锭"，而是分子。**

堆叠数 = 分子个数：1 个葡萄糖分子（C₆H₁₂O₆）就是 6 个碳原子 + 12 个氢原子 + 6 个氧原子，严格化学计量。玩家的仓库，就是一台活的分子计数器。

### 这个模组不是什么

- 不是"套皮科技模组"——不是把熔炉逻辑用生化名词重写一遍
- 没有 FE / Forge Energy 驱动的机器——能量是 ATP 分子，是**物品物流**，不是电线
- 没有原版风格的机器合成配方——**酶工厂由 `enzymes.json` 数据表解析创建**，每个工厂是一个化学热力学 + 动力学反应模拟器；中心法则信息层（序列机家族）为独立的信息传递体系，与化学引擎分工：化学引擎管速率与平衡，信息层管序列传递（离散逐位步进，保留化学计量）
- 没有 MK2/MK3 升级阶级、没有物理多方块结构——升级靠"酶插件"，细胞器靠相邻检测

### 核心玩法闭环

> 经中心法则（信息层第一波已落地：seq 引擎 + DNA 编码器/转录仪；翻译/折叠等后续）产出酶蛋白 → 插入酶反应腔成为功能性机器 → 搭建代谢流水线（糖酵解/发酵/TCA/ETC）产出更多 ATP → 用 ATP 驱动更复杂的合成与升级 → 最终实现物质与能量的自循环

### 三大体系

| 体系 | 内容 |
|---|---|
| **能量体系** | ATP 是唯一"通用货币"。机器以 ATP 分子驱动，产出 ADP 副产物；玩家必须设计 ADP→ATP 回收循环，否则产线堵塞。ATP 合酶发电机可将化学势能转化为 FE 供其他模组使用（已实现：ATP 水解酶） |
| **氧化还原体系** | NAD⁺/NADH 循环：脱氢酶消耗 NAD⁺ 产出 NADH，NADH 回收再生 NAD⁺（已实现：GAPDH 消耗 /…
