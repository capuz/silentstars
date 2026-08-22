---
repo: "debugmcp/mcp-debugger"
name: "mcp-debugger"
description: "A headless, agentic debugger over MCP — let your AI agents debug running programs in seven languages."
readmeQualityOk: true
url: "https://github.com/debugmcp/mcp-debugger"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 159
forks: 19
openIssues: 1
closedIssues: 116
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2025-06-10T10:32:52Z"
lastCommitAt: "2026-08-22T04:05:35Z"
lastReleaseAt: "2026-05-31T03:02:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 45
maintainers: ["debugmcpdev", "dependabot[bot]", "Finomosec"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/999492182/0cee88fa-09cd-4f3a-a550-711f4fca2ba9"
---

# mcp-debugger

</div>

**A headless, agentic debugger over MCP — let your AI agents debug running programs in eight languages.**

## 🎯 Overview

mcp-debugger is a Model Context Protocol (MCP) server that exposes step-through debugging as structured tool calls. It lets AI agents set breakpoints, inspect variables, evaluate expressions, and step through running programs across eight languages — driving real language debuggers through the Debug Adapter Protocol (DAP).

**No IDE required.** mcp-debugger runs anywhere Node.js runs: CI runners, Docker containers, Kubernetes pods, SSH boxes, and the sandboxes that cloud coding agents live in. It's the debugger for where IDEs can't go.

### When to use mcp-debugger vs an IDE-bound debug server

Microsoft's [DebugMCP](https://github.com/microsoft/DebugMCP) exposes VS Code's debugger over MCP and is a good choice when your agent works *inside* a running VS Code. The two projects make different structural trade-offs:

| | mcp-debugger | microsoft/DebugMCP |
|---|---|---|
| Runs headless (CI, containers, k8s, cloud agents) | ✅ standalone Node process | ❌ requires a running VS Code |
| Transports | stdio + Streamable HTTP | Streamable HTTP…
