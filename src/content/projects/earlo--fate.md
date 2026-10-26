---
repo: "Earlo/fate"
name: "fate"
description: "Create and manage Fate Core styles character sheets, and campaigns."
readmeQualityOk: true
url: "https://github.com/Earlo/fate"
homepage: "https://fatecore.opensauce.fi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["character-sheet", "character-sheet-manager", "fate-core", "tabletop-rpg-utility", "tabletop-rpgs", "ttrpg"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-08-25T22:14:07Z"
lastCommitAt: "2026-10-26T03:04:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 85
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6778b55d7bb70bfaedd510bd243c5d402bb021a034ba08887b49fd38fa8d4a81/Earlo/fate"
---

# Fate Character Sheet Manager

Something I made to help me run a game based on Fate Core rules.
Not super professional, but happy to help if someone wants to use this also.

### Project goals

This software isn't meant to be a virtual table top simulator or an online RPG platform, but instead a simple additional tool to use in live game sessions, making them more streamlined by providing each player with access to all the relevant information.

## Features

- Create Character Sheets
  - Possible skills are tied to campaigns you are taking part in
  - Also supports free form skill input
  - LLM powered note writing tool for the DM (WIP)
- Create Campaigns
  - Define Skills used in campaign
  - Define aspects of the campaign
  - Group characters
  - Makesift battlemap system by setting a group to be grid
  - Reveal partial character sheets to players as GM
  - Live campaign updates via server-sent events so players see changes in real time
  - Optional Ably pub/sub backend for realtime updates on serverless hosts

## Database setup (Prisma)

- Set `DATABASE_URL` in `.env` (Neon connection string for Vercel works here too) — Prisma CLI and the Prisma Client read it via…
