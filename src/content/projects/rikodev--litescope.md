---
repo: "RikoDEV/litescope"
name: "litescope"
description: "A lightweight, self-hosted dashboard for monitoring MeshCore networks."
readmeQualityOk: true
url: "https://github.com/RikoDEV/litescope"
homepage: "https://litescope.riko.dev"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [73, 26]
topics: ["analyzer", "meshcore", "mqtt", "docker", "lora", "react", "vibecoded"]
stars: 10
forks: 2
openIssues: 5
closedIssues: 31
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-05-30T17:17:31Z"
lastCommitAt: "2026-11-02T15:18:21Z"
lastReleaseAt: "2026-09-06T08:54:47Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 56
maintainers: ["RikoDEV", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1254526044/1bf3cf59-71c2-4beb-902d-a4107c71b7ce"
---

# liteScope

A lightweight, self-hosted dashboard for monitoring [MeshCore](https://meshcore.io/) networks. liteScope ingests MQTT telemetry from one or more MeshCore brokers, stores it in SQLite, and serves a real-time React UI with live packet feeds, node analytics, channel decryption, and observer stats.

---

## Features

- **Live packet feed** — filter by type, route, channel, or minimum observer count; live pause/resume; expandable per-observation sub-rows with per-observer hex and path data
- **Packet detail sidebar** — colored hex dump with byte offsets and section hover highlighting, field breakdown table, improved decoded payload with field-specific rendering; click any observation row to switch to that observer's perspective
- **Node explorer** — per-node RF analytics (RSSI / SNR distributions), last-heard filters, role tabs
- **Channels** — browse per-channel message history; add AES-128 keys (or derive them via SHA-256 from a passphrase/hashtag) for client-side decryption; combine multiple channels into one merged live feed; contact/location share cards with QR code; deep-linked channel URLs with working browser back navigation
- **Observer dashboard** — per-observer…
