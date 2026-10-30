---
repo: "angelospk/athens-transit-map"
name: "athens-transit-map"
description: "Live map of Athens OASA buses and trolleys (Svelte + MapLibre)"
readmeQualityOk: true
url: "https://github.com/angelospk/athens-transit-map"
homepage: "https://bus.haroldpoi.dev"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [67, 30]
stars: 5
forks: 2
openIssues: 7
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-05T08:42:38Z"
lastCommitAt: "2026-10-30T11:03:12Z"
lastReleaseAt: "2026-10-25T09:01:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["angelospk"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0057da4c21c5b69ee049ef60ad701b506ee87aee9a1b826760a2026ab75653a/angelospk/athens-transit-map"
---

# athens-transit-map

**Live map:** https://bus.haroldpoi.dev · **Public API (no key), docs with try-it:**
[bus.haroldpoi.dev/api](https://bus.haroldpoi.dev/api) (OpenAPI 3.1, base URL `https://transit.haroldpoi.dev`)

https://github.com/user-attachments/assets/7949d8bc-1fb0-4a36-8a2c-bae249b19fcb

## At a glance

**The problem.** Athens buses (OASA) send GPS positions, but the only live source is an undocumented
endpoint that answers one route per request and does not answer data-centre addresses. There was no
map where you could see every bus of the city at once and follow your own lines.

**What I built**, beyond the upstream project
([foivospro/athens-gtfs-realtime](https://github.com/foivospro/athens-gtfs-realtime), whose matching ideas and viewer I started from):

- A Go backend ([athens-transit-rt](https://github.com/angelospk/athens-transit-rt)) that polls every active
  route under one request budget, matches vehicles to scheduled trips and serves a keyless JSON API,
  including map tiles of all ~1,500 live vehicles.
- This map (Svelte 5, MapLibre): the whole city live, up to 5 followed lines, each in its own colourblind-safe
  colour, vehicles that move along their route…
