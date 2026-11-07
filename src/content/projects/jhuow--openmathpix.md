---
repo: "JhuoW/OpenMathpix"
name: "OpenMathpix"
description: "An open-source alternative to Mathpix Snip Tool. Instantly extract LaTeX, math equations, and text from images and screenshots. | 开源 Mathpix 替代工具，支持公式截图转 LaTeX"
readmeQualityOk: true
url: "https://github.com/JhuoW/OpenMathpix"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["latex", "mathpix", "mathpix-ocr", "paddleocr", "paddleocr-vl", "paddlepaddle", "mathpix-alternative"]
stars: 45
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-23T12:59:26Z"
lastCommitAt: "2026-11-02T05:40:18Z"
lastReleaseAt: "2026-11-01T15:14:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 14
maintainers: ["JhuoW"]
openGraphImageUrl: "https://opengraph.githubassets.com/100d3ff6c9388453586a41eeaa73ab111f12cdfabe81c0e77d814f72606bf49e/JhuoW/OpenMathpix"
promoted: true
postedAt: "2026-11-05T14:14:14.691Z"
---

Open-source desktop snipping tool that converts formula screenshots into LaTeX locally with <a href="https://huggingface.co/breezedeus/pix2text-mfr-1.5">Pix2Text MFR-1.5</a>, with optional <a href="https://github.com/PaddlePaddle/PaddleOCR">PaddleOCR</a> APIs for text, tables and document layouts.

---

## Installation

### Windows (portable, recommended)

1. Open the [latest release](https://github.com/JhuoW/OpenMathpix/releases/latest) and download **OpenMathpix-portable.exe** from **Assets** (Windows x64).
2. For local formula recognition, install the [Microsoft Visual C++ x64 Redistributable](https://aka.ms/vc14/vc_redist.x64.exe) if it is not already installed.
3. Double-click **OpenMathpix-portable.exe** to launch the portable app.
4. Follow [Local formula recognition](#local-formula-recognition-recommended) below to test and use.

### Build from source (optional)

Requires Node.js 22.12 or later and npm.

```bash
git clone git@github.com:JhuoW/OpenMathpix.git
cd OpenMathpix
npm install
npm run dev
npm run check      # TypeScript, ESLint, regression tests, production build
npm run package
```

## Getting started

### Local formula recognition (recommended)

1. Open…
