---
repo: "beautistart/zulong"
name: "zulong"
description: "事件驱动的多模态机器人操作系统 | 82K+ lines Python | 消费级硬件 | 一个设计师用AI搓出来的"
url: "https://github.com/beautistart/zulong"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [63, 28]
topics: ["cognitive-agent", "ebbinghaus-memory", "hebbian-learning", "infinite-context", "long-term-memory", "memory-graph", "multi-agents", "neural-memory"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-13T14:09:19Z"
lastCommitAt: "2026-06-25T01:36:39Z"
lastReleaseAt: "2026-05-27T14:51:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e7ddcb4c9f69d0d54033f75826070c01c3d8a131c3c3f4227f012120c0df926c/beautistart/zulong"
discussionCount: 1
---

# 祖龙 (ZULONG) v2.1.0

### 给 AI 代理装上能保持跨年级别完整记忆的"海马体"

**100K+ 行 Python | 一个设计师用 AI 搓出来的**

[English](./docs/README_EN.md) | 简体中文

</div>

---

> **祖龙不是又一个 Agent 框架。祖龙给 AI 代理装上了能保持跨年级别完整记忆的"海马体"，让长周期复杂陪伴变成现实。**

  </a>
</p>

</p>

---

## 为何一个室内设计师，敢去造 AI 大脑？

我是一名室内设计师，用 **2 个月的时间**，独立开发了祖龙 **100000+ 行代码**。

不用感到不可思议，因为设计师的素养就是作为项目的"总工程师"规划蓝图，让各个专业板块的人士去落地蓝图。

我设计了祖龙的架构蓝图，让智能编程 IDE 帮我实现的代码：

- **千问桌面端**：项目顾问
- **trae**：前期后端代码工程师
- **qoder**：后期项目纠偏 + 功能板块实现
- **codearts**：后期项目纠偏 + 代码审查 + 功能板块实现

**祖龙是什么？**

> 祖龙是一个具有统一记忆图谱并采用赫布学习、艾宾浩斯衰减等算法，在动态注意力控制的系统下，实现了年级别完整记忆的 AI 代理认知系统，并且在系统层面实现了无限上下文，可以运行完整的记忆 + 推理 + 多模态能力等。

**🎬 视频演示**

  </a>
</p>

---

> **📢 v2.1.0 正式发布（2026-06-09）**
>
> 祖龙 v2.1.0 是一次次版本升级，聚焦于**版本号统一**、**文档一致性修复**与**项目规范化**。
>
> **核心更新**：
> - ✅ **版本号全面统一** — README.md、package.json、CHANGELOG.md 等全部对齐至 v2.1.0
> - ✅ **zulong-ide 版本号修正** — VS Code 扩展版本号从 0.2.0 修正为 2.1.0
> - ✅ **文档架构更新** — zulong_github_readme.md 架构描述对齐 v2.x（L1-B预判 + L2统一主链）
> - ✅ **代码行数更新** — 82K+ → 100K+，项目目录 beta4 → beta5
> - ✅ **多处文档一致性修复** — 清除过时引用与旧版残留
>
> 详见 [CHANGELOG.md](./CHANGELOG.md)

---

## ✨ 核心亮点

### 1. 🔮 统一记忆图谱 (MemoryGraph)

- **持久化统一记忆图谱**（LMDB + GraphML 存储）
- **赫布学习引擎**：共激活计数 ≥ 3 自动创建…
