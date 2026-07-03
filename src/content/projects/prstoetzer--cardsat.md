---
repo: "prstoetzer/CardSat"
name: "CardSat"
description: "Cardputer ADV satellite tracker + multi-radio CAT Doppler control"
url: "https://github.com/prstoetzer/CardSat"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-31T20:08:01Z"
lastCommitAt: "2026-07-03T12:40:21Z"
lastReleaseAt: "2026-06-10T11:06:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["prstoetzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aff6b8b057409198de1adf46d67a6512a74c28d99d98593274927a446139f21/prstoetzer/CardSat"
---

# CardSat — Cardputer ADV satellite tracker + multi-radio CAT Doppler control

A self-contained, offline-first amateur-radio satellite tracker for the
**M5Stack Cardputer ADV** (ESP32-S3). It downloads GP (orbital element) data and
transponder data over WiFi, predicts passes with SGP4, and drives an Icom, Yaesu, or
Kenwood radio over CAT with real-time Doppler correction — using the AMSAT
**"One True Rule"** (constant frequency *at the satellite*), per-satellite
calibration, an all-favorites pass schedule, an AOS alarm, visual-pass and Sun/Moon
transit prediction, sun/eclipse status, and more.

> **Status: running on hardware; most CAT control still being verified on the air.**
> CardSat runs on the Cardputer ADV, and every feature has been exercised on the
> device. Pass prediction, the polar and pass-detail plots, mutual-window search, GPS,
> the AOS alarm, deep sleep, and the offline GP/transponder caches are all confirmed.
> **Single-pin CI-V is confirmed working on an IC-821** (full bidirectional exchange
> over one wire). The other per-protocol CAT encoders (separate-pin CI-V, Yaesu,
> Kenwood), the **Icom LAN (RS-BA1)** backend, and the rotator backends are host-tested
>…
