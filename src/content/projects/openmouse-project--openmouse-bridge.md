---
repo: "OpenMouse-Project/OpenMouse-Bridge"
name: "OpenMouse-Bridge"
description: "A lightweight cross-platform background service for OpenMouse, providing device communication, application detection, and automatic profile switching on Windows and Linux."
readmeQualityOk: true
url: "https://github.com/OpenMouse-Project/OpenMouse-Bridge"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 6
forks: 7
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-09T06:20:49Z"
lastCommitAt: "2026-09-19T01:38:01Z"
lastReleaseAt: "2026-09-19T01:15:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 77
undervaluedScore: 72
maintainers: ["snekxs"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f526ab3a94bbf09a5b710300feb63bcb648d10239f86cc40ef814380db1bc03/OpenMouse-Project/OpenMouse-Bridge"
---

# OpenMouse Bridge

OpenMouse Bridge is a small per-user companion process for the OpenMouse web
control panel on Windows and macOS. Its core and loopback protocol remain
portable so additional desktop adapters do not require changes to the web app.

The initial service provides:

- a compact tray panel for status, startup, battery, and update controls;
- process-based detection for configured game executables;
- discovery of visible Windows and macOS applications and the foreground application;
- persistent application profiles tied to a specific mouse;
- low-battery notifications with a configurable threshold and cooldown;
- startup-at-login registration under the current user;
- native HID access for devices and collections that browsers cannot expose;
- manual or automatic updates from verified stable GitHub releases;
- a versioned HTTP API bound only to `127.0.0.1:17846`;
- an explicit browser-origin allowlist.

It does not run as an elevated Windows Service. It runs in the signed-in user's
session, which is required for the tray icon and desktop notifications and
avoids administrator permissions. Bridge settings and status live in its
custom tray panel while device control…
