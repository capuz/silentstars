---
repo: "zhaokai-mgzn/migao"
name: "migao"
description: "Multi-tenant AI Smart Customer Service SaaS: Dual Agents (LangGraph) + 31 business tools + SSE streaming conversation, Java / Python / Next.js / Taro, Alibaba Cloud SWAS deployment"
originalDescription: "多租户 AI 智能客服 SaaS：双 Agent（LangGraph）+ 31 个业务工具 + SSE 流式对话，Java / Python / Next.js / Taro，阿里云 SWAS 部署"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhaokai-mgzn/migao"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [52, 23]
stars: 5
forks: 0
openIssues: 46
closedIssues: 3576
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-06T01:12:14Z"
lastCommitAt: "2026-10-03T09:22:53Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 100
undervaluedScore: 54
maintainers: ["zhaokai-mgzn", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b347dc199b9a6121993148653402ee1d90cbcfc8dba63cd64292437133344e86/zhaokai-mgzn/migao"
---

# AI Smart Customer Service System (AIKF)

> A multi-tenant AI smart customer service SaaS platform for general industries, using the fabric curtain industry as an example scenario.  
> Built on large language models (DeepSeek V4 Pro + DeepSeek V4 Flash Vision) + business tools (**quantity with registry as single source of truth**, recalculation command see "Technical Stack"'s "Version Source of Truth"), covering the full chain from pre-sales consultation to post-sales service.

## ✨ Key Highlights

- **Dual Agent Architecture** — C-end customer service "XiaoBu" + B-end work assistant "MiBao", driven by LangGraph state graphs
- **AI Tools** — product search, order management, logistics tracking, customer queries, etc., automatic intent routing (quantity with `registry.py` registry as single source of truth)
- **Multi-tenant SaaS** — tenant isolation (JWT-derived tenant_id → MyBatis tenant interceptor → field desensitization)
- **Complete Business Backend** — products, orders, CRM, human agents, data dashboards, and 12+ management modules
- **WeChat Mini Program** — Taro cross-platform framework, SSE streaming conversation, native experience
- **Alibaba Cloud Full-Stack…
