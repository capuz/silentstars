---
repo: "WJNCT55555/Liberty-Unquenched"
name: "Liberty-Unquenched"
description: " 在自由未烧成灰烬之前，血已变成诗"
readmeQualityOk: true
url: "https://github.com/WJNCT55555/Liberty-Unquenched"
homepage: "https://wjnct55555.github.io/Liberty-Unquenched/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-07T15:02:48Z"
lastCommitAt: "2026-08-26T03:59:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 35
maintainers: ["WJNCT55555"]
openGraphImageUrl: "https://opengraph.githubassets.com/0118d486f35741480da01d37a6da8a565795c654ad18c86844d7d1884eb37d12/WJNCT55555/Liberty-Unquenched"
---

# Liberty Unquenched

**自由未烬**是一款以第二西班牙共和国为背景的政治与战争模拟游戏。玩家以 CNT-FAI 为主要视角，在 1931 年共和国建立后介入党派政治、工人运动、政府决策、军事动员和内战进程。

> This is an actively developed historical political simulation. The game is inspired by the Spanish Second Republic and the Spanish Civil War, but it is not intended to be a complete historical reconstruction or an academic source.

## 项目状态

项目目前处于持续开发阶段。当前版本已经包含政治模拟、事件与决策、顾问、议会席位图、经济与国内政策、行省地图、军队管理、战争总结、成就和结局等系统；部分历史内容、平衡性和系统之间的联动仍在完善。

项目不需要 Gemini API、后端服务或其他运行时密钥。游戏逻辑在浏览器中执行，当前版本也不依赖外部 API。

## 在线版本与分支关系

| 分支 | 用途 | 维护方式 |
| --- | --- | --- |
| `main` | 当前本地开发源码 | 本地编辑、检查后推送 |
| `aistudio-archive` | 从 Google AI Studio 迁移前的原始版本 | 归档，只用于对照和恢复 |
| `gh-pages` | Vite 生成的静态构建产物 | 由 GitHub Actions 自动更新，不应手工编辑 |

- GitHub 仓库：[WJNCT55555/Liberty-Unquenched](https://github.com/WJNCT55555/Liberty-Unquenched)
- 在线页面：[GitHub Pages](https://wjnct55555.github.io/Liberty-Unquenched/)
- 自动部署记录：[GitHub Actions](https://github.com/WJNCT55555/Liberty-Unquenched/actions)

向 `main` 推送后，`.github/workflows/deploy.yml` 会自动完成以下工作：安装 Node.js 依赖、运行 TypeScript 类型检查、生成生产构建，并将 `dist/` 发布到 `gh-pages`。

## 主要功能

### 政治与党派系统

- 第二共和国时期的党派、党派立场、支持度和议会席位模拟。
- 1931、1933 和 1936 年选举事件及选举结果计算。
-…
