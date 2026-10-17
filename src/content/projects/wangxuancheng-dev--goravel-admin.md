---
repo: "wangxuancheng-dev/goravel-admin"
name: "goravel-admin"
description: "Goravel-admin: an out-of-the-box admin management system built on Golang Goravel (Laravel-style). It supports both Vue 3 + Element Plus and React + Ant Design frontends, and includes built-in AI code generation, multi-tenancy, operation logs, WebSocket messaging, and one-click Docker deployment. It suits quickly building internal enterprise management and operations backends."
originalDescription: "Goravel-admin：基于Golang Goravel(Laravel风格)的开箱即用后台管理系统，支持Vue3+Element Plus / React+Ant Design双前端，内置AI代码生成、多租户、操作日志、WebSocket消息、Docker一键部署，适合快速搭建企业内部管理、运营后台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wangxuancheng-dev/goravel-admin"
homepage: "https://docs.xuancheng888.top"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [48, 21]
topics: ["admin", "element-plus", "gin", "golang", "goravel", "vue3", "vxe-table", "react"]
stars: 46
forks: 12
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-21T12:54:41Z"
lastCommitAt: "2026-10-17T07:59:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 43
maintainers: ["wangxuancheng-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e2c93e91cbbf098971e40ad4e51af3be63dbffa46af1210e8215f4539c130da/wangxuancheng-dev/goravel-admin"
---

English | <a href="./README_zh.md">中文</a>
  &nbsp;·&nbsp;
  ·
  ·
  Demo login: <code>demo</code> / <code>demo123</code>

### Why this repo

- **SaaS ops path** — database-per-tenant, platform console, provision → migrate → ready gate, `/health` `/ready` (`TENANCY_DRIVER=database`)
- **Dual frontend** — Vue 3 + Element Plus or React + Ant Design 6, same `/api/admin`
- **Batteries included** — JWT / RBAC, menus, logs, export, WebSocket notices, code generator, AI Lab

**Good fit:** mid-size multi-tenant SaaS ops, internal admin panels, Goravel secondary development.  
**Not a drop-in:** financial trading cores or large commercial SaaS without extra ops. Module tiers: [Open-source scope](https://docs.xuancheng888.top/en/guide/opensource).

### Three-minute Docker

```bash
git clone https://github.com/wangxuancheng-dev/goravel-admin.git
cd goravel-admin
cp .env.docker.example .env
docker compose up -d --build
# http://localhost:3000  —  admin / admin123 (change ASAP)
```

Multi-tenant demo (optional): [Platform ops](https://admin.xuancheng888.top/platform/login) → provision tenant → [Tenant login](https://acme.xuancheng888.top/login?tenant_code=acme).

UI dev (optional): Vite Vue…
