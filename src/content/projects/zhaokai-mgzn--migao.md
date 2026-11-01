---
repo: "zhaokai-mgzn/migao"
name: "migao"
description: "Multi-tenant AI customer service SaaS: dual agents (LangGraph) + 31 business tools + SSE streaming conversations, Java / Python / Next.js / Taro, deployed on Alibaba Cloud SWAS"
originalDescription: "多租户 AI 智能客服 SaaS：双 Agent（LangGraph）+ 31 个业务工具 + SSE 流式对话，Java / Python / Next.js / Taro，阿里云 SWAS 部署"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhaokai-mgzn/migao"
language: "Python"
languages: ["Python", "Java", "TypeScript"]
languagePcts: [45, 24, 21]
stars: 7
forks: 3
openIssues: 161
closedIssues: 4533
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-06T01:12:14Z"
lastCommitAt: "2026-11-01T10:44:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["zhaokai-mgzn", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01e9dd615a45b4573d512e8b4d69c24da50d6bbf281ebcbea1783ee02c26b6a1/zhaokai-mgzn/migao"
---

# AI Customer Service System (AIKF)

> A multi-tenant AI customer service SaaS platform for general industries, using the window-curtain (soft furnishings) industry as the example scenario.  
> Built on large language models (DeepSeek V4 Pro + DeepSeek V4 Flash Vision) + business tools (**the count is taken from the registry as the single source of truth; see “Version source of truth” under “Tech Stack” for the recalculation command**), covering the full pipeline from pre-sales consultation to after-sales service.

## ✨ Core Highlights

- **Dual-agent architecture** — C-end customer service agent 元元 + B-end work assistant 黄金策, driven by a LangGraph state graph
- **AI tools** — product search, order management, logistics tracking, customer lookup, etc., with automatic intent routing (count is taken from the `registry.py` registry as the single source of truth)
- **Multi-tenant SaaS** — tenant isolation (tenant_id derived from JWT → MyBatis tenant interceptor → field masking)
- **Complete business back office** — products, orders, CRM, human agent workstations, dashboards, and 12+ management modules
- **WeChat Mini Program** — Taro cross-platform framework, SSE streaming…
