---
repo: "mcp-z/mcp-gmail"
name: "mcp-gmail"
description: "MCP server for Gmail integration with OAuth authentication, message search, batch operations, and Google Sheets export"
readmeQualityOk: true
url: "https://github.com/mcp-z/mcp-gmail"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-29T07:19:03Z"
lastCommitAt: "2026-11-17T14:45:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 71
maintainers: ["kmalakoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef0c092f13c02d2650238780270b5c7162ce18f49fc52c8f9167489b7be8068c/mcp-z/mcp-gmail"
---

# @mcp-z/mcp-gmail

MCP server for Gmail integration with OAuth authentication, message search, batch operations, and Google Sheets export

Requires Node.js >=20. The examples use `npx`, included with npm, to run this server and [@mcp-z/cli](https://github.com/mcp-z/cli).

## Common uses

- Search and read messages
- Send and reply to emails
- Manage labels and export messages to CSV

## Transports

MCP supports stdio and HTTP.

Both the 2025 and 2026-07-28 protocol revisions are served, over either transport, from the same
server. Your client negotiates whichever it speaks. A 2025 client keeps working with no change,
and support for it is not being dropped. The 2026-07-28 revision is stateless, so a client speaking
it sends no `initialize` handshake and carries no session id.

**Stdio**
```json
{
  "mcpServers": {
    "gmail": {
      "command": "npx",
      "args": ["-y", "@mcp-z/mcp-gmail"]
    }
  }
}
```

**HTTP**
```json
{
  "mcpServers": {
    "gmail": {
      "type": "http",
      "url": "http://localhost:9002/mcp",
      "start": {
        "command": "npx",
        "args": ["-y", "@mcp-z/mcp-gmail", "--port=9002"]
      }
    }
  }
}
```

`start` is an extension used by…
