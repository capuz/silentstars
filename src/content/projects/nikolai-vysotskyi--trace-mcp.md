---
repo: "nikolai-vysotskyi/trace-mcp"
name: "trace-mcp"
description: "MCP server for Claude Code and Codex. One tool call replaces ~42 minutes of agent exploration"
readmeQualityOk: true
url: "https://github.com/nikolai-vysotskyi/trace-mcp"
homepage: "https://trace-mcp.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "claude-code", "code-intelligence", "developer-tools", "mcp", "mcp-server", "claude", "claude-ai", "claude-code-plugin", "claude-code-skill"]
stars: 100
forks: 14
openIssues: 2
closedIssues: 43
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-03T09:54:03Z"
lastCommitAt: "2026-08-27T14:32:05Z"
lastReleaseAt: "2026-04-05T01:03:05Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 35
maintainers: ["nikolai-vysotskyi", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e1a9aec5d9e3450ec5583098d92f637a978dd370176b07f9a958c80252fc54/nikolai-vysotskyi/trace-mcp"
fundingLinks: ["KO_FI:https://ko-fi.com/vysotskyi"]
---

</p>

<h1 align="center">trace-mcp</h1>

</p>

</p>

  <strong>AI agents recompute the same work. trace-mcp makes them reuse instead.</strong><br>
  The recomputation → reuse layer for AI systems.
</p>

  <strong>40–50% fewer tokens</strong> on average &nbsp;·&nbsp; <strong>up to 2× effective capacity</strong> &nbsp;·&nbsp; <strong>up to 99% less redundant processing</strong>
  <br>
  <sub>Based on early benchmarks across agent workflows with repeated context and dependency traversal.</sub>
</p>

> AI systems don't scale because they recompute instead of reuse. Every turn, the agent re-reads the same files, re-traverses the same dependencies, and re-inflates the context window with structure it already discovered. Token bills grow. Latency grows. Reasoning quality drops. The model isn't the bottleneck — the recomputation leak is.
>
> trace-mcp builds a framework-aware graph of your codebase **once**, then serves it through MCP so the agent reasons from a precomputed structure instead of brute-reading the repo. Ask *"what breaks if I change this model?"* — instead of 80 Grep calls and 190 file reads, the agent calls `get_change_impact` once and gets the blast radius across PHP,…
