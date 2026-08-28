---
repo: "HexRaysSA/plugin-repository"
name: "plugin-repository"
description: "public index of IDA Pro plugins"
readmeQualityOk: true
url: "https://github.com/HexRaysSA/plugin-repository"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 41
forks: 18
openIssues: 5
closedIssues: 13
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2025-09-10T17:34:53Z"
lastCommitAt: "2026-08-28T12:23:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["florinnania", "fnania-hexrays", "williballenthin"]
openGraphImageUrl: "https://opengraph.githubassets.com/1249334d93aae417c8341976f50765c92df7f772724c56734597191e9dc1831f/HexRaysSA/plugin-repository"
---

# The IDA Plugin Repository
*A modern ecosystem for discovering, installing, and sharing IDA plugins.*

This repository contains the official index of discovered IDA plugins, and provides the underlying data for [plugins.hex-rays.com](https://plugins.hex-rays.com/) and the IDA Plugin Manager. Please read the article [Introducing the IDA Plugin Manager](https://hex-rays.com/blog/introducing-the-ida-plugin-manager) for a detailed introduction.

In summary:

- The JSON manifest is here: [./plugin-repository.json](https://github.com/HexRaysSA/plugin-repository/blob/HEAD/plugin-repository.json).
- The periodic index job is done via the GitHub Action named [sync](https://github.com/HexRaysSA/plugin-repository/blob/HEAD/.github/workflows/sync.yml). Results and logs can be seen here: [actions/workflows/sync.yml](https://github.com/HexRaysSA/plugin-repository/actions/workflows/sync.yml).
- The explicitly known and ignored repositories are here: [./known-repositories.txt](https://github.com/HexRaysSA/plugin-repository/blob/HEAD/known-repositories.txt) and [./ignored-repositories.txt](https://github.com/HexRaysSA/plugin-repository/blob/HEAD/ignored-repositories.txt).

Watch the Git history…
