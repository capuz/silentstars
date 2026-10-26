---
repo: "AstraFoundry/Arion"
name: "Arion"
description: "Local-first voice input for macOS and Windows. On-device speech recognition, offline dictation, and local polishing."
readmeQualityOk: true
url: "https://github.com/AstraFoundry/Arion"
homepage: "https://arion.astrafoundry.si"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [40, 36]
stars: 46
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-10-12T14:01:25Z"
lastCommitAt: "2026-10-26T09:17:03Z"
lastReleaseAt: "2026-10-25T03:15:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 35
maintainers: ["stvlynn", "zacharyhaha", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/48b6b2906284f159fb76aaa51d450d9a68c51c7cd207ca8ff340579ca478ab0b/AstraFoundry/Arion"
---

# Arion

Local-first voice dictation and Pinyin input for macOS and Windows, built with [MyGo](https://github.com/egoist/mygo) native Go UI.

[English](https://github.com/AstraFoundry/Arion/blob/HEAD/README.md) · [简体中文](https://github.com/AstraFoundry/Arion/blob/HEAD/README.zh-CN.md) · [日本語](https://github.com/AstraFoundry/Arion/blob/HEAD/README.ja.md)

## Overview

Cloud dictation tools require sending raw microphone audio and window context to remote servers, while built-in OS offline dictation struggles with mid-sentence Chinese/English code-switching, domain terminology, and application-specific formatting.

[AstraFoundry](https://astrafoundry.si) built **Arion** as an open-source, local-first, self-hostable voice and Pinyin input method. Speech recognition, offline full-Pinyin typing, correction learning, and contextual polishing run on your device while keeping raw audio and encryption keys on your machine.

## Features

- **Hold-to-Talk & Native System IME** — Hold the global dictation key (default right `⌥` on macOS, right `Alt` on Windows) in any focused editor to speak Mandarin, English, or mixed technical terms (e.g. *"把这个 PR merge 到 main 之前，先跑一下 CI"*), and release to…
