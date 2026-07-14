---
repo: "eighteendreamer/Ai_Test_Agent"
name: "Ai_Test_Agent"
description: "欢迎大家提issue。 AI Test Agent 是一个基于人工智能的自动化测试平台，利用大语言模型（LLM）和浏览器自动化技术，实现测试用例的智能生成、自动执行、Bug 分析和报告生成。  Enterprise_AI_QA_Agent 是一个面向企业级质量保障场景的 Agent 工作台项目，目标是参考 claude_code 的运行骨架"
readmeQualityOk: true
url: "https://github.com/eighteendreamer/Ai_Test_Agent"
language: "Python"
languages: ["Python"]
languagePcts: [64]
stars: 27
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T12:12:26Z"
lastCommitAt: "2026-07-14T05:52:36Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 37
maintainers: ["eighteendreamer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93605874c87aa207432d31370ce394d94a59292bbd4f8b8468e4214636bc62b/eighteendreamer/Ai_Test_Agent"
---

# 御策天检 - 智能自动化测试平台

  
  
  
  
  
  
  
</div>

## 项目简介

AI Test Agent 是一个基于人工智能的自动化测试平台，利用大语言模型（LLM）和浏览器自动化技术，实现测试用例的智能生成、自动执行、Bug 分析和报告生成。平台采用 **适配器模式（Adapter Pattern）** 重构了底层模型架构，支持 15+ 主流大模型供应商，并内置了智能止损、模糊匹配、Agent 判定优先、瞬态 UI 感知、用例间状态隔离等策略，大幅提升了测试的稳定性和效率。

平台还内置了 **页面知识库（RAG 记忆层）**，使用 Qdrant 向量数据库存储页面结构知识，在一键测试时优先命中已有知识跳过浏览器探索，并通过 Diff Engine 自动检测页面变更、推荐回归测试范围。

## 比赛视角下的差异化

如果只把 AI Test Agent 理解成“让大模型帮我测网页”，它确实会和 Claude Code + 测试 Skills 这类通用方案显得相似。

但本项目真正解决的问题不是“AI 能不能测”，而是“AI 测试能不能更低成本、更稳定、可复用、可持续地运行”。

- **知识复用**：页面探索结果进入知识库，后续同页面优先命中缓存，减少重复探索和上下文膨胀
- **版本感知**：页面结构变化时自动做 Hash 比对和 Diff 分析，辅助回归测试
- **受控生成**：模板 + LLM 混合生成用例，降低 Token 消耗并提升结构稳定性
- **稳定执行**：内置止损、循环检测、429 熔断、模型自动切换、状态隔离等运行保护机制
- **测试治理**：支持报告、Bug、邮件通知、Token 统计、多模型管理和项目平台集成
- **多平台集成**：统一适配器工厂接入 11 大项目管理平台（禅道、Jira、PingCode、TAPD、ONES、云效、ClickUp、Asana、Worktile、8Manage、MS Project），实现 Bug 推送和用例双向同步

适合比赛展示的定位不是“又一个通用测试 Agent”，而是“面向真实回归场景的 AI 测试执行内核”。

更完整的比赛答辩话术、演示主线和对比思路见：[比赛答辩定位与路演策略.md](https://github.com/eighteendreamer/Ai_Test_Agent/blob/HEAD/比赛答辩定位与路演策略.md)

## 核心特性

### 1. 智能测试用例生成
- 基于自然语言需求自动生成测试用例
- 支持多种文件导入（TXT、PDF、DOCX、DOC）
- 自动生成结构化用例（模块、标题、步骤、预期结果、优先级）
- 智能覆盖正常、异常、边界及安全测试场景

### 2. 自动化测试执行与智能策略
- **基于…
