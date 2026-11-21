---
repo: "yixin-amore/MinecraftBE-Command-Building-Skill"
name: "MinecraftBE-Command-Building-Skill"
description: "Minecraft Bedrock command & building AI skill"
readmeQualityOk: true
url: "https://github.com/yixin-amore/MinecraftBE-Command-Building-Skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bedrock", "command-blocks", "minecraft", "ai-skill", "building"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-11-08T14:16:52Z"
lastCommitAt: "2026-11-21T13:34:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["yixin-amore"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c4ccb1a06cfcbffb12b1fd28f726e900291f970989d99bc50df60d57aa6da7d/yixin-amore/MinecraftBE-Command-Building-Skill"
---

# MinecraftBE Commands & Building — AI Skill

一个面向 AI 的 Minecraft 基岩版（Bedrock Edition）技能包：教模型写**基岩版命令**、设计**命令方块链**，并完成**建筑/内饰/奇观**的体素设计与导出。

目标环境：**网易我的世界 1.21.130（协议 898）**。

> 只针对 Bedrock。Java 版的 `data`、NBT、`execute store`、`team`、`bossbar`、`attribute`、`item`、`forceload` 在这里都不存在。
> 网易 1.21.130 的边界：`schedule`/`function` 可用；`camera`/`inputpermission`/`dialogue`/`loot`/`place`/`recipe`/`scriptevent`/`fog` 未验证/未实装。

> 交流群：2166056402

## Special Thanks

**侠名** — 语言优先 DSL / 命令编译器与链布局思路（mct-skill）。

## 范围

- **命令**：命令方块链、计分板状态机、FMBE 显示、菜单、技能、系统逻辑。
- **建筑**：场地、体量、轮廓、材质、立面、屋顶、内饰、灯光；静态建筑走 ArchSpec/ArchBuilder，**不用命令方块逐块搭建**。
- **输出**：命令系统默认 `.mcworld` / `.mcstructure`；静态建筑默认 `schematic / BDX / mcstructure / fill 批`（先做投放资格测试）。BDX 同时用于本地验证。
- **工作模式**：Python DSL → spec → cbc 链布局 → 结构文件；不再直接让 AI 写整段命令字符串。

## 先学模型，不是背例子

这个 Skill 不把“例子”当知识本身。每个任务先建立：

1. **计算模型**：状态机 / 数据流事务 / 队列 / 树 / 图 / 几何采样。
2. **内存布局**：计分板、tag、数组、队列、树索引。
3. **数学**：整数、取模、钳制、坐标、距离、概率、几何表。
4. **复杂度**：分支数、实体数、每 tick 命令数、最坏情况。
5. **不变量**：幂等、可重置、有界、可观测。
