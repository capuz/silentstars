---
repo: "WyriHaximusNet/docker-php"
name: "docker-php"
description: "Opinionated PHP Docker images"
readmeQualityOk: true
url: "https://github.com/WyriHaximusNet/docker-php"
homepage: "https://hub.docker.com/r/wyrihaximusnet/php"
language: "PHP"
languages: ["PHP", "Python", "Shell"]
languagePcts: [35, 32, 28]
topics: ["docker", "php", "parallel", "php7", "reactphp", "uv", "hacktoberfest", "php8"]
stars: 43
forks: 6
openIssues: 7
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-03-23T18:58:29Z"
lastCommitAt: "2026-11-02T11:36:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 54
maintainers: ["github-actions[bot]", "WyriHaximus", "wyrihaximus-net-renovate-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4aec3433984baa809f5c5f92ebfc104e26b4ab25cefafa2abf38ab1913f782b/WyriHaximusNet/docker-php"
fundingLinks: ["GITHUB:https://github.com/WyriHaximus"]
---

# Opinionated ReactPHP optimised PHP Docker images

# Images

This repo builds two different images, plus a `-dev` image for each containing [`composer`](https://getcomposer.org/), 
bash, git, ssh, strace, gdb, and make, and a `-root` image for all `*(-dev)` images where the default user is root. All the images 
are based on [`Alpine Linux`](https://alpinelinux.org/) and [`Debian Linux`](https://www.debian.org/). All images come with 
extensions used to increase the performance of [`ReactPHP`](https://reactphp.org/) (such as event loop extensions). Such extensions 
are highlighted **build** in the extensions list below. All the `Alpine Linux` images are scanned for vulnerabilities, and not pushed 
if any are found. The `Debian Linux` containers easily a few hundred so those aren't scanned. (There is no use in doing so.)

## Images News

Sometimes big changes happen to images, to stay informed please subscribe to this thread: https://github.com/WyriHaximusNet/docker-php/issues/46

### CVE Matrix

Currently Alpine and Debian images are treated differently, this matrix defines the differences between Alpine and Debian images:

| Base Image | Description…
