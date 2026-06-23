---
repo: "iwangbowen/zenith-admin"
name: "zenith-admin"
description: "基于Hono v4 + React 19 + Semi Design v2 + Drizzle ORM的全栈后台管理系统，覆盖认证授权、组织架构、系统配置、通知公告、日志审计、在线会话、定时任务、文件管理与运行监控等后台场景。"
url: "https://github.com/iwangbowen/zenith-admin"
homepage: "https://iwangbowen.github.io/zenith-admin/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["admin-dashboard", "admin-template", "drizzle-orm", "postgresql", "react", "semi-design", "zod-validation", "lucid-icons", "lucide-react", "redis"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-03-22T13:22:40Z"
lastCommitAt: "2026-06-23T06:42:15Z"
lastReleaseAt: "2026-04-21T08:38:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["iwangbowen"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea88dd19ccb1db43e7a109e517910bd89d5cd4f5b99e7f5d7a65c9a4eee1e266/iwangbowen/zenith-admin"
discussionCount: 0
---

# Zenith Admin

基于 **Hono v4 + React 19 + Semi Design v2 + Drizzle ORM** 的全栈后台管理系统。涵盖认证授权、组织架构、权限控制、系统配置、通知中心（邮件 / 短信 / 站内信）、日志审计、在线会话、定时任务、文件存储、缓存管理、低代码工作流、智能助手（AI）、数据分析、支付中心、会员体系（含 C 端门户）、服务器运维（Web 终端 / SSH / Docker）等完整业务场景，并内置可选的**多租户（Multi-Tenant）**支持。

项目采用 **npm monorepo** 结构：后端使用 Hono + PostgreSQL 提供 RESTful API，前端使用 React 19 + Vite + Semi Design v2 构建界面，`shared` 包统一维护前后端共享类型、常量与 Zod 校验 schema。

---

## 文档与演示

| | 地址 |
| --- | --- |
| 文档站 | <https://iwangbowen.github.io/zenith-admin/> |
| 演示站 | <https://iwangbowen.github.io/zenith-admin/demo/>（账号 `admin` / 密码 `123456`，无需后端） |

---

## 技术栈

| 层级 | 技术 |
| ---- | ---- |
| 后端框架 | [Hono](https://hono.dev/) v4 + Node.js |
| 前端框架 | [React](https://react.dev/) 19 + [Vite](https://vitejs.dev/) 6 |
| UI 组件库 | [Semi Design](https://semi.design/) v2 |
| 图标体系 | [lucide-react](https://lucide.dev/) |
| 数据库 ORM | [Drizzle ORM](https://orm.drizzle.team/) + PostgreSQL |
| 会话 / 缓存 | [Redis](https://redis.io/)（ioredis） |
| 任务调度 | [pg-boss](https://github.com/timgit/pg-boss)（PostgreSQL 任务队列） |
| 前端路由 | [React Router](https://reactrouter.com/) v7 |
| 参数验证 | [Zod](https://zod.dev/)（前后端共享） |
| 认证方案 | JWT（Access + Refresh Token 自动续期）+ OAuth2 |
|…
