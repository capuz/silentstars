---
repo: "11notes/docker-tinyauth"
name: "docker-tinyauth"
description: "run tinyauth rootless and distroless."
readmeQualityOk: true
url: "https://github.com/11notes/docker-tinyauth"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
stars: 105
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-16T18:56:04Z"
lastCommitAt: "2026-05-08T08:21:37Z"
lastReleaseAt: "2025-12-11T06:40:46Z"
status: "quiet"
tags: []
healthScore: 50
undervaluedScore: 25
maintainers: ["github-actions[bot]", "11notes"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9531cb1c4667650c5bf59583a1919c3b23db47958d876f6d2eb6cdc8bd66da1/11notes/docker-tinyauth"
discussionCount: 1
---

# TINYAUTH
[<img src="https://img.shields.io/github/issues/11notes/docker-tinyauth?color=7842f5">](https://github.com/11notes/docker-tinyauth/issues)

run tinyauth rootless and distroless.

# INTRODUCTION 📢

[Tinyauth](https://github.com/tinyauthapp/tinyauth) (created by [steveiliop56](https://github.com/steveiliop56)) is a simple authentication middleware that adds a simple login screen or OAuth with Google, Github and any provider to all of your docker apps. It supports all the popular proxies like Traefik, Nginx and Caddy.

# SYNOPSIS 📖
**What can I do with this?** This image will run tinyauth [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) and [distroless](https://github.com/11notes/RTFM/blob/main/linux/container/image/distroless.md) for more security, including disabling it's telemetry in [code](https://github.com/11notes/docker-tinyauth/blob/master/arch.dockerfile#L51).

# UNIQUE VALUE PROPOSITION 💶
**Why should I run this image and not the other image(s) that already exist?** Good question! Because ...

> [!IMPORTANT]
>* ... this image runs [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) as…
