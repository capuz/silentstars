---
repo: "1024XEngineer/Windup"
name: "Windup"
description: "Generate high-quality 2D game characters."
readmeQualityOk: true
url: "https://github.com/1024XEngineer/Windup"
homepage: "https://windup-bay.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [51, 46]
stars: 31
forks: 5
openIssues: 34
closedIssues: 294
watchers: 0
contributors: 24
recentReleases: 10
createdAt: "2026-07-07T01:56:59Z"
lastCommitAt: "2026-08-25T04:11:04Z"
lastReleaseAt: "2026-08-20T03:08:06Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 50
maintainers: ["huyanxius", "johnnyzhang-eng", "xyh202131"]
openGraphImageUrl: "https://opengraph.githubassets.com/15684feaa12c2f1e7dd289205de6cc76a85a6df9620cbc8803ece5def023cd4c/1024XEngineer/Windup"
---

</p>

<h1 align="center">Windup</h1>

  面向国产小游戏开发者的 2D 角色动态素材生成与资产工作台
</p>

  ·
  ·
</p>

</p>

</p>

Windup 面向缺少美术产能的个人开发者和小型团队，把角色构思、动作生成、逐帧审核、试玩与引擎导出收进同一条生产链。用户从文字描述或参考图出发，最终得到可以持续补充动作、修正缺陷和重新导出的角色资产。

## 当前能力 / What You Can Do

| 能力 | 当前可用内容 |
| --- | --- |
| 项目与资产库 | 管理项目约束、角色、造型、动作与帧，继续扩展已有角色资产 |
| Quick Start | 用自然语言描述角色和动作，由系统建立标准制作流程 |
| Workflow Editor | 在真实节点画布中确认角色母版、动作首帧、生成方式、完整动画与审核状态 |
| 角色与动作生成 | 接入真实生成任务，保存任务状态与产物，支持失败恢复与结果追溯 |
| 审核与局部返工 | 对候选图和动作结果进行确认，在具体节点重试而不必重做整条流程 |
| Playtest 与导出 | 在浏览器中预览动作，并导出透明 PNG、Sprite Sheet、动画 JSON 与 ZIP 资源包 |

三渲二、多方向资产和更多引擎适配仍在推进。相关基础能力进入仓库不等于已进入在线产品主流程；当前进度以 [`main`](https://github.com/1024XEngineer/Windup/tree/main) 与 [Issues](https://github.com/1024XEngineer/Windup/issues) 为准。

## 产品链路 / Product Workflow

```text
新角色：文字描述 / 参考图 → 项目约束 → 角色母版
已有角色：从资产库继续生产 ─────────────┘
                              ↓
                     动作序列帧 → 审核 / 局部重生成
                              ↓
             Playtest 试玩 → PNG / Sprite Sheet / 元数据 → 游戏引擎
```

Windup 用角色母版约束跨帧、跨动作的视觉一致性，再用确定性的工程后处理完成去背景、切帧、对齐和打包。出现缺陷时，返工可以缩小到具体节点，已经确认的结果继续保留。

## 核心对象 / Core Concepts

| 对象 | 职责 |
| --- | --- |
| `Project` | 统一管理题材、美术风格、视角与精灵尺寸等项目级约束 |
| `Character` |…
