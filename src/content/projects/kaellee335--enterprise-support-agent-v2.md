---
repo: "KaelLee335/enterprise-support-agent-v2"
name: "enterprise-support-agent-v2"
description: "A full-stack Python agent demo for enterprise after-sales scenarios: FastAPI, SQLite, LangChain RAG, LangGraph, Vue, and Docker, including tenant boundaries, evaluation, and fault verification."
originalDescription: "面向企业售后场景的 Python Agent 全栈演示：FastAPI、SQLite、LangChain RAG、LangGraph、Vue 与 Docker，含租户边界、评估和故障验证。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/KaelLee335/enterprise-support-agent-v2"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 50
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-16T02:40:22Z"
lastCommitAt: "2026-11-17T12:16:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["KaelLee335"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1ff2232938295850ec73fa879ae9441db8f392657cf572d75ce447073a60d4d/KaelLee335/enterprise-support-agent-v2"
---

# Enterprise Support Agent V2｜企业售后智能客服 Agent

A full-stack Python Agent demo project for after-sales scenarios. It shows how natural-language requests can be connected to traceable, evaluable business workflows with permission boundaries. The project migrates from a Dify workflow to code implementation, covering FastAPI, SQLite, LangChain, LangGraph, RAG, automated testing, Docker, and a Vue demo interface.

## Project Highlights

- **End-to-end request chain**: fictional requester/approver identities and tenant validation → FastAPI → LangGraph deterministic routing → SQLite read-only orders, policy RAG, local simulated logistics HTTP API, or demo approval → structured replies and run records.
- **Verifiable policy Q&A**: policy source citations, evidence display, safe degradation when no evidence is found, and constraint rules for refund time limits, quality issues, logistics, and privacy boundaries.
- **Reliability and security boundaries**: tenant isolation, demo approver roles, self-approval rejection, prompt-injection refusal, checkpoint integrity pre-checks, lock files, and CI.
- **Runnable demo interface**: a Vue 3 + Vite page uses the existing FastAPI endpoints to…
