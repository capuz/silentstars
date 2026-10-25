---
repo: "AstraFoundry/Arion"
name: "Arion"
description: "Local-first voice input for macOS and Windows. On-device speech recognition, offline dictation, and local polishing."
readmeQualityOk: true
url: "https://github.com/AstraFoundry/Arion"
homepage: "https://arion.astrafoundry.si"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [42, 37]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 9
createdAt: "2026-10-12T14:01:25Z"
lastCommitAt: "2026-10-25T02:47:52Z"
lastReleaseAt: "2026-10-24T02:30:12Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["stvlynn", "zacharyhaha", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac09a77317d38e392bce83e5cfe9e320322f035ea15efe539f4fb6c400760a07/AstraFoundry/Arion"
---

# Arion

Local-first voice input for macOS and Windows, built with [MyGo](https://github.com/egoist/mygo) native Go UI.

[English](https://github.com/AstraFoundry/Arion/blob/HEAD/README.md) · [简体中文](https://github.com/AstraFoundry/Arion/blob/HEAD/README.zh-CN.md) · [日本語](https://github.com/AstraFoundry/Arion/blob/HEAD/README.ja.md)

## Overview

Arion combines on-device streaming speech recognition, conservative rule-based correction, personal vocabulary learning, optional live local rewriting, local candidate ranking contracts, and encrypted memory sync. Users can dictate via a global dictation key or system IME integration. Dictation runs offline after model provisioning; raw microphone audio and temporary foreign-window context never leave the device.

macOS on Apple silicon and Windows x64 are the primary desktop targets (`P0`). Intel macOS is unsupported ([ADR 021](https://github.com/AstraFoundry/Arion/blob/HEAD/docs/decisions/021-apple-silicon-only-macos.md)); iOS and Android are future targets (`P2`).

## Features

- **Global dictation key and macOS IME host** — Hold the dictation key (default right `⌥` on macOS, right `Alt` on Windows) in any app, speak Mandarin, English,…
