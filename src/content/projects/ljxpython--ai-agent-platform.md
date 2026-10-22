---
repo: "ljxpython/ai-agent-platform"
name: "ai-agent-platform"
description: "Enterprise-grade AI Agent platform foundation, customized from the LangGraph ecosystem and ready to use out of the box (FastAPI + Vue 3 + MCP + Skills + sandboxed workspace + long-term memory)"
originalDescription: "企业级 AI Agent 平台底座，基于 LangGraph 生态体系二次开发，开箱即用（FastAPI + Vue 3 + MCP + Skills + 沙箱工作区 + 长期记忆）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ljxpython/ai-agent-platform"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 21]
topics: ["agent", "agentic-ai", "langgraph", "agent-platform", "ai-agent", "deepagents", "deer-flow", "fastapi", "langchain", "mcp"]
stars: 144
forks: 23
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 3
recentReleases: 3
createdAt: "2025-06-05T02:53:10Z"
lastCommitAt: "2026-10-22T08:52:02Z"
lastReleaseAt: "2026-09-29T13:00:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 49
maintainers: ["open-swe", "ljxpython"]
openGraphImageUrl: "https://opengraph.githubassets.com/477d295b7d52108a2702104317a764fe7018570d25d0b4ea47db590a96c5b2e8/ljxpython/ai-agent-platform"
discussionCount: 0
---

---

## Project Positioning: What Problem Does It Solve?

Many teams building Agents get stuck at the demo stage. Platform governance, runtime execution, state storage, and frontend interaction are all tangled into one "big ball of mud." When they move to production, they face missing permissions, lost state, difficult model switching, and slow, painful customization.

This project was built to solve that pain point. It provides an engineering foundation **that can be used directly for secondary development and for quickly building a private enterprise AI Agent platform**:

- **Decouple platform governance from Agent execution**: The platform layer is responsible for authentication and authorization, multi-tenant/project isolation, audit tracing, and model Catalog governance. The Agent runtime is responsible for graph orchestration, tool assembly, and state machine execution. The two layers communicate through managed contracts and do not contaminate each other.
- **Embrace mainstream open-source ecosystems instead of building closed wheels**: It is designed around the `LangGraph / LangChain` family of ecosystems and draws deeply on the engineering ideas of `open-swe`,…
