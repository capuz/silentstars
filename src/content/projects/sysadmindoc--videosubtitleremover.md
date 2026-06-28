---
repo: "SysAdminDoc/VideoSubtitleRemover"
name: "VideoSubtitleRemover"
description: "AI-powered Python GUI for removing hard-coded subtitles and text watermarks from videos using STTN, LAMA, and ProPainter inpainting with GPU acceleration."
url: "https://github.com/SysAdminDoc/VideoSubtitleRemover"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "inpainting", "python", "subtitle-removal", "video"]
stars: 25
forks: 8
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-01-14T02:17:32Z"
lastCommitAt: "2026-06-28T03:11:26Z"
lastReleaseAt: "2026-06-25T23:56:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["SysAdminDoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ac785acf059eb59e34b7dfd3ae5f13a6ea9c219ffe56aceae644462a8eec900/SysAdminDoc/VideoSubtitleRemover"
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
- **Real AI Inpainting** -- LaMa neural network via ONNX Runtime (default, no torch dependency), OpenCV DNN weights, or an explicit PyTorch fallback opt-in
- **AUTO…
