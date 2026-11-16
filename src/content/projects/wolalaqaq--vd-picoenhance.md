---
repo: "WolalaQAQ/VD-PicoEnhance"
name: "VD-PicoEnhance"
description: "PICO hand tracking, hand passthrough and eye-gaze enhancement for the unmodified Virtual Desktop on PICO 4 Pro (Magisk/Zygisk)"
readmeQualityOk: true
url: "https://github.com/WolalaQAQ/VD-PicoEnhance"
language: "C"
languages: ["C", "Python"]
languagePcts: [37, 20]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-02T03:59:52Z"
lastCommitAt: "2026-11-16T04:25:16Z"
lastReleaseAt: "2026-10-23T18:35:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 50
maintainers: ["WolalaQAQ", "misaka18848"]
openGraphImageUrl: "https://opengraph.githubassets.com/e065f95af5e51ead29a31f475f5b7b83731d017250bf3003431a710ed01a0af6/WolalaQAQ/VD-PicoEnhance"
---

# VD-PicoEnhance

English | [简体中文](https://github.com/WolalaQAQ/VD-PicoEnhance/blob/HEAD/README_zh.md)

Brings **PICO optical hand tracking** and **Quest-style hand passthrough** to the **unmodified official** Virtual Desktop (`VirtualDesktop.Android`) on **PICO 4 and PICO 4 Pro**, with an **eye-gaze pointer fix** on supported hardware. It also shows **PICO controller battery in SteamVR** and, as an option, **switches automatically between Valve Index controllers and hand tracking**.

VD-PicoEnhance is a Magisk/Zygisk module that adds these features at runtime while keeping the official Virtual Desktop APK unchanged. Full mode also loads a gesture receiver into PICO's Shell; suppression stays off until enabled in VD. On supported firmware, a startup helper runs in `system_server` so VD can launch in hand mode.

> Experimental and requires root. Tested with VD 1.34.22.0 and 1.34.25.0 on PICO 4 Pro.

## Updates

Features and upgrade notes for each version are in the [changelog](https://github.com/WolalaQAQ/VD-PicoEnhance/blob/HEAD/CHANGELOG.md). For an older version, read the documentation under its tag.

Versions follow MAJOR.MINOR.PATCH: incompatible changes, backward-compatible…
