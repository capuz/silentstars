---
repo: "LittleLollipop/human-like-novel-workbuddy-skill"
name: "human-like-novel-workbuddy-skill"
description: "仿人类小说创作 WorkBuddy 技能 — 根治AI生成痕迹，让AI写出有人感的小说"
readmeQualityOk: true
url: "https://github.com/LittleLollipop/human-like-novel-workbuddy-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-03T15:14:09Z"
lastCommitAt: "2026-08-20T04:09:42Z"
lastReleaseAt: "2026-08-13T17:19:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 54
maintainers: ["LittleLollipop", "Sai1990", "Sai"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f92667c5c51aec579b690357111593d5e33e23fdc05094ec93a9cea4009658/LittleLollipop/human-like-novel-workbuddy-skill"
---

# 仿人类小说创作 (Human-Like Novel Writing)

从根源上解决 AI 生成痕迹问题，让 AI 写出具有「人感」的小说。

内置**轻量级图数据设定真源方案**：以知识图谱（实体-关系-情绪 valence）为设定真源，在正文外维护角色、事件与设定，写前取用、写后校验，解决长篇小说写作的长期一致性问题。

---

## 它解决什么问题

AI 生成的小说往往有明显的「AI 味」，主要体现在：

1. **大量重复描写**（刻意点题）
2. **行文节奏高度统一**，没有变化
3. **用词单调**，缺乏情绪倾向
4. **过于精确的数字**
5. **缺乏旁征博引**（名言/典故/诗词）
6. **缺乏流行文化引用**（网络热梗/搞笑梗）
7. **长篇一致性崩塌**——几十章后设定/称呼/时间线前后矛盾（根源问题，见下文）

---

## 方案总览

| 机制 | 解决什么 | 一句话说明 |
|------|----------|------------|
| 情绪词库 | 用词人感 | 每个角色每种情绪对应专属动词/形容词/句式倾向 |
| 设定点范例库 | 重复点题 | 每个设定点 3-5 个多角度范例，正文只能改编范例 |
| 章节三要素计划 | 节奏单一 | 每章写前必填：行文风格/创作重点/情绪基调 |
| 负面约束系统 | AI 痕迹 | 写前逐条禁止直白点题、精确数字、重复用词等 |
| 引用触发机制 | 旁征博引 | 不在本地建素材库，创作时实时搜索、化用 |
| 流行文化引用 | 时代感 | 按角色身份/场景氛围自然玩梗（非严肃文学） |
| **图数据设定真源** | **长篇一致性** | 设定存知识图谱，写前取用/写后校验，见下节 |

完整工作流见 `SKILL.md`。

---

## ⭐ 关键决策：设定怎么组织？（请先读这一节）

本技能支持两种设定组织方式：**文件模式**（设定写在 markdown 文档里）和**图数据库模式**（设定落在知识图谱中）。

**如果你在 macOS 环境下使用，强烈推荐图数据库模式。**

这不是偏好问题，而是长篇小说场景下**质的不同**：

### 为什么文档组织设定必然撑不住长篇小说

> 随着小说目标长度的增长，所需要的设定将**同步增长**（角色、地点、事件、伏笔、专名、规矩——每多写一章，设定就多一层）。

- 用文档组织设定，创作时为了让模型「知道」设定，只能把**整份/大份设定文档**塞进上下文；
- 小说越长 → 设定越多 → 文档越大 → **与本章无关的设定成为庞大的无效输入**；
- 无效输入挤占上下文、**稀释模型注意力**，模型就开始「选择性遗忘」——这正是长篇写到中后期设定/称呼/时间线前后矛盾的根源。…
