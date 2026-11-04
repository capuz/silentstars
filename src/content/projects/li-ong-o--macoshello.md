---
repo: "Li-ong-o/macOSHello"
name: "macOSHello"
description: "macOSHello - local face unlock for macOS"
originalDescription: "macOSHello - local face unlock for macOS"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Li-ong-o/macOSHello"
homepage: "https://github.com/Li-ong-o/macOSHello"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 13
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-23T03:16:30Z"
lastCommitAt: "2026-11-04T02:57:45Z"
lastReleaseAt: "2026-11-02T04:28:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7d92f0ec867bfe0cdeb12665cf85031773e0e9a74f02c6ea4be9d26c61081936/Li-ong-o/macOSHello"
---

# macOSHello

macOSHello is a purely local face unlock tool for the macOS menu bar. It uses the built-in Vision framework for face detection and feature recognition, and AVFoundation to capture camera frames. All recognition runs on the local machine. It does not require a network connection, and it does not upload camera frames or face features.

## Features

- Multi-face enrollment, with 8 sets of local feature samples saved for each face
- Face recognition, similarity threshold judgment, and real-time similarity display
- Basic liveness detection, which requires slowly turning the head during enrollment and recognition
- Enumerate and select a built-in or external camera
- Recognize the two most relevant faces in the frame and select the one with the highest similarity for matching
- Automatically recognize after the lock screen, screen wake, system wake, or screen saver appears
- After locking, a cooldown of 20 or 60 seconds can be set to avoid being unlocked automatically before the person has left
- When no one is present, check at a low frequency. When someone is present but not matched, increase the retry interval. It does not permanently stop after a fixed number of…
