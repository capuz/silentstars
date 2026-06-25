---
repo: "stephonGAO/milu"
name: "milu"
description: "Production-ready multi-user AI agent framework — 9 LLM providers with Chinese models (Qwen, DeepSeek, Kimi, GLM) first-class. Built-in tools, MCP, RAG, sub-agents, skills, scheduler and an agent pool. Run it as a CLI/service, or embed it as a library."
url: "https://github.com/stephonGAO/milu"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["agent", "agent-framework", "agentic-ai", "chatbot", "deepseek", "langchain", "llm", "multi-tenant", "qwen", "rag"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-08T06:06:00Z"
lastCommitAt: "2026-06-25T06:37:37Z"
lastReleaseAt: "2026-06-18T05:03:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1262587368/96c1fe6f-ade3-4557-9d82-98478784a53c"
---

# 🦌 milu

**Production-ready multi-user AI agents — with Chinese LLMs as first-class citizens.**

Multi-user agent pool · One interface for 9 LLM providers (Chinese-first) · Built-in tools & MCP · Sub-agents · Skills · RAG · Scheduler · Multi-channel IM gateway · Observability dashboard

**English** | [简体中文](README.zh-CN.md)

<sub>Multi-user web UI · <code>milu serve</code> — streaming chat with tools, skills & sub-agents</sub>

<sub>Built-in cross-user observability dashboard · <code>milu serve</code> → <code>/dashboard</code></sub>

</div>

---

## Why milu?

Most agent frameworks stop at single-user demos, and treat Chinese LLM providers as an afterthought. milu starts where they stop:

- 🏭 **From demo to production in one library**<br>
  `AgentPool` gives you per-user agent isolation, LRU/TTL eviction, global concurrency limits and shared MCP processes. The question every framework leaves as "an exercise for the reader" — *"my demo works, how do I serve 100 concurrent users without sessions bleeding into each other?"* — is answered here, backed by 1300+ tests. The same pool maps tenants to their own API keys (`KeyedLLMProvider`), so it scales from a side project to…
