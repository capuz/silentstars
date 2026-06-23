---
repo: "Adoom666/CloudeCode"
name: "CloudeCode"
description: "Remote control and monitoring for Claude Code CLI - code from anywhere.  Control Claude Code sessions from any device on your network. Built for mobile-first development workflows with auto-tunneling, persistent sessions, and real-time terminal streaming."
url: "https://github.com/Adoom666/CloudeCode"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 30]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2025-10-30T04:46:33Z"
lastCommitAt: "2026-06-23T23:27:21Z"
lastReleaseAt: "2026-05-20T03:28:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 42
maintainers: ["Adoom666"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d71767939d8dd9f44924365227ee4678504be757fea9fecbadbfd510b2046f3/Adoom666/CloudeCode"
---

# Cloude Code

Remote-control UI for Claude Code CLI sessions on your Mac. Terminal lives in tmux,
reachable from the browser on your phone, laptop, or any LAN-connected device.

> **Quick Demo:** Watch Cloude Code in action — launchpad, adopt-external, real-time
> terminal streaming to a phone browser.

---

## Download

**macOS (Apple Silicon):** [Cloude.Code-0.7.4-arm64.dmg](https://github.com/Adoom666/CloudeCode/releases/download/v0.7.4/Cloude.Code-0.7.4-arm64.dmg) (93 MB)

Drag the app into Applications, double-click. First launch auto-provisions a Python venv, installs dependencies, generates TOTP + JWT secrets, and pops a QR for you to scan with any authenticator app. Requires Python 3.12+ (install via `brew install python@3.12` if missing — the app detects and guides you).

**Verify the download** (optional):

```bash
shasum -a 256 "Cloude.Code-0.7.4-arm64.dmg"
# expected: 954d4b2662e5651a7e872f043fd25b7e30fead9d107aa2320be816d9f81b371c
```

**Other versions:** see [Releases](https://github.com/Adoom666/CloudeCode/releases).

---

## Overview

Cloude Code is a hybrid Electron + FastAPI + tmux control plane for Claude Code CLI
sessions. An Electron menu-bar app on your Mac…
