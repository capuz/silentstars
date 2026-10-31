---
repo: "samaxbytez/freeagent-mcp"
name: "freeagent-mcp"
description: "MCP server for the FreeAgent API"
readmeQualityOk: true
url: "https://github.com/samaxbytez/freeagent-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["accounting", "ai", "claude", "freeagent", "mcp", "model-context-protocol"]
stars: 6
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-15T13:06:35Z"
lastCommitAt: "2026-10-31T15:58:31Z"
lastReleaseAt: "2026-10-31T15:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 56
maintainers: ["samaxbytez", "Chris-Coombes", "GraemeF"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bb28398a87e99aaf213645c8ca661a0fe142d716825ba8c0b64f870f67c4a38/samaxbytez/freeagent-mcp"
---

# freeagent-mcp-server

An [MCP](https://modelcontextprotocol.io) server that gives Claude, or any MCP
client, the [FreeAgent](https://www.freeagent.com/) accounting API: 76 tools for
invoices, expenses, bills, contacts, projects, timeslips, banking, estimates,
credit notes and the accounting reports.

Text that comes back from FreeAgent, such as a bank transaction's reference, can
be written by someone outside your business, so the server assumes it may carry
instructions aimed at the model. Tools that could hand over account access or
send data out of the account are **off by default**, every tool says whether it
reads, writes or deletes, and receipts are only read from one folder you choose.

## Contents

- [How it fits together](#how-it-fits-together)
- [Quick start](#quick-start)
- [What it can do](#what-it-can-do)
- [Settings](#settings)
- [Development](#development)
- [Documentation](#documentation)
- [Links](#links)

## How it fits together

```
Claude Desktop / Cowork / Claude Code ──stdio──▶ freeagent-mcp-server (Node.js, on your machine)
                                                   ├─ 76 tools; sensitive ones only with FREEAGENT_ENABLE_SENSITIVE_TOOLS…
