---
repo: "sdr-enthusiasts/docker-flightradar24"
name: "docker-flightradar24"
description: "Multi-architecture docker container (arm32v7/arm64/x86_64) running flightradar24 fr24feed. Designed to work in tandem with https://sdr-e.com/docker-adsb-ultrafeeder"
url: "https://github.com/sdr-enthusiasts/docker-flightradar24"
language: "Shell"
languages: ["Shell"]
languagePcts: [70]
topics: ["docker-container", "adsb", "ads-b", "rtl-sdr", "rtlsdr"]
stars: 236
forks: 24
openIssues: 1
closedIssues: 28
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2020-01-31T07:57:35Z"
lastCommitAt: "2026-06-24T00:19:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 27
maintainers: ["renovate[bot]", "wiedehopf", "fredclausen"]
openGraphImageUrl: "https://opengraph.githubassets.com/63c998e5f93e2493d0ad60bcfc55cb37dd4ed9ecec9c551da0ee4a33bbfc94e9/sdr-enthusiasts/docker-flightradar24"
discussionCount: 2
---

# sdr-enthusiasts/docker-flightradar24

![Build Passing](https://img.shields.io/github/actions/workflow/status/sdr-enthusiasts/docker-flightradar24/deploy.yml?branch=main)
![Contributors](https://img.shields.io/github/contributors/sdr-enthusiasts/docker-flightradar24)
![Last Commit](https://img.shields.io/github/last-commit/sdr-enthusiasts/docker-planefence)

Docker container running FlightRadar24's `fr24feed`. Designed to work in tandem with [ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) or any other BEAST formal data source. Builds and runs on `x86_64`, `armhf` & `arm64`.

`docker-flightradar24` pulls ModeS/BEAST information from the [ultrafeeder container](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) (or another host providing ModeS/BEAST data), and sends data to FlightRadar24.

For more information on what fr24feed is, see here: [share-your-data](https://www.flightradar24.com/share-your-data).

- [sdr-enthusiasts/docker-flightradar24](#sdr-enthusiastsdocker-flightradar24)
  - [Supported tags and respective Dockerfiles](#supported-tags-and-respective-dockerfiles)
  - [Obtaining a Flightradar24 Sharing Key for…
