---
repo: "anomalyco/spaceman"
name: "spaceman"
description: "A macOS tiling window manager with stable logical windows"
readmeQualityOk: true
url: "https://github.com/anomalyco/spaceman"
homepage: "https://anoma.ly/spaceman"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["macos", "rust", "tiling-window-manager"]
stars: 467
forks: 35
openIssues: 91
closedIssues: 147
watchers: 1
contributors: 24
recentReleases: 1
createdAt: "2026-08-05T01:18:51Z"
lastCommitAt: "2026-11-25T03:19:33Z"
lastReleaseAt: "2026-08-28T19:13:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 25
maintainers: ["kitlangton", "lancewilhelm", "narasaka"]
openGraphImageUrl: "https://opengraph.githubassets.com/52c85a20ec67b12f64ed2b994d276168790f150f840df6581687e90e37aa931b/anomalyco/spaceman"
---

# Spaceman

Spaceman is an experimental macOS tiling window manager built around stable logical windows. A
native window, including a selected Ghostty native tab, can change physical Accessibility identity
without creating a new tile. Spaceman keeps the logical slot and replaces its physical binding when
the evidence is unambiguous.

[Website](https://anoma.ly/spaceman) · [Download for Apple silicon](https://anoma.ly/spaceman/download/macos-arm64)

> **Warning**
>
> Disable AeroSpace, yabai, Amethyst, and every other window manager before first opening Spaceman
> or installing it from source. Two managers can repeatedly move the same windows. Keep the parked
> window state until Spaceman has successfully paused or quit and restored every window.

Spaceman currently:
