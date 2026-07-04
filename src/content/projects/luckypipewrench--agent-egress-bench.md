---
repo: "luckyPipewrench/agent-egress-bench"
name: "agent-egress-bench"
description: "Tool-neutral attack corpus for AI agent egress security"
url: "https://github.com/luckyPipewrench/agent-egress-bench"
homepage: "https://pipelab.org/blog/agent-egress-bench-benchmark-corpus/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["agent-security", "ai-security", "benchmark", "dlp", "mcp", "prompt-injection", "secret-detection", "egress-security", "agent-firewall", "data-loss-prevention"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T05:39:50Z"
lastCommitAt: "2026-07-04T19:19:34Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 57
maintainers: ["luckyPipewrench", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175018619/d29d0495-5df7-470a-931b-5ab222d49dad"
fundingLinks: ["GITHUB:https://github.com/luckyPipewrench"]
discussionCount: 0
---

</p>

</p>

A standardized test corpus for evaluating AI agent egress security tools. 197 logical cases across 18 categories, covering secret exfiltration, prompt injection, SSRF, hostname exfiltration, MCP tool poisoning, chain detection, MCP drift, A2A protocol scanning, WebSocket DLP, encoding evasion, shell obfuscation, and cryptocurrency/financial data protection.

**This tests the security tool, not the agent.** Most benchmarks in this space (AgentDojo, InjecAgent, CyberSecEval, AgentHarm) test whether the LLM behaves correctly. This one tests whether the firewall, proxy, or scanner sitting between the agent and the network catches the attack.

```
┌─────────────────────┐     ┌──────────────────────┐     ┌──────────┐
│  AI Agent           │     │  Security Tool        │     │          │
│  (has secrets,      │────▶│  (proxy / firewall /  │────▶│ Internet │
│   runs tools)       │     │   MCP wrapper)        │     │          │
└─────────────────────┘     └──────────────────────┘     └──────────┘
                                     ▲
                            agent-egress-bench
                            tests THIS layer
```

## Why this exists

AI agents that can browse…
