---
repo: "FranciumOS-org/Radeonized"
name: "Radeonized"
description: "Rembrandt RDNA2 graphic kext for macOS"
readmeQualityOk: true
url: "https://github.com/FranciumOS-org/Radeonized"
language: "C++"
languages: ["C++", "C"]
languagePcts: [42, 30]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-27T02:04:31Z"
lastCommitAt: "2026-11-13T05:42:45Z"
lastReleaseAt: "2026-11-12T02:57:04Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["FranciumOS-org"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cbc102e788fbf7e9b0d1f12667fe3bfc9fb83a9b1f82939dd67cc28645b0578/FranciumOS-org/Radeonized"
---

A kernel extension, a Lilu plugin and a framebuffer for Rembrandt APUs, booted through OpenCore.

---

## What works

Measured on a Ryzen 7 7735HS laptop running macOS Tahoe 26.7, with the
firmware set to iGPU-only (Eco) mode. Everything is recorded in
`docs/JOURNAL.md`.

- **Full Metal acceleration.** The GPU appears in System Profiler as
  `AMD Radeon 680M`, Metal 3, 4 GB. Metal output is bit-exact against the
  reference, and Geekbench Metal lands around 22k once VRAM is raised past the
  512 MB default.
- **The built-in panel.** `RBAMDFramebuffer` owns the laptop's screen, with
  brightness control and a refresh ladder derived from the panel's own
  timings — roughly 91–140 fps on the desktop depending on refresh state.
- **Apple's compositor runs on the GPU**, the same way it would on a supported
  Mac, rather than through a software path.
- **OpenGL apps render correctly.** OpenGL draws through a *second* driver
  image with its own tiling logic that the Metal path never touches — the
  reason Java/JavaFX apps and Steam's built-in browser used to show eaten
  glyphs and scrambled images. The fix for that image is on by default.
- **USB runs on real interrupts** rather than…
