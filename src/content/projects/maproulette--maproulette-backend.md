---
repo: "maproulette/maproulette-backend"
name: "maproulette-backend"
description: "MapRoulette back-end / API"
readmeQualityOk: true
url: "https://github.com/maproulette/maproulette-backend"
language: "Scala"
languages: ["Scala"]
languagePcts: [92]
topics: ["maproulette", "openstreetmap", "osm"]
stars: 53
forks: 40
openIssues: 127
closedIssues: 209
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2016-03-11T22:07:54Z"
lastCommitAt: "2026-10-26T20:59:53Z"
lastReleaseAt: "2018-03-28T15:08:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 56
maintainers: ["jake-low", "CollinBeczak", "ljdelight"]
openGraphImageUrl: "https://opengraph.githubassets.com/c22a343fda4f6829a89428736021e34181e5986084bf4b23343ae4caa2dc33c2/maproulette/maproulette-backend"
---

# MapRoulette API

Welcome to the repository for the MapRoulette back-end server code. The MapRoulette back-end exposes the MapRoulette API, which the MapRoulette front-end web application depends on. The source code for the web application is in [a separate repository](https://github.com/maproulette/maproulette3).

**If you just want to deploy the MapRoulette back-end, [we have a 🚢 Docker image 🚢 for that](https://github.com/maproulette/maproulette2-docker)**. This is especially useful if you want to contribute to the MapRoulette front-end and don't intend to touch the back-end.

## Requirements

MapRoulette depends on several technologies for building and running the project:

* Java 17 JDK
* PostgreSQL with PostGIS
* [Scala Build Tool](https://www.scala-sbt.org/download.html)

## Setup

MapRoulette is a complex tool and depends on several other tools
([Mapillary](https://www.mapillary.com/),
[Overpass API](https://overpass-api.de/),
[OpenStreetMap](https://www.openstreetmap.org/),
PostgreSQL, and others) that need to be correctly configured within the application's
[HOCON configuration](https://github.com/lightbend/config/blob/main/HOCON.md) files.

The initial setup is not…
