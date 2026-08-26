---
repo: "2233admin/design-pipeline"
name: "design-pipeline"
description: "给 AI Agent 的前端设计管线：先写 DESIGN.md 与 MOTION.md，经 job 分发、OpenSpec 与证据门禁再写代码。"
readmeQualityOk: true
url: "https://github.com/2233admin/design-pipeline"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [69, 22]
topics: ["ai-agents", "claude-code", "codex-cli", "design-system", "design-tokens", "frontend-development", "motion-design", "openspec", "ui-ux", "web-design"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T08:51:30Z"
lastCommitAt: "2026-08-26T04:11:29Z"
lastReleaseAt: "2026-07-28T02:36:13Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 54
maintainers: ["2233admin", "lunnynight"]
openGraphImageUrl: "https://opengraph.githubassets.com/d35680705bb6b03269b1bcb11dacd810314fbedb96993f78e3c8f2efd7e82baa/2233admin/design-pipeline"
---

# design-pipeline

> 用 AI 做前端 UI，但不跳过设计工作。

- **一句话**：给 AI Agent 用的前端设计管线，先写设计再写代码。
- **适合谁**：你用 AI 做前端 UI，但不想让它每次靠猜做设计决策。
- **不适合谁**：只要快速原型、不想写任何设计文档的。

  <b>先画图纸，再动工。先写设计，再写代码。</b>
</p>

  <code>DESIGN.md</code> + <code>MOTION.md</code> + <code>OpenSpec</code> + <code>门禁系统</code>
  <br>
  一条给 AI Agent 用的前端设计管线。
</p>

---

## 这是什么

`design-pipeline` 是一套给 AI coding agent 用的前端设计工作流。

它解决的是一个很具体的问题：Agent 拿到需求以后，经常跳过设计，直接生成代码。界面能跑，但缺乏一致性。下次改动，样式散落各处，动效各自为政，维护变成考古。

所以它做五件事：

1. 用 `designer-pipeline route` 把需求分成一个主任务，再打开对应知识目录。
2. 在写代码之前，先创建 `DESIGN.md` 和 `MOTION.md`。
3. 用 OpenSpec 风格的提案 → 实现 → 验证 → 归档生命周期管理变更。
4. 支持网站克隆、设计系统合成、动效设计，每一步都有证据。
5. 通过门禁系统确保设计质量，不达标就拦住。

当前 `0.9.0-beta.4` 测试版不是单一图表工具集成。它把下面这些能力放进同一个可打包、
可安装、可验证的前端工具架：

- 需求、`DESIGN.md`、`MOTION.md` 与 OpenSpec 变更生命周期；
- 前端框架、样式、15 个 UI 库、组件来源和 127 项设计技能索引的统一选择；
- 网站克隆、方向预览、中文排版、设计系统、动效、组件状态和浏览器证据门禁；
- DOM、SVG/D3、XY、PixiJS、Phaser、Three.js、Babylon.js、PlayCanvas、WebGPU 等图形路线；
- 工具环境探测、哈希绑定的调用计划、标准化 receipt、打包和隔离安装验收。

目录中的工具不等于已经安装。管线负责选择、探测和验收；目标项目仍然负责固定并安装
实际运行时。`reflex-xy` 是目前第一个具备完整生命周期合同的外部图形适配器，不代表
系统只支持 XY。

有个很小的故事。

你让 Agent 做一个设置页面。它看了一眼需求，十秒后交出代码。能跑，但按钮圆角是 4px 还是 8px？悬停态有没有过渡？暗色模式对比度够吗？没人知道。下次再改，Agent 又猜了一遍，猜得不一样。…
