---
repo: "wrzonance/WrzDJ"
name: "WrzDJ"
description: "A song requester app with web dashboard, guest-facing kiosk, and automatic track detection (Linux/Mac/Windows) from DJ controllers/software "
readmeQualityOk: true
url: "https://github.com/wrzonance/WrzDJ"
homepage: "https://wrzdj.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 43]
topics: ["audio", "denon-dj", "djing", "live-sound", "pioneerdj", "react", "traktor"]
stars: 14
forks: 5
openIssues: 10
closedIssues: 225
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-04T01:34:14Z"
lastCommitAt: "2026-10-26T21:00:46Z"
lastReleaseAt: "2026-02-09T00:18:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["thewrz", "joethesaint", "codspeed[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da12f796649ffea49e38d90e478d38ed21cad965158e5be3101db381767794ab/wrzonance/WrzDJ"
---

# WrzDJ

A real-time song request system for DJs. Guests scan a QR code to submit requests. DJs manage everything from a live dashboard with automatic track detection from their equipment via plugins for Denon, Pioneer, Serato, and Traktor.

---

## Features

**Guest experience**
- QR code join, no app install or login required
- Search songs via Tidal, submit requests with notes, upvote others
- Live request queue and kiosk display showing what's playing now
- Cloudflare Turnstile human verification (invisible managed challenge) on `/join` and `/collect`
- Nickname gate (profanity filter + letter-padding bypass protection) on standard events, or **frictionless join** — when the DJ enables it, guests skip the nickname/email step and get an auto-generated name they can rename later (great for weddings and private parties)
- Email verification with one-time codes (Resend API) and cross-device guest profile merge
- Pre-event song collection (`/collect`) — guests vote on suggestions before the night, DJs bulk-review
- Inline song preview in the collect detail sheet (Tidal embed)
- Verified badge next to email-verified nicknames in request lists and leaderboard
- Tower v2 UI on `/join`…
