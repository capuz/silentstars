---
repo: "Discord-ID/Discord-API-Fetch-Bot"
name: "Discord-API-Fetch-Bot"
description: "Discord Quest Support Region Restriction Quest and Information New Decorations Annoucement Bot"
readmeQualityOk: true
url: "https://github.com/Discord-ID/Discord-API-Fetch-Bot"
homepage: "https://discordquest.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 23]
topics: ["discord", "discord-api", "discord-bot", "discord-data", "discord-datamining", "discord-developers", "discord-github", "discord-json", "discord-quest", "discord-raw"]
stars: 7
forks: 32
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-23T05:28:31Z"
lastCommitAt: "2026-09-19T02:45:35Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 61
maintainers: ["github-actions[bot]", "nvckai"]
openGraphImageUrl: "https://opengraph.githubassets.com/d52f26dc49e6d918403841a97f7bba4ac204189f2b6b7fe92f3d46f38059fb01/Discord-ID/Discord-API-Fetch-Bot"
---

# Discord ID API Fetching Bot

This repository is a Discord bot job that fetches collectibles and quests, builds Discord message payloads, and posts them directly through the Discord REST API.
- Fetches live collectibles and quests data from configured APIs
- Builds announcement messages and thread payloads
- Posts results to Discord channels using a bot token
- Persists state in `state.json` to avoid reposting the same items
- Runs automatically on GitHub Actions using repository secrets

## How to deploy with GitHub Actions
### Required repository secrets

Set these secrets in GitHub: `Settings > Secrets and variables > Actions`.

- `DISCORD_BOT_TOKEN`
- `DISCORD_COLLECTIBLES_CHANNEL_ID`
- `DISCORD_QUESTS_CHANNEL_ID`
- `DISCORD_MENTION_COLLECTIBLES`
- `DISCORD_MENTION_QUESTS`

### Example secret values

- `DISCORD_BOT_TOKEN`: your Discord bot token
- `DISCORD_COLLECTIBLES_CHANNEL_ID`: channel ID for collectible starter posts
- `DISCORD_QUESTS_CHANNEL_ID`: channel ID for quest posts
- `DISCORD_MENTION_COLLECTIBLES`: mention role for collectible posts (role or everyone)
- `DISCORD_MENTION_QUESTS`: mention role for quest posts
