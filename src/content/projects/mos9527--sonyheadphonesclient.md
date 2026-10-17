---
repo: "mos9527/SonyHeadphonesClient"
name: "SonyHeadphonesClient"
description: "Cross-platform Sony Sound Connect (formerly Headphones Connect) library/implementation / 索尼 Sound Connect 第三方实现"
readmeQualityOk: true
url: "https://github.com/mos9527/SonyHeadphonesClient"
homepage: "http://mos9527.com/SonyHeadphonesClient/"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["bluetooth", "emscripten", "linux", "macos", "windows", "sony", "sony-headphones", "webserial", "libmdr", "android"]
stars: 339
forks: 47
openIssues: 15
closedIssues: 16
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2024-03-03T10:12:33Z"
lastCommitAt: "2026-10-17T07:48:38Z"
lastReleaseAt: "2024-12-18T14:15:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 37
maintainers: ["mos9527", "nning"]
openGraphImageUrl: "https://opengraph.githubassets.com/37ad28c75ba5f3ff8d7cf52b6bb0ccb497b9c404fa58dc5abad3b54ba2e0e8ba/mos9527/SonyHeadphonesClient"
discussionCount: 1
---

SonyHeadphonesClient
===

A spiritual successor to [Plutoberth's original SonyHeadphonesClient](https://github.com/Plutoberth/SonyHeadphonesClient) - now with standardized support for newer devices and more platforms.

There's no [Release](https://github.com/mos9527/SonyHeadphonesClient/releases) build for this branch yet - but you can always grab the latest [nightly builds](https://nightly.link/mos9527/SonyHeadphonesClient/workflows/cmake/v1-compat?preview), or use the [Web Version](#running-on-the-web).

## Roadmap
This branch is expected to be merged/released once the following features have been implemented.
- [ ] Support for legacy (`v1` protocol) devices, e.g. WH-1000XM4, WH-1000XM3
  - Already WIP. You're looking at it *right now*
  - Track the progress here: https://github.com/mos9527/SonyHeadphonesClient/pull/56
  - Feel free to submit support status in new Issues regarding v1 (XM4 and older) devices. We *really* need more volunteers :(
- [x] Native macOS platform support

## Compatibility

The following platforms (applies to `libmdr-bt`, `client`; `libmdr` itself is platform agnostic) are *natively* supported with first-party effort.

The architectures (x64, etc) shown…
