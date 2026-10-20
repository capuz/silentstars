---
repo: "werdio325-png/antigravity-android"
name: "antigravity-android"
description: "Google Antigravity Standalone for Android - Autonomous ARM64 Client & Freeform Environment"
readmeQualityOk: true
url: "https://github.com/werdio325-png/antigravity-android"
homepage: "https://github.com/werdio325-png/antigravity-android/releases/latest"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [64]
topics: ["agentic-ai", "android", "antigravity", "arm64", "autonomous-agent", "freeform", "gemini", "google-antigravity", "shizuku", "termux"]
stars: 64
forks: 19
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-09-11T17:13:43Z"
lastCommitAt: "2026-10-20T08:47:18Z"
lastReleaseAt: "2026-10-10T09:58:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 42
maintainers: ["werdio325-png", "Dszsu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1366482671/0f97e8cf-2348-433a-9ad9-736bf2f3bdc4"
---

# Antigravity for Android

  **Autonomous AI development environment running natively on Android & ARM64.**

---

### Overview

**Antigravity for Android** brings autonomous agentic coding directly to mobile hardware.

No PRoot, chroot, or virtualization overhead. Antigravity runs **bare-metal inside native Android userspace (Bionic)**, unleashing the full read/write speed of UFS storage and physical CPU cores. Driven by Gemini models, the agent inspects repositories, authors code across multiple files, compiles binaries, and runs tests completely on-device.

---

### Highlights in v2.4

* **Modular Core:** Clean separation into 6 standalone subsystems (`modules/*`) with independent test suites.
* **Native Splash:** Canvas-based dot animation saving ~40 MB RAM with instant startup.
* **Desktop Mode:** Instant toggle in Appearance settings for tablets, external keyboards, and Samsung DeX.
* **Universal ARMv8.0-A Support:** Built-in transparent atomic & SIMD emulation (`liblse_compat.so`) for older CPUs.
* **Background Micro-Daemon:** Ultra-lightweight `agy-daemon` (<10 MB RAM) with cron scheduler, file watcher, and AI task queue.

---

### Key Features

* **Autonomous Agent:**…
