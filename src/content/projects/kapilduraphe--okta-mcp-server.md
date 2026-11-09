---
repo: "kapilduraphe/okta-mcp-server"
name: "okta-mcp-server"
description: "Okta MCP Server"
readmeQualityOk: true
url: "https://github.com/kapilduraphe/okta-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 22
forks: 7
openIssues: 2
closedIssues: 3
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2025-02-14T19:18:00Z"
lastCommitAt: "2026-11-09T00:53:33Z"
lastReleaseAt: "2026-03-11T00:52:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 31
maintainers: ["kapilduraphe"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e5632379e15c18a512bd063391349ed297ebf21466a1e25b666becab0627be1/kapilduraphe/okta-mcp-server"
---

# Okta MCP Server

This MCP server enables Claude to interact with Okta's user management system, providing comprehensive user and group management capabilities along with onboarding automation.

## Prerequisites

- Node.js (v16 or higher)
- Claude Desktop App
- Okta Developer Account
- Admin API Token from Okta

## Setup Instructions

### 1. Create an Okta Developer Account
- Go to the [Okta Developer Console](https://developer.okta.com/)
- Create a new account or sign in to an existing one
- Note your Okta domain (e.g., `dev-123456.okta.com`)

### 2. Create an API Token
- In the Okta Developer Console, go to Security > API > Tokens
- Click "Create Token"
- Give your token a meaningful name (e.g., "MCP Server Token")
- Copy the token value (you won't be able to see it again)

### 3. Initial Project Setup

Install dependencies:
```bash
npm install
```

### 4. Configure Claude Desktop

Open your Claude Desktop configuration file:

For MacOS:
```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

For Windows:
```bash
code %AppData%\Claude\claude_desktop_config.json
```

Add or update the configuration:
```json
{
    "mcpServers": {
        "okta": {…
