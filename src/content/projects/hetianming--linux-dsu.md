---
repo: "hetianming/Linux-Dsu"
name: "Linux-Dsu"
description: "Integrated tool for running an Ubuntu terminal and DSU on Android"
originalDescription: "安卓运行Ubuntu终端和Dsu一体化"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hetianming/Linux-Dsu"
language: "Kotlin"
languages: ["Kotlin", "Java"]
languagePcts: [79, 20]
stars: 24
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-09-06T13:51:09Z"
lastCommitAt: "2026-10-26T02:59:41Z"
lastReleaseAt: "2026-10-26T03:03:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["MonkeyCode-AI", "hetianming"]
openGraphImageUrl: "https://opengraph.githubassets.com/0693dc3a0e0f1a0332a368ce4bd672f29a823ca0442230c8dffcbada8c309ba2/hetianming/Linux-Dsu"
---

# Linux-Dsu

An all-in-one tool for running an Ubuntu terminal and DSU on Android.

## DNA Toolbox (Porting Development)

The Android®天明 Porting Development section on the DNA Toolbox home page provides ROM decomposition, composition, and format conversion. Within it, **local partition extraction / flashing** supports:

- Enumerating all local partitions under `/dev/block/by-name` (automatically traversing each by-name directory);
- **Extraction**: `dd` exports a partition as an img (saved by default to the project's `Partitions` directory or `/sdcard/Download`);
- **Flashing**: select a local img and write it back to the specified partition via `dd`;
- Progress is reported in real time through `/proc/<pid>/io` (percentage plus bytes written).

Both operations must be performed on a rooted device. Writing directly to block devices risks flashing errors that brick the device, so always back up before proceeding.

## Build

Requirements:

- JDK 17
- Android SDK with platform 36 and build tools
- Android NDK `26.1.10909125`
- Gradle Wrapper 8.11.1

Clone the repository, then configure `local.properties` with the local Android SDK path. The file is ignored by Git.

### Debug APK…
