---
repo: "EL4CTEO/discord-mcp"
name: "discord-mcp"
description: "MCP server that lets AI agents run a Discord bot: messages, DMs, channels, threads, roles, members, moderation, live events and bulk operations."
readmeQualityOk: true
url: "https://github.com/EL4CTEO/discord-mcp"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agent", "anthropic", "chatops", "claude", "claude-code", "discord", "discord-api", "discord-bot", "llm-tools", "mcp"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-02-20T15:11:05Z"
lastCommitAt: "2026-11-27T16:26:43Z"
lastReleaseAt: "2026-11-21T15:38:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 74
undervaluedScore: 41
maintainers: ["EL4CTEO"]
openGraphImageUrl: "https://opengraph.githubassets.com/f83053a75f49bd7f6e4a0a5249e7738bc00ce2992695be2aa3dafae8d7e875b1/EL4CTEO/discord-mcp"
fundingLinks: ["GITHUB:https://github.com/EL4CTEO"]
---

Control a Discord bot from Claude Code or any MCP client: messages, channels, roles, members, moderation and live events.

## Features

- **38 tools**: messages, DMs, uploads, polls, channels, threads, forums, members, roles, moderation, AutoMod, events, emojis, invites, live events
- **Names, not IDs**: `"general"`, `"@everyone"`, never a snowflake
- **Bulk everywhere**: pass an array wherever one value goes; `discord_batch` mixes tools
- **Long messages split cleanly**, code blocks intact
- **Safe by default**: destructive actions off until enabled; hardened against prompt injection
- **Errors say how to fix them**
- **Single Rust binary**: instant start, small memory, no Node runtime needed

## Setup

1. Create a bot at [discord.com/developers/applications](https://discord.com/developers/applications) -> **New Application** -> **Bot** -> **Reset Token**.
2. On the same Bot page enable **Message Content Intent** and **Server Members Intent**.
3. Invite it to your server via **OAuth2 -> URL Generator** (scopes: `bot`, `applications.commands`).

## Add to Claude Code

```bash
claude mcp add discord --env DISCORD_TOKEN=your_token_here -- npx -y @el4cteo/discord-mcp
```
