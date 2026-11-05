---
repo: "ForgeAX/forgeax-engine"
name: "forgeax-engine"
description: "AI-native TypeScript game engine for AI agents, targeting all major platforms. WebGPU rendering, ECS, procedural assets, and a CLI-first development workflow."
readmeQualityOk: true
url: "https://github.com/ForgeAX/forgeax-engine"
homepage: "https://forgeax.github.io/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [73, 24]
topics: ["ai-agents", "ai-native", "ecs", "entity-component-system", "game-development", "game-engine", "procedural-generation", "typescript", "webgpu", "cross-platform"]
stars: 64
forks: 10
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-15T16:49:46Z"
lastCommitAt: "2026-11-05T08:05:50Z"
lastReleaseAt: "2026-10-29T19:43:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 25
maintainers: ["forgeax-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2be838a24596a178b91c9ba031bac6cc9fae77e7a801247a5f5042ac464f45f/ForgeAX/forgeax-engine"
---

**Language**: **简体中文** · [English](https://github.com/ForgeAX/forgeax-engine/blob/HEAD/README.en.md)

  以 AI agent 为第一用户：数据、生命周期、API 与工具围绕同一目标设计，<br/>
  让 AI 理解系统、准确操作、检查结果并完成修复。

> [!IMPORTANT]
> **能效是目标，设计是方法。** 让 AI 用更少上下文、更少试错和更短反馈时间，完成更多经过验证的游戏开发工作。

## 用 ForgeAX 制作

这些游戏都基于本引擎，通过 `forgeax` CLI 与 AI 优先的工作流创作。

## 特性

- **渲染** — 材质、灯光、阴影、后处理、GPU 粒子、trail 与 beam，基于 WebGPU
- **玩法** — ECS World、2D/3D 物理（Rapier）、动画、输入、音频与网络同步
- **资产管线** — 导入 glTF / FBX / 图像，或用 TypeScript 生成资产并参数化派生变体
- **AI 优先调试** — 查询活实体、录制 / 重放渲染帧，逐 draw 逐像素检查
- **CLI 工作流** — 用 `forgeax` 命令创建、运行、检查与打包游戏
- **多平台** — 造化工坊、微信小游戏、Steam、Steam Deck、Switch 与 Kubee

## 开始使用

把引擎和它的 AI 工具链装进你的编辑器：

```bash
npx -y @forgeax/game install
```

支持：Claude Code · Cursor · ChatGPT · Kimi Code · DeepSeek · VS Code。

或直接用引擎新建工程：

```bash
pnpm dlx @forgeax/engine project new my-game --template game-3d
cd my-game
pnpm exec forgeax dev start --headless false
```

`game-3d` 是第三人称参考工程，`empty` 是最小起点。先读生成的 README 与技能，再看 [Engine](https://github.com/ForgeAX/forgeax-engine/blob/HEAD/packages/engine/README.md) 与 [CLI 使用指南](https://github.com/ForgeAX/forgeax-engine/blob/HEAD/skills/forgeax-engine-cli/SKILL.md)。

```bash
pnpm exec forgeax help…
