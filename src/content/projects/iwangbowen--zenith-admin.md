---
repo: "iwangbowen/zenith-admin"
name: "zenith-admin"
description: "基于Hono v4 + React 19 + Semi Design v2 + Drizzle ORM的全栈后台管理系统，覆盖认证授权、组织架构、系统配置、通知公告、日志审计、在线会话、定时任务、文件管理与运行监控等后台场景。"
readmeQualityOk: true
url: "https://github.com/iwangbowen/zenith-admin"
homepage: "https://iwangbowen.github.io/zenith-admin/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["admin-dashboard", "admin-template", "drizzle-orm", "postgresql", "react", "semi-design", "zod-validation", "lucid-icons", "lucide-react", "redis"]
stars: 33
forks: 14
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-22T13:22:40Z"
lastCommitAt: "2026-09-16T07:53:58Z"
lastReleaseAt: "2026-04-21T08:38:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 45
maintainers: ["iwangbowen"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2371a028261995ac9fdf38789f4a3ce17ac96319db036b38476adc2b74e59d2/iwangbowen/zenith-admin"
discussionCount: 0
---

# Zenith Admin

基于 **Hono v4 + React 19 + Semi Design v2 + Drizzle ORM** 的全栈后台管理系统。涵盖认证授权（OAuth / 企业 SSO）、组织架构（含通讯录同步）、权限控制、运行时设置、通知中心（事件驱动多渠道触达）、消息中心（IM / 音视频通话）、日志审计、告警中心、在线会话、定时任务、文件存储、缓存管理、低代码工作流、规则引擎、智能助手（Mastra 驱动的 AI 对话 / 智能体 / RAG 知识库）、数据分析、报表中心（BI）、支付中心、会员体系（含 C 端门户）、公众号管理、开放平台、CMS 内容管理、知识中心（Wiki）、服务器运维（Web 终端 / SSH / Docker）等完整业务场景，并内置可选的 **多租户（Multi-Tenant）** 与 **License 授权** 支持。

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
| 前端框架 | [React](https://react.dev/) 19 + [Vite](https://vitejs.dev/) 8 |
| UI 组件库 | [Semi Design](https://semi.design/) v2 |
| 图标体系 | [lucide-react](https://lucide.dev/) |
| 数据库 ORM | [Drizzle ORM](https://orm.drizzle.team/) + PostgreSQL |
| 会话 / 缓存 | [Redis](https://redis.io/)（ioredis） |
| 任务调度 | [pg-boss](https://github.com/timgit/pg-boss)（PostgreSQL 任务队列）；后端按 `ZENITH_ROLES`…
