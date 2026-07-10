---
repo: "shiguredo/sora-cpp-sdk"
name: "sora-cpp-sdk"
description: "WebRTC SFU Sora C++ SDK"
readmeQualityOk: true
url: "https://github.com/shiguredo/sora-cpp-sdk"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [61, 29]
stars: 46
forks: 8
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2021-10-03T10:49:52Z"
lastCommitAt: "2026-07-10T07:02:29Z"
lastReleaseAt: "2022-07-02T20:22:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["voluntas", "torikizi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f4f2a0daf492ddb4b9ad8436d94952a1818cd07e8befcb4147134f97e3f5c06/shiguredo/sora-cpp-sdk"
---

# Sora C++ SDK

## About Shiguredo's open source software

We will not respond to PRs or issues that have not been discussed on Discord. Also, Discord is only available in Japanese.

Please read <https://github.com/shiguredo/oss/blob/master/README.en.md> before use.

## 時雨堂のオープンソースソフトウェアについて

利用前に <https://github.com/shiguredo/oss> をお読みください。

## Sora C++ SDK について

様々なプラットフォームに対応した [WebRTC SFU Sora](https://sora.shiguredo.jp/) 向けの C++ SDK です。

## 特徴

- 各プラットフォームで利用可能な HWA への対応
  - [Intel VPL](https://github.com/intel/libvpl)
    - VP9 / AV1 / H.264 / H.265
  - [NVIDIA Video Codec](https://developer.nvidia.com/video-codec-sdk)
    - VP8 / VP9 / AV1 / H.264 / H.265
      - VP8 / VP9 はチップセットが対応していないため、デコードのみの対応です
  - [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack) (JetPack 6)
    - VP9 / AV1 / H.264 / H.265
  - [AMD AMF](https://github.com/GPUOpen-LibrariesAndSDKs/AMF)
    - VP8 / VP9 / AV1 / H.264 / H.265
      - AV1 は Ubuntu x86_64 ではドライバーがデコードには対応していません
      - VP8 / VP9 はチップセットが対応していないため、デコードのみの対応です
  - [Apple Video Toolbox](https://developer.apple.com/documentation/videotoolbox)
    - H.264 / H.265
  - Google Android HWA
    - VP8 / VP9 / H.264 / H.265
  -…
