---
repo: "tribixbite/beambam"
name: "beambam"
description: "BambuStudio v02.06.00.51 patches + termux-x11 toolkit + signed-MQTT LAN bridge for Bambu X2D/H2D printers on aarch64 Android (Termux)"
readmeQualityOk: true
url: "https://github.com/tribixbite/beambam"
language: "Python"
languages: ["Python"]
languagePcts: [67]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-25T13:18:10Z"
lastCommitAt: "2026-11-25T13:14:00Z"
lastReleaseAt: "2026-11-25T13:17:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["tribixbite"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc2c9e83d6e82fd635f5e2d2fc27ea42efba2346d606b4754ae392d7bb5bcf4/tribixbite/beambam"
---

# beambam — LAN-first stack for Bambu Lab printers (any model, any firmware)

> *beam* (send) + *bam* (fast). Homepage: [beambam.boo](https://beambam.boo).

A drop-in replacement for the Bambu Network Plugin + Bambu Cloud, built
for the printers Bambu's first-party stack doesn't reach: **X2D, H2D,
H2S, H2C, P2S, X1E, and refreshed P1+X1 firmware (Jan-2025+) that
requires RSA-SHA256 signed MQTT** — and for the platforms Bambu
doesn't ship to (aarch64 Linux / Termux / Android phones / macOS / WSL).

> The repository was originally `x2d` (the printer that motivated the
> work); the package was renamed to `beambam` in v1.1.0 to reflect that
> the bridge supports every Bambu model, not just the X2D.

Roadmap: see [`ROADMAP.md`](https://github.com/tribixbite/beambam/blob/HEAD/ROADMAP.md) for the backlog. Per-release
notes in [`CHANGELOG.md`](https://github.com/tribixbite/beambam/blob/HEAD/CHANGELOG.md). How beambam stacks up against
other open clients: [`docs/COMPARISON.md`](https://github.com/tribixbite/beambam/blob/HEAD/docs/COMPARISON.md).

## What is this

**Three things in one repo:**
