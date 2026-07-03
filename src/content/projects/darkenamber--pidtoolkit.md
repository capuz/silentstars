---
repo: "DarkenAmber/PIDToolkit"
name: "PIDToolkit"
description: "PID controller tuning in the browser - 6 tuning methods, animated step response & Bode plot, ready-to-paste code for Arduino, ESP32, MicroPython and IEC 61131-3 ST. No install, no dependencies."
url: "https://github.com/DarkenAmber/PIDToolkit"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-01T12:05:37Z"
lastCommitAt: "2026-07-03T06:24:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 23
maintainers: ["DarkenAmber"]
openGraphImageUrl: "https://opengraph.githubassets.com/6701ed3d17410fe5bd14233fcad99d24f605a5ca937244c721e77ad16bbdb1cb/DarkenAmber/PIDToolkit"
---

# PID Toolkit

**Browser-based PID controller tuning tool.**  
One HTML file — offline, no dependencies, no backend.

**[▶ Live Demo](https://darkenamber.github.io/PIDToolkit/)**

---

## What it does

Enter your plant model (K, T, L) and get:

- **PID coefficients** — 6 tuning methods calculated simultaneously
- **Step response** — animated oscilloscope-style graph with live update
- **Bode Plot** — gain and phase margins, animated
- **Method comparison table** — all 6 methods side by side, sortable
- **Code export** — ready-to-paste code for 4 platforms
- **Contextual warnings** — real-world advice about noise, delay, and saturation

---

## Tuning methods

| Method | Type | Input |
|--------|------|-------|
| Ziegler-Nichols OL | Classic | K, T, L |
| Ziegler-Nichols CL | Ultimate gain | Ku, Tu |
| CHR 0% overshoot | Conservative | K, T, L |
| CHR 20% overshoot | Moderate | K, T, L |
| ITAE | Optimal integral criterion | K, T, L |
| Lambda / IMC | Model-based | K, T, L + λ |

---

## Code export

All platforms include **D on measurement** (no derivative kick) and **conditional anti-windup**:

- **Arduino** — `computePID()` with optional D-filter
- **ESP32 + FreeRTOS** —…
