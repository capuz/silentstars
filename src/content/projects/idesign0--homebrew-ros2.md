---
repo: "idesign0/homebrew-ros2"
name: "homebrew-ros2"
description: "🍺 Homebrew Tap for pre-built ROS 2 binaries (Humble, Kilted, Jazzy) for macOS Apple Silicon."
readmeQualityOk: true
url: "https://github.com/idesign0/homebrew-ros2"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-06T15:55:37Z"
lastCommitAt: "2026-11-20T12:18:15Z"
lastReleaseAt: "2026-05-12T20:09:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 28
maintainers: ["github-actions[bot]", "idesign0"]
openGraphImageUrl: "https://opengraph.githubassets.com/19a26375c77b1ce91b738797ff22c6ec30208fd203fd9c2e520afbdc0c1aaa7c/idesign0/homebrew-ros2"
---

# 🍺 Homebrew ROS 2 (Prebuilt Binaries for macOS)

This repository provides a Homebrew tap for installing **prebuilt ROS 2 distributions on macOS (Apple Silicon / ARM64)**.

Instead of building ROS 2 from source (which is slow and error-prone on macOS), this tap installs **ready-to-use binaries** built from:

👉 https://github.com/idesign0/ros2_macOS

---

## 🚀 What You Get

- Prebuilt ROS 2 distributions (e.g. humble)
- Core ROS 2 tooling and ecosystem packages
- macOS-specific fixes and toolchain adjustments
- Faster installs (minutes instead of hours)

---

## 📦 Installation

### 1. Add the Tap

```bash
brew update
brew tap idesign0/ros2
```

### 2. Install ROS 2

```bash
# Both taps must be trusted. Since Homebrew 4.x, loading ANY formula from an
# untrusted third-party tap is refused, and these formulae depend on Ogre from
# osrf/simulation, so trusting this tap alone is not enough:
#   Error: Refusing to load formula osrf/simulation/ogre2.3 from untrusted tap
brew trust idesign0/ros2
brew trust osrf/simulation

brew install ros2-humble
```
