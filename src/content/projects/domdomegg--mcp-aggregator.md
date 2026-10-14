---
repo: "domdomegg/mcp-aggregator"
name: "mcp-aggregator"
description: "🌐 Combine multiple MCP servers behind a single endpoint with one login"
readmeQualityOk: true
url: "https://github.com/domdomegg/mcp-aggregator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T21:52:49Z"
lastCommitAt: "2026-10-14T08:58:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 42
maintainers: ["dependabot[bot]", "domdomegg", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df5d24ba487729c0f6a0e870bf221318126e6a85096e78ef9b9e8ef010eee03/domdomegg/mcp-aggregator"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# mcp-aggregator

> Save your and your team's time configuring [MCP servers](https://modelcontextprotocol.io/) in every client — set up a single endpoint that combines all your MCPs behind one login.

If you run several remote MCP servers (e.g. [Gmail](https://github.com/domdomegg/gmail-mcp), [Google Calendar](https://github.com/domdomegg/google-cal-mcp), [Airtable](https://github.com/domdomegg/airtable-mcp-server) via [mcp-auth-wrapper](https://github.com/domdomegg/mcp-auth-wrapper)) and multiple MCP clients (e.g. Claude.ai, Claude Code, VS Code), every client needs to be configured with each server separately. Add a new server? Update every client. Want your team to use the same set of tools? Configure each person's machine.

mcp-aggregator solves this: you configure your upstream servers once, then point all your MCP clients at one URL. When a user connects, they log in via your existing identity provider (Google Workspace, Microsoft Entra ID, Okta, Auth0, Keycloak, etc.). The aggregator then presents them with every tool from every upstream, namespaced and ready to use (e.g. `gmail__send_email`, `calendar__create_event`). If an upstream requires its own OAuth (like a Google…
