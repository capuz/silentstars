---
repo: "themartianapp/herdrup"
name: "herdrup"
description: "iOS herdr client: a herdr client that contains a terminal"
readmeQualityOk: true
url: "https://github.com/themartianapp/herdrup"
homepage: "https://herdrup.themartian.app/"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 237
forks: 11
openIssues: 74
closedIssues: 146
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-01T04:05:59Z"
lastCommitAt: "2026-11-05T00:22:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 27
maintainers: ["jerryfane"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f0f88c55e0193863dcde47e833e02c607063456177483793ddd415b832b306f/themartianapp/herdrup"
---

# herdrup

**Answer your AI coding agents from your phone.**

herdrup is an iOS client for [herdr](https://github.com/jerryfane/herdr) — a calm status
board for the coding agents running on your machine, with a real terminal one tap behind each.
When an agent needs you, you see it at a glance and can reply from anywhere.

[**⬇ Download on the App Store**](https://apps.apple.com/app/id6798087089) · 🌐 [herdrup.app](https://herdrup.app)

The framing is *a herdr client that contains a terminal*, not a terminal app that happens to run
herdr. A generic SSH terminal renders a character grid and cannot know what a pane or an agent is;
herdr's JSON API exposes both, so panes and agents become real UI objects instead of pixels.

## What it does

- **Status board** — every agent grouped by what it needs: *needs you* (amber), *working*, *done*,
  *stopped*. Colour is meaning, not decoration — the one signal that matters reads instantly.
  On a herdr that advertises `events_v2`, rows change as status events arrive, including agents on
  federated machines the coordinator relays; the list is re-fetched every 30 s as a backstop and
  after a stream reconnect. An older herdr is polled every 5 s.…
