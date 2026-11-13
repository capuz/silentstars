---
repo: "seifreed/ipakeep"
name: "ipakeep"
description: "ipakeep is a Rust toolkit to authenticate with Apple, search the App Store, acquire app licenses, and download IPA files — patched with their DRM sinf blobs and iTunesMetadata.plist so they are ready to use. "
readmeQualityOk: true
url: "https://github.com/seifreed/ipakeep"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 12
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-25T16:41:08Z"
lastCommitAt: "2026-11-13T11:23:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 29
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/1638c86d6ad066aa457d29b4e16c89a1b1c0235269fc7b8ff6016118ad525861/seifreed/ipakeep"
---

---

## Overview

**ipakeep** is a Rust toolkit to authenticate with Apple, search the App Store, acquire app licenses, and download IPA files — patched with their DRM `sinf` blobs and `iTunesMetadata.plist` while retaining Apple’s FairPlay encryption. It ships both a command-line tool and a library crate, and runs on macOS, Linux, and Windows.

### Key Features

| Feature | Description |
|---------|-------------|
| **Modern GrandSlam auth** | macOS login uses local ADI provisioning and supports trusted-device/SMS 2FA |
| **Trusted-phone enumeration** | Lists the account's trusted phone numbers for SMS 2FA instead of guessing |
| **Legacy auth** | Classic App Store authentication flow with `-5000` retry handling |
| **Search & lookup** | Public iTunes Search/Lookup by term or bundle identifier |
| **Purchase** | Acquire a free-app license via `buyProduct` |
| **Download & patch** | Fetches the IPA and injects `sinf` DRM blobs + `iTunesMetadata.plist` |
| **Device decryption** | Builtin Frida dump orchestration, patching, and structural verification; requires access to the running app |
| **Physical-device install** | Match provisioning profiles per bundle, preserve authorized…
