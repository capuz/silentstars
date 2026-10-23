---
repo: "sampple-korea/dynamicisland"
name: "dynamicisland"
description: "A Dynamic Island for Samsung One UI (LSPosed module)"
readmeQualityOk: true
url: "https://github.com/sampple-korea/dynamicisland"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["android", "android-app", "android-module", "dynamic-island", "live-notifications", "lsposed", "now-bar", "one-ui", "samsung", "samsung-galaxy"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-21T23:47:54Z"
lastCommitAt: "2026-10-23T12:04:22Z"
lastReleaseAt: "2026-10-23T12:06:09Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 18
maintainers: ["sampple-korea"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1429044738/28637cf6-d8a1-4237-8a0d-7965263f5119"
---

A pill around the camera hole that opens into live cards for calls, music, navigation, timers and notifications.

### Everything the capsule shows, as cards

The pill sits where the stock Now Bar capsule was and opens into cards.

Dynamic Island replaces Samsung's Now Bar capsule in the status bar with a pill that grows into cards. Everything One UI keeps in the capsule (calls, timers, screen recording, casting, navigation, a music player) becomes a card, and so do ordinary notifications: messages, verification codes, downloads and the delivery, ride and route updates that apps only write as text. It is an LSPosed module that runs inside System UI, with a One UI style settings app and a rule manager. Inspired by [@cryyear's DynamicIsland](https://github.com/Spottq); this is a new implementation.

## Screenshots

These pictures are drawn by the app's own drawing code on a mock phone in the test environment (see `scripts/readme_images.py`); they are not photos of a device, and the app icons are made of plain shapes.

## Features

- **Live notifications as cards:** Every System UI ongoing activity gets a compact pill and an expanded card: header, chronometer, description, plain /…
