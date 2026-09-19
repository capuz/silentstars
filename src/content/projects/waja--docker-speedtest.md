---
repo: "waja/docker-speedtest"
name: "docker-speedtest"
description: "Docker image for speedtest-cli: https://github.com/sivel/speedtest-cli"
readmeQualityOk: true
url: "https://github.com/waja/docker-speedtest"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [56, 32]
stars: 5
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-02-08T00:38:48Z"
lastCommitAt: "2026-09-19T02:47:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 54
maintainers: ["renovate[bot]", "waja"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f8c1577d29a7f010d6cef4ba395201f31e1e63d004b888ce82a7498a0358c59/waja/docker-speedtest"
---

# Docker-Speedtest

Builds a Docker image with the [speedtest-cli](https://github.com/sivel/speedtest-cli) ready to run.

Pulled from [https://github.com/tianon/dockerfiles/tree/master/speedtest](https://github.com/tianon/dockerfiles/tree/master/speedtest)

Ever wanted to speedtest a server, but didn't want to do funky tunnelling so you could hit up good ol' speedtest.net? WORRY NO MORE.

## Running

- run the Docker container with:

```bash
docker run --rm --net=host waja/speedtest -h
```

We don't actually _require_ `--net=host`, but if we're wanting to test native performance (or use `--source some-specific-host-IP`) then we want direct access to the relevant connections without any overhead.

## Building

```bash
make build
```

## Get a shell in a running container

```bash
make shell
```
