---
repo: "rtr7/kernel"
name: "kernel"
description: "Linux kernel images for router7"
readmeQualityOk: true
url: "https://github.com/rtr7/kernel"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 13
forks: 7
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2018-07-14T12:31:09Z"
lastCommitAt: "2026-08-10T05:06:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["gokrazy-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/91b3c5d1d2494bf94b825d3257e0278498eeb46e848e94d19de331b040712d11/rtr7/kernel"
---

Please see https://github.com/rtr7/router7

## Cloning the kernel repository

This repository clocks in at over 3 GB of disk usage, so you might want to clone
it as a shallow clone:

```
git clone --depth=1 https://github.com/rtr7/kernel
```

## Updating the kernel

First, follow the [gokrazy installation instructions](https://gokrazy.org/quickstart/).

We’re using docker to get a reproducible build environment for our
kernel images, so install docker if you haven’t already:
```
sudo apt install docker.io
sudo addgroup $USER docker
newgrp docker
```

Clone the kernel git repository:
```
git clone --depth=1 https://github.com/rtr7/kernel
cd kernel
```

Install the kernel-related gokrazy tools:
```
GOBIN=$PWD/_build go install github.com/gokrazy/autoupdate/cmd/gokr-rebuild-kernel@latest
```

And build a new kernel (takes about 5 minutes):
```
(cd _build && ./gokr-rebuild-kernel)
```

The new kernel is stored in the working directory. Use `gok add .` to
ensure the next `gok` build will pick up your changed files.
