---
repo: "segentic-lab/glovebox-mcp"
name: "glovebox-mcp"
description: "Sandboxed computer-use MCP — drive a real browser + desktop apps in a nested X11 window."
readmeQualityOk: true
url: "https://github.com/segentic-lab/glovebox-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai-agents", "automation", "browser-automation", "computer-use", "mcp", "model-context-protocol", "sandbox", "xephyr"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-01T03:14:43Z"
lastCommitAt: "2026-11-14T22:00:46Z"
lastReleaseAt: "2026-11-14T01:52:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 64
undervaluedScore: 34
maintainers: ["segentic-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/21df452af991010637fea2edb3afa7b6255a0845be39b9a6961f6cd0c1d298b2/segentic-lab/glovebox-mcp"
---

# glovebox-mcp

A **sandboxed computer-use MCP server** — let an AI agent drive a real browser and desktop apps
(mouse, keyboard, screenshots, clipboard, vision grounding), confined to a **nested X11 window** so
its input and vision never touch your real screen or the windows of your other apps.

Like a lab **glovebox**: the agent reaches in and manipulates real applications, sealed off from
your desktop. Bring the sandbox up, log into whatever sites or apps you want to automate *inside
that window*, and the agent operates only there — you can watch it live and close it instantly.

> Speaks the [Model Context Protocol](https://modelcontextprotocol.io), so it works with MCP clients
> like Claude Code. Your host can run Wayland; the sandbox gives the agent a real X server to drive.

## Why a nested X11 sandbox?

- Most desktop automation (xdotool, PyAutoGUI) is **X11-only**, but many modern desktops run **Wayland**.
- **Xephyr** provides a real X server *inside a single window* (`DISPLAY :1`). Everything the agent
  does — clicks, typing, screenshots — is **confined to that window**, not your real desktop.
- You stay in control: watch it live, `pkill Xephyr` to close everything.…
