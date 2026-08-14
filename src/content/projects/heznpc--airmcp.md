---
repo: "heznpc/AirMCP"
name: "AirMCP"
description: "Governed MCP runtime for the Apple ecosystem — verified control over Notes, Mail, Calendar, Shortcuts, and more."
readmeQualityOk: true
url: "https://github.com/heznpc/AirMCP"
homepage: "https://heznpc.github.io/AirMCP/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Swift"]
languagePcts: [44, 30, 25]
topics: ["ai", "apple", "applescript", "automation", "calendar", "claude", "codex", "macos", "mcp", "mcp-server"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-13T18:27:05Z"
lastCommitAt: "2026-08-14T05:14:18Z"
lastReleaseAt: "2026-03-14T06:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["heznpc", "dependabot[bot]", "Fhatu12"]
openGraphImageUrl: "https://opengraph.githubassets.com/a155b83576490c1541556943c5a948f8e79d41c257c2abeba29a23fa1de1a248/heznpc/AirMCP"
discussionCount: 0
---

</p>

# AirMCP

**Your AI assistant can use the Mac apps you already use.** Ask for something in
plain language and AirMCP does it in the real Notes, Mail, Calendar, Reminders,
Messages, Photos, Safari, Finder, and Shortcuts on your machine — your actual
data, not a copy and not a sandbox. The macOS runtime is available today; the
iOS runtime is in preview.

```text
"Brief me on today's calendar, overdue reminders, and unread mail."
"For my next meeting, pull up the related notes, contacts, files, and reminders."
"Search my Safari tabs for that article and save a summary to Notes."
"Draft replies to the urgent mail, but ask me before sending anything."
"Run my Morning Routine shortcut."
```

Start on macOS with Node.js 20+:

```bash
npx airmcp init
```

Then ask your client. Works with Claude, Codex, Cursor, Raycast, Xcode agents,
and any other MCP client. Nothing reads or changes a client's settings until you
opt in.

More to try: [Common Workflows](#common-workflows) ·
[every tool](https://github.com/heznpc/AirMCP/blob/HEAD/llms-full.txt) · [Quick Start](#quick-start)

### It does not act behind your back

AirMCP is the connector and control layer, not another agent. Destructive…
