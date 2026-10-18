---
repo: "benbaobaoshigemi/FkOScreen"
name: "FkOScreen"
description: "ColorOS Screen Display and Image Quality Enhancement (High-Brightness Mode Activation / Peak Brightness Unlock / Thermal Throttling Bypass / HDR Ratio / Orthogonal Color Temperature / Three-Level Dark Mode)"
originalDescription: "ColorOS 屏幕显示与画质增强 (高亮激发/峰值解锁/温控绕过/HDR比例/正交色温/深色模式三档)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/benbaobaoshigemi/FkOScreen"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-05T19:36:07Z"
lastCommitAt: "2026-10-18T08:01:12Z"
lastReleaseAt: "2026-10-11T08:02:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 23
maintainers: ["benbaobaoshigemi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c275a1b9ec63cc215b6ba66082ac9fc10cb89db5b00d35d9f17947c5853253b7/benbaobaoshigemi/FkOScreen"
---

# FkOScreen (ColorOS Screen Display and Image Quality Enhancement)

A low-level screen display enhancement LSPosed module tailored for ColorOS / Android 14+ (deeply adapted for OPPO Pad Mini / OnePlus and other devices). It breaks through layers of system-level software restrictions to fully unlock the screen panel's physical hardware potential, and includes a control center in a native MIUIX style.

---

## Core Features

### 1. Screen Brightness and HDR Enhancement
- **Manual High Brightness Mode (HBM) boost**: Breaks past the default cap on the system SDR manual slider, allowing smooth manual adjustment up to full-screen high-brightness levels.
- **Block FOSS automatic brightness reduction**: Intercepts the system's 15% automatic image quality/brightness reduction mechanism applied to specific foreground apps.
- **Fix HDR brightness ratio**: Locks `hdrSdrRatio` to 1.56 so Ultra HDR highlight details map properly in everyday use and in the gallery.

### 2. Orthogonal Dual-Slider Screen Color Adjustment
- **Mathematically orthogonal decoupling**: Decouples the system's underlying 2D color-temperature sphere coordinates into two independent axes that do not interfere with each…
