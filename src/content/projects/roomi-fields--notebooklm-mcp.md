---
repo: "roomi-fields/notebooklm-mcp"
name: "notebooklm-mcp"
description: "Google Gemini Notebook (formerly NotebookLM) over MCP + a local HTTP REST API. Citation-backed Q&A, full Studio generation, chat history, multi-account rotation. For Claude Code, Codex, Cursor, n8n, Zapier, Make."
readmeQualityOk: true
url: "https://github.com/roomi-fields/notebooklm-mcp"
homepage: "https://notebooklm.roomi-fields.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["automation", "mcp", "mcp-server", "n8n", "notebooklm", "typescript", "anthropic", "citations", "claude-code", "google-notebooklm"]
stars: 240
forks: 66
openIssues: 1
closedIssues: 18
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-11-23T06:58:06Z"
lastCommitAt: "2026-11-13T05:40:30Z"
lastReleaseAt: "2025-11-23T08:10:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 41
maintainers: ["roomi-fields", "Apollyus", "teodor-t-tenev"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0a3b98130236e008294a71fa429dc83ee37f7074112efe30b5af4af9d3c17f/roomi-fields/notebooklm-mcp"
---

# NotebookLM REST API + MCP server

**Automate Google Gemini Notebook — formerly, and still widely known as, NotebookLM — at scale. 59-endpoint HTTP REST API for n8n / Zapier / Make / curl, an MCP server for Claude Code / Cursor / Codex, a UTCP interface for clients that call the API natively, and Rust and Ruby clients. Citation-backed Q&A, full Studio generation (audio · video · infographic · report · presentation · data table), multi-account rotation with auto-reauth across personal and Google Workspace accounts.**

> v4.9.0 — **Node 22 is now the floor, and the last four open advisories are gone with it.** The declared floor of Node 18 had quietly become fiction: three production dependencies already required Node 20 or newer, and the test matrix kept passing on 18 without exercising them. Raising it also let the third-party file globber go — its dependency chain carried four advisories with no fix upstream — replaced by Node's built-in search, now actually under test. Builds on **4.0.0**, where the HTTP API stopped being open to the network and to any web page ([GHSA-p69m-c5rf-g2c3](https://github.com/roomi-fields/notebooklm-mcp/security/advisories/GHSA-p69m-c5rf-g2c3)): it…
