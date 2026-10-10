---
repo: "ActivityWatch/aw-android"
name: "aw-android"
description: "ActivityWatch for Android, using aw-server-rust as backend."
readmeQualityOk: true
url: "https://github.com/ActivityWatch/aw-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [90]
topics: ["android", "activitywatch", "rust"]
stars: 276
forks: 59
openIssues: 64
closedIssues: 89
watchers: 7
contributors: 13
recentReleases: 0
createdAt: "2018-12-16T13:35:14Z"
lastCommitAt: "2026-10-10T10:05:18Z"
lastReleaseAt: "2019-05-31T18:59:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 37
maintainers: ["TimeToBuildBob", "github-actions[bot]", "0xbrayo"]
openGraphImageUrl: "https://opengraph.githubassets.com/69fd45b0ceb29424b9ef48cf3a83dddbb6283a4b38d8a0d742bca820c06b68a0/ActivityWatch/aw-android"
fundingLinks: ["GITHUB:https://github.com/ActivityWatch", "OPEN_COLLECTIVE:https://opencollective.com/activitywatch", "LIBERAPAY:https://liberapay.com/ActivityWatch", "CUSTOM:https://activitywatch.net/donate/"]
---

aw-android
==========

The official ActivityWatch app for Android: tracks app usage on your device and shows it in the same web UI as the desktop version.

Available on Google Play and F-Droid:

For other platforms, see [activitywatch.net/downloads](https://activitywatch.net/downloads/).

## Usage

Install the app from the [Play Store](https://play.google.com/store/apps/details?id=net.activitywatch.android), [F-Droid](https://f-droid.org/en/packages/net.activitywatch.android/), or the [GitHub releases](https://github.com/ActivityWatch/aw-android/releases).

### For Oculus Quest

> **Note** 
> At some point a Quest system upgrade broke the ability to allow ActivityWatch access to usage stats. This can be fixed by manually assigning the needed permission using adb: `adb shell appops set net.activitywatch.android android:get_usage_stats allow`

It's available [on SideQuest](https://sidequestvr.com/#/app/201). 

## Building

To build this app you first need to build aw-server-rust (`./aw-server-rust`) and aw-webui (`./aw-server-rust/aw-webui`).

If you haven't already, initialize the submodules with: `git submodule update --init --recursive`

### Building aw-server-rust

> **Note**
>…
