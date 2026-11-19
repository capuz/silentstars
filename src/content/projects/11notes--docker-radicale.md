---
repo: "11notes/docker-radicale"
name: "docker-radicale"
description: "Run rootless radicale"
readmeQualityOk: true
url: "https://github.com/11notes/docker-radicale"
language: "Dockerfile"
languages: ["Dockerfile", "Go"]
languagePcts: [53, 47]
stars: 13
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-07-06T06:43:23Z"
lastCommitAt: "2026-11-19T05:04:56Z"
lastReleaseAt: "2026-03-30T13:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 48
maintainers: ["github-actions[bot]", "11notes"]
openGraphImageUrl: "https://opengraph.githubassets.com/94486585bff816ce92036936706f0ed5d10f04acbb50e2f8f02abbad45ce2e90/11notes/docker-radicale"
discussionCount: 0
---

# RADICALE
[<img src="https://img.shields.io/github/issues/11notes/docker-radicale?color=7842f5">](https://github.com/11notes/docker-radicale/issues)

Run rootless radicale

# INTRODUCTION 📢

[radicale](https://github.com/Kozea/Radicale) (created by [Kozea](https://github.com/Kozea/)) is a small but powerful CalDAV (calendars, to-do lists) and CardDAV (contacts) server.

# SYNOPSIS 📖
**What can I do with this?** This image will give you a [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) and leightweight Radicale installation. It also offers a custom entrypoint that will create calendars or address books based on LDAP group membership (if LDAP is used), so you can easily share these with multiple users. See [compose.ldap.yml](https://github.com/11notes/docker-radicale/blob/master/compose.ldap.yml).

# UNIQUE VALUE PROPOSITION 💶
**Why should I run this image and not the other image(s) that already exist?** Good question! Because ...
