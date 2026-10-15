---
repo: "JTCHE/houdini-mcp"
name: "houdini-mcp"
description: "Connect AI agents to SideFX Houdini, with full documentation and screenshot support."
readmeQualityOk: true
url: "https://github.com/JTCHE/houdini-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 7
createdAt: "2026-06-17T08:32:11Z"
lastCommitAt: "2026-10-15T08:34:06Z"
lastReleaseAt: "2026-10-04T17:31:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["JTCHE"]
openGraphImageUrl: "https://opengraph.githubassets.com/03e7563d161fd2fb2b61f0ee5cbaace095b03d9bf56536c8e26212d4dfd2b381/JTCHE/houdini-mcp"
---

# Houdini MCP

Connect SideFX Houdini to Claude, Codex, Gemini, Cursor, opencode or pi.

This MCP provides **Full Markdown Documentation** and **Viewport Screenshots** support to your agents of choice, enabling strong feedback loops and autonomous workflows.

## Install

**Windows**

```powershell
powershell -c "irm https://raw.githubusercontent.com/JTCHE/houdini-mcp/main/bootstrap.bat -OutFile bootstrap.bat; .\bootstrap.bat"
```

**macOS / Linux**

```bash
curl -sSL https://raw.githubusercontent.com/JTCHE/houdini-mcp/main/bootstrap.sh | bash
```

**uv**

```bash
uv tool install houdini-mcp-server && houdinimcp-install
```

The installer adds the plugin to Houdini and the server to your AI clients of choice. Restart both.\
pi also needs `pi install npm:pi-mcp-adapter`.

**Claude plugin**

This repository is also a Claude plugin, for Claude Code and for Cowork on your computer. It needs [uv](https://docs.astral.sh/uv/).
The plugin starts a headless Houdini without setup. To connect the Houdini that you have open, ask Claude to run the `houdini-setup` skill.

- `uv run --frozen` builds an environment from `uv.lock` in the plugin folder, then starts the MCP server from this…
