---
repo: "aws/mcp-proxy-for-aws"
name: "mcp-proxy-for-aws"
description: "AWS MCP Proxy Server"
readmeQualityOk: true
url: "https://github.com/aws/mcp-proxy-for-aws"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["aws", "mcp", "proxy", "sigv4"]
stars: 361
forks: 63
openIssues: 6
closedIssues: 30
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2025-09-24T15:02:25Z"
lastCommitAt: "2026-10-13T10:55:28Z"
lastReleaseAt: "2026-04-15T14:57:45Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 36
maintainers: ["dependabot[bot]", "arnewouters", "anasstahr"]
openGraphImageUrl: "https://opengraph.githubassets.com/de78bf7f8cd0d8242fc0873bf68c760f741a2eca85fc866a6a4794330b71d23a/aws/mcp-proxy-for-aws"
---

# MCP Proxy for AWS

## Overview

The **MCP Proxy for AWS** package provides two ways to connect AI applications to MCP servers on AWS:

1. **Using it as a proxy** - It becomes a lightweight, client-side bridge between MCP clients (AI assistants like Claude Desktop, Kiro CLI) and MCP servers on AWS. (See [MCP Proxy](#mcp-proxy))
2. **Using it as a library** - Programmatically connect popular AI agent frameworks (LangChain, LlamaIndex, Strands Agents, etc.) to MCP servers on AWS. (See [Programmatic Access](#programmatic-access))

### When Do You Need This Package?

- You want to connect to **MCP servers on AWS** (e.g., using Amazon Bedrock AgentCore) that use AWS IAM authentication (SigV4) instead of OAuth
- You're using MCP clients (like Claude Desktop, Kiro CLI) that don't natively support AWS IAM authentication
- You're building AI agents with popular frameworks like LangChain, Strands Agents, LlamaIndex, etc., that need to connect to MCP servers on AWS
- You want to avoid building custom SigV4 request signing logic yourself

### How This Package Helps

**The Problem:** The official MCP specification supports OAuth-based authentication, but MCP servers on AWS can also use AWS…
