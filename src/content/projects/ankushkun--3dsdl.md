---
repo: "ankushKun/3dsDL"
name: "3dsDL"
description: "Download files straight onto your Nintendo 3DS from a URL or QR code"
readmeQualityOk: true
url: "https://github.com/ankushKun/3dsDL"
homepage: "http://ankush.one/3dsDL/"
language: "C++"
languages: ["C++"]
languagePcts: [71]
topics: ["3ds", "3ds-homebrew", "downloader", "homebrew", "nintendo-3ds", "qr-code"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-08-30T18:15:19Z"
lastCommitAt: "2026-10-19T09:14:06Z"
lastReleaseAt: "2026-10-19T07:21:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 75
undervaluedScore: 45
maintainers: ["ankushKun"]
openGraphImageUrl: "https://opengraph.githubassets.com/194a7c6685c2221960d12691b5245f55c0395bb9420a4a541b95895ccbeac416/ankushKun/3dsDL"
fundingLinks: ["GITHUB:https://github.com/ankushKun"]
discussionCount: 0
---

No pulling the SD card, no powering down, no computer in the loop.

Getting a file onto a 3DS usually means powering it off, pulling the SD card and finding a card reader. 3dsDL skips all of that. Point the camera at a QR code, or type a direct link with the on-screen keyboard, pick a folder, and the file streams straight onto the SD card while the console stays on.

It looks and works like the software that came with the console: the same khaki screens, embossed buttons, Back and OK tabs and system dialogs as System Settings, with touch scrolling that you can flick.

It's a modern take on [Multidownload](https://github.com/hax0kartik/Multidownload), the 2017 homebrew downloader, rebuilt around libcurl and mbedTLS with a new Citro2D interface.

> [!IMPORTANT]
> Version 0.6.0 is a development build. Downloads over the internet, downloads split across several connections, installing the CIA with FBI, ZIP extraction and the 3D HOME Menu banner have been confirmed on a console. Installing CIAs from 3dsDL itself (0.5.0), the file manager and the new system-style interface (0.6.0) have been tried in the Azahar emulator but not yet on a console. The download engine, file handling, CIA…
