---
repo: "zhaokai-mgzn/migao"
name: "migao"
description: "Multi-tenant AI intelligent customer service SaaS: Dual Agent (LangGraph) + 31 business tools + SSE streaming chat, Java / Python / Next.js / Taro, Alibaba Cloud SWAS deployment"
originalDescription: "多租户 AI 智能客服 SaaS：双 Agent（LangGraph）+ 31 个业务工具 + SSE 流式对话，Java / Python / Next.js / Taro，阿里云 SWAS 部署"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhaokai-mgzn/migao"
language: "Python"
languages: ["Python", "Java", "TypeScript"]
languagePcts: [53, 24, 20]
stars: 5
forks: 0
openIssues: 20
closedIssues: 3429
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-06T01:12:14Z"
lastCommitAt: "2026-09-30T09:56:59Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 100
undervaluedScore: 54
maintainers: ["zhaokai-mgzn", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/212f1e2d06d8c0f41cb44528b1f3f92d89b29d83bbd4ca2320ad32886c74d3d4/zhaokai-mgzn/migao"
---

# AI Intelligent Customer Service System (AIKF)

> A multi-tenant AI intelligent customer service SaaS platform for general industries, using the fabric curtain industry as a sample scenario.  
> Built on large language models (DeepSeek V4 Pro + DeepSeek V4 Flash Vision) + business tools (**quantity sourced from the registry as single source of truth**, recalculation command see "Version Source of Truth" in "Tech Stack"), covering the complete chain from pre-sales consultation to post-sales service.

## ✨ Core Highlights

- **Dual Agent Architecture** — C-end customer service "Xiaobu" + B-end work assistant "Mibao", driven by LangGraph state machine
- **AI Tools** — product search, order management, logistics tracking, customer query, etc., automatic intent routing (quantity sourced from `registry.py` registry as single source of truth)
- **Multi-tenant SaaS** — tenant isolation (JWT-derived tenant_id → MyBatis tenant interceptor → field desensitization)
- **Complete Business Backend** — 12+ management modules including products, orders, CRM, human agents, data dashboard, etc.
- **WeChat Mini Program** — Taro cross-platform framework, SSE streaming chat, native experience
-…
