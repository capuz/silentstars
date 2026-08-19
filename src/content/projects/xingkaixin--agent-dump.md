---
repo: "xingkaixin/agent-dump"
name: "agent-dump"
description: "AI Coding Assistant Session Export Tool"
readmeQualityOk: true
url: "https://github.com/xingkaixin/agent-dump"
homepage: "https://agent-dump.xingkaixin.me"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T06:25:27Z"
lastCommitAt: "2026-08-19T04:07:11Z"
lastReleaseAt: "2026-03-31T03:58:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["xingkaixin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d479ddfd1d2ae1a2375cbc253bf9bf645bdb505b2342cd61111410facde42ce/xingkaixin/agent-dump"
---

# Agent Dump

AI Coding Assistant Session Export Tool - Exports JSON, Markdown, and raw session data from multiple AI coding tools, with direct URI printing.

## Supported AI Tools

- **OpenCode** - Open source AI coding assistant
- **ZCode** - ZCode coding assistant sessions
- **Claude Code** - Anthropic's AI coding tool
- **Codex** - OpenAI's command-line AI coding assistant
- **Kimi** - Moonshot AI assistant
- **Cursor** - Cursor composer sessions
- **Pi** - Earendil's AI coding agent
- **More Tools** - PRs are welcome to support other AI coding tools

## Features

- **Interactive Selection**: Provides a friendly command-line interactive interface using questionary
- **Multi-Agent Support**: Automatically scan session data from multiple AI tools
- **Batch Export**: Supports exporting all sessions from the last N days
- **Specific Export**: Export specific sessions by URI
- **Session List**: Only list sessions without exporting them
- **Direct Text Dump**: View session content directly in terminal via URI (e.g., `agent-dump opencode://session-id`)
- **Statistics**: Exports include statistics such as token usage and cost
- **Message Details**: Fully retains session messages, tool…
