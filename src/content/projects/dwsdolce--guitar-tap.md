---
repo: "dwsdolce/guitar_tap"
name: "guitar_tap"
description: "Tap-tone analysis for luthiers — capture a tap, run an FFT, and reveal guitar resonant modes and tonewood stiffness. Cross-platform Python/PySide6."
readmeQualityOk: true
url: "https://github.com/dwsdolce/guitar_tap"
homepage: "https://www.dolcesfogato.com/guitar_tap/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["acoustics", "audio-analysis", "dsp", "fft", "guitar", "guitar-building", "lutherie", "luthier", "modal-analysis", "music"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2023-01-01T05:33:19Z"
lastCommitAt: "2026-10-21T23:36:14Z"
lastReleaseAt: "2026-08-01T19:17:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 83
maintainers: ["dwsdolce"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/584053501/ac531099-dcbb-4fa4-b7df-0af4b2dea3f8"
fundingLinks: ["CUSTOM:https://www.paypal.com/donate/?hosted_button_id=KHXSEY3X7MGH8"]
---

---

Guitar Tap captures the brief ring-out after you tap a guitar, a tonewood plate, or a
brace, runs a high-resolution FFT, and reveals the resonant peaks and material properties
that matter to guitar builders. Use the results to guide your bracing, mass distribution,
and plate thickness.

It implements the tap-tone methodology from *Contemporary Acoustic Guitar Design and Build*
by Trevor Gore in collaboration with Gerard Gilet — built to improve reproducibility in
guitar building.

This is the **desktop edition** of Guitar Tap: **free and open source**, written in Python 3 with
PySide6, for Windows, macOS, and Linux. The Apple edition for iPhone, iPad, and Mac is on the
[App Store](https://apps.apple.com/app/guitar-tap/id6759410596), and the web edition runs in any
modern browser — all three are open source (see [Related projects](#related-projects)).

## Features

- **Guitar mode** — identify the key body resonances (Air/Helmholtz, Top, Back, and more),
  each labeled with frequency, pitch, and Q factor, plus the tap-tone ratio.
- **Plate mode** — measure a tonewood blank: Young's modulus along and across the grain,
  speed of sound, specific modulus, radiation ratio, a…
