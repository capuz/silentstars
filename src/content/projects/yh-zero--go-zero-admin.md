---
repo: "yh-zero/go-zero-admin"
name: "go-zero-admin"
description: "An open-source full-stack microservice admin backend based on go-zero + React 19 + Ant Design 6, using a monorepo with a 1 API + 5 RPC architecture. It supports RBAC + Casbin API permissions and department-level data scopes, a separate container stack and database per tenant, and Nginx subdomain routing. It integrates an Eino AI Agent, tool calling, and human-approval workflows. It uses goctl code generation and a cached Model data layer, and ships with complete initialization data, making it a suitable development starting point for enterprise admin backends and SaaS projects."
originalDescription: "基于 go-zero + React 19 + Ant Design 6 的开源全栈微服务管理后台，采用单仓库、1 API + 5 RPC 架构。支持 RBAC + Casbin 接口权限与部门级数据范围、每租户独立容器栈与数据库、Nginx 子域名路由；集成 Eino AI Agent、工具调用与人工审批工作流。采用 goctl 代码生成和缓存 Model 数据层，提供完整初始化数据，适合作为企业管理后台与 SaaS 项目的开发起点。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yh-zero/go-zero-admin"
language: "Go"
languages: ["Go", "TypeScript", "JavaScript"]
languagePcts: [49, 24, 23]
topics: ["go-zero", "ant-design", "go", "goctl", "microservices", "react", "typescript", "admin-dashboard", "ai-agents", "casbin"]
stars: 107
forks: 19
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-05T08:15:10Z"
lastCommitAt: "2026-11-17T14:34:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 46
maintainers: ["yh-zero"]
openGraphImageUrl: "https://opengraph.githubassets.com/a109c044e7cd4745a8b14e7ef61779a0c1750ed952315f035e53d456df53fc03/yh-zero/go-zero-admin"
---

# go-zero-admin

An admin backend built on **go-zero + React**. It includes permission, department, file, audit, and APP user management, plus AI chat, knowledge base retrieval, and approval workflows, and is suitable as a development starting point for business systems.

The backend uses **1 HTTP API + 5 RPC services** (admin / app / file / ai / tenant). The frontend uses React 19, TypeScript, and Ant Design 6.

CI automatically runs the backend `verify.ps1`, plus frontend type checking and build. Results are shown in the status badges above.

## Features

| Module | Features |
|---|---|
| Workbench | Statistics within the current department and authorized scope, recent operations, and frequently used entries |
| System management | Users, roles, menus, departments, dictionaries, API resources, files, audit, and personal center |
| Permission control | JWT, Casbin, department identity, and data scope; page access and operation permissions are authorized separately |
| APP management | User profiles and review, avatars, login devices, membership activation/revocation, and feedback replies |
| AI chat | SSE streaming replies, session search/rename/pin, message rating, Markdown…
