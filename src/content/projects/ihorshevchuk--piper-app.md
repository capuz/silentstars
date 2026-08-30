---
repo: "IhorShevchuk/piper-app"
name: "piper-app"
description: "The original Piper(https://github.com/OHF-Voice/piper1-gpl), now on iOS and macOS"
readmeQualityOk: true
url: "https://github.com/IhorShevchuk/piper-app"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["ai", "ios", "ios-app", "ios-application", "neural-network", "piper", "piper-tts", "pipertts", "speech-synthesis", "speech-to-text"]
stars: 53
forks: 11
openIssues: 10
closedIssues: 10
watchers: 6
contributors: 3
recentReleases: 2
createdAt: "2024-01-11T01:15:07Z"
lastCommitAt: "2026-08-30T00:43:25Z"
lastReleaseAt: "2026-08-29T21:38:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 52
maintainers: ["IhorShevchuk", "dependabot[bot]", "cclauss"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0e03e56582479a47ed10003c0ca076a61cb5e2de03e13769b1f834193278a25/IhorShevchuk/piper-app"
---

</a>
</p>

<h3 align="center">
  Piper is now available on the App Store! 🎉<br>
  Experience high-quality <b>offline neural text-to-speech</b> directly on your device.<br><br>
  Want to try the latest features early?<br>
  Join the <a href="https://testflight.apple.com/join/Adkg5F5H">TestFlight Beta</a> 🚀
</h3>

  </a>
</p>

# 📥 Cloning & Building Piper

## System Requirements

* iOS 18.0+
* macOS 13.3+
* Xcode 26+
* `mise`

---

## Getting the Sources

```bash
git clone https://github.com/IhorShevchuk/piper-app.git
cd piper-app
```

---

## Install Toolchain (via mise)

Piper uses `mise` to manage development tools.

Install mise

```bash
curl https://mise.run | sh
```

Then install tools:

```bash
mise install
```

This installs:

* Tuist
* SwiftLint

---

## Generate the Xcode Project

Piper uses **Tuist** with Swift Package Manager for dependencies. First resolve SPM dependencies, then generate the workspace:

```bash
mise run install
mise run generate
```

Open the generated `Piper.xcworkspace` in Xcode.

```bash
open Piper.xcworkspace
```

> **Note:** Run `mise run install` whenever `Package.swift` or dependencies change. Otherwise `mise run generate` alone is sufficient.…
