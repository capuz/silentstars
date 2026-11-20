---
repo: "tom-barone/proton-drive-photos-export"
name: "proton-drive-photos-export"
description: "Export all your photos from Proton Drive"
readmeQualityOk: true
url: "https://github.com/tom-barone/proton-drive-photos-export"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 19
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T03:02:02Z"
lastCommitAt: "2026-11-20T12:04:52Z"
lastReleaseAt: "2026-08-10T13:16:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 6
maintainers: ["tom-barone"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d94770a5d69da8eb20dd84cb53fc1f7c3d7c92bb714747e7ea4fa626f87a6df/tom-barone/proton-drive-photos-export"
---

# Photos Export for Proton Drive

Simple open source tool to download all your photos from Proton Drive to a local folder.

This is not an official Proton product, and is not affiliated with Proton.

As of writing, the only official way to download all your photos from Proton Drive is to manually select them in the web interface and download them. This doesn't work well when you have a lot of photos, so I wrote this tool to automate the process.

## Features

- Already downloaded files are skipped if you stop the app and restart it later, as long as you save to the same folder. The folder is remembered between launches.
- Files are named `YYYYMMDD_HHMMSS_<original name>`, using the capture time in UTC.
- Supports TOTP Two Factor Authentication (2FA).

## Install

Downloads are on the [releases page](https://github.com/tom-barone/proton-drive-photos-export/releases).

The macOS / Windows binaries aren't signed, so you may need to bypass some security settings to run them.
