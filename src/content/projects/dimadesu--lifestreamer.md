---
repo: "dimadesu/LifeStreamer"
name: "LifeStreamer"
description: "Android IRL live streaming app"
url: "https://github.com/dimadesu/LifeStreamer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 35
forks: 4
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-11T02:20:47Z"
lastCommitAt: "2026-06-25T02:06:25Z"
lastReleaseAt: "2025-09-18T11:26:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 49
maintainers: ["dimadesu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4b3092ecef9530ff4247514deab00e65b32c3f01db89469bed572c7e76d4c1f/dimadesu/LifeStreamer"
---

# LifeStreamer - Android app for IRL live streaming

LifeStreamer is an Android app designed for IRL live streaming based on [StreamPack SDK](https://github.com/ThibaultBee/StreamPack).

[<img src="docs/google-play-store.svg">](https://play.google.com/store/apps/details?id=com.dimadesu.lifestreamer)

## Features

- Restream RTMP feed or USB video/audio (UVC) from action camera like DJI Osmo Action 4 as SRT HEVC/H.265 with amazing dynamic/adaptive bitrate algorithm from [Belabox](https://belabox.net/) or [Moblin](https://github.com/eerimoq/moblin).
- Can stream SRTLA or use SRTLA bonding via [Bond Bunny](https://github.com/dimadesu/bond-bunny) app.
- Can use feed from any RTMP or SRT server as source. For Android I built [MediaSrvr](https://github.com/dimadesu/MediaSrvr) app that can run RTMP server on Android devices.
- USB as source. Works with DJI Osmo Action 4 in 'Webcam' mode when connected to phone with one USB-C to USB-C cable. Also can work with Elgato Cam Link even when connected via USB hub. Feel free to test other UVC devices, like capture cards. I will mostly target DJI OA4 and Cam Link for now. Note: Phones can lower USB audio quality when USB video is used.
-…
