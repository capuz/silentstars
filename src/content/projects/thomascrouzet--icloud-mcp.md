---
repo: "ThomasCrouzet/icloud-mcp"
name: "icloud-mcp"
description: "stdio MCP server for iCloud Calendar (CalDAV), with optional Contacts (CardDAV) and Mail (IMAP/SMTP)"
readmeQualityOk: true
url: "https://github.com/ThomasCrouzet/icloud-mcp"
homepage: "https://github.com/ThomasCrouzet/icloud-mcp/releases"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["caldav", "calendar", "golang", "icloud", "mcp", "model-context-protocol", "ai-agents", "apple", "carddav", "contacts"]
stars: 6
forks: 5
openIssues: 2
closedIssues: 40
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-12T08:31:21Z"
lastCommitAt: "2026-11-08T10:41:29Z"
lastReleaseAt: "2026-11-07T16:20:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 79
maintainers: ["ThomasCrouzet", "cinnamennen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4489820d901ad837258f405d6ac5464fa68a06eae5eed245bfac37279653413/ThomasCrouzet/icloud-mcp"
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
