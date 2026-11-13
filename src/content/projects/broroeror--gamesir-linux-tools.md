---
repo: "broroeror/gamesir-linux-tools"
name: "gamesir-linux-tools"
description: "Linux configuration app for GameSir controllers and Logitech mice (Qt/QML): RGB, curves, remaps, macros, DPI, profiles, backups — reverse-engineered, local-only, verified writes."
readmeQualityOk: true
url: "https://github.com/broroeror/gamesir-linux-tools"
language: "Python"
languages: ["Python", "QML"]
languagePcts: [66, 31]
topics: ["game-controller", "gamesir", "hidraw", "linux", "reverse-engineering", "hid", "kde", "logitech", "mouse", "pyside6"]
stars: 99
forks: 18
openIssues: 9
closedIssues: 30
watchers: 0
contributors: 15
recentReleases: 6
createdAt: "2026-06-24T17:21:44Z"
lastCommitAt: "2026-11-13T18:33:39Z"
lastReleaseAt: "2026-11-13T18:33:21Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 36
maintainers: ["broroeror", "sinchrotron", "JoaoVitorSCS1999"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfcb03cf48db013405a165e19927f93b6546a7ee0a7a12518a0e1956d4702b79/broroeror/gamesir-linux-tools"
fundingLinks: ["KO_FI:https://ko-fi.com/broroeror"]
---

# Deadband — a Linux configuration app for controllers and mice

A Linux GUI for gaming input devices, driven over each device's vendor (hidraw)
interface (or vendor-class USB for the G7 Pro, G7 SE and Kaleid). Currently
supports the **GameSir Cyclone 2**, **G7 Pro**, **G7 Pro 8K PC**, **G7 SE**
and **Tarantula Pro 8K** controllers, the **GameSir Kaleid** (lighting only) and the
**Logitech G502 X LIGHTSPEED** mouse (see Tested hardware); the protocol modules are per-vendor
(`vendors/gamesir`, `vendors/logitech`), so other manufacturers can be added
alongside.

The configurable models offer:

- **Live input view** — sticks, triggers, all buttons (incl. the L4/R4/M/Home/
  Share extras), D-pad, battery + charging, firmware version, and a mode warning.
- **Profiles** — pick the profile you're editing (three on G7 SE, four on other models); a dot marks the
  one the controller is actually running. Reset a profile to its defaults.
- **Lighting** — on the **Cyclone 2** and **Kaleid**: per-light RGB, captured effect
  presets, brightness/speed and a **custom keyframe animation editor** (add/remove
  keyframes, randomize; play/pause on the Cyclone 2), with four lights on the
  Cyclone 2…
