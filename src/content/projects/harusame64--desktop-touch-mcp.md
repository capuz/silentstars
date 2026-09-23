---
repo: "Harusame64/desktop-touch-mcp"
name: "desktop-touch-mcp"
description: "Windows computer-use MCP server: drive any desktop app via semantic discover-then-act targeting (entities + leases, not pixel coordinates), with per-action perception guards, a native Rust UIA engine, Chrome CDP, and Key Locker credential autofill for ssh/sudo password prompts. Works with Claude, Cursor, and any MCP client."
readmeQualityOk: true
url: "https://github.com/Harusame64/desktop-touch-mcp"
homepage: "https://harusame64.github.io/desktop-touch-mcp/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["claude", "desktop-automation", "llm", "mcp", "ui-automation", "windows", "agent", "anthropic", "automation", "computer-use"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 65
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-11T11:28:44Z"
lastCommitAt: "2026-09-23T08:46:25Z"
lastReleaseAt: "2026-04-15T04:47:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Harusame64", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48f3c4dc0548ab433a34d6c60f9e0636112ceee1dd9048857d81b4df21865484/Harusame64/desktop-touch-mcp"
---

# desktop-touch-mcp

[日本語](https://github.com/Harusame64/desktop-touch-mcp/blob/HEAD/README.ja.md)

> **Computer-use MCP server for Windows.** Lets Claude, Cursor, or any MCP client see and operate your Windows 10/11 desktop — screenshots, UI Automation, Chrome CDP, keyboard / mouse, terminal — with **semantic discover-then-act targeting** that avoids pixel-coordinate guessing, and **per-action perception guards** that catch wrong-window typing before it happens.

```bash
npx -y @harusame64/desktop-touch-mcp
```

32 tools, native Rust engine (UIA in 2 ms), zero-config PowerShell fallback, full CJK support, MIT licensed. Add the snippet above to your Claude / Cursor / VS Code Copilot config and Claude can drive Notepad, Excel, Chrome, Windows Terminal, and any other app on your machine.

> **Why this over pixel-clicking?** Two ideas run through every tool: **discover-then-act** — `desktop_discover` returns interactive entities with short-lived leases instead of raw coordinates, so `desktop_act` operates on *what* you mean, not *where* it was — and **per-action perception guards** that verify the target window's identity and bounds before input lands, catching wrong-window typing…
