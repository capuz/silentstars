---
repo: "sdr-enthusiasts/docker-opensky-network"
name: "docker-opensky-network"
description: "OpenSky Network Feeder, multi-architecture (x86_64, arm32v7, arm64)"
url: "https://github.com/sdr-enthusiasts/docker-opensky-network"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [55, 29]
stars: 29
forks: 6
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2020-05-26T04:39:43Z"
lastCommitAt: "2026-06-24T00:20:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 67
undervaluedScore: 33
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48e160a7207d84fed6dcc45e49c8792a825cfa137d22eb5656ce784df789d66f/sdr-enthusiasts/docker-opensky-network"
---

# sdr-enthusiasts/docker-opensky-network

Docker container running [OpenSky Network's](https://opensky-network.org/)'s `opensky-feeder`. Designed to work in tandem with [sdr-enthusiasts/docker-readsb-protobuf](https://github.com/sdr-enthusiasts/docker-readsb-protobuf). Builds and runs on `x86_64`, `arm64`, `arm32v7` and `386`.

`opensky-feeder` pulls ModeS/BEAST information from a host or container providing ModeS/BEAST data, and sends data to OpenSky.

For more information on what `opensky-feeder` is, see here: <https://opensky-network.org/community/projects/30-dump1090-feeder>.

## Supported tags and respective Dockerfiles

- `latest` (`master` branch, `Dockerfile`)
- `latest_nohealthcheck` is the same as the `latest` version above. However, this version has the docker healthcheck removed. This is done for people running platforms (such as [Nomad](https://www.nomadproject.io)) that don't support manually disabling healthchecks, where healthchecks are not wanted.
- Version and architecture specific tags available

## Obtaining an OpenSky Network Feeder Serial Number

First-time users should obtain a feeder serial number.

Firstly, make sure you have registered for an account on…
