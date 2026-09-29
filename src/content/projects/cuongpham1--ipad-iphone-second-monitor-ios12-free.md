---
repo: "cuongpham1/ipad-iphone-second-monitor-ios12-free"
name: "ipad-iphone-second-monitor-ios12-free"
description: "Free open-source iOS 12 iPad/iPhone second monitor for Mac. OpenDisplay-compatible client over USB/Lightning & Wi-Fi. Sidecar/Duet alternative for old devices."
readmeQualityOk: true
url: "https://github.com/cuongpham1/ipad-iphone-second-monitor-ios12-free"
homepage: "https://github.com/cuongpham1/ipad-iphone-second-monitor-ios12-free#readme"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["duet-display", "free", "ios12", "ipad", "legacy-ipad", "lightning", "macos", "open-source", "opendisplay", "second-display"]
stars: 42
forks: 12
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-29T06:51:36Z"
lastCommitAt: "2026-09-29T10:04:32Z"
lastReleaseAt: "2026-07-29T07:16:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 29
maintainers: ["cuongpham1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e99a0e56006289e6ddafc58c640d12ed86e3ae06a9b30fe3d0d67046f5fdc7f0/cuongpham1/ipad-iphone-second-monitor-ios12-free"
---

# Turn an iPad or iPhone stuck on iOS 12 into a second display for your Mac (macOS 26), over Lightning or Wi-Fi — free, self-hosted

**Built and running for real** on an iPad Air (Model A1475, iOS 12.5.8), over a Lightning cable and over Wi-Fi. H.264 video, touch, two-finger scroll, and a real mouse cursor all work.

Free alternative to Sidecar (iOS 13+), Duet Display, and Luna Display for a device that cannot run [OpenDisplay](https://github.com/peetzweg/opendisplay)'s own client (that client needs iPadOS 17+). The Mac app is unmodified OpenDisplay (GPL-3.0): it creates the virtual display, captures it, encodes H.264, and sends it over USB (`usbmuxd`) or Wi-Fi (Bonjour). No `iproxy`. The `iOS/` app is a clean-room iOS 12 client of that same protocol (MIT).

Same Wi-Fi is enough. Plug in a Lightning cable for better speed and quality: the Mac prefers USB (lower, steadier latency) and falls back to Wi-Fi when the cable is pulled.

iPhone uses the same project. Pick it as the Xcode destination. The screen is smaller, so an iPad is the useful case. Minimum iOS is **12.0** (`iOS/project.yml` → `deploymentTarget`), tested on iOS 12.5.8.

`iOS/LegacyPadDisplay.xcodeproj` is ready to…
