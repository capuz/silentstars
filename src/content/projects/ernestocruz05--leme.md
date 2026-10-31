---
repo: "ernestoCruz05/leme"
name: "leme"
description: "A simple wlroots WM with eye candy without scenefx!"
readmeQualityOk: true
url: "https://github.com/ernestoCruz05/leme"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-23T19:00:05Z"
lastCommitAt: "2026-10-31T09:54:34Z"
lastReleaseAt: "2026-10-02T17:14:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["ernestoCruz05", "lptlv"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1536ad4498f1f3f4e5877888570bedef30da35d8bbb6334a540fb07851d0af/ernestoCruz05/leme"
---

# Leme

Leme is a tiling Wayland compositor written in C17 and built on
wlroots 0.20. It supports dwindle and master-stack layouts, an experimental
desktop layout, per-output adaptive tags, multiple monitors, native Wayland
applications, and optional XWayland.

Leme is early alpha and a personal project. It is usable for daily work but is
not stable software: configuration and behavior may change, and physical
multi-monitor support has had limited hardware testing. It is built primarily
for my own use. Issues and patches are welcome, but support is best-effort.

## What works

- Native Wayland windows, and X11 windows through XWayland started on demand
- Adaptive tags with dwindle and master-stack layouts
- A desktop layout with titlebars, minimizing, window groups and a file grid
- Multiple outputs with directional focus, movement and pointer drag
- Keyboard layouts, pointer settings, binding modes and window rules
- Window animations and workspace transitions, off by default
- Layer-shell programs, clipboard, drag and drop, locking, idle inhibition and
  capture
- A control socket with the `timao` client

## Current limits

Leme does not yet provide persistent VRR policy, touch…
