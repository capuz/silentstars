---
repo: "shadow-x78/ubuntu-modded-optimized"
name: "ubuntu-modded-optimized"
description: "Ubuntu 22.04/24.04 on Android - one-command GUI installer. VNC, audio, themes, performance tuning, systemctl emulation. No root. ARM64 proot with XFCE4 / LXDE / Openbox."
readmeQualityOk: true
url: "https://github.com/shadow-x78/ubuntu-modded-optimized"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
topics: ["android", "android-development", "android-terminal", "arm64-linux", "linux", "linux-on-android", "mobile-linux", "proot", "proot-distro", "termux"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T21:58:48Z"
lastCommitAt: "2026-08-30T09:24:41Z"
lastReleaseAt: "2026-08-27T11:10:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["shadow-x78"]
openGraphImageUrl: "https://opengraph.githubassets.com/a288b2adfe0718ff9487806a2896cd3db2e3782c88ce852b9191e2aa9d0fc8cf/shadow-x78/ubuntu-modded-optimized"
---

# Ubuntu Modded Optimized

Full Ubuntu on your Android device - one command, zero hassle

</div>

---

## 🌐 Language

---

## 📋 Table of Contents

- [What is UMO?](#what-is-umo)
- [Screenshots](#screenshots)
- [Desktop Environments](#desktop-environments)
- [Quick Start](#quick-start)
- [Commands](#commands)
- [CLI Options](#cli-options)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🤔 What is UMO?

**UMO (Ubuntu Modded Optimized)** is a free, open-source Ubuntu installer for Termux - rewritten from scratch to fix the root problems found in every similar project. No external UI dependencies, no manual configuration, no surprises.

| Problem | Other Projects | UMO |
|---------|---------------|-----|
| `dialog` breaks the UI | ❌ Still using it | ✅ Pure POSIX TUI - no deps |
| VNC dies on screen lock | ❌ No fix | ✅ `termux-wake-lock` built-in |
| No audio inside proot | ❌ Manual workaround | ✅ PulseAudio TCP bridge |
| `systemctl` fails | ❌ Confusing errors | ✅ Generic shell emulator (any service) |
| 20+ manual steps | ❌ Too complex | ✅ One command: `bash…
