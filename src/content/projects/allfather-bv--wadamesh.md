---
repo: "ALLFATHER-BV/wadamesh"
name: "wadamesh"
description: "Touch-UI MeshCore firmware for LilyGo T-Deck / Heltec V4 TFT (ESP32-S3). The wadamesh app; depends on a MeshCore fork. Split out of meshcomod."
readmeQualityOk: true
url: "https://github.com/ALLFATHER-BV/wadamesh"
language: "C"
languages: ["C", "C++"]
languagePcts: [52, 45]
stars: 49
forks: 8
openIssues: 31
closedIssues: 52
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-06-12T21:08:38Z"
lastCommitAt: "2026-07-05T20:55:42Z"
lastReleaseAt: "2026-06-22T17:17:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 40
maintainers: ["B0N3-GD", "tun0", "Yazutsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d8096f755d88ce0e3a1e21fe45c330e84d758ed0bd075ab633ff3fa7d9cd9f/ALLFATHER-BV/wadamesh"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/wadamesh-readme-dark.svg">
  </picture>
</p>

Touch-UI [MeshCore](https://github.com/meshcore-dev/MeshCore) companion-radio
firmware for the **LilyGo T-Deck / T-Deck Plus** and **Heltec V4 + TFT**
(ESP32-S3).

An LVGL touch UI — map, chat, contacts, channels, settings — split out of
[meshcomod](https://github.com/ALLFATHER-BV/meshcomod). The app depends on a
MeshCore fork via PlatformIO `lib_deps`.

## Boards

- LilyGo T-Deck / T-Deck Plus — env `LilyGo_TDeck_companion_radio_touch`
- Heltec V4 + TFT + CHSC6x touch — env `heltec_v4_tft_companion_radio_usb_tcp_touch`

## Architecture

This repo holds only the **app**: the `companion_radio` glue, the `ui-touch`
LVGL UI, the two boards' glue/variants, and `platformio.ini`. The **MeshCore
core is not vendored here** — it's pulled as a library via `lib_deps` from the
[`ALLFATHER-BV/meshcomod`](https://github.com/ALLFATHER-BV/meshcomod) monorepo
(the same repo as the non-touch firmware), pinned by a lean source-only `core-*`
git tag. The touch-app files this repo owns (TouchPrefsStore, WifiRuntimeStore,
the transports, …) are dropped from the lib via…
