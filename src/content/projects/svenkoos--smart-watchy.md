---
repo: "SvenKoos/Smart-Watchy"
name: "Smart-Watchy"
description: "Smart Watchy firmware and companion mobile app repository"
readmeQualityOk: true
url: "https://github.com/SvenKoos/Smart-Watchy"
homepage: "https://www.testfactory.mobi/smart-watchy.xml"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["android-app", "smartwatch", "watchy", "lilygo", "lorawan"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2022-11-15T13:45:29Z"
lastCommitAt: "2026-08-28T14:23:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 54
maintainers: ["SvenKoos"]
openGraphImageUrl: "https://opengraph.githubassets.com/431f1b9cebe2baeb8b3aad4ff7d8038268d9178e8c731e2ccfaaee531d99300a/SvenKoos/Smart-Watchy"
---

# Smart Watchy - smart watch functionality on Watchy and LilyGo

## Functional principles
Smart Watchy and companion are app using WiFi to communicate to each other.

Smart messages are transferred ones per minute from mobile app to Watchy.

### Smart messages from mobile device on Watchy
New messages detected on mobile device and filtered by companion app configuration are forwarded to Watchy and indicated by icon on wtach face.

Use the right up and down buttons on Watchy to open and change between the messages; use left up button to get back to watch face.
Double-tap on LilyGo watch face to open and change between the messages; Double-tap to leave the message view back to watch face.

The list of messages is limited to last 20 entries.

A single message is shortend to the size of the watch display (no scrolling on Watchy).

## Mobile app: ESP-Alerts-for-Android

The companion app is based on the Hackster.io and Hackaday.io projects [Read Phone Notifications using ESP], the ESP-Alerts-for-Arduino project by mitchwongho and the embed-http-web-server-in-android by Yayo-Arellano.

The companion app provides the following features:
- scan the messages to the message center of the…
