---
repo: "11notes/docker-sshpiper"
name: "docker-sshpiper"
description: "run sshpiper rootless and distroless."
readmeQualityOk: true
url: "https://github.com/11notes/docker-sshpiper"
language: "Go"
languages: ["Go", "Dockerfile"]
languagePcts: [57, 24]
stars: 12
forks: 7
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2022-11-04T10:37:58Z"
lastCommitAt: "2026-07-17T06:46:11Z"
lastReleaseAt: "2026-06-08T13:25:13Z"
status: "quiet"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 55
undervaluedScore: 53
maintainers: ["11notes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf32ef43a098c7c2e06ca223baa583b614c1d6dcec0f9796a15d055d3ab34ef5/11notes/docker-sshpiper"
discussionCount: 0
---

# SSHPIPER
[<img src="https://img.shields.io/github/issues/11notes/docker-sshpiper?color=7842f5">](https://github.com/11notes/docker-sshpiper/issues)

run sshpiper rootless and distroless.

# INTRODUCTION 📢

[sshpiper](https://github.com/tg123/sshpiper) (created by [tg123](https://github.com/tg123)) is the reverse proxy for sshd. all protocols, including ssh, scp, port forwarding, running on top of ssh are supported.

# SYNOPSIS 📖
**What can I do with this?** This image will run sshpiper [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) and [distroless](https://github.com/11notes/RTFM/blob/main/linux/container/image/distroless.md), for maximum security and performance. In addition to being small and secure, it also offers two additional plugins (rest_auth and rest_challenge) which allow you to use any backend for authentication and challenges.

# UNIQUE VALUE PROPOSITION 💶
**Why should I run this image and not the other image(s) that already exist?** Good question! Because ...

> [!IMPORTANT]
>* ... this image runs [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) as 1000:1000
>* ... this image has no…
