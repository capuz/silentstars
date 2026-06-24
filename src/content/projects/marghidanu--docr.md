---
repo: "marghidanu/docr"
name: "docr"
description: "Crystal library for Docker Engine API"
url: "https://github.com/marghidanu/docr"
homepage: "https://marghidanu.github.io/docr/"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
topics: ["crystal", "docker", "docker-engine-api"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-02-02T08:18:31Z"
lastCommitAt: "2026-06-24T06:39:02Z"
lastReleaseAt: "2026-01-20T10:47:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 34
maintainers: ["marghidanu", "xendk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee91ef7e7a7017cfec681e047ccf6d73e19af617a70c00fa63b618fa6745a419/marghidanu/docr"
---

# docr

![CI](https://github.com/marghidanu/docr/workflows/CI/badge.svg)

Docker client for Crystal. 

 ## Description

Remaining issues:

* [ ] Test all endpoint functions
* [ ] Make sure models are complete
* [ ] Extend client to support calls over network

PRs are always welcomed!

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     docr:
       github: marghidanu/docr
   ```

2. Run `shards install`

## Usage

```crystal
require "docr"
```

## Supported API calls

### Containers

* [x] ContainerList
* [x] ContainerCreate
* [x] ContainerInspect
* [x] ContainerTop
* [x] ContainerLogs
* [x] ContainerChanges
* [ ] ContainerStats
* [x] ContainerStart
* [x] ContainerStop
* [x] ContainerRestart
* [x] ContainerKill
* [ ] ContainerUpdate
* [ ] ContainerRename
* [x] ContainerPause
* [x] ContainerUnpause
* [ ] ContainerAttach
* [x] ContainerWait
* [x] ContainerDelete

### Images

* [x] ImageList
* [x] ImageBuild
* [x] ImageCreate
* [x] ImageInspect
* [x] ImageHistory
* [x] ImagePush
* [x] ImageTag
* [x] ImageDelete

### Networks

* [x] NetworkList
* [x] NetworkCreate
* [x] NetworkInspect
* [ ] NetworkConnect
* [ ] NetworkDisconnect
* [x]…
