---
repo: "zebrunner/mcloud"
name: "mcloud"
description: "Mobile farm ecosystem for Android and iOS devices"
readmeQualityOk: true
url: "https://github.com/zebrunner/mcloud"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
topics: ["testing", "automation", "mobile", "cloud", "devicefarm", "android", "ios", "tvos", "androidtv", "appium"]
stars: 210
forks: 28
openIssues: 2
closedIssues: 165
watchers: 12
contributors: 7
recentReleases: 0
createdAt: "2019-07-26T11:16:48Z"
lastCommitAt: "2026-11-26T12:01:43Z"
lastReleaseAt: "2022-05-04T12:55:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["azarouski", "mcloud-conventions-sync[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/985cb77a860b76bd848a1608a3d5054f8953d7f8175bc3faffd44b04096cc794/zebrunner/mcloud"
---

# Zebrunner MCloud

Zebrunner MCloud is a Device Farm for automated test execution (Appium) and remote web access by humans to physical devices (Android and iOS) including phones, tablets, and TVs. It is fully integrated into the [Zebrunner (Community Edition)](https://zebrunner.github.io/community-edition) ecosystem and can be used both for manual and automated testing.

This repository is the server side of the farm: the docker compose services of [STF](https://github.com/zebrunner/stf) (a fork of [DeviceFarmer/stf](https://github.com/DeviceFarmer/stf) with iOS devices and the Zebrunner sign-in), the Selenium/Appium hub [mcloud-grid](https://github.com/zebrunner/mcloud-grid) and the nginx in front of them, managed by `zebrunner.sh`. The devices are connected by [mcloud-agent](https://github.com/zebrunner/mcloud-agent).

Feel free to support the development with a [**donation**](https://www.paypal.com/donate/?hosted_button_id=MNHYYCYHAKUVA) for the next improvements.

## Run

### System requirements

| Requirement | Value |
| --- | --- |
| Operating System | Ubuntu 24.04, macOS |
| CPU | 4+ Cores |
| Memory | 16 Gb RAM |
| Free space | SSD 32Gb+ of free space |
