---
repo: "WolalaQAQ/UnifiedPicoModule"
name: "UnifiedPicoModule"
description: "PICO eye and face tracking module for VRCFaceTracking"
readmeQualityOk: true
url: "https://github.com/WolalaQAQ/UnifiedPicoModule"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-10-01T21:08:15Z"
lastCommitAt: "2026-11-16T04:25:52Z"
lastReleaseAt: "2026-11-04T22:54:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 65
undervaluedScore: 28
maintainers: ["WolalaQAQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd585cedadcf874ac958fb3e32a7cbdeb7740696f4b9fa5752536ac530c62f46/WolalaQAQ/UnifiedPicoModule"
---

# UnifiedPicoModule

English | [简体中文](https://github.com/WolalaQAQ/UnifiedPicoModule/blob/HEAD/README_zh.md)

UnifiedPicoModule is a PICO eye and face tracking module for VRCFaceTracking (VRCFT).

Tracking data from a PICO headset can be delivered by several senders, including PicoFacialBridge, PICO Connect, Streaming Assistant and the earlier PicoFacialDataDaemon. Each sender uses its own data format and port. This module supports all of these formats, detects which source is currently available, and forwards its data to VRCFT through a single output, so there is no need to install a separate module for each sender.

> The current version is 0.4.1. One DLL supports VRCFT 5.4.5 and Steam VRCFT 6.0.0.0, while remaining built against the 5.4.5 SDK (net10.0). See [Compatibility](#compatibility) for verified combinations and the [changelog](https://github.com/WolalaQAQ/UnifiedPicoModule/blob/HEAD/CHANGELOG.md) for version changes.

## Supported senders

| Sender | Port | Eye tracking | Face tracking |
|---|---|---|---|
| [PicoFacialBridge](https://github.com/WolalaQAQ/PicoFacialBridge) 0.3.0 or later | 9030 | Gaze and eyelids from the expression model; measured pupil diameter from `E`…
