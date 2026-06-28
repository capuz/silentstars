---
repo: "realchendahuang/cloudflare-playbook"
name: "cloudflare-playbook"
description: "AI 编程时代的 Cloudflare 实战手册——用 AI 写代码，用 Cloudflare 部署到全球。"
url: "https://github.com/realchendahuang/cloudflare-playbook"
homepage: "https://chendahuang.com/playbook/cloudflare/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["cloudflare"]
stars: 154
forks: 16
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-16T07:27:34Z"
lastCommitAt: "2026-06-28T03:11:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 24
maintainers: ["realchendahuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b06a971105506107785f83ebb9e6436cdd5b755d1919caf4c85b82737692b495/realchendahuang/cloudflare-playbook"
discussionCount: 0
---

# Cloudflare 实战手册

AI 编程时代的 Cloudflare 实战手册——用 AI 写代码，用 Cloudflare 部署到全球。

在线阅读：[chendahuang.com/playbook/cloudflare](https://chendahuang.com/playbook/cloudflare/)

## 全景图

```mermaid
flowchart TD
  A[Cloudflare 实战手册] --> I[AI 编程工作流<br/>Skill / MCP / Wrangler]
  A --> B[站点基础<br/>DNS / SSL / CDN / Rules]
  A --> C[计算<br/>Workers / Pages / DO / Workflows / Queues]
  A --> D[数据存储<br/>D1 / KV / R2 / Hyperdrive / Vectorize]
  A --> E[AI<br/>Workers AI / AI Gateway / Agents SDK]
  A --> F[媒体<br/>Images / Stream / Realtime / Browser]
  A --> G[安全<br/>Turnstile / Access / WAF / Rate Limiting]
  A --> H[观测<br/>Log Explorer / Observability / Analytics]
  A --> J[计费与额度<br/>Free vs Paid 对比]
  A --> K[架构模式<br/>常见组合与 trade-off]
```

## 目录

- [1. AI 编程工作流](#1-ai-编程工作流)
- [2. Cloudflare 功能模块](#2-cloudflare-功能模块)
- [3. 计费与额度](#3-计费与额度)
- [4. 开源项目](#4-开源项目)
- [5. 避坑指南](#5-避坑指南)
- [6. 国内访问](#6-国内访问)
- [7. Cloudflare Agents](#7-cloudflare-agents)
- [8. 域名](#8-域名)
- [9. 邮件](#9-邮件)
- [官方资源](#官方资源)

## 1. AI 编程工作流

先给 AI 配好 Cloudflare 的"说明书"和"工具箱"，配完之后你想怎么问就怎么问——Cloudflare 有什么、边界在哪、该怎么写，AI 自己会查。这本手册的剩下部分是给你查漏补缺的，不用从头读到尾。

如果想让它快速了解全貌，把 llm.txt 喂给它（见下方"把这本手册喂给 AI"）。

### 安装 Skill 和 MCP

Cloudflare…
