---
repo: "ThomasCrouzet/icloud-mcp"
name: "icloud-mcp"
description: "stdio MCP server for iCloud Calendar (CalDAV), with optional Contacts (CardDAV) and Mail (IMAP/SMTP)"
readmeQualityOk: true
url: "https://github.com/ThomasCrouzet/icloud-mcp"
homepage: "https://github.com/ThomasCrouzet/icloud-mcp/releases"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["caldav", "calendar", "golang", "icloud", "mcp", "model-context-protocol", "ai-agents", "apple", "carddav", "contacts"]
stars: 5
forks: 4
openIssues: 17
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-12T08:31:21Z"
lastCommitAt: "2026-11-05T00:22:13Z"
lastReleaseAt: "2026-11-04T16:40:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 79
undervaluedScore: 67
maintainers: ["ThomasCrouzet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b3d982014be3b70fd2fc2be3ef7560a64c9a1dd69dff8cb05e383c85e5aacd/ThomasCrouzet/icloud-mcp"
---

Connect an MCP host to iCloud with one Go binary. Calendar uses CalDAV; optional
Contacts and Mail use CardDAV, IMAP, and SMTP. The host starts the process and
exchanges JSON-RPC through stdin and stdout.

## Why icloud-mcp?

Use this server when an MCP host needs to search calendars, find free time, or
work with iCloud contacts and messages on a headless machine. It uses
app-specific passwords and remote protocols, without macOS frameworks, browser
automation, or private Apple APIs.

Capability gates let you start with Calendar reads and enable other operations
as needed. Each domain has its own protocol clients and network policy. All
enabled domains share one process: a process compromise can expose all loaded
credentials. Use separate processes and account configurations for stronger
isolation.

## Privacy and security

**Accounts:** An Apple Account with iCloud Calendar and an app-specific password is required. Contacts uses the same identity. Optional Mail needs a full iCloud Mail address and can use a separate app-specific password. The server has no separate product account; the MCP host has its own account requirements.

**Telemetry:** The server has no telemetry or…
