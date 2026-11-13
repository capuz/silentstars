---
repo: "jztan/redmine-mcp-server"
name: "redmine-mcp-server"
description: "MCP server connecting AI assistants to Redmine: issues, projects, wikis, time tracking, agile boards, and CRM, with OAuth2 multi-user support"
readmeQualityOk: true
url: "https://github.com/jztan/redmine-mcp-server"
homepage: "https://redmine-mcp-server.jztan.com"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent", "agentic-ai", "redmine", "agentic-workflow", "mcp-servers", "mcp-tools", "kanban", "chatgpt", "claude", "claude-code"]
stars: 92
forks: 44
openIssues: 2
closedIssues: 141
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2025-05-25T01:18:59Z"
lastCommitAt: "2026-11-13T11:24:51Z"
lastReleaseAt: "2026-02-20T12:59:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["jztan", "dependabot[bot]", "mmahmed"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/989857106/f5eb1ead-111b-425d-a46b-18f4baf462b8"
discussionCount: 2
---

# Redmine MCP Server

A Model Context Protocol (MCP) server that connects AI assistants to Redmine. It exposes your Redmine instance's projects, issues, time tracking, wiki pages, and files as MCP tools.

**mcp-name: io.github.jztan/redmine-mcp-server**

## [Tool reference](https://github.com/jztan/redmine-mcp-server/blob/HEAD/docs/tool-reference.md) | [Changelog](https://github.com/jztan/redmine-mcp-server/blob/HEAD/CHANGELOG.md) | [Contributing](https://github.com/jztan/redmine-mcp-server/blob/HEAD/docs/contributing.md) | [Troubleshooting](https://github.com/jztan/redmine-mcp-server/blob/HEAD/docs/troubleshooting.md)

## Features

- **53 MCP tools on a stock Redmine, 69 with the RedmineUP and DMSF plugins** (plus 1 operator tool gated by `REDMINE_MCP_EXPOSE_ADMIN_TOOLS=true`): Issues, projects, news, time tracking, wiki, Gantt, file operations, membership management, products and orders, contacts and deals (CRM), DMSF documents, Helpdesk email replies and ticket contacts, and more
- **Interactive Kanban Board**: `show_triage_board` renders a live, drag-and-drop issue board right in the chat via the MCP Apps extension
- **Flexible Authentication**: API key, username/password,…
