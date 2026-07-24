---
repo: "sattyamjjain/agent-airlock"
name: "agent-airlock"
description: "A deny-by-default contract & type-checker layer for AI agent tool calls — Pydantic-based, in-process, zero-core-deps. Validates the actual tool-call payload (ghost-arg stripping, strict types, self-healing retries) beneath MCP gateways & firewalls. Works with LangChain, OpenAI Agents SDK, PydanticAI & CrewAI."
readmeQualityOk: true
url: "https://github.com/sattyamjjain/agent-airlock"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "ai-security", "crewai", "firewall", "langchain", "llm-safety", "mcp-server", "openai", "pii-masking", "pydantic-ai"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-31T08:43:37Z"
lastCommitAt: "2026-07-24T06:09:26Z"
lastReleaseAt: "2026-04-19T18:51:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["sattyamjjain", "sattyamj-attri"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fcd47bfab6bd6eee1ee3cf21af1155a824919087b3a887aec76c0821adc0456/sattyamjjain/agent-airlock"
discussionCount: 0
---

</a>

### A deny-by-default type-checker and contract layer for AI agent tool calls — the in-process check that runs beneath your MCP gateway

**Strict validation, ghost-argument stripping, and self-healing retries — one decorator, any agent or MCP server. Zero core dependencies.**

**Test suite:** 3,575 tests · **Coverage:** 85.92% · **v0.8.55**

<br/>

[**Get Started in 30 Seconds**](#-30-second-quickstart) · [**Why Airlock?**](#-the-problem-no-one-talks-about) · [**All Frameworks**](#-framework-compatibility) · [**Benchmark**](https://github.com/sattyamjjain/agent-airlock/blob/HEAD/BENCHMARK.md) · [**Cross-tool comparison**](https://github.com/sattyamjjain/agent-airlock/blob/HEAD/benchmarks/blockrate/RESULTS.md) · [**Least-Privilege Benchmark**](https://github.com/sattyamjjain/agent-airlock/blob/HEAD/benchmarks/toolprivbench/RESULTS.md) · [**Docs**](#-documentation)

**⬛ Reproducible block-rate — deterministic, in-process, deny-by-default**

| Benchmark (one command to reproduce) | agent-airlock | Compared with |
|---|---|---|
| **Cross-tool block-rate** · 210 tool calls · `python -m benchmarks.blockrate` | **100% blocked · 0% false-positive · p50 ~2µs/decision** | Meta…
