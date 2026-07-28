---
repo: "PrithviSeran/hunch-mcp"
name: "hunch-mcp"
description: "Drive your Mac focus-free over MCP: OS APIs, AppleScript, CDP, and Accessibility"
readmeQualityOk: true
url: "https://github.com/PrithviSeran/hunch-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-20T15:18:54Z"
lastCommitAt: "2026-07-28T14:59:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["PrithviSeran"]
openGraphImageUrl: "https://opengraph.githubassets.com/43c05a0a01cf5169ac37b0e596ec6adc23ccc88ce1e3955d7788b105421ac276/PrithviSeran/hunch-mcp"
---

</p>

# Hunch

**Drive your Mac with any LLM: focus-free, in the background, over [MCP](https://modelcontextprotocol.io).**

Hunch is an MCP server that gives an LLM agent hands on *your* Mac: your installed apps, your
logged-in sessions, your files, without taking over your screen. While you keep working in the
foreground, an agent can read a background app's UI, click its buttons, drive Mail or Music by
AppleScript, fill a web form, or move files. It works on real native apps, not just a browser.

> **Works best with modern LLMs.** Hunch ships a detailed playbook as MCP server instructions;
> capable tool-using models (Claude Sonnet/Opus-class and up) follow it well. Smaller models may
> pick clumsier paths (screenshots and keystrokes instead of tree reads and clicks).

## The four layers

Hunch always prefers the most direct layer. It's faster, more reliable, and (except the last)
never touches your screen:

| Layer | Tools | What it's for |
|---|---|---|
| **OS-API** | `trash` `file_op` `open_file` `clipboard_*` `launch_app` … | files, clipboard, app lifecycle, via direct API calls |
| **AppleScript** | `applescript` | scriptable apps: Mail, Messages, Notes, Calendar, Music,…
