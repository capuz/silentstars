---
repo: "leplusorg/docker-tor"
name: "docker-tor"
description: "Run TOR conveniently from a multi-platform docker container."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-tor"
homepage: "https://hub.docker.com/r/leplusorg/tor"
language: "Shell"
languages: ["Shell"]
languagePcts: [70]
topics: ["docker-container", "docker", "docker-image", "dockerfile", "tor", "theonionrouter", "anonymity", "proxy", "web-proxy", "socks5"]
stars: 30
forks: 9
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-12-03T19:09:34Z"
lastCommitAt: "2026-08-29T17:28:42Z"
lastReleaseAt: "2025-01-11T00:56:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 65
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b5ec4b7be68cd286d2f304afd4507b812f039ad1f927f3a4082ed49822eaa6/leplusorg/docker-tor"
---

# TOR

Run TOR conveniently from a multi-platform Docker container.

## Usage

### To use the containerized TOR proxy from your host machine

The simplest way to launch a TOR proxy using this container accessible
from your host machine only is to use the following command:

```bash
docker run --rm -p 127.0.0.1:9050:9050 -e SOCKS_HOSTNAME=0.0.0.0 leplusorg/tor
```

If you want the TOR proxy to be reachable from other machines on your
network (i.e. share it), you can run:

```bash
docker run --rm -p 0.0.0.0:9050:9050 -e SOCKS_HOSTNAME=0.0.0.0 leplusorg/tor
```

Then make sure that your firewall rules allow remote connection to
your port 9050.

Once the Docker container has finished starting, you can test it with the following command:

```bash
curl -fsSL --socks5 localhost:9050 --socks5-hostname localhost:9050 https://check.torproject.org/api/ip
```

### To use the containerized TOR proxy from other containers

In that use case, you can use `docker compose` with a compose file
similar to this (where `bar`'s definition should be replaced by the
container that you actually want to run using TOR):

```YAML
---
version: "3.8"

services:
  tor:
    image: leplusorg/tor:latest…
