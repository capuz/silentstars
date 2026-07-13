---
repo: "npcxl/BLS-KOX"
name: "BLS-KOX"
description: "BLS is a backend system designed for multi-tenant enterprise management scenarios, consisting of a front-end management interface, back-end services, a database, and operational support capabilities. The system is centered around the design goal of 'unified platform governance and independent tenant operation', providing modules for permission control, basic data management, business management, log auditing, file storage, page configuration, and real-time capabilities."
originalDescription: "BLS 是一套面向多租户企业管理场景的后台系统，整体由前端管理端、后端服务端、数据库与运维支撑能力组成。系统围绕“平台统一治理、租户独立运营”的设计目标，提供权限控制、基础资料管理、业务管理、日志审计、文件存储、页面配置与实时能力等模块。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/npcxl/BLS-KOX"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T01:23:29Z"
lastCommitAt: "2026-07-13T06:37:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["npcxl", "leheuuu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0030ef2483b75fe65aebad26df38f446a7f128c18fe7d41da904a3d4940b2cd2/npcxl/BLS-KOX"
---

# BLS-KOX

> An open-source multi-tenant backend development framework and management system template based on Koa + TypeScript.
> Built-in RBAC, multi-tenant isolation, JWT session system, replay protection, rate limiting, security auditing, WebSocket, Prometheus Metrics.

## ✨ Why BLS-KOX

- **Security built-in, not added later** — Replay protection, rate limiting, and audit logs come with the framework
- **Native multi-tenant support** — tenant_id is automatically injected, cross-tenant access triggers automatic alerts
- **One-line configuration to generate interfaces** — `defineCrudModule()` generates complete list/add/edit/remove/status
- **Modern TypeScript full stack** — Koa + Kysely ORM + Zod + React 18 + Ant Design Pro 5
- **One-click Docker deployment** — `docker compose up -d`

**Suitable for**: Learning backend architecture · Rapidly building management backends · SaaS prototype development · Permission system reference · Secondary development

## 🚀 Features

| Module | Description |
|--------|-------------|
| Multi-tenant isolation | Automatic tenant_id injection, cross-tenant access alerts, Ownership Guard |
| RBAC permissions | Role → Menu → Button three-level…
