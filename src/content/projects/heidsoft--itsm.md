---
repo: "heidsoft/itsm"
name: "itsm"
description: "Enterprise IT Service Management Platform built with Go/Gin and Next.js"
url: "https://github.com/heidsoft/itsm"
homepage: "https://github.com/heidsoft/itsm"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [49, 45]
topics: ["agent", "ai", "bpmn", "go", "itil", "itsm", "nextjs", "react", "typescript"]
stars: 39
forks: 8
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-07-12T07:17:08Z"
lastCommitAt: "2026-06-27T00:49:44Z"
lastReleaseAt: "2026-06-19T15:15:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["heidsoft", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e73b52271e75662f8b6917e3b8bbaa58261b8ff00c3ee0cf21c650f65a3e2ccd/heidsoft/itsm"
---

# 🤖 AI-Native ITSM

## 企业级IT服务管理平台 | AI First, Not AI After

**🚀 LLM-first 智能分诊 | Guidance-Harness-Skill 工程体系 | 开源免费**

**[🌐 官网](https://cloudmesh.top/)** · **[📖 架构解析](./docs/articles/07-ai-native-architecture-guidance-harness-skill.md)**

</div>

---

## 项目说明

ITSM 是一个面向国内企业数字化流程治理的开源 IT 服务管理平台，目标是对标 ServiceNow 的核心 ITSM 能力，同时保持更轻量、更易私有化部署、更适合本土企业集成环境。

项目覆盖 ITIL v3 的核心流程：工单、事件、问题、变更、发布、服务请求、服务目录、知识库、SLA、CMDB 和流程编排。系统内置 BPMN 工作流引擎，支持按企业实际管理制度自定义流程，并预留飞书、企业微信、钉钉、Webhook、连接器市场、Skill 市场和插件市场扩展方向。

AI 能力不是外挂式聊天框，而是嵌入到工单分诊、摘要、知识检索、流程建议、审计追踪和自动化工具调用中。当前定位是“AI Native ITSM 基座”：先把流程、权限、数据模型、审计、连接器和可部署性打牢，再逐步让 AI 参与更多可控的企业服务管理动作。

### 适合谁使用

- 企业 IT、运维、服务台团队：统一处理工单、事件、变更、问题和服务请求。
- 数字化平台团队：把企业内部流程、审批、CMDB 和系统集成统一到一个可扩展平台。
- MSP 服务商：通过多租户和 MSP 模式服务多个客户组织。
- 开源贡献者和二次开发团队：基于 Go + Next.js + BPMN + AI 能力建设企业级流程产品。

### 当前能力地图

| 领域 | 已覆盖能力 |
|:---|:---|
| ITIL 流程 | 工单、事件、问题、变更、发布、服务请求、服务目录、SLA |
| CMDB | CI 类型、配置项、关系、拓扑、影响分析、云资源发现基础能力 |
| 工作流 | BPMN 流程定义、流程实例、用户任务、流程绑定、流程触发 |
| AI | 智能分诊、摘要、RAG 检索、LLM 网关、AI 审计、工具调用框架 |
| 知识库 | 文章、分类、搜索、推荐、RAG 接入 |
| 企业集成 | 连接器市场雏形，预留飞书、企微、钉钉、Webhook 等通道 |
| 权限与租户 | RBAC、多租户、MSP 模式、菜单权限、组织结构 |
| 交付 | Docker Compose、GitHub Releases、GHCR 镜像、前后端 CI |

### 发布物怎么选…
