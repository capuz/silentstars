---
repo: "MadAppGang/tmux-mcp"
name: "tmux-mcp"
description: "Quick and fast tmux mcp server"
readmeQualityOk: true
url: "https://github.com/MadAppGang/tmux-mcp"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-20T01:22:12Z"
lastCommitAt: "2026-11-06T13:20:30Z"
lastReleaseAt: "2026-07-30T02:01:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["erudenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/53fdc2a938647e2ff549de710a308d8ff57e55a34d154d9909fc045117578192/MadAppGang/tmux-mcp"
---

# tmux-mcp

Agent-oriented MCP server for tmux and herdr — native process detection, smart triggers,
and one handle: the slot.

## Quick start

**Prerequisites**: tmux or [herdr](#running-under-herdr) installed, Go 1.26.1+ or a
pre-built binary.

```bash
# Install via Go
go install github.com/MadAppGang/tmux-mcp/v2@latest

# Or build from source
git clone https://github.com/MadAppGang/tmux-mcp
cd tmux-mcp && go build -o tmux-mcp .
```

Add to your MCP client config (`~/.claude/settings.json` for Claude Code):

```json
{
  "mcpServers": {
    "tmux": {
      "command": "tmux-mcp",
      "args": ["--shell-type", "zsh"]
    }
  }
}
```

Get a terminal and run something in it — no setup call, no handle to carry:

```json
// A pane beside the agent is created on first use. Synchronous: blocks until
// the command finishes, and returns output plus the exit code.
{"tool": "execute-command", "params": {"command": "go build ./..."}}
// → {"slot": 1, "created": true, "output": "", "exitCode": 0, "timedOut": false}

// The same slot is the same pane next time.
{"tool": "capture-pane", "params": {}}
// → the pane's text, with structuredContent {"slot": 1}
```

## Why this exists

AI coding…
