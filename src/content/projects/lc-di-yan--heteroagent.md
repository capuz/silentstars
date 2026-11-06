---
repo: "LC-di-yan/HeteroAgent"
name: "HeteroAgent"
description: "HeteroAgent - LangGraph 1.x + FastAPI multi-agent customer service: deterministic routing, RAG, mandatory compliance, interrupt-based HITL, official MCP SDK, OTel GenAI semconv"
originalDescription: "HeteroAgent - LangGraph 1.x + FastAPI multi-agent customer service: deterministic routing, RAG, mandatory compliance, interrupt-based HITL, official MCP SDK, OTel GenAI semconv"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LC-di-yan/HeteroAgent"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-06T18:27:45Z"
lastCommitAt: "2026-11-06T13:19:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 28
maintainers: ["260433711", "LC-di-yan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0cbf23a35773db817141911fef182c96c9a27ca841eb73cd2ed98a110f5a10d/LC-di-yan/HeteroAgent"
---

# HeteroAgent · Intelligent Customer Service Multi-Agent System

A Supervisor-orchestrated customer service system built on **LangGraph 1.x + FastAPI**: deterministic routing → business Agents (RAG Q&A / tickets) → **mandatory compliance review** → aggregated reply. Built-in prompt injection pre-interception, PII detection and redaction, in-graph interrupt-based human-in-the-loop (HITL) approval, and hash-chain auditing.

---

## Table of Contents

- [Capabilities Overview](#能力概览)
- [Architecture](#架构)
- [Quick Start](#快速开始)
- [API](#api)
- [Configuration](#配置)
- [Project Structure](#项目结构)
- [Quality Assurance](#质量保障)
- [Design Trade-offs](#设计取舍)
- [Roadmap](#路线图)

---

## Capabilities Overview

| Domain | Capability |
| --- | --- |
| Orchestration | LangGraph fixed topology (predictable/auditable), routing/tickets constrained by Pydantic schema, typed exception retries |
| Tools | Official MCP SDK (`tooling/`) + `create_agent` tool loop, each call produces an `execute_tool` span |
| Retrieval | FAISS vector + BM25 (single-character + two-character hybrid tokenization) hybrid retrieval + RRF fusion; scores normalized to [0,1]; supports Contextual Retrieval ingestion |
| Compliance…
