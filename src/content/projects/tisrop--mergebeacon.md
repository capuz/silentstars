---
repo: "tisrop/MergeBeacon"
name: "MergeBeacon"
description: "Cross-platform PR review and issue management for GitHub, GitLab, and Gitee, with diff review, merge workflows, and AI-assisted review."
readmeQualityOk: true
url: "https://github.com/tisrop/MergeBeacon"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [38, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-10T12:28:03Z"
lastCommitAt: "2026-08-23T04:09:09Z"
lastReleaseAt: "2026-07-19T09:15:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["tisrop"]
openGraphImageUrl: "https://opengraph.githubassets.com/900d207c43c918490e83587578b0021fcc001160bbe6987df82ba26a6879036d/tisrop/MergeBeacon"
---

# MergeBeacon

**简体中文** | [English](https://github.com/tisrop/MergeBeacon/blob/HEAD/README.en.md)

基于 **Tauri 2 + Vue 3 + Rust** 的跨平台 PR 评审与 Issue 管理桌面客户端。
使用统一界面连接 GitHub、GitLab 和 Gitee，集中处理 PR / MR 收件箱、Diff、人工评审、
合并与 Issue，并可通过 OpenAI 兼容接口进行 AI 辅助评审。

> 当前应用版本：`0.14.0`

## 界面预览

### 跨平台 PR 收件箱

### PR / MR 列表

### Diff 评审

### AI 评审工作台

## 功能概览

- **跨平台 PR 收件箱**
  - 汇总已登录且已启用平台中的待处理 PR / MR 和当前账号创建的 PR / MR
  - 区分 GitHub / GitLab 的 Reviewer、Assignee，以及 Gitee 的评审人和测试人；“我创建的”由范围筛选控制
  - 卡片直接展示审批、CI / 测试、Draft、冲突和总体合并状态，悬浮时显示具体阻塞原因
  - 支持按范围、角色、合并状态、平台和 `owner/repo` 筛选，并按更新时间统一排序
  - 支持已读/未读、新提交、新评论和状态变化标记，以及按阻塞类型和优先级排序
  - 筛选偏好和条目阅读状态保存在本地；应用可见时低频刷新，并对平台限流进行退避
  - GitHub 对当前页执行一次批量状态查询；GitLab 和 Gitee 优先使用列表字段，避免逐条请求
  - 三个平台分别维护分页和错误状态；单个平台失败时可独立重试，不影响其他平台结果
  - 点击收件箱条目可直接打开对应平台、仓库和编号的详情页
- **多平台仓库管理**
  - 使用 Personal Access Token 登录 GitHub、GitLab、Gitee
  - 各平台独立保存登录状态、仓库选择、Fork 上下文和分页进度
  - 仓库侧栏支持增量“加载更多”、去重、失败重试、独立刷新和已加载仓库搜索
  - 可按平台在本地星标常用仓库，并在侧栏顶部集中展示
  - GitLab 与 Gitee 支持填写私有化部署地址，并统一规范化 API 版本路径
- **Pull Request / Merge Request**
  - 按 Open、Closed、Merged、All 状态筛选，并可按标题、作者、标签、评审状态和负责人 / 测试者组合搜索
  - 支持最佳匹配、更新时间、创建时间和评论数排序；GitHub、GitLab、Gitee 均使用服务端筛选与分页
  - 支持上一页、下一页、页码跳转以及 10…
