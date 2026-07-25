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
stars: 234
forks: 24
openIssues: 14
closedIssues: 73
watchers: 6
contributors: 11
recentReleases: 0
createdAt: "2020-12-08T21:15:54Z"
lastCommitAt: "2026-07-25T06:01:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 39
maintainers: ["klutchell-renovate[bot]", "klutchell", "klutchell-flowzone[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/170ce550592f5453cec6da0a402333bc15b9fe6fd85201ea2b2af55ef8630248/klutchell/unbound-docker"
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

### Optional: Enable CacheDB Module with Redis backend

The cache DB module was compiled into daemon, but is disabled by default. To
enable this module, follow this steps:

- Create a `cachedb.conf` under your custom configuration directory…
