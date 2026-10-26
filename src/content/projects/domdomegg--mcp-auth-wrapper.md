---
repo: "domdomegg/mcp-auth-wrapper"
name: "mcp-auth-wrapper"
description: "🔐 Turn your stdio MCP server into a multi-user OAuth-authenticated remote MCP server"
readmeQualityOk: true
url: "https://github.com/domdomegg/mcp-auth-wrapper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T05:17:21Z"
lastCommitAt: "2026-10-26T03:04:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 54
maintainers: ["dependabot[bot]", "domdomegg", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae64bd855a4edec40823d970cffae1556723b72071db0604eaa23b8ea600c9de/domdomegg/mcp-auth-wrapper"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# mcp-auth-wrapper

> Turn any local [MCP server](https://modelcontextprotocol.io/) into a multi-tenant hosted remote MCP, with per-user credentials.

Connecting AI agents to tools can help you and your team be more productive. [MCP servers](https://modelcontextprotocol.io/docs/learn/server-concepts) are a great way to do this — but many of them only run locally and require per-user setup (like API keys) that can be difficult for non-technical users. What if you want your whole team to use one, each with their own credentials?

mcp-auth-wrapper lets you do exactly this: it hosts any MCP server for multiple users with auth and configuration. Your team can login via your existing identity provider (Google Workspace, Microsoft Entra ID, Okta, Auth0, Keycloak, etc.), provide their per-user config in a simple form interface, and mcp-auth-wrapper will automatically spin up the MCP for each user.

mcp-auth-wrapper works with Claude.ai, Claude Code and any other MCP client that supports remote servers.

For those interested in the technical details, mcp-auth-wrapper wraps stdio MCP servers that accept environment variables as [streamable…
