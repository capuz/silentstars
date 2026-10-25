---
repo: "klutchell/unbound-docker"
name: "unbound-docker"
description: "unofficial unbound multiarch docker image"
readmeQualityOk: true
url: "https://github.com/klutchell/unbound-docker"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [82]
topics: ["dns", "dns-server", "docker", "docker-image", "dns-over-https"]
stars: 251
forks: 24
openIssues: 14
closedIssues: 75
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2020-12-08T21:15:54Z"
lastCommitAt: "2026-10-25T02:47:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 39
maintainers: ["klutchell-renovate[bot]", "klutchell", "klutchell-flowzone[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be2665d07453b11ff3ad3144a664c15d73b027d60473de7b963751b218199b0c/klutchell/unbound-docker"
---

# unofficial unbound multiarch docker image

[Unbound](https://unbound.net/) is a validating, recursive, and caching DNS
resolver.

Note that this image is
[distroless](https://github.com/GoogleContainerTools/distroless)!

> "Distroless" images contain only your application and its runtime
> dependencies. They do not contain package managers, shells or any other
> programs you would expect to find in a standard Linux distribution.

## Usage/Examples

Run a recursive dns server on host port 53 with the default configuration.

```bash
docker run --name unbound \
  -p 53:53/tcp -p 53:53/udp \
  klutchell/unbound
```

Optionally mount
[custom configuration](https://unbound.docs.nlnetlabs.nl/en/latest/manpages/unbound.conf.html)
from a host directory. Files must be readable by user/group `101:102` or world.

```bash
docker run --name unbound \
  -p 53:53/tcp -p 53:53/udp \
  -v /path/to/config:/etc/unbound/custom.conf.d \
  klutchell/unbound
```

### Optional: Enable CacheDB Module with Valkey (Redis-compatible) backend

The cache DB module was compiled into daemon, but is disabled by default. To
enable this module, follow this steps:

- You will need a Redis-protocol-compatible…
