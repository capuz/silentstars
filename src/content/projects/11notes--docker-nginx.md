---
repo: "11notes/docker-nginx"
name: "docker-nginx"
description: "run Nginx rootless and distroless."
readmeQualityOk: true
url: "https://github.com/11notes/docker-nginx"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
stars: 53
forks: 2
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-01-15T13:11:56Z"
lastCommitAt: "2026-11-19T05:05:56Z"
lastReleaseAt: "2025-12-24T05:25:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 31
maintainers: ["github-actions[bot]", "11notes"]
openGraphImageUrl: "https://opengraph.githubassets.com/13c971615c88b9d3a362ae5f3f644063517e68629c71f17dafc390df22ef45f6/11notes/docker-nginx"
discussionCount: 0
---

# NGINX
[<img src="https://img.shields.io/github/issues/11notes/docker-nginx?color=7842f5">](https://github.com/11notes/docker-nginx/issues)

run Nginx rootless and distroless.

# INTRODUCTION 📢

nginx (engine x) is an HTTP web server, reverse proxy, content cache, load balancer, TCP/UDP proxy server, and mail proxy server.

# SYNOPSIS 📖
**What can I do with this?** This image will serve as a base for nginx related images that need a high-performance webserver. The default tag of this image is stripped for most functions that can be used by a reverse proxy in front of nginx, it adds however important webserver functions like brotli compression. The default tag is not meant to run as a reverse proxy, use the full image for that. **The default tag does not support HTTPS for instance!**

# UNIQUE VALUE PROPOSITION 💶
**Why should I run this image and not the other image(s) that already exist?** Good question! Because ...
