---
repo: "Pixl-YSWS/pixorpheus"
name: "pixorpheus"
description: "pixorpheus, available on slack"
url: "https://github.com/Pixl-YSWS/pixorpheus"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-01T11:23:16Z"
lastCommitAt: "2026-07-03T12:22:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["Gabouin", "ridit-jangra", "chaitanya-mundhava"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b1fcd0b5747697b5af3863cb672a8ce2f3e5a39f1df970b1432ce8224282733/Pixl-YSWS/pixorpheus"
---

# Pixorpheus

The official Slack bot of the [Pixl](https://hackclub.slack.com/archives/C0B5P4N0WHH) YSWS program, built by Gabin. Part entertainer, part support system, part AI with too much personality.

Pixorpheus handles the full help/ticket workflow for Pixl, talks to people in threads, remembers things about everyone, roasts people on demand, and generally acts like a teenager.

---

## Table of Contents

- [Architecture](#architecture)
- [Slash Commands](#slash-commands)
  - [Fun & Utility](#fun--utility)
  - [Pixl Program](#pixl-program)
  - [Memory & Knowledge](#memory--knowledge)
  - [Support Team Only](#support-team-only)
- [Inline Commands (pixo:)](#inline-commands-pixo)
- [Thread Controls](#thread-controls)
- [AI System](#ai-system)
- [Smart FAQ](#smart-faq)
- [Auto-Close](#auto-close)
- [Help & Ticket System](#help--ticket-system)
- [Style Listening System](#style-listening-system)
- [Training Mode](#training-mode)
- [Dashboard](#dashboard)
- [Database](#database)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Architecture

| File | Role |
|---|---|
| `index.js` | Main Slack bot - all commands, events, AI, ticket system |
|…
