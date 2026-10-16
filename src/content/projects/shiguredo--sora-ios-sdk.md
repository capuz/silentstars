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
lastCommitAt: "2026-10-16T08:27:15Z"
lastReleaseAt: "2017-11-13T14:41:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 56
maintainers: ["t-miya", "github-actions[bot]", "zztkm"]
openGraphImageUrl: "https://opengraph.githubassets.com/03b20068ff9f92b4014f529df5c3af65265cf6df4669eb13db24cc650a4e8356/shiguredo/sora-ios-sdk"
---

# Sora iOS SDK

Sora iOS SDK is a library for developing iOS client applications for [WebRTC SFU Sora](https://sora.shiguredo.jp).

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read https://github.com/shiguredo/oss before use.

## About Shiguredo's Open Source Software

Please read https://github.com/shiguredo/oss before use.

## Features

- An iOS SDK using [libwebrtc](https://webrtc.googlesource.com/src/)
- Supports retrieving [WebRTC statistics](https://www.w3.org/TR/webrtc-stats/) (`MediaChannel.getStats`)
- Supports `DegradationPreference`, which specifies the priority of resolution and frame rate when the connection is unstable
  - `.maintainFramerate` / `.maintainResolution` / `.balanced` / `.disabled` can be specified
- Supports video codecs `VP8` / `VP9` / `AV1` / `H.264` / `H.265`
  - `H.264` / `H.265` use hardware decoders/encoders via Apple Video Toolbox
- Soft mute is available: disables the audio track and sends digital silence packets
- Soft mute is available: disables the video track and sends black video packets
- Hard mute is available:…
