---
repo: "hthienloc/dms-quick-capture"
name: "dms-quick-capture"
description: "Quick screenshot and annotation plugin for DankMaterialShell"
readmeQualityOk: true
url: "https://github.com/hthienloc/dms-quick-capture"
language: "QML"
languages: ["QML"]
languagePcts: [88]
stars: 10
forks: 2
openIssues: 26
closedIssues: 29
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-28T00:22:56Z"
lastCommitAt: "2026-07-10T07:01:56Z"
lastReleaseAt: "2026-07-02T03:27:01Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["hthienloc", "DaniCatGames"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b867f935f860073f9576e7779d9cc193f2633f40488f4caec0e2cec8bd0b12b/hthienloc/dms-quick-capture"
discussionCount: 0
---

# DMS Quick Capture & Annotate

  </a>
</p>

Screenshot and vector annotation plugin for DankMaterialShell (DMS).

## Requirements

- DankMaterialShell >= 1.5
- **ImageMagick** (provides `magick`/`mogrify`, required for WebP/JPEG exports, rotation/mirroring, and OCR/QR crop)
- **img2pdf** (required for PDF export)
- **tesseract** (required for OCR text scanner)
- **zbar** (provides `zbarimg`, required for QR scanner)
- **wl-clipboard** (provides `wl-paste`, optional — only needed for pasting images from clipboard into editor)

## Install

```bash
# Via DMS CLI
dms plugins install quickCapture

# Or manually
git clone https://github.com/hthienloc/dms-quick-capture ~/.config/DankMaterialShell/plugins/quickCapture
```

## Quick Start

| Action | Result |
|--------|--------|
| **Left Click** (bar icon) | Interactive region capture |
| **Middle Click** (bar icon) | Fullscreen capture (all monitors) |
| **Right Click** (bar icon) | Annotate image from clipboard |
| **Drop Image** (bar icon) | Drag any image onto the icon to annotate |
| **Print** (keyboard) | Capture using default mode (requires keybind setup) |

**Typical workflow:**

1. **Trigger capture** — click the bar icon, use…
