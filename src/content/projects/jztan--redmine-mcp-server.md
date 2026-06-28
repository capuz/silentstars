---
repo: "jztan/redmine-mcp-server"
name: "redmine-mcp-server"
description: "MCP server that lets AI assistants manage Redmine issues, projects, wikis, and time tracking"
url: "https://github.com/jztan/redmine-mcp-server"
homepage: "https://redmine-mcp-server.jztan.com"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agent", "agentic-ai", "redmine", "agentic-workflow", "mcp-servers", "mcp-tools"]
stars: 45
forks: 21
openIssues: 0
closedIssues: 37
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-05-25T01:18:59Z"
lastCommitAt: "2026-06-28T01:43:52Z"
lastReleaseAt: "2026-02-20T12:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["jztan", "dependabot[bot]", "martindglaser"]
openGraphImageUrl: "https://opengraph.githubassets.com/04a560a5633f8b11c50c8857431a691b456c0c14811f7a2aaf6f1baee9ea0b26/jztan/redmine-mcp-server"
discussionCount: 1
---

# Redmine MCP Server

A Model Context Protocol (MCP) server that integrates with Redmine project management systems. This server provides seamless access to Redmine data through MCP tools, enabling AI assistants to interact with your Redmine instance.

**mcp-name: io.github.jztan/redmine-mcp-server**

  </a>
</p>

## [Tool reference](./docs/tool-reference.md) | [Changelog](./CHANGELOG.md) | [Contributing](./docs/contributing.md) | [Troubleshooting](./docs/troubleshooting.md)

## Features

- **45 MCP Tools** (plus 1 operator tool gated by `REDMINE_MCP_EXPOSE_ADMIN_TOOLS=true`): Issues, projects, time tracking, wiki, Gantt, file operations, membership management, products, contacts (CRM), DMSF documents, and more
- **Flexible Authentication**: API key, username/password, or OAuth2 per-user tokens
- **Prompt Injection Protection**: User-controlled content wrapped in boundary tags for safe LLM consumption
- **Read-Only Mode**: Restrict to read-only operations via `REDMINE_MCP_READ_ONLY` environment variable
- **HTTP File Serving**: Secure attachment access via UUID-based URLs with automatic expiry
- **Pagination Support**: Efficiently handle large result sets with configurable limits…
