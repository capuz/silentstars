---
repo: "wanaku-ai/wanaku"
name: "wanaku"
description: "Wanaku Governed Action Proxy for AI Agents"
readmeQualityOk: true
url: "https://github.com/wanaku-ai/wanaku"
homepage: "https://wanaku.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 31]
topics: ["agentic", "agentic-ai", "agents", "artificial-intelligence", "mcp", "mcp-server"]
stars: 134
forks: 54
openIssues: 57
closedIssues: 642
watchers: 5
contributors: 24
recentReleases: 0
createdAt: "2025-02-01T13:12:59Z"
lastCommitAt: "2026-10-06T10:42:18Z"
lastReleaseAt: "2026-04-10T09:14:10Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 98
undervaluedScore: 49
maintainers: ["orpiske", "dependabot[bot]", "matheusandre1"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1962ab6306c06167b6dea2c71a44b676d618e688734816d427940878df865e7/wanaku-ai/wanaku"
discussionCount: 29
---

# Wanaku — A Governed Action Proxy for AI Agents

Wanaku is a governed action proxy for AI agents. It sits between agents and the systems they act on, intercepting
[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) tool calls, agent-to-agent messages, and inference 
traffic. Before version 0.2.0, the project was named Wanaku MCP Router. It was renamed to Wanaku Governed Execution Proxy
to reflect its expanded scope.

Wanaku supports open standards for AI agents and provides first-class integration with enterprise frameworks, 
including [Apache Camel](https://camel.apache.org/) and [Quarkus](https://quarkus.io/). For example, integration 
developers build Apache Camel routes and use Wanaku's [Camel Integration Capability](https://github.com/wanaku-ai/camel-integration-capability) 
to publish them as tools. Agents call those tools with parameters, but Wanaku runs the work. Agents never access backend
systems directly. The proxy enforces policy, identity, data controls, and audit requirements.

The project name comes from the origin of [guanaco](https://en.wikipedia.org/wiki/Guanaco), a camelid native to South America.

## Key Features

- **Agent Isolation** — Agents…
