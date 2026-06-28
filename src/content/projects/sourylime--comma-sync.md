---
repo: "sourylime/comma-sync"
name: "comma-sync"
description: "Sync and stitch comma dashcam footage into playable videos (with audio) over your local network — macOS app + cross-platform script"
url: "https://github.com/sourylime/comma-sync"
language: "Shell"
languages: ["Shell", "Swift"]
languagePcts: [51, 49]
topics: ["adb", "comma", "comma-ai", "comma3x", "commaai", "dashcam", "driving", "ffmpeg", "hevc", "macos"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-24T05:27:53Z"
lastCommitAt: "2026-06-28T06:56:17Z"
lastReleaseAt: "2026-06-28T04:28:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["sourylime"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e413470e30a146ac6b1b630829ece02fd2d082451ff7d83069ca561bcc11445/sourylime/comma-sync"
---

# Comma Sync

Pull dashcam footage off your [comma](https://comma.ai) device over your local
network and stitch each drive into a single playable video — **with audio** — without
uploading anything to the cloud.

comma/openpilot store footage as one-minute **segments** of raw HEVC, split per camera,
in `/data/media/0/realdata/` on the device. Getting a watchable video out normally means
SSH, `scp`, and manual `ffmpeg` work. Comma Sync does it all for you:

### Screenshots

| Index Drives | Sync in progress |
|:---:|:---:|
|  |  |
| Browse every drive — on your Mac *and* still on the comma — and download some or all. | Live progress bar and log while it pulls and stitches each drive. |

*Follows your system's light or dark appearance. All screenshots use made-up example data — drive names, sizes, and paths are not real.*

- 🔍 **Auto-discovers** the device on your WiFi (its IP usually changes every connect).
- ⬇️ **Pulls only new drives** — a ledger tracks what's done, so nothing re-downloads.
- 🎬 **Stitches** each drive into one MP4 per camera (road / wide / driver), named by the
  recording start time.
- 🔊 **Adds the microphone audio** when it was recorded.
- ♻️ **Re-sync…
