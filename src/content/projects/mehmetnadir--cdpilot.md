---
repo: "mehmetnadir/cdpilot"
name: "cdpilot"
description: "Browser automation CLI on raw CDP — no Puppeteer, Playwright or Selenium, 0 npm dependencies. 70+ commands, test assertions, click/fill by visible text without an LLM, and an MCP server for AI coding agents."
readmeQualityOk: true
url: "https://github.com/mehmetnadir/cdpilot"
homepage: "https://cdpilot.ndr.ist"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 28]
topics: ["ai-agent", "automation", "brave-browser", "browser-automation", "cdp", "chrome-devtools-protocol", "claude", "cli", "devtools", "mcp"]
stars: 33
forks: 7
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-03-15T12:59:56Z"
lastCommitAt: "2026-11-10T11:38:57Z"
lastReleaseAt: "2026-11-08T11:52:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["mehmetnadir"]
openGraphImageUrl: "https://opengraph.githubassets.com/963a7898309b9faacd43368c68f1fd28301a2fb6237cf636bf140d2b8bb37a0c/mehmetnadir/cdpilot"
discussionCount: 3
---

# cdpilot

> Zero-dependency browser automation from your terminal. One command, full control.

## Quick Start

```bash
npx cdpilot launch    # Start browser with CDP
npx cdpilot go https://example.com
npx cdpilot shot      # Take screenshot
```

No config files. No boilerplate. Just `npx` and go.

## Why cdpilot?

AI agents and developers need browser control that **just works**:

- **Zero config** — `npx cdpilot launch` starts an isolated browser session
- **Zero npm dependencies** — No Puppeteer, no Playwright, no Selenium. Pure CDP over HTTP/WebSocket; the Python side needs one package, `websockets` (the setup wizard installs it)
- **70+ commands** — Navigate, click, type, screenshot, network, console, accessibility, video understanding, progressive anti-bot resilience, and more
- **AI-agent friendly** — Designed for Claude, GPT, Gemini, and any LLM tool-use workflow
- **Isolated sessions** — Your personal browser stays untouched. cdpilot runs in its own profile
- **Visual feedback** — Green glow overlay, cursor visualization, click ripples, and keystroke display keep you informed during automation
- **Multi-project isolation** — Each project gets its own browser instance and…
