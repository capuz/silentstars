---
repo: "sokolpezinok/yaroc"
name: "yaroc"
description: "Radio Online Control for orienteering"
readmeQualityOk: true
url: "https://github.com/sokolpezinok/yaroc"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["orienteering", "sportident", "splittimes", "lora", "lte", "nbiot", "raspberrypi", "nb-iot", "iot", "nrf52840"]
stars: 7
forks: 0
openIssues: 4
closedIssues: 13
watchers: 3
contributors: 1
recentReleases: 6
createdAt: "2023-04-22T11:52:27Z"
lastCommitAt: "2026-08-28T14:23:05Z"
lastReleaseAt: "2026-08-26T17:36:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 77
maintainers: ["lukipuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/c09c58938b16ab02f657fcacee659c086437c381b005dc915c5824306271462e/sokolpezinok/yaroc"
discussionCount: 0
---

# YAROC

Yet Another [ROC](https://roc.olresultat.se). Radio Online Control for orienteering and other sports that use SportIdent timing (trail running, MTB enduro).

It's as if [ROC](https://roc.olresultat.se) and [jSh.radio](http://radio.jsh.de) had a baby.

# Features

* **Very low latency, very low bandwidth**: Wi-Fi or LTE/LTE-M can achieve latencies as low as 100–200ms. Bandwidth usage under 1 MB per day allows the use of cheap IoT SIM cards. Uses Protobuf for data serialization to minimize packet size.
* **Support for multiple physical layers**: NB-IoT, LTE-M, Radio (LoRa), LTE, Wi-Fi, LAN. Also supports BLE and USB for short-range communication.
* **Radio mesh**: Seamless integration with **Meshtastic** allows for LoRa-based mesh networks. Data travels across multiple nodes to reach a gateway, which can then bridge the data to the internet or directly to orienteering software (MeOs, etc.).
* **Simple integration via USB** recognizable by most orienteering software. Plug an ethernet cable into a Raspberry Pi in the finish area, connect it via USB cable to a computer and you are done!
* **Broad hardware compatibility**: Runs on everything from Linux machines (Raspberry Pi,…
