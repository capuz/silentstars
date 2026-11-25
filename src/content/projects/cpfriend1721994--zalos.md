---
repo: "cpfriend1721994/zalos"
name: "zalos"
description: "A high-performance, ultra-lightweight native Zalo desktop client for Linux"
readmeQualityOk: true
url: "https://github.com/cpfriend1721994/zalos"
homepage: "https://zalos.pages.dev"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [66, 31]
topics: ["zalo", "appimage", "native-app", "vietnam", "vietnamese", "zalo-linux", "zalo-personal", "zalo-on-linux", "zalos", "linux"]
stars: 20
forks: 9
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-31T11:20:34Z"
lastCommitAt: "2026-11-25T03:10:55Z"
lastReleaseAt: "2026-11-15T12:54:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["cpfriend1721994", "QinZinn", "daiphuc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f955b6b75491e4802abfac307b32c3197388e2cc9a80b75709f2cd0e5fc06d29/cpfriend1721994/zalos"
---

# Zalos 🚀

**High-performance, ultra-lightweight native Qt 6 client for Zalo on Linux**

[English](https://github.com/cpfriend1721994/zalos/blob/HEAD/README.md) | [Tiếng Việt](https://github.com/cpfriend1721994/zalos/blob/HEAD/README.vi.md) | [Website](https://zalos.pages.dev/)

---

## 📖 Overview

**Zalos** is an open-source native Linux client for Zalo, built with C++17 and Qt 6 QML
with a lean, purpose-built architecture:

- **Self-contained & lightweight:** Compact packages (`~25 MB` `.deb`, `~27 MB` `.rpm`, `~27 MB` `AppImage`) bundling their own Qt 6.8.3 LTS runtime with QML AOT compilation, so no system Qt is needed on any distribution, plus minimal memory footprint (~40–65 MB RAM, saving over 90% compared to 450–1,800+ MB on Electron wrappers).
- **High performance:** Instant startup (<0.5s), C++ AOT-compiled Qt Quick UI (`-DZALOS_QML_AOT=ON`), full color emojis (bundled CBDT fallback) & `MultiEffect` rounded masks/blur, software renderer by default with optional GPU acceleration, multi-threaded C++ cryptographic decoding, and built-in slim FFmpeg 7.1.5 LGPL playback (H.264/AAC/MP3).
