---
repo: "ian-white83/ks-airplay-receiver"
name: "ks-airplay-receiver"
description: "AirPlay 2 multi-room receiver plugin for Kiosk Satellite: groups Echo Shows and other kiosks with HomePods, with PTP sync, a Now Playing view and Home Assistant entities."
readmeQualityOk: true
url: "https://github.com/ian-white83/ks-airplay-receiver"
language: "Java"
languages: ["Java"]
languagePcts: [87]
topics: ["airplay2", "homeassistant", "kiosk-satellite", "kiosk-satellite-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-11-08T06:28:37Z"
lastCommitAt: "2026-11-09T04:35:01Z"
lastReleaseAt: "2026-11-09T04:26:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ian-white83"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e9c463f47308a4dd8a2e28e64a1fb5a35952176f12fd92263e8cd91d7268dd0/ian-white83/ks-airplay-receiver"
---

# AirPlay 2 Multi-Room for Kiosk Satellite

Turns a [Kiosk Satellite](https://github.com/jxlarrea/kiosk-satellite) kiosk into an AirPlay 2 speaker that you can group with HomePods, Apple TVs and other AirPlay 2 speakers. Pick several speakers in the AirPlay menu on an iPhone, iPad or Mac and they play in sync.

Kiosk Satellite already has its own AirPlay receiver for single-speaker playback. This plugin adds what that receiver doesn't: AirPlay 2 buffered audio locked to the sender's clock, so the kiosk can be part of a group.

> **Turn off Kiosk Satellite's own AirPlay receiver.** If both run, the kiosk shows up twice in the AirPlay menu, and only this plugin's entry can join a group. In Kiosk Satellite, open **Settings > Media Player > AirPlay** and turn off **Enable AirPlay receiver**. That section only shows while **AirPlay** is the picked **Player**; if it isn't, the built-in receiver is already off.

- Groups with other AirPlay 2 speakers for multi-room audio.
- Follows the sender's volume slider.
- Shows what's playing: a floating player or a full-screen player with large cover art over the dashboard, and the same full-screen view in place of the screensaver while AirPlay…
