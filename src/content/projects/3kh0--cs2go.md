---
repo: "3kh0/cs2go"
name: "cs2go"
description: "A browser port of Counter-Strike 2 powered by Three.js. Not affiliated with Valve or Counter-Strike."
readmeQualityOk: true
url: "https://github.com/3kh0/cs2go"
homepage: "https://cs2go.3kh0.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["counter-strike", "counter-strike-2"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-11T23:41:00Z"
lastCommitAt: "2026-11-10T11:38:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 44
maintainers: ["3kh0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d3eb736a318a719d5fea68463de91ec48eeb7083b69e2024509a0b05965488/3kh0/cs2go"
---

# cs2go

A browser port of Counter-Strike 2, powered by Three.js. This is in early beta but is playable. Not affliated with Valve or Counter-Strike.

Vertigo, Nuke, Inferno and Cache are available as early map previews alongside Dust II and Mirage. Visual parity and performance tuning are still in progress.

Firefox is not supported because Firefox decides to be special and not support many of the cool APIs we use.

## How to play

<https://en.wikipedia.org/wiki/Counter-Strike_2>

## How to actually play

1. Open <https://cs2go.3kh0.net> in a Chromium-based browser
2. Profit?

For the sake of making the game fun, I host 2 servers in the US that are already selectable in the game. You can also host your own server if you want to play with friends.

## Local Development

This is a fat ass monorepo. Frontend is on Vercel and assets are served from Cloudflare R2. To run locally, you just need to do `bun dev` and you should be ready for the races.
