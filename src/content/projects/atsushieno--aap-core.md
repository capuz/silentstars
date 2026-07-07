---
repo: "atsushieno/aap-core"
name: "aap-core"
description: "an Audio Plugin Format/Framework for Android"
readmeQualityOk: true
url: "https://github.com/atsushieno/aap-core"
homepage: "https://androidaudioplugin.org"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [61, 25]
topics: ["aap", "android", "audio", "audio-plugin", "android-ndk", "android-audio", "midi2"]
stars: 123
forks: 5
openIssues: 16
closedIssues: 182
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2019-05-12T18:12:52Z"
lastCommitAt: "2026-07-07T06:37:59Z"
lastReleaseAt: "2025-04-13T03:44:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "under_pressure"]
healthScore: 97
undervaluedScore: 46
maintainers: ["atsushieno"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7319465224c15b36b318beaf4d6f52c33cb97c223490ce6d5662e54b9497e15/atsushieno/aap-core"
fundingLinks: ["GITHUB:https://github.com/atsushieno"]
discussionCount: 18
---

# AAP: Audio Plugins For Android

disclaimer: the README is either up to date, partially obsoleted, or sometimes (but not very often) ahead of implementation. Do not trust it too much.

## What is AAP?

Android lacks commonly used audio plugin format. On Windows and other desktops, VSTs are popular. On Mac and iOS (including iPadOS) there is AudioUnit. On Linux LV2 is used, as well as VST2 (or compatibility) and VST3.

There is no such thing for Android. Audio Plugins For Android (AAP) is to fill this gap.

AAP aims to provide an inclusive standard for audio plugin, adopted to Android applications ecosystem. The license is permissive (MIT). It is designed to be usable like other specific audio plugin formats like [VST3](https://github.com/steinbergmedia/vst3sdk), [LV2](https://lv2plug.in/), [CLAP](https://github.com/free-audio/clap), and so on, as long as their features are supported in AAP. Note that those desktop formats are not designed to work on Android - AAP is more like [AudioUnit v3 on iOS](https://developer.apple.com/documentation/audiotoolbox/audio_unit_v3_plug-ins).

AAP is designed as a generic plugin format so that multi-format audio plugin SDKs can support it. We…
