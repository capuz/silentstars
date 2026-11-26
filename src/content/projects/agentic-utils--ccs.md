---
repo: "agentic-utils/ccs"
name: "ccs"
description: "Coding CLI Sessions: launch, watch, search and resume Claude Code and Codex sessions"
readmeQualityOk: true
url: "https://github.com/agentic-utils/ccs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-02T13:15:29Z"
lastCommitAt: "2026-11-26T15:24:32Z"
lastReleaseAt: "2026-01-26T16:19:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["brtkwr"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5fcc87192a70ffbbe0b5f9fe97b25944cda156a8403c7502de134acb9d7cca4/agentic-utils/ccs"
---

# ccs - Coding CLI Sessions

Launch, watch, search and resume your coding CLI sessions across [Claude Code](https://claude.ai/claude-code), [Codex](https://github.com/openai/codex), and [Antigravity CLI (`agy`)](https://antigravity.google).

## Supported CLIs

| CLI | Glyph | Data location | Resume | Launch | Messaging / Nudges | PR claims |
|-----|-------|---------------|--------|--------|--------------------|-----------|
| **Claude Code** (`claude`) | `✻` (orange) | `~/.claude/projects` & `~/.claude/sessions` | `claude --resume <id>` (and `Ctrl+F` fork) | `ccs launch` | Terminal typing (fallback: message socket) | Process ancestry |
| **Codex** (`codex`) | `⬡` (grey) | `$CODEX_HOME/sessions` (default `~/.codex`) | `codex resume <id>` (and `Ctrl+F` fork) | `ccs launch --codex` | Terminal typing (fallback: `codex queue`) | `CODEX_THREAD_ID` |
| **Antigravity CLI** (`agy`) | `✦` (blue) | `$ANTIGRAVITY_APP_DATA_DIR` (default `~/.gemini/antigravity-cli`) | `agy --conversation <id>` | `ccs launch --agy` | Terminal typing (iTerm / tmux) | `ANTIGRAVITY_CONVERSATION_ID` |
