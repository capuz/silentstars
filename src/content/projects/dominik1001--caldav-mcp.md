---
repo: "dominik1001/caldav-mcp"
name: "caldav-mcp"
description: "🗓️ A CalDAV Model Context Protocol (MCP) server to expose calendar operations as tools for AI assistants."
readmeQualityOk: true
url: "https://github.com/dominik1001/caldav-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["caldav", "mcp-server", "typescript", "mcp"]
stars: 103
forks: 36
openIssues: 5
closedIssues: 8
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2025-05-16T11:35:54Z"
lastCommitAt: "2026-10-23T09:32:51Z"
lastReleaseAt: "2026-04-09T15:03:14Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 46
maintainers: ["dominik1001", "dependabot[bot]", "restless"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fbbe63f77e89df706ea499902ba47efcf92a543a2be5dc48adf44056501f4de/dominik1001/caldav-mcp"
---

# caldav-mcp

🗓️ A CalDAV Model Context Protocol (MCP) server to expose calendar operations as tools for AI assistants.

## ✨ Features

- Connect to CalDAV servers
- List calendars
- List calendar events within a specific timeframe
- Create calendar events
- Update calendar events
- Delete calendar events by UID

## Setup

```
{
  "mcpServers": {
    ...,
    "calendar": {
      "command": "npx",
      "args": [
        "caldav-mcp"
      ],
      "env": {
        "CALDAV_BASE_URL": "<CalDAV server URL>",
        "CALDAV_USERNAME": "<CalDAV username>",
        "CALDAV_PASSWORD": "<CalDAV password>"
      }
    }
  }
}
```

## Development

### Quick Start

Run the MCP server in development mode with auto-reload:
```bash
npm run dev
```

This will run the TypeScript code directly with watch mode and automatically load environment variables from `.env`.

### Manual Build

Alternatively, you can compile TypeScript to JavaScript and run it:

1. Compile:
```bash
npx tsc
```

2. Run:
```bash
node dist/index.js
```

## Available Tools

### list-calendars

List all calendars returning both name and URL

Parameters: none

Returns:
- List of all available calendars

### list-events

List…
