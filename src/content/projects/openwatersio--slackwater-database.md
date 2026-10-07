---
repo: "openwatersio/slackwater-database"
name: "slackwater-database"
description: "A public database of tide and current stations"
readmeQualityOk: true
url: "https://github.com/openwatersio/slackwater-database"
homepage: "https://openwaters.io/tides/database"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["constituents", "tidal-data", "tide", "tide-forecasts", "tides", "harmonic-constituents", "currents", "tidal-currents"]
stars: 25
forks: 6
openIssues: 26
closedIssues: 38
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-10-15T13:29:52Z"
lastCommitAt: "2026-10-07T10:30:45Z"
lastReleaseAt: "2026-02-18T15:22:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 61
maintainers: ["clarkbw", "bkeepers", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2a1e989c51fd286c3ec4d35547a27ed28f261726827a2fc9f57caf0028e647e/openwatersio/slackwater-database"
---

# Slackwater Tide and Current Station Database

> A public database of tide and current stations

This database includes station identity, structured location, stable web routes, and harmonic data from sources around the world. Tide constants can be used with a harmonic calculator like [Slackwater](https://github.com/openwatersio/slackwater) to create astronomical predictions.

## Sources

- ✅ [**NOAA**](https://github.com/openwatersio/slackwater-database/blob/HEAD/sources/noaa/README.md): National Oceanic and Atmospheric Administration
  ~3400 stations, mostly in the United States and its territories. Updated monthly via [NOAA's API](https://api.tidesandcurrents.noaa.gov/mdapi/prod/).

- ✅ [**TICON-4**](https://github.com/openwatersio/slackwater-database/blob/HEAD/sources/ticon/README.md): TIdal CONstants based on GESLA-4 sea-level records
  ~4200+ global stations - ([#16](https://github.com/openwatersio/slackwater-database/pull/16))

If you know of other public sources of harmonic constituents, please [open an issue](https://github.com/openwatersio/slackwater-database/issues/new) to discuss adding them.

## Usage

The database is available as an NPM package, as a tide-only…
