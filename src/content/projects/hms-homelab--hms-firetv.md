---
repo: "hms-homelab/hms-firetv"
name: "hms-firetv"
description: "HMS FireTV - Fire TV Lightning Protocol service for home automation. Control Amazon Fire TV devices via MQTT and REST API. Built with C++17, Drogon, PostgreSQL."
readmeQualityOk: true
url: "https://github.com/hms-homelab/hms-firetv"
homepage: "https://shmaestro.com/projects/firetv"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["adb", "android-tv", "fire-tv", "home-assistant", "remote-control"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-15T22:34:05Z"
lastCommitAt: "2026-11-20T12:14:11Z"
lastReleaseAt: "2026-11-20T12:22:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 33
maintainers: ["aamat09"]
openGraphImageUrl: "https://opengraph.githubassets.com/9359205f13ee3178266468cde52b4f7a71a814ebfa912e3ee1557f433fc9fa6a/hms-homelab/hms-firetv"
---

# HMS FireTV - Fire TV Lightning Protocol Service

Multi-device Fire TV control service with event-driven Home Assistant MQTT Discovery integration and Angular web UI. Register as many Fire TVs as you want — each one appears automatically as a set of button entities in HA. 2.2 MB memory.

Beyond the documented Lightning endpoints it also drives **Alexa by voice**, **press-and-hold** key repeat, and the device's **real installed app list** — see [Fire TV protocol](#fire-tv-protocol) for how those were found.

## Screenshots

### Home Assistant remote

A dashboard built on this service's REST API, in `homeassistant/`. The pad is
one machined disc; a tap steps once and a **hold repeats**, which is the
keyDown/keyUp pair the official app uses. Devices are chips, and the phrase
box speaks to Alexa.

The app grid is generated from the device's **own installed list**, so it
cannot go stale, and the voice view holds the phrase box, the live microphone
and the keyboard.

### Live microphone

Push to talk from a browser or the Home Assistant companion app. Audio is
captured, downsampled and relayed straight into the Fire TV's own voice
channel.
