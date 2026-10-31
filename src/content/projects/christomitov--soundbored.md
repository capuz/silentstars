---
repo: "christomitov/soundbored"
name: "soundbored"
description: "Soundbored is an unlimited, self-hosted soundboard for Discord. It allows you to play sounds in a voice channel."
readmeQualityOk: true
url: "https://github.com/christomitov/soundbored"
homepage: "https://soundbored.app"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [91]
stars: 250
forks: 23
openIssues: 1
closedIssues: 32
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2025-01-08T18:08:26Z"
lastCommitAt: "2026-10-31T15:59:20Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 28
maintainers: ["christomitov", "dependabot[bot]", "onyxraven"]
openGraphImageUrl: "https://opengraph.githubassets.com/c126a503d8fc4b66af93c7828d8890099a9c62b458a76a91146138a2eaff46fe/christomitov/soundbored"
---

# Soundbored

Soundbored is an unlimited, no-cost, self-hosted soundboard for Discord. It allows you to play sounds in a voice channel.

[Hexdocs](https://christomitov.github.io/soundbored/)

### CLI Companion
Install the cross-platform CLI with `npm i -g soundbored` for quick automation. Source: [christomitov/soundbored-cli](https://github.com/christomitov/soundbored-cli).

## Quickstart

1. Copy the sample environment and set the minimum values:
   ```bash
   cp .env.example .env
   # Required for local testing
   # DISCORD_TOKEN=...
   # DISCORD_CLIENT_ID=...
   # DISCORD_CLIENT_SECRET=...
   # PHX_HOST=localhost
   # SCHEME=http
   ```
2. Run the published container:
   ```bash
   docker run -d \
     --name soundbored \
     --restart unless-stopped \
     -p 4000:4000 \
     --env-file ./.env \
     --mount source=soundbored_uploads,target=/app/priv/static/uploads \
     --mount source=soundbored_db,target=/app/priv/db \
     christom/soundbored:latest
   ```
3. Visit http://localhost:4000, invite the bot, and trigger your first sound.

> Create the bot in the [Discord Developer Portal](https://discord.com/developers/applications), enable **Presence**, **Server Members**,…
