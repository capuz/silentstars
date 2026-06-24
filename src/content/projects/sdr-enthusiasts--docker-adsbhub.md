---
repo: "sdr-enthusiasts/docker-adsbhub"
name: "docker-adsbhub"
description: "Multi-arch docker container to feed SBS data to ADSBHub.org"
url: "https://github.com/sdr-enthusiasts/docker-adsbhub"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [70, 26]
topics: ["ads-b", "adsb", "piaware"]
stars: 20
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2020-08-10T18:26:00Z"
lastCommitAt: "2026-06-24T00:23:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 37
maintainers: ["renovate[bot]", "fredclausen"]
openGraphImageUrl: "https://opengraph.githubassets.com/81f4856103faeeebee706e80d9e667ec81290f6c1082382c9f0f07b83e31ff57/sdr-enthusiasts/docker-adsbhub"
---

# sdr-enthusiasts/docker-adsbhub

Docker container to send ADS-B data to [ADSBHub](https://www.adsbhub.org). Designed to work in tandem with [sdr-enthusiasts/docker-readsb-protobuf](https://github.com/sdr-enthusiasts/docker-readsb-protobuf). Builds and runs on `x86`, `x86_64`, `arm64`, `arm32v7` and `arm32v6`.

This container pulls SBS/Basestation protocol data from a host or container, and sends the data to ADSBHub.

## Supported tags and respective Dockerfiles

- `latest` (`main` branch, `Dockerfile`)
- Version and architecture specific tags available

## First-time users

### Obtaining ADSBHub Station Key

First-time users should obtain a ADSBHub Station dynamic IP key. Follow the directions for steps 1 and 2 at [ADSBHub how to feed](https://www.adsbhub.org/howtofeed.php), ensuring your station is set up as a client and the data protocol set as "SBS".

### Setting up your station

In your station preferences, you should set the following:

- Feeder type: `Linux`
- Data Protocol: `SBS`
- Station mode: `Client`

## Up-and-Running with `docker run`

```shell
docker run \
 -d \
 --rm \
 --name adsbhub \
 -e TZ="YOURTIMEZONE" \
 -e SBSHOST=YOURSBSHOST \
 -e CLIENTKEY=YOURCLIENTKEY \…
