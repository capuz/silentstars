---
repo: "Baskerville42/svitloboard"
name: "svitloboard"
description: "ESP8266 firmware for working with СвітлоБот"
originalDescription: "Прошивка ESP8266 для роботи з СвітлоБот"
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/Baskerville42/svitloboard"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 10
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2024-07-24T06:14:25Z"
lastCommitAt: "2026-10-23T09:33:28Z"
lastReleaseAt: "2026-10-23T09:03:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 46
maintainers: ["Baskerville42"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/832985596/342c70d5-3761-4c15-aecb-5d0e18ced3e1"
---

# SvitloBoard

SvitloBoard is firmware for ESP8266 and ESP32 that reports device availability to the [СвітлоБот](https://svitlobot.in.ua) service. The device itself does not keep charts, does not manage a Telegram channel, and does not determine the cause of unavailability. СвітлоБот handles that logic.

> **SvitloBoard 2.0 released.** Verified on a physical ESP-01S 1 MB board. The testing status of other targets is listed in the [testing matrix](https://github.com/Baskerville42/svitloboard/blob/HEAD/docs/test-plan.md).

## How it works

After the first boot, the board creates a Wi-Fi network `SvitloBoard-XXXXXX` with the password `svitlobot`. In the local web interface, you need to specify:

1. the primary Wi-Fi network and, if needed, up to two backup networks;
2. if needed, the Channel Key obtained from СвітлоБот (it can be added later);
3. an optional administrator password for the local interface.

After saving, the board connects to Wi-Fi and periodically sends HTTPS requests to СвітлоБот. If the primary network is unavailable, the firmware checks the backup networks. If none of them works, the board reopens its access point so the settings can be corrected, without erasing…
