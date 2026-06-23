---
repo: "leozeng-coder/opinion_analysis"
name: "opinion_analysis"
description: "AI舆情分析系统"
url: "https://github.com/leozeng-coder/opinion_analysis"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [63, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-14T02:09:09Z"
lastCommitAt: "2026-06-23T06:41:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 47
maintainers: ["leozeng-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/f710ee949fb22e70c9ecaca1ab0407e45875fa721d49ba91768a54f1cdc4a354/leozeng-coder/opinion_analysis"
---

# AI舆情分析系统

基于 AI 的中文舆情监测与分析平台。系统从 7 个社交媒体平台采集内容，通过大模型自动打标与情感分析，结合 Milvus 向量库实现 RAG 智能问答，并通过两个 React 前端展示分析结果。

---

## 目录

- [功能特性](#功能特性)
- [技术架构](#技术架构)
- [项目结构](#项目结构)
- [环境准备](#环境准备)
- [本地启动](#本地启动)
- [配置说明](#配置说明)
- [Docker 部署](#docker-部署)
- [访问地址](#访问地址)

---

## 功能特性

- **多平台内容采集**：驱动 MediaCrawler（Playwright）深度采集小红书、抖音、快手、微博、B 站、贴吧、知乎共 7 个平台的帖子与评论；同时从 NewsNow 聚合 12 个平台的热榜关键词作为采集入口
- **AI 自动打标**：后台 goroutine 定时批量调用大模型（DeepSeek / OpenAI / Qwen 等）为文章生成话题标签
- **情感分析**：LLM 主力 + SnowNLP 回退，自动标记文章正负情感倾向
- **RAG 智能问答**：Go 直连 Milvus + Python embedding 服务(可配置），支持语义检索与 AI 多轮对话
- **预警规则引擎**：自定义关键词 / 情感 / 平台组合预警，实时触发告警记录
- **工作流引擎**：可视化编排爬虫→处理→分析节点，支持定时调度与手动触发
- **数据可视化**：ECharts 趋势图、词云、平台分布、话题热度看板
- **管理后台**：用户管理、系统配置、RAG 知识库管理、爬虫运维、审计日志

---

## 技术架构

### 服务组成

系统由 5 个独立进程组成：

| 服务               | 语言 / 框架                      | 端口   | 目录                |
| ---------------- | ---------------------------- | ---- | ----------------- |
| Go API 后端        | Go 1.24、Gin + GORM           | 8080 | `backend/`        |
| 用户端前端            | React 18 + Vite + Ant Design | 5173 | `frontend/`       |
| 管理后台前端           | React 18 + Vite + Ant Design | 5174 | `frontend-admin/` |
| RAG embedding 服务…
