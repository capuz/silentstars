---
repo: "zebrunner/mcloud-device"
name: "mcloud-device"
description: "Android, Appium and STF provider in Docker."
readmeQualityOk: true
url: "https://github.com/zebrunner/mcloud-device"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
stars: 11
forks: 10
openIssues: 0
closedIssues: 122
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2018-06-19T13:27:23Z"
lastCommitAt: "2026-11-26T15:24:08Z"
lastReleaseAt: "2022-01-18T19:27:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["azarouski", "mcloud-conventions-sync[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70440cd5528c0682aa8b2bf3b8c4b51529add1ce1762c554cb2ec79efba25f05/zebrunner/mcloud-device"
---

# Zebrunner MCloud Device

The STF provider of one Android or iOS device of [Zebrunner MCloud](https://github.com/zebrunner/mcloud): the `device-<name>-<udid>-stf` container that [mcloud-agent](https://github.com/zebrunner/mcloud-agent) starts next to the connector, appium and uploader containers of every device. It waits for the STF services (and for usbmuxd and WebDriverAgent of an iOS device), then runs the provider of [STF](https://github.com/zebrunner/stf) for the device: `stf provider` for Android, `stf ios-device` for iOS.

The image is based on the STF image `public.ecr.aws/zebrunner/stf` (Ubuntu 26.04, zebrunner/stf#1089) of the STF of [mcloud](https://github.com/zebrunner/mcloud) (`TAG_STF` of its `.env`) and is built for the platform of its base image: the STF image is `linux/amd64` and `linux/arm64` (zebrunner/stf#1063), so are go-ios and websocat; the build stops when the platform of the base image is not the target one.

> Follow the installation and configuration guide in [MCloud](https://github.com/zebrunner/mcloud) to reuse this image effectively.
