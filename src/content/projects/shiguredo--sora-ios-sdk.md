---
repo: "shiguredo/sora-ios-sdk"
name: "sora-ios-sdk"
description: "WebRTC SFU Sora iOS SDK"
originalDescription: "WebRTC SFU Sora iOS SDK"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/shiguredo/sora-ios-sdk"
homepage: "https://sora-ios-sdk.shiguredo.jp/"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["webrtc", "ios", "sdk", "swift"]
stars: 49
forks: 11
openIssues: 1
closedIssues: 31
watchers: 13
contributors: 9
recentReleases: 0
createdAt: "2017-09-15T07:44:25Z"
lastCommitAt: "2026-11-02T11:37:40Z"
lastReleaseAt: "2017-11-13T14:41:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 56
maintainers: ["t-miya", "zztkm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/160c75663609a449aa0e027b48df6f91f5824c0e70039d617601365b4c47cf7a/shiguredo/sora-ios-sdk"
---

# Sora iOS SDK

Sora iOS SDK is a library for developing iOS client applications for [WebRTC SFU Sora](https://sora.shiguredo.jp).

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read https://github.com/shiguredo/oss before use.

## About Shiguredo's Open Source Software

Please read https://github.com/shiguredo/oss before use.

## Features

- iOS SDK using [libwebrtc](https://webrtc.googlesource.com/src/)
- Supports retrieval of [WebRTC statistics](https://www.w3.org/TR/webrtc-stats/) (`MediaChannel.getStats`)
- Supports `DegradationPreference`, which specifies the priority of resolution and frame rate when the connection is unstable
  - Can specify `.maintainFramerate` / `.maintainResolution` / `.balanced` / `.disabled`
- Supports video codecs `VP8` / `VP9` / `AV1` / `H.264` / `H.265`
  - `H.264` / `H.265` use hardware decoders/encoders via Apple Video Toolbox
- Soft mute is available, which disables the audio track and sends digital silence packets
- Soft mute is available, which disables the video track and sends black video packets
- Hard mute is…
