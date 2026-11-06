---
repo: "inanimate-tech/courier"
name: "courier"
description: "Batteries-included ESP32 connectivity library — WiFi, WebSocket, MQTT, reconnection, all handled"
readmeQualityOk: true
url: "https://github.com/inanimate-tech/courier"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["code", "firmware"]
stars: 56
forks: 3
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-09T08:44:34Z"
lastCommitAt: "2026-11-06T11:24:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["ACEFGI", "genmon", "Firat17aze"]
openGraphImageUrl: "https://opengraph.githubassets.com/853bd9adc62723b58df1d932a9286c886ee05c9453f5f403a943d359df5f0e8b/inanimate-tech/courier"
---

# courier

Batteries-included JSON messaging for ESP32. WiFi and user configuration, WebSocket, MQTT, UDP multicast, self-healing reconnection — all handled.

> [!IMPORTANT]
> Courier is under active development. See [docs/changelog.md](https://github.com/inanimate-tech/courier/blob/HEAD/docs/changelog.md) for changes on each release.
>
> ⚠️ This is **v0.4.0** and the API has changed considerably.
>
> To pin to the previous stable version use `lib_deps = https://github.com/inanimate-tech/courier.git#v0.3.2` in your `platformio.ini`.
>
> When you're ready to migrate, change your `lib_deps` to use the latest version from GitHub and point your coding agent at [docs/migration-0.3-to-0.4.md](https://github.com/inanimate-tech/courier/blob/HEAD/docs/migration-0.3-to-0.4.md).

Motivation: When you make something neat on your [M5Stick](https://shop.m5stack.com/products/m5stickc-plus2-esp32-mini-iot-development-kit?variant=44269818216705) you want the quickest path to messaging the back-end, and you want to carry it to places to show people and configure the Wi-Fi from your phone. Courier is how you do that.

Courier expects JSON messages with a `"type"` field. Messages are parsed with…
