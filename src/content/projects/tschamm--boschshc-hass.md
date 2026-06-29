---
repo: "tschamm/boschshc-hass"
name: "boschshc-hass"
description: "Home Assistant component for accessing Bosch Smart Home Controller using boschshcpy python library."
url: "https://github.com/tschamm/boschshc-hass"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bosch-smart-home", "smart-home", "home-assistant-component", "home-assistant", "boschshcpy"]
stars: 225
forks: 39
openIssues: 16
closedIssues: 286
watchers: 9
contributors: 14
recentReleases: 0
createdAt: "2020-01-07T21:53:58Z"
lastCommitAt: "2026-06-29T07:23:28Z"
lastReleaseAt: "2021-05-04T16:39:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["mosandlt", "misa1515", "MephistoJB"]
openGraphImageUrl: "https://opengraph.githubassets.com/749557049b56ecf59d2d22a07e2a74fbeb3ad9249f7421b7cc9fb06590cedf29/tschamm/boschshc-hass"
---

# Bosch Smart Home Controller (SHC) for Home Assistant

A **local-only** Home Assistant integration for the Bosch Smart Home Controller (SHC I & II).
It talks directly to the controller over mutual-TLS on your LAN — **no cloud, no polling**
(`local_push`) — using [boschshcpy](https://github.com/tschamm/boschshcpy) as the API backend
(the exact version is pinned in [`manifest.json`](custom_components/bosch_shc/manifest.json)).

> Looking for the version that ships *inside* Home Assistant Core? This HACS repo is the
> **bleeding-edge** upstream — fixes and new devices land here first, then flow to Core later.

---

## Contents

- [Highlights](#highlights)
- [Quick start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Supported platforms](#supported-platforms)
- [Supported devices](#supported-devices)
- [Services / actions](#services--actions)
- [Data updates](#data-updates)
- [Troubleshooting](#troubleshooting)
- [Removal](#removal)
- [Known limitations](#known-limitations)
- [Use cases](#use-cases)
- [Automation examples](#automation-examples)
- [Architecture](#architecture)
- [Quality](#quality)
- [What's new](#whats-new)
- [Maintainers &…
