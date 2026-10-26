---
repo: "felipecrs/volume-locker"
name: "volume-locker"
description: "A tray icon app that keeps the volume of your audio devices locked and manages your default audio devices based on a priority list"
readmeQualityOk: true
url: "https://github.com/felipecrs/volume-locker"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["mic", "rust", "volume", "windows", "volume-lock", "hacktoberfest"]
stars: 98
forks: 4
openIssues: 4
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-05-07T02:49:52Z"
lastCommitAt: "2026-10-26T03:03:32Z"
lastReleaseAt: "2025-05-19T12:09:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 43
maintainers: ["renovate[bot]", "felipecrs", "Arucious"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/979115328/4bbc6f3f-f265-4346-b484-24f4be8a132d"
fundingLinks: ["GITHUB:https://github.com/felipecrs"]
---

⭐<b>Please star this project in GitHub if it helps you!</b>⭐

# Volume Locker

Tired of apps changing your microphone volume without your consent? Or Windows constantly switching to the wrong audio device?

Volume Locker is a tray icon app that keeps the volume of your audio devices locked and manages your default audio devices based on a priority list. It is a portable, ~1MB binary written in Rust for Windows.

Never worry about your microphone volume or default device again!

## Demo

https://github.com/user-attachments/assets/b7e47898-ee9f-42b4-a804-f107beac4e98

## Getting Started

Simply grab the executable from the [releases page](https://github.com/felipecrs/volume-locker/releases), place it somewhere like `C:\Apps\Volume Locker\VolumeLocker.exe` and run it.

Or you can copy and paste this into _Windows PowerShell_, and execute:

```powershell
New-Item -ItemType Directory -Path 'C:\Apps\Volume Locker' -Force >$null; `
  Get-Process | Where-Object { $_.Path -eq 'C:\Apps\Volume Locker\VolumeLocker.exe' } | Stop-Process; `
  curl.exe --progress-bar --location --output 'C:\Apps\Volume Locker\VolumeLocker.exe' `…
