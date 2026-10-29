---
repo: "jbhoorasingh/gt7-datalogger"
name: "gt7-datalogger"
description: "Capture, record, and analyze Gran Turismo 7 telemetry. Live driving readouts, multi-lap comparison across ~20 channels, corner-by-corner tire and suspension analysis, chassis event detection, fuel strategy, race line map, and a drag-and-drop OBS overlay builder."
readmeQualityOk: true
url: "https://github.com/jbhoorasingh/gt7-datalogger"
homepage: "http://docs.gt7-datalogger.com/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 48]
topics: ["granturismo", "granturismo7", "simracing", "telemetry", "datalogger", "gran-turismo-7", "gt7", "obs-overlay", "obs-overlays", "sim-racing"]
stars: 22
forks: 7
openIssues: 15
closedIssues: 66
watchers: 2
contributors: 4
recentReleases: 7
createdAt: "2026-07-25T04:35:39Z"
lastCommitAt: "2026-10-29T21:24:14Z"
lastReleaseAt: "2026-09-17T19:06:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 54
maintainers: ["jbhoorasingh", "NikiforovG", "Marstiphal"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1311661594/57a70055-4528-4842-89ec-a5628181b0a2"
---

# GT7 Datalogger

A telemetry datalogger and analysis dashboard for **Gran Turismo 7**. It captures the
PlayStation's live telemetry stream, records every lap, and serves a modern dark-themed
web dashboard for live driving, lap comparison, and session management.

Maintained by [u/Rfc6878](https://www.reddit.com/user/Rfc6878/) on Reddit.

Full feature parity with [snipem/gt7dashboard](https://github.com/snipem/gt7dashboard) —
plus additional features like the lens-coloured race line map, sector times, the corner
report card with braking points, chassis event detection, track auto-identification, the
overlay builder, a voice race engineer, and webhook notifications — rebuilt with a cleaner
architecture and a modern UI. In English, Spanish, Brazilian Portuguese and Japanese.

**📖 Full documentation: [jbhoorasingh.github.io/gt7-datalogger](https://jbhoorasingh.github.io/gt7-datalogger/)** —
per-feature guides, how every calculation works, and the API reference.

## Features

### Live

- **Live view** — shift lights (with limiter flash), large speed / gear / live-delta
  readouts, current / last / best / predicted lap, a rolling throttle/brake trace,
  boost, fuel, tire temps, race…
