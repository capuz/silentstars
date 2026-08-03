---
repo: "naodeng/awesome-qa-skills"
name: "awesome-qa-skills"
description: "Awesome QA Skills for Cursor, Claude Code,Codex and OpenCode, including function testing, api testing, test case review etc"
readmeQualityOk: true
url: "https://github.com/naodeng/awesome-qa-skills"
homepage: "https://inaodeng.com/qaskills/"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["ai-tools", "skills", "qa-skills"]
stars: 141
forks: 21
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T10:12:49Z"
lastCommitAt: "2026-08-03T06:44:54Z"
lastReleaseAt: "2026-03-18T13:00:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 63
undervaluedScore: 9
maintainers: ["naodeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/713939066b6e419488a63c00273e194b236b11f1cd90dbe1776ae6eb5fe4d311/naodeng/awesome-qa-skills"
fundingLinks: ["KO_FI:https://ko-fi.com/naodeng", "BUY_ME_A_COFFEE:https://buymeacoffee.com/naodeng", "THANKS_DEV:https://thanks.dev/naodeng", "CUSTOM:https://afdian.com/a/inaodeng"]
---

# AI 测试辅助技能合集

这是一个按语言分区整理好的 AI 测试技能库，适合放到 Codex、Cursor、Claude Code、Kiro、OpenCode、Trae 等工具里直接使用。

在线访问地址：https://inaodeng.com/qaskills/

## 你会在这里得到什么

- 中文与英文双版本技能
- 4 个工作流技能
- 25 个测试类型技能
- 可直接复制到常见 AI 工具中使用

## 核心目录

- 中文技能：`skills/zh`
- 英文技能：`skills/en`
- 工作流技能：`testing-workflows`
- 测试类型技能：`testing-types`

## 5 分钟开始

### 1. 克隆项目

```bash
git clone https://github.com/naodeng/awesome-qa-skills.git
cd awesome-qa-skills
```

### 2. 复制一个技能到你的 AI 工具

```bash
# 例：复制中文功能测试技能到 Cursor
cp -r skills/zh/testing-types/functional-testing ~/.cursor/skills/

# 例：复制英文日常测试工作流到 Cursor
cp -r skills/en/testing-workflows/daily-testing-workflow ~/.cursor/skills/
```

### 3. 在 AI 工具里调用

```text
@skill functional-testing
帮我为用户登录功能生成测试用例
```

## 推荐技能入口（中文）

### 工作流技能

| 中文名称 | 目录 |
| --- | --- |
| 日常测试工作流程 | `skills/zh/testing-workflows/daily-testing-workflow` |
| 迭代测试工作流程 | `skills/zh/testing-workflows/sprint-testing-workflow` |
| 发布测试工作流程 | `skills/zh/testing-workflows/release-testing-workflow` |
| 测试技能路由 | `skills/zh/testing-workflows/discover-testing` |

### 测试类型技能

| 中文名称 | 目录 |
| --- | --- |
| 功能测试 | `skills/zh/testing-types/functional-testing` |
| API 测试 | `skills/zh/testing-types/api-testing` |
|…
