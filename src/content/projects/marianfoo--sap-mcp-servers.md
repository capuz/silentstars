---
repo: "marianfoo/sap-mcp-servers"
name: "sap-mcp-servers"
description: "Monorepo for SAP MCP servers (API Hub, Road Map Explorer, SAP Notes) and their shared SAP authentication module — npm workspaces."
readmeQualityOk: true
url: "https://github.com/marianfoo/sap-mcp-servers"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [68, 29]
topics: ["ai-agents", "mcp", "model-context-protocol", "npm-workspaces", "playwright", "sap", "sap-api-hub", "sap-notes", "sap-roadmap"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T20:24:07Z"
lastCommitAt: "2026-08-10T05:07:07Z"
lastReleaseAt: "2026-08-01T07:22:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 60
maintainers: ["marianfoo", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/20ce4c619fd9d24754a037cd555c6fd0d384b108f049375579223532323a06a1/marianfoo/sap-mcp-servers"
---

# SAP MCP Servers

Monorepo for the SAP **Model Context Protocol (MCP)** servers and the shared SAP authentication
module they build on. Managed with **npm workspaces**.

These servers let an AI agent gather evidence from official SAP sources — the Business Accelerator
Hub, Road Map Explorer, and SAP Notes — from behind SAP login. They power the
[SAP API Policy evidence skill](https://github.com/marianfoo/sap-api-policy-skill), but are usable
standalone with any MCP client (Claude Code, Cursor, Codex, …).

## Packages

| Package (npm) | Dir | Role |
| --- | --- | --- |
| [`@marianfoo/sap-mcp-auth`](https://github.com/marianfoo/sap-mcp-servers/blob/HEAD/packages/auth) | `packages/auth` | Shared SAP IAS/SSO browser-login + session module (Playwright). Used by the three servers below. |
| [`sap-api-hub-mcp`](https://github.com/marianfoo/sap-mcp-servers/blob/HEAD/packages/api-hub) | `packages/api-hub` | MCP server for the SAP Business Accelerator Hub — Published-API status, specs, docs. |
| [`sap-roadmap-mcp`](https://github.com/marianfoo/sap-mcp-servers/blob/HEAD/packages/roadmap) | `packages/roadmap` | MCP server for SAP Road Map Explorer — future/planned features (planning only). |…
