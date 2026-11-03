---
repo: "LizardByte/build-deps"
name: "build-deps"
description: "Prebuilt dependencies for LizardByte projects."
readmeQualityOk: true
url: "https://github.com/LizardByte/build-deps"
language: "CMake"
languages: ["CMake"]
languagePcts: [98]
topics: ["dependencies", "ffmpeg", "sunshine", "cpm", "c"]
stars: 9
forks: 51
openIssues: 2
closedIssues: 6
watchers: 4
contributors: 16
recentReleases: 1
createdAt: "2022-10-18T01:10:09Z"
lastCommitAt: "2026-11-03T12:48:02Z"
lastReleaseAt: "2026-09-07T13:43:03Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["dependabot[bot]", "renovate[bot]", "ReenigneArcher"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/553269012/f739318e-6842-4c0d-a8c7-8ecce5d72df5"
fundingLinks: ["GITHUB:https://github.com/LizardByte", "PATREON:https://patreon.com/LizardByte", "CUSTOM:https://paypal.me/ReenigneArcher"]
---

<img
    src="https://raw.githubusercontent.com/LizardByte/.github/refs/heads/master/branding/logos/logo.svg"
    alt="LizardByte icon"
    width="256"
  />

## Overview

This is a common set of pre-compiled dependencies for [Sunshine](https://github.com/LizardByte/Sunshine),
[Koko](https://github.com/LizardByte/Koko), [One](https://github.com/LizardByte/One), and other LizardByte projects.

- [FFmpeg](https://ffmpeg.org): static libraries with encoders, decoders, formats, filters, and protocols;
  `ffmpeg` and `ffprobe` executables; and Sunshine's `libcbs` helpers.
- [dav1d](https://code.videolan.org/videolan/dav1d): AV1 decoder.
- [Opus](https://opus-codec.org): audio codec, usable directly by consumers as well as through FFmpeg.

## Usage

Download the matching `<platform>-ffmpeg.tar.gz` archive from a
[release](https://github.com/LizardByte/build-deps/releases), and extract its `ffmpeg` directory.
The package contains `include`, `lib`, `lib/pkgconfig`, `bin`, and `share/licenses`. CI builds encoders,
decoders, and tools together for each platform. Pin the release tag and archive SHA256 in reproducible builds.

For applications linking the static libraries, point…
