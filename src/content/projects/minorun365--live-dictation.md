---
repo: "minorun365/live-dictation"
name: "live-dictation"
description: "A macOS app that transcribes and summarizes Japanese meetings locally, with English-to-Japanese translation support."
originalDescription: "日本語の会議をローカルで文字起こし・要約し、英語→日本語翻訳にも対応するmacOSアプリ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/minorun365/live-dictation"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-04T22:44:42Z"
lastCommitAt: "2026-10-24T08:19:33Z"
lastReleaseAt: "2026-08-27T09:59:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 19
maintainers: ["minorun365"]
openGraphImageUrl: "https://opengraph.githubassets.com/00d209a144b1b2a9a3cb04b81179a5c6721c2cd11fe6b9cfc96374e81f8cc942/minorun365/live-dictation"
---

# 文字起こしちゃん

A macOS app that automatically transcribes and summarizes Japanese meetings. It records your microphone together with the audio of the other participants playing from your Mac, such as Zoom or Google Meet, and in Japanese mode it separates the records by who is speaking. It also has a mode for translating English into Japanese. It uses Apple's speech recognition, translation, and generation models, and keeps recordings and logs only on your Mac.

## Requirements

macOS 26.4 or later on an Apple Silicon Mac. Summaries use Apple Intelligence.

## Installation

1. Download `live-dictation-v1.6.0-macos-arm64.zip` from [Releases](https://github.com/minorun365/live-dictation/releases/latest).
2. Unzip the archive and move `文字起こしちゃん.app` into the Applications folder.
3. Launch the app once, then go to System Settings → Privacy & Security and select "Open Anyway".
4. After launch, allow microphone and screen recording access. If asked to restart, reopen the app.

This distributed build has not been notarized by Apple, so step 3 is required only on first launch ([Apple's guide](https://support.apple.com/ja-jp/102445)). The ZIP you get from the "Code" button on GitHub contains…
