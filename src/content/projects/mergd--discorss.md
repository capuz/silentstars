---
repo: "mergd/discorss"
name: "discorss"
description: "Discord RSS bot"
readmeQualityOk: true
url: "https://github.com/mergd/discorss"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-29T00:20:25Z"
lastCommitAt: "2026-08-28T15:36:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["mergd"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc2baad74630ed52a6d2e1d4d0c2d9d7b1028788811bc39b446d8d2ad2312fd1/mergd/discorss"
---

# Discorss: RSS feeds for Discord

Features:

- Add RSS feeds to any channel
- Automatically poll feeds and send new items to the channel
- Automatically summarize content
- Archive.is links for paywalled content
- Free and open source
- Slash command native – no separate UI like MonitoRSS
- Runs entirely on Cloudflare Workers (interactions endpoint + cron + queue + D1) — no servers

## How it works

- Discord sends slash-command payloads over HTTP to the worker's `/interactions` endpoint.
- A cron trigger (every 2 minutes) selects feeds that are due and enqueues them; a queue
  consumer fetches, parses, optionally AI-summarizes, and posts new items via the Discord
  REST API.
- Feed configuration lives in Cloudflare D1. An admin UI (`admin/`) is served as worker
  assets with Discord OAuth.

## Deployment

See [`workers/bot/README.md`](https://github.com/mergd/discorss/blob/HEAD/workers/bot/README.md) for full setup: creating the D1
database and queue, setting secrets, deploying, registering commands, and pointing the
Discord Interactions Endpoint URL at the worker.

The original Node.js/discord.js/Postgres implementation (self-hostable via Docker) lives in
git history prior to…
