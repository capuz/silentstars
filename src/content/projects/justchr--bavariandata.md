---
repo: "JustChr/BavarianData"
name: "BavarianData"
description: "BMW CarData for Home Assistant, in the HACS default store: live MQTT stream + REST API for your BMW or MINI, with charging history & cost, trip journal and battery health. The replacement for the Connected Drive / MyBMW integration."
readmeQualityOk: true
url: "https://github.com/JustChr/BavarianData"
homepage: "https://justchr.github.io/BavarianData/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [55, 32]
topics: ["bmw", "bmw-cardata", "cardata", "hacs", "home-assistant", "homeassistant", "integration", "mqtt", "bavariandata", "bimmer-connected"]
stars: 23
forks: 4
openIssues: 3
closedIssues: 26
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-07-06T17:00:42Z"
lastCommitAt: "2026-10-29T10:36:17Z"
lastReleaseAt: "2026-07-11T10:34:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["JustChr"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7a40b7ee1c331a12902833a8f6ca00b1116bb4e81b0d1a4a756d22a8da8ac2b/JustChr/BavarianData"
fundingLinks: ["GITHUB:https://github.com/JustChr", "KO_FI:https://ko-fi.com/justchr"]
discussionCount: 12
---

Bring your BMW's or MINI's live data into Home Assistant — straight from BMW
  CarData, no third-party cloud in between.

---

BMW CarData is BMW's own telematics service: an MQTT stream that pushes vehicle
data in real time and a REST API for on-demand snapshots. This integration talks
to both directly, using your personal BMW client ID. There is no intermediate
server and no MyBMW screen-scraping — Home Assistant is the only client, and it's
**read-only** (CarData cannot command the car).

Every descriptor BMW sends becomes a native entity — charge level, doors, tire
pressures, the 12 V battery — each with a proper device class, unit and
translated states. On top of that the integration derives a **charging history &
cost** ledger, **battery-health** learning, a **trip journal**, a **real-range**
figure measured from your own driving rather than predicted, **long-term
statistics** for the Energy dashboard, and **CSV and printable-HTML export**
(the report prints to PDF from any browser) — all from the stream, spending no
API quota. A bundled **Lovelace card** and a cached vehicle image put a
good-looking dashboard one card away — the card registers itself, you just
place it.

It…
