---
repo: "qing1989/SpektraLens"
name: "SpektraLens"
description: "Spectral film simulator · On-device development on Android · 81-wavelength physical model, not a filter · 20 films / 8 photo papers · Full-resolution RAW export · No network required"
originalDescription: "光谱胶片模拟器 · Android 本地显影，81 波长物理模型而非滤镜 · 20 款胶片 / 8 款相纸 · RAW 原尺寸导出 · 无需联网"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qing1989/SpektraLens"
language: "Java"
languages: ["Java"]
languagePcts: [86]
topics: ["android", "film-simulation", "image-processing", "photography", "raw", "vulkan", "java", "spectral"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-09T05:02:51Z"
lastCommitAt: "2026-11-21T11:38:39Z"
lastReleaseAt: "2026-11-16T09:55:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["qing1989"]
openGraphImageUrl: "https://opengraph.githubassets.com/0621738ec343e2f9ef9632ce5d66aed7cfc6ddef7a4f66314de3b5f102b38c8f/qing1989/SpektraLens"
---

# SpektraLens

**Put a spectral film lab in your pocket.**

SpektraLens is a **spectral film simulator that runs on your phone**. It does not use a 3×3 matrix approximation or LUT lookups. Instead, it brings the spectral response of real film onto the device: 380–780 nm, one sample every 5 nm, 81 wavelengths in total. It integrates the response of the sensitive layers, dye layers, and photographic paper wavelength by wavelength, then reconstructs the result as an sRGB image.

RAW decoding, spectral development, paper printing, color grading, grain and halation compositing, and writing encoded output to disk all happen on the device. **No server, no account, no photo uploads.** The app only connects to the internet when checking for updates and downloading new versions.

---
