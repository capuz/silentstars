---
repo: "agorokh/ac-copilot-trainer"
name: "ac-copilot-trainer"
description: "AI-powered driving trainer for Assetto Corsa: CSP Lua app with brake point detection, lap comparison, 3D track markers, and real-time coaching"
readmeQualityOk: true
url: "https://github.com/agorokh/ac-copilot-trainer"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 7
forks: 2
openIssues: 8
closedIssues: 217
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T18:08:37Z"
lastCommitAt: "2026-11-14T22:02:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["agorokh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da8eabd0353675301ac08fcd2bd70dba358aa0732a45351971caa528da3b4768/agorokh/ac-copilot-trainer"
---

# AC Copilot Trainer

AI-powered driving trainer for Assetto Corsa — a CSP Lua app that provides real-time coaching through brake point detection, lap comparison, 3D track markers, and driving analysis.

## Features (Planned)

### Phase 1 — Foundation
- 3D brake point markers on track surface (best lap vs last lap)
- Real-time brake zone approach HUD with speed reference
- Per-corner brake point comparison after each lap
- Continuous telemetry recording per corner

### Phase 2 — Analysis
- Automatic corner classification and labeling
- Consistency scoring per corner across laps
- Driving style fingerprint (steering, braking, throttle patterns)

### Phase 3 — Coaching
- Corner-specific coaching prompts based on telemetry analysis
- Focus practice mode (highlight weakest corners)
- Session journal with training log

## Requirements

- Assetto Corsa (Steam)
- Custom Shaders Patch (CSP) v0.2.11+
- Content Manager (recommended)

## Installation

Copy `src/ac_copilot_trainer/` to:
```
{AC Install}/apps/lua/ac_copilot_trainer/
```

Enable in Content Manager → Settings → Apps.

**Python sidecar auto-launch (issue #77):** `start_sidecar.bat` walks upward from the app folder until it finds…
