---
repo: "oimasterkafuu/Roka"
name: "Roka"
description: "Roka - Real-time grid territory war (generals.io-like)"
originalDescription: "Roka - 实时方格领土战争（generals.io 类）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oimasterkafuu/Roka"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [78]
stars: 9
forks: 1
openIssues: 0
closedIssues: 78
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-31T08:31:15Z"
lastCommitAt: "2026-11-17T14:34:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["oimasterkafuu", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8314189220700a8c1939d4fececbeff4fc4b2b2335085210ff0fe3ec9fdd1f9/oimasterkafuu/Roka"
---

# Roka

Roka is a real-time grid-based territory war game, with gameplay similar to generals.io. Players expand their territory and build capitals and command posts. In FFA or team matches, the goal is to capture the enemy capital and survive to the end.

The project uses TypeScript, Fastify, and Socket.IO for the server, with the frontend mainly in vanilla JavaScript. Matches are settled by the server on a per-Tick basis. The project supports reconnection after disconnects, spectating, and full replays.

## Main Features

- Real-time FFA and team matches, with multiple maps, map sizes, random seeds, and optional fog of war.
- User registration and login, Rating, points, personal profile pages, activity feeds, comments, and ambassador promotion.
- Room chat, real-time online status, browser notifications, and an admin dashboard.
- Match replay viewing, downloading, and local upload, plus searching historical replays by user and date.
- GitHub account binding and a golden initial for Stars. The About page publicly displays contributors and all Star supporters.
- Strategy bots that can run standalone or be hosted by the server. Protocol documentation is at `/develop/bot`.
- A…
