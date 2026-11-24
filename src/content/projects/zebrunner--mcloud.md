---
repo: "zebrunner/mcloud"
name: "mcloud"
description: "Mobile farm ecosystem for Android and iOS devices"
readmeQualityOk: true
url: "https://github.com/zebrunner/mcloud"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["testing", "automation", "mobile", "cloud", "devicefarm", "android", "ios", "tvos", "androidtv", "appium"]
stars: 209
forks: 28
openIssues: 2
closedIssues: 163
watchers: 12
contributors: 6
recentReleases: 0
createdAt: "2019-07-26T11:16:48Z"
lastCommitAt: "2026-11-24T14:04:35Z"
lastReleaseAt: "2022-05-04T12:55:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["azarouski", "mcloud-conventions-sync[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bc9a18f145e7b8154ae8a1d589cb6404ec1b7f68de7e0d3117ac5c9ace034d8/zebrunner/mcloud"
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
