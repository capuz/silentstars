---
repo: "ThilinaTLM/kinema"
name: "kinema"
description: "Desktop app for discovering movies and TV, browsing Torrentio sources, and streaming via Real-Debrid into mpv/VLC."
readmeQualityOk: true
url: "https://github.com/ThilinaTLM/kinema"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["movies", "mpv", "real-debrid", "tmdb", "torrentio", "tv-series", "vlc", "gpui", "rust", "streamio"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-22T04:51:05Z"
lastCommitAt: "2026-11-07T16:11:41Z"
lastReleaseAt: "2026-10-01T16:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["ThilinaTLM", "thisaramanohara"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1217643575/61e1ba81-5eaa-4d0d-9298-820f7da4c4ab"
---

# Kinema

A pre-1.0 Rust desktop app for movies and TV series, built directly on GPUI
(`gpui-pre =0.3.9`) and targeting Windows, macOS and Linux without KDE dependencies.

Kinema browses a local-first movie and series catalog (Cinemeta, TMDB), finds
sources (Torrentio, Peerflix), resolves them through debrid (Real-Debrid,
AllDebrid), downloads into managed storage and plays from a loopback server in an
embedded mpv window or external mpv/VLC. A personal Library tracks membership,
watched state and resume progress. Linux is the only hands-on tested platform;
Windows/macOS runtime behavior is unqualified.

## Documentation

- [Architecture](https://github.com/ThilinaTLM/kinema/blob/HEAD/docs/architecture/README.md): principles, engineering decisions
  and the strict [design system](https://github.com/ThilinaTLM/kinema/blob/HEAD/docs/architecture/design-system.md).
- [Proposals and roadmap](https://github.com/ThilinaTLM/kinema/blob/HEAD/docs/proposals/README.md): drafts of new ideas and
  designs, plus the planned work.

## Development

Install Rust **1.97.1** through rustup, the
[platform…
