---
repo: "kiel-live/kiel-live"
name: "kiel-live"
description: "This app allows you to view live updates of public transport."
url: "https://github.com/kiel-live/kiel-live"
homepage: "https://kiel.flott-live.de"
language: "Go"
languages: ["Go", "Vue", "TypeScript"]
languagePcts: [38, 28, 26]
topics: ["vuejs", "live", "pwa", "nodejs", "public-transport", "bus-arrivals", "kiel", "opnv", "public-transit", "public-transportation"]
stars: 46
forks: 1
openIssues: 25
closedIssues: 43
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-05-20T08:06:23Z"
lastCommitAt: "2026-06-28T02:00:57Z"
lastReleaseAt: "2022-06-27T21:22:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 53
maintainers: ["renovate[bot]", "anbraten", "lukashass"]
openGraphImageUrl: "https://opengraph.githubassets.com/7214e976c18c2bb4085499bdb793fe0f69b8e9c88a2c8fecd516b155e8997656/kiel-live/kiel-live"
---

# kiel-live

This app allows you to view Kiels public transport (busses, bus-stops) in realtime.

## Features

- View realtime bus positions and bus-stops on map
- Get realtime information (route, direction, eta) of bus departures of a specific bus-stop
- Add bus-stops to favorites
- View trip stops of a bus

## Screenshots

## Development

### Structure

The project contains following parts:

- `app/`: A PWA written with Vue3
- `android-app/`: A native android app wrapper of the PWA
- `collectors/*`: Multiple agents to scrape data from different apis
- `nats/`: The NATS server used as message broker to stream data from collectors to the PWA clients

### PWA development

Copy the `.env.sample` file to `.env`. For the PWA development you only need to set `VITE_NATS_URL`.
You can set it to `wss://api.kiel-live.ju60.de/` to use the production server so you don't need to start your own backend (nats & collectors).

```bash
cd app/
pnpm install # install dependencies
pnpm run dev # start the PWA
```

### Nats & collectors development

Nats is the message broker used to bring data from the collectors to the PWA clients.

To start Nats simply copy the `.env.sample` file to `.env`, adjust…
