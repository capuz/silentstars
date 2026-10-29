---
repo: "rohan-protocol/sdk"
name: "sdk"
description: "Official Model Context Protocol (MCP) server & in-memory privacy gateway. Prevents prompt injections & context leaks with gasless Midnight settlement."
readmeQualityOk: true
url: "https://github.com/rohan-protocol/sdk"
homepage: "https://rohanprotocol.network"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-23T12:26:16Z"
lastCommitAt: "2026-10-29T21:23:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["rohan-ops1", "jvonb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e949cb61a7aa8cd7801e1daa67b8faf16c54376296dec82cf2196cd9124dd74/rohan-protocol/sdk"
---

# 🛡️ Rohan Protocol

### Official Model Context Protocol (MCP) Server & Security Gateway

**The in-memory security proxy preventing LLM context leaks, credential exfiltration, and prompt injections during tool execution.**

> 📦 **Official Open-Source MCP Server Monorepo**  
> The core Model Context Protocol (MCP) server implementation is located directly in this repository at [`packages/mcp/`](https://github.com/rohan-protocol/sdk/blob/HEAD/packages/mcp) and distributed on npm as **`@rohan-protocol/mcp`**.

[Run from Source](#-running-the-mcp-server-from-source) • [MCP Tools](#-exposed-mcp-tools) • [Client Setup](#-universal-mcp-client-setup) • [Architecture](#-architecture) • [Security](#-security-register-threat--mitigation)

> ⚠️ Public Beta (v0.6.2): Rohan currently enforces client-side RAM witness isolation, V-01 semantic policy firewalls, and V-02 deterministic memory zeroization (zeroize) to shield MCP tool calls while native client-side WASM ZK-SNARK proving circuits are under active research (Milestone 1).

## ⚡ The Problem: Plaintext Context Leaks in MCP

The Model Context Protocol (MCP) connects autonomous agents to tools. However, transport encryption (TLS) only…
