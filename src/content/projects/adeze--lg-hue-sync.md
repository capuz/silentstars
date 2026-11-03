---
repo: "adeze/lg-hue-sync"
name: "lg-hue-sync"
description: "Native LG webOS ambient sync for Philips Hue Entertainment and Nanoleaf 4D"
readmeQualityOk: true
url: "https://github.com/adeze/lg-hue-sync"
homepage: "https://github.com/adeze/lg-hue-sync"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [50, 23]
topics: ["ambilight", "home-automation", "nanoleaf", "philips-hue", "rust", "webos"]
stars: 28
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-18T04:14:45Z"
lastCommitAt: "2026-11-03T10:52:10Z"
lastReleaseAt: "2026-10-22T03:48:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 34
maintainers: ["adeze"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd0f7caaa9e24f06bac1496fb7ef12cf307d1e1d51afa65e05f925fd82f1b9d3/adeze/lg-hue-sync"
---

# lg-hue-sync

Native ambient-light synchronization for rooted LG webOS TVs. A Rust daemon captures the displayed image, derives spatial colours, and streams them to Philips Hue Entertainment and Nanoleaf 4D. A responsive LAN dashboard provides pairing, calibration, presets, and independent output controls.

## Features

- Root-only webOS capture through dynamically loaded `libvtcapture`/`dile_vt` APIs.
- Hue Entertainment API v2 over DTLS 1.2 PSK, including gradient member identity.
- Nanoleaf 4D UDP streaming with 40-panel corner, direction, and offset alignment.
- Independent Hue/Nanoleaf controls; TV sleep/wake following can be automatic or manual.
- Letterbox-aware sampling, an optional legacy midtone lift, OLED black gating, smoothing, and bounded scene changes.
- Responsive dashboard at `http://<tv-ip>:8088/` with system, dark, and light themes.

## Limits and safety

- Root access is required. Rooting can void warranties or render a TV unusable; confirm model and firmware compatibility first.
- Capture is HDMI-only: known built-in apps and Home automatically pause capture; returning to HDMI resumes it unless manually stopped. This input policy does not detect or bypass…
