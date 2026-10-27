---
repo: "agentic-utils/ccs"
name: "ccs"
description: "Globally search and resume Claude Code conversations"
readmeQualityOk: true
url: "https://github.com/agentic-utils/ccs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-02T13:15:29Z"
lastCommitAt: "2026-10-27T09:17:17Z"
lastReleaseAt: "2026-01-26T16:19:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 59
maintainers: ["brtkwr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8a07783bff81198883df963bca997b2e4e3191ef166fb8e72e3a3178a4adaf/agentic-utils/ccs"
---

# ccs - Claude Code Search

Globally search and resume [Claude Code](https://claude.ai/claude-code) conversations.

## Features

- Search through all your Claude Code conversations
- See session names (your custom titles or Claude's auto-generated ones) in the list
- Preview conversation context with search term highlighting
- See context size (tokens as of the last reply), message counts, hit counts, and file size per conversation
- Resume conversations directly from the search interface
- Background tasks: a session open in `claude` shows `⧗N` for the background commands, subagents and monitors it has running, and the preview lists them with how long each has run
- Auto-refreshes every minute; a green `●` marks conversations open in a running `claude`, and ones started by another session's `claude -p` sit `└` under it
- Rename conversations (`Ctrl+R`)
- Delete conversations with confirmation prompt
- Prune bloated conversations losslessly (`ccs prune`)
- Pass flags through to `claude` (e.g., `--plan`)
- Usage screen (`Tab`): the last 12 hours of token usage across all sessions (including subagents) as three charts (cache-write disposition, context assembly, output), a summary…
