---
repo: "volneydouglas/zasder-weather-backend"
name: "zasder-weather-backend"
description: "Self-hosted weather backend for the Zasder Weather iOS app — AmbientWeather, Davis WeatherLink, or direct 433/915 MHz RF capture (LilyGO ESP32) → SQLite → small HTTP API. Deploy to Fly.io or local Docker."
readmeQualityOk: true
url: "https://github.com/volneydouglas/zasder-weather-backend"
homepage: "https://zasder.com/weather"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-14T07:19:50Z"
lastCommitAt: "2026-09-28T10:05:45Z"
lastReleaseAt: "2026-08-12T19:21:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 50
maintainers: ["volneydouglas"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eca4a3882983fc57fa8b349f5206017e334933589a4abf22355567dbe3d0fbb/volneydouglas/zasder-weather-backend"
---

# Zasder Weather (backend)

Self-hosted weather-station backend. Pulls data from any combination of
**AmbientWeather cloud**, **Davis WeatherLink cloud or LAN**, **WeatherFlow
Tempest cloud**, or direct **433/915 MHz RF capture** (LilyGO ESP32+SX1276),
stores it in SQLite, and exposes a small HTTP API that a
[companion iOS app](https://zasder.com/weather) reads.

Built because [MyAcurite](https://www.acurite.com/) was killed by AcuRite in
2026 and Davis's WeatherLink Console is a paid cloud lock-in. Owning your
own backend means the data is yours, the dashboard is yours, the app keeps
working when vendors change their minds.

**Not sure what you need?** The
**[install planner](https://zasder.com/weather-helper)** asks what hardware
you have and what you want, then prints a tailored, difficulty-tagged
checklist — which LilyGO board(s) to buy, the exact commands to run, and a
ready-to-paste `setup-fly.sh` one-liner. It runs entirely in your browser
(no login, nothing stored on a server). It also has a **device finder** —
search your station by brand/model (AcuRite, LaCrosse, Oregon Scientific,
Ecowitt, Davis, …) to see how it's supported and what to buy.

If you want LLM-assisted…
