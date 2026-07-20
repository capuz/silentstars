---
repo: "openbkn-ai/bkn-studio"
name: "bkn-studio"
description: "Web console for OpenBKN — build, manage, and collaborate on business knowledge networks. React + TypeScript frontend for the platform's admin UIs and workspaces."
originalDescription: "Web console for OpenBKN — build, manage, and collaborate on business knowledge networks. React + TypeScript frontend for the platform's admin UIs and workspaces."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/openbkn-ai/bkn-studio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["context-engineering", "harness-engineering", "ontology", "ontology-engineering", "palantir-alternative"]
stars: 29
forks: 3
openIssues: 34
closedIssues: 55
watchers: 2
contributors: 10
recentReleases: 1
createdAt: "2026-05-29T12:45:17Z"
lastCommitAt: "2026-07-20T06:33:34Z"
lastReleaseAt: "2026-07-18T23:38:44Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 39
maintainers: ["rongwei-liu", "yuyoudong", "lbb1656"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecc1240a0bf630c7a60d46031387a1bc94ef422f8a5b0e121de82ba09e556267/openbkn-ai/bkn-studio"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="help/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="help/banner-light.png">
  </picture>

# BKN Studio

中文 | [English](https://github.com/openbkn-ai/bkn-studio/blob/HEAD/README.en.md)

BKN Studio 是 OpenBKN 的统一产品工作台，面向企业知识网络、数据资源治理、模型资源管理、智能体调试和平台运维等场景，提供一套可视化、可协作、可交付的前端入口。

它不是单一功能页面集合，而是 OpenBKN 面向业务用户、实施人员、数据工程师和 AI 工程师的统一操作界面。用户可以在这里完成知识网络建模、数据资源接入、索引构建、工具能力编排、模型配置和运行调试等工作。

## 产品定位

BKN Studio 关注三类核心问题：

1. **让业务知识可建模**  
   将企业中的业务对象、关系、动作、概念分组等知识结构沉淀为领域知识网络，支撑后续查询、分析、智能体调用和业务应用构建。

2. **让数据资源可治理、可检索、可使用**  
   通过数据连接、数据目录、资源详情和数据索引能力，把数据库、数据视图等资源组织成可理解、可检索、可绑定的资源知识网络。

3. **让平台能力可配置、可运营、可交付**  
   通过模型管理、执行工厂、Agent 调试等模块，将 OpenBKN 后端能力产品化，降低联调、验证和业务交付成本。

## 主要业务模块

### 领域知识网络

面向业务建模和知识组织场景，支持：

- 管理知识网络、对象类、关系类、动作类型和概念分组。
- 将业务对象与数据资源视图绑定，建立业务语义和数据实体之间的映射关系。
- 查看对象类、关系类、动作类型详情，以及关联资源信息。
- 通过 ContextLoader 调试台验证知识网络在智能体检索和工具调用中的表现。

### 数据资源知识网络

面向数据资源治理和检索构建场景，支持：

- 创建和管理数据连接。
- 扫描并维护数据目录、数据资源、数据视图和资源详情。
- 在数据目录侧配置全文索引和向量索引。
- 查看索引构建任务、构建状态、失败信息和重建操作。
- 为领域知识网络提供稳定的数据资源绑定来源。

### 执行工厂

面向工具能力生产和集成场景，支持：

- 管理算子、工具、工具箱和能力。
- 从 OpenAPI 或 cURL 导入接口能力。
- 预览、调试、发布和导出工具能力。
-…
