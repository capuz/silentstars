---
repo: "Kevin-Kwan/CutieBot"
name: "CutieBot"
description: "A custom, multi-purpose, open-source Discord Bot using DiscordJS v14 and MongoDB that can play music, chat with you using OpenAI ChatGPT, manage your Economy, moderate your server, and provide other fun features. Currently supports Discord's Slash Commands."
readmeQualityOk: true
url: "https://github.com/Kevin-Kwan/CutieBot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["discord", "discord-js", "discord-bot", "discord-bot-template", "node-js", "nodejs", "discordjs-v13", "discordbot", "discordjs-v14", "javascript"]
stars: 28
forks: 2
openIssues: 8
closedIssues: 14
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-01-02T19:15:08Z"
lastCommitAt: "2026-11-24T14:05:06Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 31
maintainers: ["Kevin-Kwan", "deepsource-autofix[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dae15d6ea384a78c9135ec0ba2c44bdd3cab1236d1c26e7c23856e49fed452be/Kevin-Kwan/CutieBot"
discussionCount: 1
---

# CutieBot v3

A ground-up TypeScript rewrite of the legacy CutieBot Discord bot:
economy, moderation, music, and AI chat on discord.js v14 +
discord-player v7 + MongoDB, with a transactional data layer and a
full offline test suite.

## Setup

Requirements: Node.js 24, a MongoDB deployment **with a replica set**
(transactions are used for economy mutations — a standalone mongod
will not work), and a Discord application with a bot user.

```sh
npm ci
cp .env.example .env   # fill in the values (see below)
npm run build
npm run commands:deploy -- --guild <GUILD_ID>   # or --global
npm start
```
