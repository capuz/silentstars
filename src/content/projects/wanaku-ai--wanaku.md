---
repo: "wanaku-ai/wanaku"
name: "wanaku"
description: "Wanaku MCP Router"
readmeQualityOk: true
url: "https://github.com/wanaku-ai/wanaku"
homepage: "https://wanaku.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 43]
topics: ["agentic", "agentic-ai", "agents", "artificial-intelligence", "mcp", "mcp-server"]
stars: 133
forks: 49
openIssues: 33
closedIssues: 582
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2025-02-01T13:12:59Z"
lastCommitAt: "2026-08-23T04:08:42Z"
lastReleaseAt: "2026-04-10T09:14:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 99
undervaluedScore: 49
maintainers: ["orpiske", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5db84512cbb60770a4f5b26004048d50b7dec05e496b39596c96e2c8b2adc470/wanaku-ai/wanaku"
discussionCount: 17
---

# Wanaku — A Governed Action Proxy for AI Agents

Wanaku is a governed action proxy for AI agents. It sits between agents and the systems they act on, intercepting tool calls, agent-to-agent messages, and inference traffic. Integration developers build [Apache Camel](https://camel.apache.org/) routes and publish them as tools; agents call those tools with parameters, but Wanaku runs the actual work — the agent never touches backend systems directly. Policy, identity, data controls, and audit happen in the proxy, not in the agent.

The project name comes from the origins of the word [Guanaco](https://en.wikipedia.org/wiki/Guanaco), a camelid native to
South America.

## Key Features

- **Agent Isolation** — Agents call tools through Wanaku; they never reach backend systems directly
- **Policy Enforcement** — LLM-powered evaluators + WASM action scripts classify, filter, and block tool calls in the proxy layer
- **Identity & Auth** — Authentication and authorization via oauth2-proxy and Keycloak, enforced before actions reach backends
- **Tool Discovery** — Auto-discover tools from upstream MCP servers; integration developers publish Camel routes as tools
- **Namespace Isolation** —…
