---
repo: "11notes/docker-distroless"
name: "docker-distroless"
description: "Build your own distroless images with this mini file system and some binaries"
url: "https://github.com/11notes/docker-distroless"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [92]
stars: 65
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-25T09:16:33Z"
lastCommitAt: "2026-07-01T07:05:42Z"
lastReleaseAt: "2025-08-18T12:59:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 47
maintainers: ["11notes"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d738ecabcfe726b8c67da0a227e50b001ad36863ba1d1f12114c4ad10ff268/11notes/docker-distroless"
discussionCount: 0
---

# DISTROLESS
[<img src="https://img.shields.io/github/issues/11notes/docker-DISTROLESS?color=7842f5">](https://github.com/11notes/docker-DISTROLESS/issues)

Build your own distroless images with this mini file system and some binaries

# SYNOPSIS 📖
**What can I do with this?** This image and its different layers can be used to build a distroless boiler plate for your application. Simply add the base layer and any additional layers (tags) with the stuff you need to run your application. All binaries are statically compiled and do not depend on any OS libraries or clib. The base layer contains Root CA certificates as well as time zone data and the user configuration for root and docker. Additional layers (tags) with statically compiled binaries are:

# STAND-ALONE BINARIES
* [11notes/distroless:curl](https://github.com/11notes/docker-distroless/blob/master/curl.dockerfile) - curl
* [11notes/distroless:dnslookup](https://github.com/11notes/docker-distroless/blob/master/dnslookup.dockerfile) - dnslookup
* [11notes/distroless:lego](https://github.com/11notes/docker-distroless/blob/master/lego.dockerfile) - lego
*…
