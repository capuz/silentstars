---
repo: "machbase/neo-server"
name: "neo-server"
description: "machbase-neo = time series database + mqtt + http + data visualization"
url: "https://github.com/machbase/neo-server"
homepage: "https://docs.machbase.com/neo/"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["database", "iot", "mqtt", "time-series", "time-series-database", "tsdb", "timeseries"]
stars: 195
forks: 11
openIssues: 2
closedIssues: 10
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2023-01-02T00:40:00Z"
lastCommitAt: "2026-07-01T07:04:06Z"
lastReleaseAt: "2023-03-14T04:39:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 42
maintainers: ["OutOfBedlam", "EdwardLee210"]
openGraphImageUrl: "https://opengraph.githubassets.com/087dde0a28b31965b9751f120ef1bc79447f05a7ebca628165c7b36500e9e6eb/machbase/neo-server"
discussionCount: 5
---

# machbase-neo

Machbase is a blazing fast time-series database designed specifically for IoT applications and implemented in C.
`machbase-neo` is an IoT Database Server that embeds the Machbase engine and offers essential and convenient features for building IoT platforms,
including MQTT and HTTP APIs. It is highly versatile and can be installed on a wide range of machines,
from Raspberry Pi devices to high-performance servers.

API and Interfaces

- [x] HTTP: Applications and sensors read/write data via HTTP REST API
- [x] MQTT: Sensors write data via MQTT protocol
- [x] SSH: Command line interface for human and batch processes
- [x] WEB UI (Batteries included)
- [x] UI API to build custom UI (Batteries replaceable)
- [x] A zero-dependency Go client for building applications, available at https://github.com/machbase/neo-client

## Documents

[https://docs.machbase.com/neo](https://docs.machbase.com/neo)

## Install Prebuilt Binary

- Download

```sh
sh -c "$(curl -fsSL https://docs.machbase.com/install.sh)"
```

- Unzip the archive file

## Install Using Docker

```sh
docker pull machbase/machbase-neo
```

https://hub.docker.com/r/machbase/machbase-neo

### Build using docker…
