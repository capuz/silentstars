---
repo: "cpesch/RouteConverter"
name: "RouteConverter"
description: "The popular GPS conversion and editing tool"
url: "https://github.com/cpesch/RouteConverter"
homepage: "http://www.routeconverter.com"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["gps", "conversion", "editing", "routing"]
stars: 163
forks: 43
openIssues: 3
closedIssues: 39
watchers: 6
contributors: 53
recentReleases: 4
createdAt: "2011-01-19T17:50:27Z"
lastCommitAt: "2026-07-04T19:19:45Z"
lastReleaseAt: "2026-07-04T16:57:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 51
maintainers: ["cpesch", "weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/479580f456aa2735079f909f6d71f0ba5031e7ec7ef957c95b3b7548a49d6f69/cpesch/RouteConverter"
---

# RouteConverter

**RouteConverter** is a popular, free open-source tool to **display, edit, enrich and
convert** GPS routes, tracks and waypoints across **80+ formats** (GPX, KML, NMEA,
TomTom, Garmin, and many more). It's a cross-platform Java/Swing desktop app with a
map view, plus a command-line tool.

🌐 **[routeconverter.com](https://www.routeconverter.com/)** — features, screenshots,
supported formats, FAQ, and downloads.

## Download

- **Stable releases:** https://releases.routeconverter.com/latest/
- **Prereleases (frequent):** https://releases.routeconverter.com/prerelease/

The **Windows** (`.exe`) and **macOS** (`.app`) downloads bundle a Java runtime —
nothing else to install. The **Linux** build ships as a runnable `.jar` that needs
**Java 21 or later** installed on your system.

## Build & run from source

You need **JDK 21** (e.g. from [Adoptium](https://adoptium.net/)). Maven comes
bundled via the wrapper — no separate install.

```sh
git clone git@github.com:cpesch/RouteConverter.git
cd RouteConverter

./mvnw clean package          # full build + tests

# run the desktop app (build that module first):
./mvnw -pl RouteConverterLinux -am package
java -jar…
