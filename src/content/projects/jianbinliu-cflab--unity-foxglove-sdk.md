---
repo: "JianbinLiu-CFLab/unity-foxglove-sdk"
name: "unity-foxglove-sdk"
description: "Unity package for streaming real-time data to Foxglove over WebSocket."
readmeQualityOk: true
url: "https://github.com/JianbinLiu-CFLab/unity-foxglove-sdk"
language: "C#"
languages: ["C#"]
languagePcts: [87]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-30T21:02:01Z"
lastCommitAt: "2026-07-08T05:42:45Z"
lastReleaseAt: "2026-05-17T19:18:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["JianbinLiu-CFLab"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e927780209f76fc2d758d3640f61ee463ed5ba5831167327767b2306f586284/JianbinLiu-CFLab/unity-foxglove-sdk"
---

# 1. Unity2Foxglove

> **Positioning**: Unity2Foxglove is a **Unity-focused Foxglove SDK bridge**. It aims for official Foxglove SDK capability parity where that matters for Unity workflows, while adding Unity-native extensions such as `[FoxRun]`, Inspector-driven publishers, MCAP replay, and IL2CPP-oriented validation. It is not an official Foxglove project and does not target multi-language SDK parity.

A cross-platform Unity SDK for real-time runtime data streaming, MCAP recording and replay, and in-editor debugging. It runs inside Unity, speaks the Foxglove WebSocket protocol directly, and can work with [Foxglove](https://foxglove.dev), MCAP files, or custom clients.

The Unity package runs on Unity's managed runtime. The .NET badge above refers to repository test and conformance runner projects, not to a Unity runtime requirement.

## Citation / Research Positioning

Unity2Foxglove introduces an AOT-safe dual-host source generation architecture with a shared emitter for zero-reflection telemetry publishing in Unity Editor and IL2CPP Player builds.

If you use this project in research, cite the Zenodo Concept DOI…
