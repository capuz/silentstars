---
repo: "Ishannaik/seatsniper"
name: "seatsniper"
description: "Discord bot that watches BookMyShow and DMs you the moment tickets open. Self-hosted with one command. Bun + TypeScript + SQLite, no API keys."
readmeQualityOk: true
url: "https://github.com/Ishannaik/seatsniper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["bookmyshow", "bun", "discord-bot", "typescript", "discord", "india", "movie-tickets", "notification-bot", "self-hosted", "sqlite"]
stars: 6
forks: 16
openIssues: 48
closedIssues: 55
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-07-27T05:45:43Z"
lastCommitAt: "2026-11-17T14:48:25Z"
lastReleaseAt: "2026-07-29T19:03:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 51
maintainers: ["Ishannaik", "slegarraga", "dchaudhari7177"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e59572ba6329b9f011fb29d11799bc949baa3a15553fd0a33fe9f3e5213bc38/Ishannaik/seatsniper"
---

Self-host in one command. Bun + TypeScript + SQLite. No API keys, no credit card, no browser.

---

## TL;DR

You tell it a BookMyShow link and a date. It polls the site, and the moment that
date is bookable you get one DM. Say `date:any` instead and it pings you every
time a *new* date unlocks or a *new* cinema starts showing the movie. Trim the
noise with filters: `format:IMAX,4DX` only pings for those screens,
`theatre:PVR,INOX` only for those cinemas, and `days:fri,sat` only on those
weekdays. (`format:` filters date and showtime alerts; "new cinema appeared"
alerts are not format-filtered, but they *are* theatre-filtered — see
[Commands](#commands).)

Works for movies, concerts, plays, any event BookMyShow lists in India.

It observes and notifies. It never buys tickets, holds seats, or fills carts.

## Table of contents

- [🎯 Features](#features)
- [🚀 Quick start](#quick-start)
- [🐳 Run with Docker](#run-with-docker)
- [📦 Manual setup](#manual-setup)
- [🎮 Commands](#commands)
- [🧠 How it works](#how-it-works)
- [⚙️ Configuration](#configuration)
- [🗺️ Project layout](#project-layout)
- [🧗 BookMyShow quirks](#bookmyshow-quirks)
- [🤝 Contributing](#contributing)

##…
