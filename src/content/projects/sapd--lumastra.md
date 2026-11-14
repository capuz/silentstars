---
repo: "Sapd/lumastra"
name: "lumastra"
description: "Self-hosted media server for movies, series, music, audiobooks and live TV (AGPL-3.0)"
readmeQualityOk: true
url: "https://github.com/Sapd/lumastra"
homepage: "https://lumastra.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agpl", "home-server", "jellyfin", "media-server", "music-streaming", "pgvector", "postgresql", "self-hosted", "subsonic", "sveltekit"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-09-27T07:09:20Z"
lastCommitAt: "2026-11-14T22:05:06Z"
lastReleaseAt: "2026-11-14T17:08:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Sapd"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e15a6ccee11de38cf1247c6f7b1d95dffea5cb528c3aa5a3f135effdd87b3c9/Sapd/lumastra"
fundingLinks: ["GITHUB:https://github.com/Sapd"]
discussionCount: 9
---

# Lumastra

Lumastra is a self-hosted media server for movies, series, music, audiobooks and Live TV. One login on every device, including the TV, and it scales from a single Docker host to a Kubernetes cluster.

_Demo with fictional media. Lumastra supplies no media or TV subscriptions; you connect your own sources._

## Why Lumastra

Made for homelabs and clusters. Instead of one big process, Lumastra runs as separate services: the web app, a background worker for scans and analysis, PostgreSQL 17+ with pgvector, and two Valkey servers. A heavy scan can't starve playback of CPU or memory, you add web replicas when more people stream, the worker can move to another node, and a restarting pod doesn't take the whole server down. Large libraries stay fast because PostgreSQL does the searching and sorting. It is Kubernetes-native, and Docker Compose works just as well.

Sign-in works on every device: the built-in login, any OIDC provider, or forward auth (Authentik, Authelia, oauth2-proxy). The iPhone, iPad and Apple TV apps sign in with a code you approve in a browser, so nobody types a password with the TV remote.

Everything lives in one server: films and series next to music with…
