---
repo: "Yannis100/vita-port-skill"
name: "vita-port-skill"
description: "Agent skill for porting games and engines to the PS Vita (VPK homebrew): VitaSDK, vitaGL, Android .so loader, static recomp, API emulation"
readmeQualityOk: true
url: "https://github.com/Yannis100/vita-port-skill"
homepage: "https://skills.sh/Yannis100/vita-port-skill"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agent-skill", "ai", "homebrew", "psvita", "psvita-homebrew", "vitagl", "vitasdk"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-14T14:03:58Z"
lastCommitAt: "2026-10-15T08:32:51Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 14
maintainers: ["Yannis100"]
openGraphImageUrl: "https://opengraph.githubassets.com/8010f16aa6395845ca63bc850ee4fc8e07997e338b7d1bda9983897701a8a365/Yannis100/vita-port-skill"
---

# Vita Port Agent Skills

Agent skills for porting software to the Sony PS Vita (PSVita / PS TV) as VPK homebrew.

## Skills

This repository publishes two skills:

- **vita-port** — porting games to the PS Vita (VitaSDK, vitaGL, Android .so loader, static
  recomp, API emulation).
- **vita-app-port** — porting Android applications and non-game tools to the PS Vita (.so loader
  or native VitaSDK builds).

Install both:

```bash
npx skills add yannis100/vita-port-skill
```

## What it covers

- Feasibility triage: six port routes (native VitaSDK, vitaGL, cross-platform API emulation,
  Android .so loading, Java/TeaVM, static recompilation)
- Toolchain and CMake setup (including VitaSDK-softfp for Android .so ports)
- Memory budget, thread/core mapping, and platform-layer patterns
- OpenGL → vitaGL shader conversion and shader caching
- Input mapping (dual sticks, touch, gyro, PS TV pads)
- LiveArea packaging and VPK validation
- Debugging crashes (Vita3K, vitacompanion, vita-parse-core)

## Install

```bash
npx skills add yannis100/vita-port-skill
```

Install for a specific agent:

```bash
npx skills add yannis100/vita-port-skill --skill vita-port --agent amp
```

Install…
