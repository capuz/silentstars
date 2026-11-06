---
repo: "kolabs-dev/isim"
name: "isim"
description: "An iOS-compatible simulator and toolchain that runs on Linux, with no macOS, VM or remote Mac."
readmeQualityOk: true
url: "https://github.com/kolabs-dev/isim"
language: "Swift"
languages: ["Swift", "Objective-C"]
languagePcts: [47, 31]
stars: 35
forks: 2
openIssues: 40
closedIssues: 376
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T12:53:00Z"
lastCommitAt: "2026-11-06T11:23:43Z"
lastReleaseAt: "2026-10-08T14:53:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 45
maintainers: ["kevinobruno", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f94ba31991e99f634a1e9823dc5908dce704a17980d4726b5eef1210ea57dcca/kolabs-dev/isim"
---

# isim — iOS development on Linux

An iOS-compatible simulator and toolchain that runs on Linux, with no macOS, VM or remote Mac.
It builds Objective-C and Swift apps (UIKit and SwiftUI) from their Xcode projects and runs them
on a simulated iPhone or iPad with a home screen, a Settings app and a web browser (Safari).

Goal: write → build → run in the simulator → device build → sign → upload → TestFlight, all on Linux.

## Quick start (no build needed)

Install the latest release (Linux x86_64, glibc 2.35+, with `python3`, `curl`, fontconfig and `adwaita-icon-theme`):

```bash
curl -fsSL https://raw.githubusercontent.com/kolabs-dev/isim/main/install.sh | bash
```

This unpacks the release into `~/.local/lib/isim/<version>` and puts `isim` in `~/.local/bin` (add it to your `PATH`
if the installer says so). Then:

```bash
isim boot
```

This opens the device on its home screen, with Settings in the dock. The installer also adds **isim Simulator** to
your desktop's app launcher (GNOME, KDE, …): open it from there, or pin it to the dock; opening it again brings the
running device to the front. `--no-desktop` (`… | bash -s -- --no-desktop`) skips that on headless machines;
`isim…
