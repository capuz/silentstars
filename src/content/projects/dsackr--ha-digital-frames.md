---
repo: "dsackr/ha-digital-frames"
name: "ha-digital-frames"
description: "Digital Frames — multi-vendor local digital photo frame gallery for Home Assistant (e-ink, Meural local, and more)"
readmeQualityOk: true
url: "https://github.com/dsackr/ha-digital-frames"
homepage: "https://github.com/dsackr/ha-digital-frames"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 40]
topics: ["eink", "hacs", "hacs-integration", "home-assistant", "home-assistant-custom-component", "smart-home", "gallery", "photo-frame", "digital-frames"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-29T01:20:44Z"
lastCommitAt: "2026-08-11T04:50:18Z"
lastReleaseAt: "2026-06-29T17:16:44Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 66
maintainers: ["github-actions[bot]", "dsackr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aba5bc808a255688b7e472aff46db5491705f05549fac01c33e3d48f82d5acb/dsackr/ha-digital-frames"
discussionCount: 0
---

# Digital Frames for Home Assistant

Turn your digital photo frames into a gallery wall that Home Assistant actually controls — no vendor app, no cloud account required. Point it at your frames and start sending photos in minutes.

**Digital Frames** is the product name and HA domain (`digital_frames`, package `custom_components/digital_frames/`). Official Spectra e‑ink panels remain manufacturer **Fraimic** in the device registry. The photo library lives under `config/digital_frames_library/` (a leftover `config/fraimic_library/` is renamed on first load).

**Scope is primarily local LAN.** Fraimic drivers stay local-only. Meural
sends always use the local postcard API; when you link a Netgear account
on a Meural frame’s Configure options, sends also pin to Meural cloud
(single-image gallery, no rotation) and you can push HA albums for
slideshow rotation. Drivers talk to devices on your network.

## Why you'll want this

- **No cloud in the loop.** Talk to frames over your own WiFi.
- **One tap turns a wall into a scene.** Match photos to frames and flip the whole wall from a dashboard, voice, or automation.
- **Your library, not a photo dump.** Upload once, organize into albums,…
