---
repo: "mangod12/skydash"
name: "skydash"
description: "Open-source spatial intelligence dashboard with geospatial maps, OSINT-style entities, link analysis, missions, exports, and simulated drone telemetry. React + FastAPI + Leaflet + WebSockets."
readmeQualityOk: true
url: "https://github.com/mangod12/skydash"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [75, 22]
topics: ["aviation", "data-visualization", "drone", "fastapi", "full-stack", "mavlink", "react", "real-time", "telemetry", "web-dashboard"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-04T14:23:57Z"
lastCommitAt: "2026-11-17T14:38:36Z"
lastReleaseAt: "2026-02-23T12:43:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["mangod12"]
openGraphImageUrl: "https://opengraph.githubassets.com/2082aeaacc9486743a8f71cc5f37204a400edcbf92b6fb13d7e745d17b2fb4c1/mangod12/skydash"
---

# SkyDash

SkyDash is a web-based common operating picture for unmanned fleets and
geospatial intelligence. It shows a fleet, a map, entities, relationships and
missions on one screen, and can stream positions to TAK clients. It is built to
be inspected: small codebase, documented security model, no required cloud
services.

> **Status: engineering prototype.** All drone telemetry is simulated. SkyDash
> is not accredited or certified for any classification level, is not a real
> ground-control station, and is not a production investigation system. See
> [Limits](#limits).

- Live demo (open, simulated data): https://wonderful-cliff-0325f3800.7.azurestaticapps.net
- API docs: https://skydash-api-38666.azurewebsites.net/docs
- Release status: [docs/current-status.md](https://github.com/mangod12/skydash/blob/HEAD/docs/current-status.md)

## Features

**Fleet and telemetry**
- Three simulated drones streamed over a WebSocket, with HTTP polling as a
  fallback and a visible degraded-connection banner.
- Command panel (flight mode, altitude, yaw, emergency stop) with a command
  acknowledgement path.
- Scenario Lab: run named scenarios at different speeds and read a scorecard…
