---
repo: "cpesch/RouteConverter"
name: "RouteConverter"
description: "The popular GPS conversion and editing tool"
readmeQualityOk: true
url: "https://github.com/cpesch/RouteConverter"
homepage: "https://www.routeconverter.com"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["gps", "conversion", "editing", "routing"]
stars: 168
forks: 44
openIssues: 7
closedIssues: 160
watchers: 5
contributors: 54
recentReleases: 3
createdAt: "2011-01-19T17:50:27Z"
lastCommitAt: "2026-11-06T09:18:12Z"
lastReleaseAt: "2026-11-06T10:38:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 51
maintainers: ["cpesch", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bba499b556475738919705c5e66e2e6eb562370d414b724a1f0b59d27feac062/cpesch/RouteConverter"
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
bundled via the wrapper — no separate install. **Always build with `./mvnw`**,
not a system-installed `mvn`: the wrapper pins the exact Maven version the
build (and CI) is tested against, so a stale system Maven is never the thing
under test.

```sh
git clone…
