---
repo: "heznpc/AirMCP"
name: "AirMCP"
description: "Apple-native MCP server for macOS — governed access to Notes, Mail, Calendar, Reminders, Shortcuts, and more."
readmeQualityOk: true
url: "https://github.com/heznpc/AirMCP"
homepage: "https://heznpc.github.io/AirMCP/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Swift"]
languagePcts: [44, 30, 25]
topics: ["ai", "apple", "applescript", "automation", "calendar", "claude", "codex", "macos", "mcp", "mcp-server"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T18:27:05Z"
lastCommitAt: "2026-07-24T06:08:11Z"
lastReleaseAt: "2026-03-14T06:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["heznpc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d9063c25dfc94e46ff8eba0a713d4e161079aa4baeff6b116949648a7b44735/heznpc/AirMCP"
discussionCount: 0
---

</p>

# AirMCP

**Governed MCP runtime for the Apple ecosystem.** AirMCP lets Claude, Codex,
Cursor, Raycast, Xcode agents, and other MCP clients work across Notes, Mail,
Calendar, Reminders, Finder, Safari, Shortcuts, and the rest of your Apple
workspace. The macOS runtime is available today; the iOS runtime is in preview.

AirMCP is the connector and control layer, not another agent. It mediates Apple
workspace actions through profiles, progressive exposure, per-call human
approval, HMAC-chained audit logs, rate limits, OAuth scopes, and local controls.

> Multi-language project page: [heznpc.github.io/AirMCP](https://heznpc.github.io/AirMCP/)

## What You Get

- **Apple workspace tools** for Notes, Reminders, Calendar, Contacts, Mail,
  Messages, Music, Finder, Safari, Photos, Shortcuts, system control, screen
  capture, Weather, Maps, Location, Bluetooth, and more.
- **Google Workspace tools** for Gmail, Drive, Sheets, Calendar, Docs, Tasks,
  People, and raw `gws` CLI access.
- **Profiles and progressive exposure** so clients start with a small front
  door instead of every loaded tool.
- **Skills DSL workflows** with `parallel`, `loop`, `retry`, `on_error`, runtime
  inputs,…
