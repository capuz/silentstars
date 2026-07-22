---
repo: "KryptosAI/mcp-observatory"
name: "mcp-observatory"
description: "CI-native security testing for MCP servers. Attack simulation, schema drift detection, and health scoring before agents depend on them."
readmeQualityOk: true
url: "https://github.com/KryptosAI/mcp-observatory"
homepage: "https://github.com/KryptosAI/mcp-observatory#readme"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [62, 37]
topics: ["cli", "mcp", "model-context-protocol", "regression-testing", "ai-agent", "developer-tools", "mcp-server", "schema-drift", "github-action", "mcp-security"]
stars: 239
forks: 29
openIssues: 50
closedIssues: 46
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-03-19T00:28:30Z"
lastCommitAt: "2026-07-22T06:10:16Z"
lastReleaseAt: "2026-03-20T01:46:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 26
maintainers: ["KryptosAI", "dependabot[bot]", "albatrossflyon-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/58316ca6ae3bed37098d75e4b85f8942bee4f90b06e744489cb3f20852dc1331/KryptosAI/mcp-observatory"
discussionCount: 5
---

> 🇨🇳 中文文档: [README.zh-CN.md](https://github.com/KryptosAI/mcp-observatory/blob/HEAD/README.zh-CN.md) | 欢迎中国开发者贡献!

</p>

<h1 align="center">MCP Observatory</h1>

<details>
<summary>More badges</summary>

</details>

**Secure the MCP servers you're building.** MCP Observatory is the CI-native security tool for teams shipping custom MCP servers. Test during development, catch schema drift, simulate attacks, and generate compliance evidence — before agents depend on your servers.

> **Runtime enforcement:** Use [mcp-seatbelt](https://github.com/KryptosAI/mcp-seatbelt) to block dangerous MCP tool calls at runtime based on observatory scan results.

## Get Started

```bash
npx @kryptosai/mcp-observatory demo
```

Scans your configured MCP servers (or a built-in demo server if you have none) and shows your safety grade in seconds. No config, no arguments — instant value.

Have servers? Scan them all:

```bash
npx @kryptosai/mcp-observatory
```

Test a specific server:

```bash
npx @kryptosai/mcp-observatory test npx -y @modelcontextprotocol/server-everything
```

Add CI + Code Scanning in one command:

```bash
npx @kryptosai/mcp-observatory setup-ci --all --command "npx -y…
