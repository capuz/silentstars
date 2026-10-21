---
repo: "open-guji/open-guji-cv"
name: "open-guji-cv"
description: "Ancient book image processing"
originalDescription: "古籍图像处理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/open-guji/open-guji-cv"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [54, 42]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-02-21T23:53:19Z"
lastCommitAt: "2026-10-21T20:00:02Z"
lastReleaseAt: "2026-10-19T06:11:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["claude", "sheldonli-babelstacks"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5b6d7b767c6f858a290aa1158e4446c5662e2136dad77f6ee02f3abc098a0aa/open-guji/open-guji-cv"
---

# Open Guji CV

OCR analysis toolkit for ancient book images: character-by-character recognition, layout detection, and character grid localization on scanned images of ancient books.

---

## Overview

- **Automatic layout analysis**: automatically recognizes typesetting features of ancient books (border type, number of rows and columns, 筒子页/半页 (tongzi page / half page), spine shadow, etc.)
- **Step-by-step preprocessing**: crop spine → crop border → line enhancement → skew correction → split half pages → binarization
- **Layout detection**: detects borders (double / single layer) and column structure, outputs annotated visualization images
- **Character grid detection**: locates the bounding box of each character column by column, outputs structured JSON
- **OCR recognition**: based on PaddleOCR, supports both CPU and GPU modes
- **Table recognition**: for table pages in ancient books, extracts row and column structure and cell text

---

## Installation

### Prerequisites

- Python 3.10+
- (Optional) CUDA 12.x + NVIDIA GPU (measured on RTX 3080: about 1.5 seconds per page)

### 1. Clone the repository and create a virtual environment

```bash
git clone…
