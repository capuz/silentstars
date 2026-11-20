---
repo: "xifanz42/nl2sql_agent"
name: "nl2sql_agent"
description: "A lightweight natural-language database query tool that supports multi-turn dialogue to refine the query goal, precisely outputs SQL queries, executes them, performs data analysis, and returns results in natural language. A lightweight system enbales multiple rounds of chat to transfer natural language into SQL query, execute query, perform data analysis and return analysis results."
originalDescription: "轻量化自然语言数据库查询工具，支持多轮对话完善查询目标，精确输出SQL查询语句、执行查询、数据分析并返回自然语言结果。A lightweight system enbales multiple rounds of chat to transfer natural language into SQL query, execute query, perform data analysis and return analysis results."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xifanz42/nl2sql_agent"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["chatbot", "embeddings", "lightweight-framework", "nl2sql", "ai", "text-to-sql", "text2sql", "llm", "streamlit", "streamlit-webapp"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-21T12:50:16Z"
lastCommitAt: "2026-11-20T12:19:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 57
maintainers: ["xifanz42"]
openGraphImageUrl: "https://opengraph.githubassets.com/47db1bc8efbdb652f7708f4629a420ad41a58341d238c4a8a337ddfd851a60bd/xifanz42/nl2sql_agent"
---

# NL2SQL Agent

**简体中文** · [English](https://github.com/xifanz42/nl2sql_agent/blob/HEAD/README_en.md)

A natural-language query agent for PostgreSQL: ask a question in Chinese or English, and the system retrieves domain documents, generates a single read-only SQL statement, executes it, and returns the results with analysis. It provides a FastAPI + React/TypeScript Web UI and a command-line entry point.

> **Internal / self-hosted tool.** There is currently no login, multi-tenancy, or permission system. When deploying, place it behind the company SSO / reverse proxy and do not expose it directly to the public internet.
