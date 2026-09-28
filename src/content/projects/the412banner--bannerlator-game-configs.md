---
repo: "The412Banner/bannerlator-game-configs"
name: "bannerlator-game-configs"
description: "Bannerlator-native game config index — translated + appid-matched + merged from BannerHub community configs (read-only mirror; never writes upstream)"
readmeQualityOk: true
url: "https://github.com/The412Banner/bannerlator-game-configs"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [76, 24]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T08:38:09Z"
lastCommitAt: "2026-09-28T10:07:28Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fa1e3f2863a444b3b5a99fd8652b4c05a52d162be3e7851aa95516956092f71/The412Banner/bannerlator-game-configs"
---

# Bannerlator Game Configs

  &nbsp;<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FThe412Banner%2Fbannerlator-game-configs%2Fmain%2Fstats.json&query=%24.configs&label=configs%20shared&color=8b5cf6&style=for-the-badge" alt="configs shared" />
  &nbsp;<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fbannerhub-configs-worker.the412banner.workers.dev%2Faccount%2Fcount&query=%24.users&label=users%20registered&color=2dd4bf&style=for-the-badge" alt="users registered" />
</p>

</p>

A **Bannerlator-owned** game-config index, derived from the community configs in
[The412Banner/bannerhub-game-configs](https://github.com/The412Banner/bannerhub-game-configs).

## Isolation guarantee
This repo is **read-only** toward BannerHub: the daily sync fetches BannerHub's public
`games.json` / `devices.json`, and **writes only here.** Nothing in this repo ever modifies
`bannerhub-game-configs`, so it cannot affect BannerHub app/site builds.

## What's here
| File | Contents |
|---|---|
| `games_canonical.json` | Games **merged by Steam appid** → `{appid: {name, folders[], devices[], config_count}}`. This is the primary index…
