---
repo: "huangwb8/skills"
name: "skills"
description: "General Skills Development Pipeline - Claude Code & Codex"
url: "https://github.com/huangwb8/skills"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai", "claude", "claude-code", "claude-skills", "codex-cli", "codex-skills"]
stars: 43
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T13:11:28Z"
lastCommitAt: "2026-06-28T03:11:37Z"
lastReleaseAt: "2026-01-18T22:58:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 18
maintainers: ["huangwb8"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea024f94b1bebea3741a86ba32a6f504de1bed2054b1e074c1ef872f6e688d6f/huangwb8/skills"
---

# Skills 开发流水线

[中文](README.md) | [English](README_EN.md)

<strong>遵循 Agent Skills 开放标准的可复用 AI 技能库与技能开发流水线</strong>

</div>

这是一个遵循 Agent Skills 开放标准的技能库与开发流水线，覆盖 skills 的创建、测试、文档化、安装、发布和缺陷反馈。仓库内既包含可直接安装使用的通用 skills，也包含维护这些 skills 所需的约束、脚本和协作流程。

## 🎯 这个仓库适合谁

- 想把一组 skills 复制安装到系统级目录，在任意项目里都能触发的人
- 想开发、优化、测试、发布自己 skills 的维护者
- 想复用本仓库里的工程约束、文档约束和质量流程的人
- 想基于 Agent Skills 标准，兼容 Claude Code、Codex、Cursor 等平台的人

## 💡 推荐开发环境

### 🧰 VS Code + Claude Code / Codex 插件

推荐使用 VS Code 配合 Claude Code 或 Codex 插件进行技能开发、测试和维护。

| 优势 | 说明 |
|------|------|
| 原生技能集成 | 自动从系统级 skills 目录加载已安装技能 |
| 实时验证 | 直接用自然语言测试技能触发与执行效果 |
| 上下文感知编辑 | AI 能结合项目结构理解技能、脚本和文档之间的关系 |
| 集成工作流 | 编辑、测试、安装、迭代可以在同一环境中完成 |
| 文档协同维护 | 便于同步维护 `SKILL.md`、`README.md`、`config.yaml` 与 `CHANGELOG.md` |

📺 [观看演示视频（Bilibili）](https://www.bilibili.com/video/BV1tpcezbERB)

## ⚡ AI 算力

仓库相关的 AI 算力说明与使用背景，可参考下面的视频：

📺 [观看 AI 算力介绍视频（Bilibili）](https://www.bilibili.com/video/BV1a7ZLBuE5z)

## 🧩 核心技能

仓库根目录下可直接安装的技能有 12 个：

| 技能 | 主要用途 | 适用场景 |
|------|----------|----------|
| `init-project` | 初始化项目指令文件 | 为新项目生成 `AGENTS.md`、`CLAUDE.md`、`README.md`、`CHANGELOG.md`、`.gitignore`，并补齐 `docs/` 与 `docs/plans/` |
| `install-bensz-skills` |…
