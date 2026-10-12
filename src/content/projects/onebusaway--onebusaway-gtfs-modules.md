---
repo: "OneBusAway/onebusaway-gtfs-modules"
name: "onebusaway-gtfs-modules"
description: "A Java-based library for reading, writing, and transforming public transit data in the GTFS format, including database support."
readmeQualityOk: true
url: "https://github.com/OneBusAway/onebusaway-gtfs-modules"
homepage: "https://github.com/OneBusAway/onebusaway-gtfs-modules/tree/main/docs"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 149
forks: 113
openIssues: 23
closedIssues: 76
watchers: 13
contributors: 44
recentReleases: 0
createdAt: "2012-02-12T17:16:44Z"
lastCommitAt: "2026-10-12T11:16:38Z"
lastReleaseAt: "2024-09-05T08:54:45Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 49
maintainers: ["leonardehrenfried", "renovate[bot]", "VillePihlava"]
openGraphImageUrl: "https://opengraph.githubassets.com/3721957704c8227f20c6dcadc43feb4ff8ccd873cea96cf8da83dd5808b9908a/OneBusAway/onebusaway-gtfs-modules"
---

# onebusaway-gtfs-modules 

A Java library for reading and writing [GTFS](https://developers.google.com/transit/gtfs) feeds, including database support.

See more documentation in the [`docs folder`](https://github.com/OneBusAway/onebusaway-gtfs-modules/blob/HEAD/docs).

## Maven usage

In your `pom.xml`, include:

```

<dependency>
  <groupId>org.onebusaway</groupId>
  <artifactId>onebusaway-gtfs</artifactId>
  <version>${VERSION}</version>
</dependency>
```

...where `<version>` contains the latest version number.

## Update on camsys-apps.com repo

In August 2024 @leonardehrenfried took over maintainership and subsequently all artifacts are
now again published to Maven Central. Adding camsys-apps.com to your Maven repo configuration is no
longer necessary when you use version 1.4.18 or newer.
