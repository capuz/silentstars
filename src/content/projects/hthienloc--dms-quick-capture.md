---
repo: "hthienloc/dms-quick-capture"
name: "dms-quick-capture"
description: "Screenshot annotation plugin for DankMaterialShell"
readmeQualityOk: true
url: "https://github.com/hthienloc/dms-quick-capture"
language: "QML"
languages: ["QML"]
languagePcts: [84]
stars: 28
forks: 5
openIssues: 1
closedIssues: 89
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-28T00:22:56Z"
lastCommitAt: "2026-08-08T04:33:12Z"
lastReleaseAt: "2026-07-02T03:27:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["hthienloc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be8b8a241f6782778e762091510c5cf31a3db78810a65d08f1b87bd334fa27f/hthienloc/dms-quick-capture"
discussionCount: 0
---

# DMS Quick Capture & Annotate

  </a>
</p>

Screenshot and vector annotation plugin for DankMaterialShell (DMS).

## Requirements

- DankMaterialShell >= **1.5.2** (scroll capture)
- **ImageMagick** (provides `magick`/`mogrify`, required for WebP/JPEG exports, and OCR/QR crop)
- **img2pdf** (required for PDF export)
- **tesseract** (required for OCR text scanner)
- **zbar** (provides `zbarimg`, required for QR scanner)
- **Qt5Compat GraphicalEffects** (provides `qt6-qt5compat`, required for Floating)

## Install

Via DMS CLI
```bash
dms plugins install quickCapture
```

Or manually
```bash
git clone https://github.com/hthienloc/dms-quick-capture ~/.config/DankMaterialShell/plugins/quickCapture
```

## Quick Start

| Action                          | Result                                              |
| ------------------------------- | --------------------------------------------------- |
| **Left Click**      | Open widget popout                                  |
| **Middle Click**     | Region capture (configured in settings)        |
| **Right Click**     | Paste from clipboard (configured in settings)         |
| **Drop Image**      | Drag any image onto the icon to…
