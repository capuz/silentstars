---
repo: "nikolai-vysotskyi/trace-mcp"
name: "trace-mcp"
description: "Framework-aware code intelligence MCP server — 88 framework integrations, 81 languages, 72.7% fewer input tokens to review a pull request, comprehension at parity"
readmeQualityOk: true
url: "https://github.com/nikolai-vysotskyi/trace-mcp"
homepage: "https://trace-mcp.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-agents", "claude-code", "code-intelligence", "developer-tools", "mcp", "mcp-server", "claude", "claude-ai", "claude-code-plugin", "claude-code-skill"]
stars: 197
forks: 24
openIssues: 3
closedIssues: 74
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-04-03T09:54:03Z"
lastCommitAt: "2026-10-25T22:11:53Z"
lastReleaseAt: "2026-04-05T01:03:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 32
maintainers: ["nikolai-vysotskyi", "dependabot[bot]", "IshanSarkar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9772c369d6769aa78484363d1f90c8dfdb5654e5e45f9f6fb64429cff6d532/nikolai-vysotskyi/trace-mcp"
fundingLinks: ["KO_FI:https://ko-fi.com/vysotskyi"]
---

```bash
npm install -g trace-mcp   # MCP server, no app
trace init                 # wire it into your agent, once per machine
trace add                  # index the repo you are in
```

**72.7% fewer input tokens** to review a pull request — median over 60 merged PRs in six repos that are not ours, 13,595 → 3,291 per pull request. [Method and reproduction →](https://trace-mcp.com/pr-context-benchmark.html)

Cheaper is not the same as better, so the same 60 pull requests were reviewed twice and scored blind. The trace-mcp arm **understood the change in 67%** of them against **65%** for naive file loading, at **0.80** false positives per PR against **0.58**. [Quality half of the benchmark →](https://trace-mcp.com/perf/prereg-pr-quality/)

---

## The problem

AI agents pay repeatedly for work they have already done. Every turn, the agent re-reads the same files, re-traverses the same dependencies, and re-inflates the context window with structure it discovered five steps ago. That repeated work is most of what a long session costs in tokens and latency.

trace-mcp builds a framework-aware graph of your codebase **once**, then serves it through MCP so the agent reasons from a…
