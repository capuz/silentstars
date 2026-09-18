---
repo: "earthobservations/wetterdienst"
name: "wetterdienst"
description: "Open weather data for humans."
readmeQualityOk: true
url: "https://github.com/earthobservations/wetterdienst"
homepage: "https://wetterdienst.eobs.org"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["deutscher-wetterdienst", "open-source", "open-data", "time-series", "dwd", "radar", "weather", "weather-forecast", "weather-api", "weather-station"]
stars: 455
forks: 59
openIssues: 9
closedIssues: 303
watchers: 9
contributors: 29
recentReleases: 0
createdAt: "2018-12-08T15:39:42Z"
lastCommitAt: "2026-09-18T14:02:49Z"
lastReleaseAt: "2020-10-09T18:40:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 38
maintainers: ["gutzbenj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e9659e715818505099543742929df65e4b1368c59f041228c518ac95985d8c4/earthobservations/wetterdienst"
fundingLinks: ["GITHUB:https://github.com/gutzbenj", "PATREON:https://patreon.com/earthobservations", "CUSTOM:paypal.me/BenjaminGutzmann"]
discussionCount: 62
---

# Wetterdienst - Open weather data for humans

  <br/>
  <em>Hohenpeißenberg, Germany: 245 years of mean air temperature, one stripe per year from 1781 to 2025 — fetched and drawn with wetterdienst.</em>
</p>

<h2 align="center">Global warming is not an opinion.</h2>

> [!WARNING]
> This library is a work in progress!
> Breaking changes should be expected until a 1.0 release, so version pinning is recommended.

Wetterdienst gives you weather, climate and hydrology data from 22 national services through one
interface: one way to find a station, one way to ask for values, one shape of result. It is a
[polars](https://www.pola.rs/)-based Python library, a command line client, a REST API, an MCP
endpoint and a web app, all serving the same data.

Contributions and feedback are very welcome — we do not use most of this data ourselves, so what
you need is what tells us what to build next. Hand in an issue or a PR.

## What we support

| Provider                                                                                       | Country       | What you get                                                          |…
