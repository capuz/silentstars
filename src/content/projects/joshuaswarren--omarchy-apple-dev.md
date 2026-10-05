---
repo: "joshuaswarren/omarchy-apple-dev"
name: "omarchy-apple-dev"
description: "Build and deploy iOS SwiftUI apps from Omarchy Linux on Apple Silicon, no Xcode required"
readmeQualityOk: true
url: "https://github.com/joshuaswarren/omarchy-apple-dev"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 120
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-09-09T22:13:26Z"
lastCommitAt: "2026-10-05T10:46:56Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 26
maintainers: ["joshuaswarren", "Gobbledegookie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f61a56dac2e92d4c82de179e14835f9473b7932ee4a8e40f0f2f5db26cd615a/joshuaswarren/omarchy-apple-dev"
---

# Build and deploy iOS apps on Omarchy Linux (Apple Silicon and x86_64)

SwiftUI apps built on Omarchy Linux, installed on a physical iPhone over USB,
with no Xcode and no macOS in the loop.

Current working set, verified 2026-10-03 on x86_64 Arch with the install
script as a fresh user (FINDINGS.md item 22):

| Tool | Version | Source |
|------|---------|--------|
| Swift | 6.4.0 | AUR `swift-bin` |
| xtool | 1.20.1 + 4 fixes (xtool-org/xtool#290-#293) | built from source by the installer |
| pymobiledevice3 | latest from PyPI at install time | venv |
| LLDB | 21.0.0 (Swift toolchain) | bundled with `swift-bin` |
| iOS SDK | iPhoneOS 27.0 | Xcode 27.0 |

The device install and LLDB loop were proven on 2026-09-09 on an M1 with
Swift 6.3.3, xtool 1.19.0 and the iOS 26.5 SDK; they are not yet re-run on
the 6.4 set. Confirmed on x86_64 (community report, Jon Kinney, 2026-09-15):
the same flow works on a Framework Desktop with an iPhone 16, used for a real
client project.

Works with a free Apple ID. Paid membership not required for device installs.

## What you need

- An Apple Silicon or x86_64 Linux box running Omarchy (Arch-based). Both
  architectures are covered: AUR `swift-bin`…
