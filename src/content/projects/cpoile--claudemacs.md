---
repo: "cpoile/claudemacs"
name: "claudemacs"
description: "AI Pair Programming with Claude Code in Emacs"
readmeQualityOk: true
url: "https://github.com/cpoile/claudemacs"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [98]
stars: 177
forks: 10
openIssues: 6
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2025-05-26T12:21:06Z"
lastCommitAt: "2026-08-28T14:33:38Z"
lastReleaseAt: "2026-07-10T18:48:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 56
undervaluedScore: 20
maintainers: ["cpoile"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a158f8a74b19b50b0a6c00712e5fdf02d4219cdd8c2251f12ef7dbc0adede3/cpoile/claudemacs"
---

# Claudemacs

AI pair programming with [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) in Emacs.

https://github.com/user-attachments/assets/a7a8348d-471c-4eec-85aa-946c3ef9d364

## What makes this project different? Simplicity
- Let your LLM cli shine in the terminal
- No agents, MCP, or IDE integration -- these eat up context

## Features

- **Multi-tool support**: Use Claude, Codex, Gemini, or other AI coding tools via configurable tool registry
- **Selectable terminal backends**: Use Ghostel when available, with Eat as the fallback
- **Multiple instances**: Run multiple sessions of the same tool per workspace (claude, claude-2, etc.)
- **Broadcast to all sessions**: Use `C-u` prefix to send actions to all active sessions
- **Workspace-aware sessions**: Project-based sessions with Doom/Perspective workspace support (see [Sessions](#workspace-and-project-aware-sessions))
- **Session management**: Switch between sessions, switch to "other" session, kill specific sessions
- **Session list**: Inspect live workspaces, tool instances, projects, and authoritative session IDs in one table
- **System notifications**: OS notifications with sound when awaiting input…
