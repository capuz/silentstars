---
repo: "zloether/serverless-mcp-server"
name: "serverless-mcp-server"
description: "Template for a serverless MCP server"
readmeQualityOk: true
url: "https://github.com/zloether/serverless-mcp-server"
language: "Python"
languages: ["Python", "HCL"]
languagePcts: [65, 34]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-18T17:58:43Z"
lastCommitAt: "2026-11-03T10:53:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["zloether", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9617d0dcfd18497c6f7cae36c0e2c84eeea0cfeca640d1c5fb1361079aeb6f0f/zloether/serverless-mcp-server"
---

# serverless-mcp-server

[MCP (Model Context Protocol)](https://modelcontextprotocol.io/) is the open
standard AI tools like Claude use to call external tools over a standard
API — a "remote MCP server" is one you host yourself and connect to Claude.ai
(or another MCP-capable tool) as a custom connector, instead of running
locally on your machine.

Template for a serverless remote MCP server on AWS, deployable as a Claude.ai
custom connector: API Gateway + Lambda + Cognito OAuth, with rate limiting
(API Gateway throttling, Lambda concurrency cap, DynamoDB usage counter)
active from the start. Ships with a single `hello_world` tool that proves the
whole chain — discovery → OAuth login → token → tool call → usage counter —
works end to end before you write any real tool logic.

See [`docs/design-notes.md`](https://github.com/zloether/serverless-mcp-server/blob/HEAD/docs/design-notes.md) for the architecture and
the reasoning behind each decision. See [`AGENTS.md`](https://github.com/zloether/serverless-mcp-server/blob/HEAD/AGENTS.md) for repo
conventions.

Tested end to end with both Claude.ai's and ChatGPT's custom connector
support (see `docs/chatgpt-oauth-notes.md` for…
