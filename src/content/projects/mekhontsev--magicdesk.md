---
repo: "mekhontsev/magicdesk"
name: "magicdesk"
description: "Android workstation with native multi-window desktops, X11/Wayland, Termux and MCP automation. Run Linux with Shroot without root or Shizuku, including systemd, Docker and Podman. Package a distribution as an independent Android app (Linux Capsule). Android 14+; managed Desktop 15+."
readmeQualityOk: true
url: "https://github.com/mekhontsev/magicdesk"
language: "Java"
languages: ["Java"]
languagePcts: [86]
topics: ["android", "android-desktop", "desktop-mode", "external-display", "desktop-environment", "freeform-windows", "miracast", "shizuku", "android-shell", "mcp"]
stars: 244
forks: 16
openIssues: 12
closedIssues: 13
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-07-09T17:03:37Z"
lastCommitAt: "2026-11-24T14:08:40Z"
lastReleaseAt: "2026-11-21T10:36:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 28
maintainers: ["mekhontsev", "kukelivan", "KIDA-Nya"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d4707e725e95e83e41a124adaea86523a54da63240fa137dec1241b681e65fb/mekhontsev/magicdesk"
---

# MagicDesk

**An open-source Android workstation.**

MagicDesk combines native Android app windows, Linux graphical applications,
terminals and independent workspaces on multiple displays. Use the phone,
an external monitor, or a computer connected through scrcpy. Files, clipboard,
application launchers and automation connect the same tools whether or not a
managed Desktop is running.

**Android 14+ for the APK; Android 15+ for managed Desktop.**
Shroot runs Linux without Shizuku or Android root. Managed Desktop and the
privileged Shell console use Shizuku, a compatible provider such as Shevery,
or direct root on a rooted device.

- **Inside MagicDesk:** open a **User** console to [install a distribution](#linux-with-shroot)
  and run its packages, containers or k3s under MagicDesk's Android UID.
- **As its own Android app:** package a distribution as a [Linux Capsule](#a-linux-distribution-as-its-own-android-app).
  Install its APK and open it from the Android launcher. It has its own UID,
  private data and terminal, and runs without MagicDesk or a virtual machine.
  Build it without network permission, or share just the folders you choose.
