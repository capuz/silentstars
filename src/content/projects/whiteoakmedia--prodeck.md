---
repo: "whiteoakmedia/prodeck"
name: "prodeck"
description: "Production booth control for churches — ProPresenter and Planning Center in one place, live dashboards on phones and kiosks, crew paging and check-in, sound-console mirroring."
readmeQualityOk: true
url: "https://github.com/whiteoakmedia/prodeck"
homepage: "https://whiteoakmedia.io/tools"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 28]
topics: ["av", "church", "planning-center", "propresenter", "react", "rust", "tauri", "worship"]
stars: 6
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-01T13:35:24Z"
lastCommitAt: "2026-11-03T19:05:47Z"
lastReleaseAt: "2026-09-09T17:11:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 58
maintainers: ["whiteoakmedia", "cornerstonechurchct"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b8693a2bb01b3d6f23436ab6b7a24bfa48de31e0fde0388be7e4d5d7085ef4e/whiteoakmedia/prodeck"
---

# ProDeck

The production booth, in one app. ProDeck runs on a Mac in your booth and ties
the room together: ProPresenter, Planning Center, your consoles, crew phones,
kiosk screens, lobby NFC discs, and your livestream — all feeding drag-and-drop
dashboards that the whole team can see from anywhere.

Built with Tauri 2 (Rust) + React/TypeScript, plus two small Cloudflare
Workers for the optional cloud features.

## What it does

- **Dashboards** — widget grids (rundown with computed clock times, now/next,
  slide grid, SPL + RTA, timers, readiness lights, stage feed…) served to the
  booth screen, browsers, phones, and kiosks from a built-in web gateway.
- **ProPresenter** — live status, slide thumbnails, transport, layer clears,
  playlist control, slide-note-driven automation.
- **Planning Center** — plans, rundown, teams, per-song key/leader/mic chips,
  PCO Live control, mic-assignment maps that push channel names to the desk.
- **Crew phones** — installable web app: pages that buzz (scoped to who's
  actually serving), team chat, checklists, auto check-in by network or
  geofence, poster-QR signup with booth approval.
- **TapLink** — NFC discs whose destination follows the…
