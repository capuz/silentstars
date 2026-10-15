---
repo: "mcp-contracts/mcp-contracts"
name: "mcp-contracts"
description: "Snapshot, diff, and validate MCP (Model Context Protocol) tool schemas. Brings OpenAPI-level contract safety to the MCP ecosystem — catch breaking changes before they hit    production."
readmeQualityOk: true
url: "https://github.com/mcp-contracts/mcp-contracts"
homepage: "https://www.npmjs.com/package/@mcp-contracts/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api-compatibility", "breaking-changes", "cli", "contract-testing", "developer-tools", "diff", "mcp", "mcp-server", "model-context-protocol", "schema-validation"]
stars: 6
forks: 1
openIssues: 4
closedIssues: 18
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-20T21:19:16Z"
lastCommitAt: "2026-10-15T08:31:32Z"
lastReleaseAt: "2026-07-14T07:18:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 64
maintainers: ["lukekania", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9d049ec2c1e46639a00cf9f852eda5b4212d3610ee9e97c7dc05bbaa41ca660/mcp-contracts/mcp-contracts"
---

# 🔏 mcp-contracts

### Contract safety for MCP servers

**Pin your tool schemas. Diff every change. Catch breaking changes and tool poisoning before your agents do.**

[Quick Start](#quick-start) · [Commands](#commands) · [Project Config](#project-config-mcpcontractsjson) · [CI Integration](#ci-integration) · [Packages](#packages)

```
  mcp-contracts diff — acme-server v1.0.0 → v1.1.0

  🔴 BREAKING  tool "create_contact" — required parameter "phone" added
  🟡 WARNING   tool "search_contacts" — description changed
  🟢 SAFE      tool "export_csv" — new tool added

  Summary: 1 breaking · 1 warning · 1 safe
```

Your MCP server updated. Did the tool schemas change? Did descriptions get rewritten with hidden instructions? You'd never know — until now. `mcpdiff` treats MCP tool schemas as **contracts**: versionable, diffable, testable, and signable artifacts.

## Highlights

- ⚡ **Two-command onboarding** — `mcpdiff init` writes your project config and captures the baseline; `mcpdiff check` does the rest, locally and in CI
- 🔍 **Semantic diff engine** — every schema change classified as 🔴 breaking, 🟡 warning, or 🟢 safe, with CI-friendly exit codes
- 🛡️ **Tool-poisoning…
