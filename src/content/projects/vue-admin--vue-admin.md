---
repo: "vue-admin/vue-admin"
name: "vue-admin"
description: "vue-admin 技术栈 vue3 + vite + typescript + element-plus + pinia + vue-router"
url: "https://github.com/vue-admin/vue-admin"
homepage: "http://demo.cncf.vip/vue-admin/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [53, 45]
topics: ["vue", "vue-admin", "vue-element-plus-vite", "vue3"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-02-09T06:26:29Z"
lastCommitAt: "2026-06-28T01:42:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 67
undervaluedScore: 65
maintainers: ["rushuinet", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7067db854dc215b03f5e2cd14b7c4c7501b9410edf45053176f457a8dbef7a5/vue-admin/vue-admin"
discussionCount: 1
---

# Vue Admin

> Vue 3 + Element Plus 企业级后台管理前端基座。开箱即用的权限系统、HTTP 客户端、路由守卫与开发工作流，可作为中后台项目的起点。

## ✨ 特性

### 架构与工程化

- 🏗️ **四层架构**（`lib` / `app` / `modules` / `shared`），由 ESLint `no-restricted-imports` 强制单向依赖
- 🎯 **目录扁平**，业务页面按领域聚合，单文件不超过 500 行
- 🧱 **8 模块标准化布局**：`auth` / `dashboard` / `system`（含 `admin`/`user`/`role`/`permission`/`menu`/`dict`）/ `profile` / `crud` / `docs` / `about`
- 🧪 **Vitest 3 + jsdom + @vue/test-utils** 单元测试栈
- 🌫️ **Playwright smoke 测试自动化**：CI 中跑登录重定向 + 登录 + 列表渲染 3 个端到端用例
- 🔍 **ESLint 9 flat config**，集成 Vue / TypeScript / Import 插件
- 🪝 **Husky + lint-staged + commitlint**，提交前自动校验

### 权限与认证

- 🔐 **JWT 认证**：`authService` 单例 + 并发刷新保护（复用 `refreshPromise`）+ 可插拔 `TokenStorage`
- 🛡️ **RBAC 权限模型**：`v-permission` 指令（不匹配时 DOM 移除）+ 4 步全局路由守卫
- ⚡ **超级管理员短路**：`isSuperAdmin` 命中时直接放行，避免权限遍历开销
- 🧭 **动态路由**：`import.meta.glob('@/modules/**/*.vue')` 自动装载业务模块
- 📜 **基于角色的菜单**：Mock 接口按权限返回菜单树

### HTTP 与错误处理

- 🌐 **RFC 7807 错误契约**：成功 `200 + {code:0, data, msg}`，失败 `4xx/5xx + ProblemDetail`
- 🔧 **单一 HTTP 客户端**：业务代码统一用 `lib/http/client` 导出的 `http` / `api`，禁止 `axios.create()`
- 💬 **三层错误处理**：拦截器全局提示 → 模块 API 透传 → 组件领域反馈，`_silent: true` 反转默认

### UI 与体验

- 🎨 **Element Plus…
