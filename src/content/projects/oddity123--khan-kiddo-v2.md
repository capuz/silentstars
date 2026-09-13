---
repo: "oddity123/khan_kiddo_v2"
name: "khan_kiddo_v2"
description: "把你和 ChatGPT 的英语口语对话，变成一份可量化、可复盘的学习诊断报告"
readmeQualityOk: true
url: "https://github.com/oddity123/khan_kiddo_v2"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [56, 32]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T02:48:51Z"
lastCommitAt: "2026-09-13T08:29:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 46
maintainers: ["oddity123", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dc04741e17323f72b457c3c12491b9527ac588776b40eb3b8c47d957e8bf253/oddity123/khan_kiddo_v2"
---

# Khan Kiddo v2

> 把你和 ChatGPT 的**英语口语对话**，变成一份可量化、可复盘的学习诊断报告。

线上站点：[khankiddo.top](https://khankiddo.top)

粘贴（或用浏览器扩展一键导入）一段 ChatGPT 语音对话字幕，Khan Kiddo 会逐句找出你的语法与表达问题、给出改写建议、算出自然度得分，并把所有错句沉淀成可检索的个人语料库 —— 之后你可以直接向 AI 助手提问「我最近最常犯的时态错误是什么」。

技术栈：**Java 21 + Spring Boot 3.5 + LangChain4j + MyBatis-Plus + MySQL 8 + Qdrant** ｜ **Vue 3 + Vite + TypeScript** ｜ **Chrome MV3 扩展**

---

## 核心亮点

### 1. 三阶段 LLM 流水线，SSE 全程流式

对话分析不是"一个 prompt 打包丢给大模型"，而是拆成职责单一、可分别换模型的阶段（`conversation/ConversationAnalysisPipeline.java`）：

```mermaid
flowchart LR
    A[原始字幕] --> B["Stage 1 对话分离<br/>固定 Doubao Flash"]
    B --> C{语种路由}
    C -->|中文句| D["中文表达建议<br/>词汇缺口 / 整句改写"]
    C -->|英文句| E["Stage 2 语法分析<br/>用户可选模型 · 流式"]
    D --> F["Stage 3 教育总结<br/>Markdown 诊断报告"]
    E --> F
    F --> G["本地规则算分"]
    G --> H["MySQL 持久化 + Qdrant 索引"]
```

| 阶段        | 职责                                  | 模型                                    | 设计要点                                      |
| --------- | ----------------------------------- | ------------------------------------- | ----------------------------------------- |
| Stage 1   | 字幕 → 结构化 `user`/`assistant` 消息，拆分多句 | **固定** `doubao-seed-1-6-flash-250828` |…
