---
repo: "sdr-enthusiasts/docker-airnavradar"
name: "docker-airnavradar"
description: "AirNav Radarrbfeeder, multi-architecture (x86_64, arm32v7, arm64)"
url: "https://github.com/sdr-enthusiasts/docker-airnavradar"
language: "Dockerfile"
languages: ["Dockerfile", "Shell", "Nix"]
languagePcts: [50, 30, 20]
topics: ["rbfeeder", "radarbox", "docker", "docker-container", "ads-b", "adsb", "airnavradar"]
stars: 60
forks: 9
openIssues: 1
closedIssues: 48
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2020-04-03T07:14:56Z"
lastCommitAt: "2026-06-24T00:24:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 39
maintainers: ["renovate[bot]", "fredclausen", "kinginu"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd8defe1c9d6b1ff5f01687c2fb2ce43f697fd44efe3ed211e97cf1e3ba21df4/sdr-enthusiasts/docker-airnavradar"
discussionCount: 0
---

# sdr-enthusiasts/docker-airnavradar

Docker container running [AirNav Radar](https://www.airnavradar.com)'s `rbfeeder`. Designed to work in tandem with [sdr-enthusiasts/adsb-ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder). Builds and runs on `x86_64`, `arm64` and `arm32v7`.

`rbfeeder` pulls ModeS/BEAST information from a host or container providing ModeS/BEAST data, and sends data to Airnav Radar.

For more information on what `rbfeeder` is, see here: [sharing-data](https://www.airnavradar.com/sharing-data).

## Supported tags and respective Dockerfiles

- `latest` (`main` branch, `Dockerfile`)
- `latest_nohealthcheck` is the same as the `latest` version above. However, this version has the docker healthcheck removed. This is done for people running platforms (such as [Nomad](https://www.nomadproject.io)) that don't support manually disabling healthchecks, where healthchecks are not wanted.
- Version and architecture specific tags available

## Multi Architecture Support

Currently, this image should pull and run on the following architectures:

- `amd64`: Linux x86-64
- `arm32v7`, `armv7l`: ARMv7 32-bit (Odroid HC1/HC2/XU4, RPi 2B/3B)
- `arm64`,…
