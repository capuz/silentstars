---
repo: "crosspoint-reader/crosspoint-tools"
name: "crosspoint-tools"
description: "Website and tools for CrossPoint & Xteink devices"
readmeQualityOk: true
url: "https://github.com/crosspoint-reader/crosspoint-tools"
homepage: "https://crosspointreader.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [57]
stars: 24
forks: 15
openIssues: 8
closedIssues: 2
watchers: 3
contributors: 16
recentReleases: 10
createdAt: "2026-05-15T16:02:43Z"
lastCommitAt: "2026-08-11T04:49:12Z"
lastReleaseAt: "2026-06-22T05:08:13Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 84
undervaluedScore: 49
maintainers: ["itsthisjustin", "Uri-Tauber", "crsBug"]
openGraphImageUrl: "https://opengraph.githubassets.com/252858d9eba707c1b60e34da49a92e3fc56da847b82d26567de43aaa3206b91e/crosspoint-reader/crosspoint-tools"
---

# CrossPoint Tools

Web-based firmware flasher, build system, and font builder for [CrossPoint Reader](https://github.com/crosspoint-reader/crosspoint-reader) devices. Hosted at [crosspointreader.com](https://crosspointreader.com).

## What it does

- **Stable firmware flashing** — Flash the latest CrossPoint release or stock Xteink firmware to X3 and X4 devices directly from the browser using WebSerial
- **Insider builds** — Nightly firmware compiled automatically from the upstream `master` branch
- **Beta builds** — Curated test builds exposed alongside stable, sourced from either an admin-uploaded `.bin` or a tagged GitHub release on the firmware repo
- **Custom font firmware** — Replace built-in fonts in the firmware with user-supplied TTF/OTF files via a CI build
- **SD-card font builder** — Convert TTF/OTF files into `.cpfont` files for SD-card font loading on the device, using the firmware repo's own conversion script (no client-side reimplementation)
- **Stock firmware** — Restore original Xteink firmware (English or Chinese) for both X3 and X4
- **Admin dashboard** — Manually trigger builds, manage beta entries, and monitor build status

## Architecture

The project runs…
