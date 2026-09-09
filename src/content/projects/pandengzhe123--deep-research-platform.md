---
repo: "pandengzhe123/deep-research-platform"
name: "deep-research-platform"
description: "Java 网关 + Python Agent 的深度研究智能体平台"
readmeQualityOk: true
url: "https://github.com/pandengzhe123/deep-research-platform"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-03T06:48:58Z"
lastCommitAt: "2026-09-09T08:18:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 35
maintainers: ["pandengzhe123"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6a3b0447db9ea00ae4178ab52c778f442d2914790f0f64e3f95fc3787a7359/pandengzhe123/deep-research-platform"
---

# Deep Research Platform

> 全栈深度研究 AI Agent 平台 | 零框架手写 | Python + Java + Vue + Docker | 完整评测体系

输入问题 → Agent 自主搜索网络+知识库 → SSE 实时推送进度 → 生成带引用的深度研究报告。自建 RAGAS 四大指标+A/B 对照+LLM-as-Judge+消融实验+回归测试，数据驱动优化。

---

## 快速开始

### 1. 配置

```bash
cp agent/.env.example agent/.env
# 编辑 .env，填入 API Key：
#   DEEPSEEK_API_KEY=sk-xxx        (LLM)
#   TAVILY_API_KEY=tvly-xxx        (搜索)
#   DASHSCOPE_API_KEY=sk-xxx       (阿里云 embedding)
```

### 2. 启动

```bash
docker compose up
# 浏览器打开 http://localhost:3000
```

首次启动需下载镜像和依赖（约 10 分钟），后续启动几秒。

### 3. 命令行（不启动 Docker 也能跑）

```bash
cd agent
pip install -e .
python -m src.researcher.agent "量子计算对密码学的影响" 2
```

---

## 架构

```
浏览器 (Vue 3) → nginx (:80)
                    │
                    ▼
              Java 网关 (WebFlux :8080)
              会话管理 · JWT 认证 · SSE 透传 · PostgreSQL 持久化
                    │
                    ▼
              Python Agent (FastAPI :8000)
              四级 Agent · RAG 知识库 · 搜索工具 · Trace 追踪
                    │
                    ▼
         DeepSeek · Tavily/DuckDuckGo · Chroma · PostgreSQL
```

---

## 四级 Agent

| Level | 架构 | LLM 调用次数 | 特点 |
|:---:|------|:---:|------|
| 1 | 搜索 → 报告（1 次 LLM） | 1 | 极速，适合简单事实查询 |
| 2 | ReAct…
