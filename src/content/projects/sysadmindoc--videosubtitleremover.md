---
repo: "SysAdminDoc/VideoSubtitleRemover"
name: "VideoSubtitleRemover"
description: "AI-powered Python GUI for removing hard-coded subtitles and text watermarks from videos using STTN, LAMA, and ProPainter inpainting with GPU acceleration."
readmeQualityOk: true
url: "https://github.com/SysAdminDoc/VideoSubtitleRemover"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "inpainting", "python", "subtitle-removal", "video"]
stars: 36
forks: 10
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-01-14T02:17:32Z"
lastCommitAt: "2026-07-17T06:03:38Z"
lastReleaseAt: "2026-07-17T05:06:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d86f67d0aca0ad4b1bbfedebdd4dda8549514ef1682cc3bbb59ed8732192a47/SysAdminDoc/VideoSubtitleRemover"
---

# Video Subtitle Remover Pro







**Professional AI-powered tool for removing hard-coded subtitles from videos and images**

[Features](#features) | [Installation](#installation) | [Usage](#usage) | [Configuration](#configuration) | [CLI](#cli-usage) | [Troubleshooting](#troubleshooting)

</div>

---

## Overview

Video Subtitle Remover Pro uses real AI neural networks to remove hard-coded subtitles and text watermarks from videos and images. Unlike simple blur or crop methods, it intelligently fills in removed areas with content that matches the surrounding video.

Based on [YaoFANGUK/video-subtitle-remover](https://github.com/YaoFANGUK/video-subtitle-remover), enhanced with a professional interface, real LaMa inpainting, multi-engine detection, and a 52-code language picker backed by broader OCR engine coverage.

## Features

- **Real Video Inpainting** -- Temporal Background Exposure (TBE) reconstructs the true background from neighbouring frames where the subtitle is absent. No external model weight downloads required.
- **Real AI Inpainting** -- LaMa neural network via ONNX Runtime (default, no torch dependency), OpenCV DNN weights, or an explicit…
