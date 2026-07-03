---
repo: "harness/mcp-server"
name: "mcp-server"
description: "This is the official repo for the Harness MCP server"
url: "https://github.com/harness/mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 78
forks: 59
openIssues: 5
closedIssues: 21
watchers: 3
contributors: 41
recentReleases: 0
createdAt: "2025-05-14T17:04:13Z"
lastCommitAt: "2026-07-03T06:23:44Z"
lastReleaseAt: "2025-08-27T13:34:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 54
maintainers: ["cursor[bot]", "thisrohangupta", "sunilgattupalle"]
openGraphImageUrl: "https://opengraph.githubassets.com/43787d07735b58d95b286384a47398df04fbd412687a901239d0a6e73c20e493/harness/mcp-server"
---

## Harness MCP Server 2.0

An MCP (Model Context Protocol) server that gives AI agents full access to the Harness.io platform through 11 consolidated tools and 219 resource types.

## Why Use This MCP Server

Most MCP servers map one tool per API endpoint. For a platform as broad as Harness, that means 240+ tools — and LLMs get worse at tool selection as the count grows. Context windows fill up with schemas, and every new endpoint means new code.

This server is built differently:

- **11 tools, 219 resource types.** A registry-based dispatch system routes `harness_list`, `harness_get`, `harness_create`, etc. to any Harness resource — pipelines, services, environments, orgs, projects, feature flags, cost data, and more. The LLM picks from 11 tools instead of hundreds.
- **Full platform coverage.** 38 default toolsets spanning CI/CD, GitOps, Feature Flags, Cloud Cost Management, Security Testing, Chaos Engineering, Database DevOps, Internal Developer Portal, Software Supply Chain, Infrastructure as Code Management, Governance, Service Overrides, Knowledge Graph, Visualizations, and more. Opt-in Ansible coverage is available when you need inventory and playbook data.
-…
