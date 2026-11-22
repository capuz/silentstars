---
repo: "Espresso-Aficionados/sprobot"
name: "sprobot"
description: "Espresso Discord Bot"
readmeQualityOk: true
url: "https://github.com/Espresso-Aficionados/sprobot"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 6
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-10-23T19:39:02Z"
lastCommitAt: "2026-11-22T02:10:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 77
maintainers: ["sadbox", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e293880122fd6ccf3630e1780db4754b34be9cd815f040881e452f191cb5c39/Espresso-Aficionados/sprobot"
---

# sprobot

This repo contains three Discord bots and a web server for the Espresso Aficionados Discord server. Each bot is a separate Discord application with its own token.

## Bots

### sprobot

Profile bot. Members create and view profiles using slash commands that are dynamically generated from templates.

- `/edit<template>` / `/get<template>` — edit your profile, or view a member's profile
- `/delete<template>` — delete your entire profile or just its picture
- `/wiki` — search the wiki (with autocomplete)
- `/s` — post a shortcut response (round-robin through configured responses, with autocomplete)
- `/warn user reason` — issue a warning to a member
- `/temprole user role` — assign a whitelisted temporary role to a member
- `/market progress user` — check a member's progress toward the marketplace poster role
- `/market leaderboard` — show the members closest to the marketplace poster role
- `/topposters` — show the top posters over the last 7 days
- `/config <group> <subcommand>` — configure the bot (groups below)
- "Get <Name> Profile" user and message context menus (one pair per template) — view a member's profile
- "Save message to mod log" message context menu
