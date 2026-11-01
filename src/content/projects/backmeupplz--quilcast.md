---
repo: "backmeupplz/quilcast"
name: "quilcast"
description: "A tiny Farcaster client that talks straight to Quilibrium's Hypersnap network from your browser"
readmeQualityOk: true
url: "https://github.com/backmeupplz/quilcast"
homepage: "https://quilcast.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [48, 35]
topics: ["decentralized-social", "farcaster", "farcaster-client", "hypersnap", "preact", "quilibrium", "social-network", "typescript", "web3"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-20T18:17:04Z"
lastCommitAt: "2026-11-01T22:59:25Z"
lastReleaseAt: "2026-10-27T01:48:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f8d4a2258444bc95fa8dd5a7f56863c903d615fe3a952c003ef829893edfb9af/backmeupplz/quilcast"
fundingLinks: ["GITHUB:https://github.com/backmeupplz", "BUY_ME_A_COFFEE:https://buymeacoffee.com/borodutch"]
---

# Quilcast

A small Farcaster client that runs in the browser and talks straight to the [Hypersnap](https://hypersnap.org) network that Quilibrium runs. Reads hit the public node's HTTP API, writes are protobuf messages signed in the browser and posted to `/v1/submitMessage`, and keys live in the browser's IndexedDB, never in `localStorage`. The only server is a tiny static host that also gives shared links proper previews.

Live at **[quilcast.com](https://quilcast.com)**, and as an app for iPhone (App Store) and Android (Google Play, F-Droid, or the APK from the [latest release](https://github.com/backmeupplz/quilcast/releases/latest/download/quilcast.apk)).

## What it does

- Following and trending feeds (top-level casts), threads with their parent casts, profiles with separate casts and replies tabs
- On a cast's page, the like, recast and quote counts open lists of who liked, recast or quoted it
- Notifications: grouped likes, recasts and follows plus replies and mentions, with an unread dot. Hypersnap leaves recasts out, so those are looked up for your 25 newest casts while the page is open
- Several accounts per browser, switched from the account menu (bottom left) or…
