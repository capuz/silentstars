---
repo: "amitgupta1202/FixTool"
name: "FixTool"
description: "Fix tool to explore and send FiX messages"
readmeQualityOk: true
url: "https://github.com/amitgupta1202/FixTool"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 14
forks: 0
openIssues: 4
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-24T05:57:57Z"
lastCommitAt: "2026-09-10T08:20:01Z"
lastReleaseAt: "2026-02-06T22:24:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 57
maintainers: ["amitgupta1202"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a42ac0ef7422b8d68873e21fd2a207b410a713facb659897a0d8abeaf0eaa38/amitgupta1202/FixTool"
---

# FixTool

A desktop UI-based FIX client tool for manual testing of FIX protocol communications. FixTool provides a comprehensive environment for constructing, sending, receiving, and inspecting FIX messages.

## Features

### Connect and send

- **Message Construction**: Build FIX messages with an intuitive UI, supporting standard fields and repeating groups
- **FIX Client Connectivity**: Connect to FIX servers as a client with configurable connection profiles
- **SSL/TLS Support**: Secure connections with full SSL/TLS support for encrypted FIX sessions
- **Message Inspection**: View and analyze incoming and outgoing FIX messages in real-time
- **Message Validation**: Validate messages against FIX data dictionaries
- **Saved Messages**: Save and reuse frequently used message templates, with template expressions (`${uuid}`, `${now+2d}`, `${out.D.11}`) resolved as each message is sent
- **Session Management**: Manage multiple FIX sessions with connection profiles
- **Multi-Session Load Testing**: Open up to 100 concurrent sessions from one profile, with per-session identities via `{n}` numbering patterns or comma-separated CompID lists
- **Bulk Send**: Send one message to all…
