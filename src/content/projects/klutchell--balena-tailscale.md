---
repo: "klutchell/balena-tailscale"
name: "balena-tailscale"
description: "Run a Tailscale subnet router on balena!"
readmeQualityOk: true
url: "https://github.com/klutchell/balena-tailscale"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [79, 21]
stars: 15
forks: 9
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-07-03T21:20:35Z"
lastCommitAt: "2026-08-08T04:36:10Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 72
maintainers: ["klutchell-renovate[bot]", "klutchell"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce7474ba7dc8601d559eee3b5a4fc4fa4830de81bac18280003314a0877b950f/klutchell/balena-tailscale"
postedAt: "2026-08-08T04:39:00.044Z"
---

# balena-tailscale

Add your device to your [Tailscale](https://tailscale.com/) network with this
block!

## Usage

To use this block, add a service in your `docker-compose.yml` file as shown
below.

```yml
volumes:
  ...
  ts-state: {}

services:
  ...
  tailscale:
    # where <arch> is one of aarch64, armv7hf or amd64
    image: bh.cr/gh_klutchell/tailscale-<arch>
    network_mode: host
    restart: always
    volumes:
      - ts-state:/var/lib/tailscale
    labels:
      - io.balena.features.kernel-modules=1
    cap_add:
      - net_admin
      - sys_module
    tmpfs:
      - /tmp
      - /var/run/
```

To pin to a specific version of this block use:

```yml
services:
  ...
  tailscale:
    # where <version> is the release semver or release commit ID
    image: bh.cr/gh_klutchell/tailscale-<arch>/<version>
    network_mode: host
    restart: on-failure
    volumes:
      - ts-state:/var/lib/tailscale
    labels:
      - io.balena.features.kernel-modules=1
    cap_add:
      - net_admin
      - sys_module
    tmpfs:
      - /tmp
      - /var/run/
```

## Customization

### Environment Variables

The supported environment variables are detailed on the
[official DockerHub…
