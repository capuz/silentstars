---
repo: "svengo/docker-tor"
name: "docker-tor"
description: "Simple Docker container to run a Tor node."
readmeQualityOk: true
url: "https://github.com/svengo/docker-tor"
homepage: "https://hub.docker.com/r/svengo/tor"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [61, 39]
topics: ["docker", "dockerfile", "tor", "node", "anonymity", "tor-node", "tor-server"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 24
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-09-04T20:10:06Z"
lastCommitAt: "2026-10-04T10:01:32Z"
lastReleaseAt: "2023-09-30T13:09:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 73
maintainers: ["svengo", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/99a6aa479a0b3c74a842c9897bdf4a6995698968f24700a31f837d8d8ef400c7/svengo/docker-tor"
---

# docker-tor

Simple Docker container to run a Tor node.

## Quick reference

- **Maintained by:**
  [Sven Gottwald](https://github.com/svengo/)

- **Where to get help:**
  [svengo/docker-tor issues](https://github.com/svengo/docker-tor/issues)

- **Docker Hub:**
  [svengo/tor](https://hub.docker.com/r/svengo/tor)

- **GitHub Container registry:**
  [svengo/docker-tor](https://github.com/svengo/docker-tor/pkgs/container/tor)

- **Tor project:**
  [Tor Project](https://www.torproject.org/)

## Supported Tor Versions and Dockerfile

The Docker images are tagged with the precise Tor version number. Only the current Tor release (aliased as `latest`) is supported. No other versions are guaranteed to be stable or secure.

- [`latest`, `0.4.9.13`](https://github.com/svengo/docker-tor/blob/main/Dockerfile)
 
## How to use this image

### Start a simple Tor node

This command will start a Tor node and open ports 9001 and 9030:

``` console
docker run -d -p 9001:9001 -p 9030:9030 --name tor svengo/tor
```

### Docker Compose

It is recommended to use `docker compose` for running the container. Use the supplied…
