---
repo: "hitode-project/hitode"
name: "hitode"
description: "Run the original Windows releases of visual novels on Mac, iPhone, iPad and Android."
readmeQualityOk: true
url: "https://github.com/hitode-project/hitode"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["android", "arm64", "ios", "jit", "macos", "visual-novel", "windows-compatibility"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-18T09:56:17Z"
lastCommitAt: "2026-11-05T11:24:41Z"
lastReleaseAt: "2026-11-03T12:46:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["ttyymm233"]
openGraphImageUrl: "https://opengraph.githubassets.com/e357891c3f1ccd61c9e571e9bf78fb8f84abec6c0609228d693b2c34a14c0b3e/hitode-project/hitode"
discussionCount: 0
---

Run the original Windows releases of visual novels on Mac, iPhone, iPad and Android.<br>
  English · <a href="README.zh-CN.md">简体中文</a>

> [!IMPORTANT]
> Hitode is experimental. Only a few engines and games have been adapted and tested so far. It is not ready for everyday play yet: expect crashes, missing features and breaking changes.

How many steps does it take to put an elephant in a fridge? Open the door, put it in, close the door. Hitode wants playing a visual novel on a Mac or a mobile device to take three steps as well: pick the game folder, press Start, play.

## Features

**One runtime for the common ARM platforms**
- macOS (Apple silicon), iOS / iPadOS and Android share one runtime. Its own x86 → ARM64 JIT translates game code straight into ARM64 machine code with no intermediate representation, so one optimization helps all three platforms.
- Graphics use each platform's native API, Metal on Apple platforms and Vulkan on Android, with power-saving work such as damage-based drawing.

**Compatible with the original games**
- The original exe, DLLs and translation patches run directly. No port is needed, and no particular engine is assumed.
- Hitode does not rebuild all…
