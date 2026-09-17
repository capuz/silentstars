---
repo: "quern-dev/quern"
name: "quern"
description: "A domain harness for AI-assisted mobile development and testing. Unified device logs, network traffic interception, and UI automation — exposed through APIs and MCP tools that let AI agents understand your app like never before."
readmeQualityOk: true
url: "https://github.com/quern-dev/quern"
homepage: "https://quern.dev"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 41
forks: 3
openIssues: 43
closedIssues: 36
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T18:04:06Z"
lastCommitAt: "2026-09-17T08:50:16Z"
lastReleaseAt: "2026-05-28T20:52:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 38
maintainers: ["jerimiah797"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e3103601ec031136d859e755b995279ae7bdd843726c1f0281c72c6cf66b4d2/quern-dev/quern"
discussionCount: 2
---

# Quern

**Eyes, ears, and hands for AI-assisted mobile development.**

Quern is a local debug server that lets AI coding agents — Claude Code, Cursor, Windsurf, and others — actually *see* what your app is doing. Logs, network traffic, crash reports, screenshots, UI state: instead of guessing from stack traces and stale error messages, your agent gets live, structured access to everything happening on the device.

No cloud. No telemetry. Just a daemon on your Mac that bridges the gap between "build succeeded" and "it actually works."

> Supports iOS simulators, physical iOS devices (via WebDriverAgent), Android emulators, and physical Android devices.

```
Simulator / Device
    │
Quern (localhost:9100)
    ├── Log capture (device, simulator, crash reports, build output)
    ├── Network proxy (intercept, mock, replay HTTP traffic)
    ├── Device control (boot, screenshot, tap, swipe, type)
    │
    ├── HTTP API ──→ Any tool or script
    └── MCP tools ──→ Claude Code, Cursor, etc.
```

## Why

AI agents are good at writing code. They're bad at knowing whether it worked -- especially on mobile devices. A build error gets caught; a silent API failure, a wrong screen, or a crash on…
