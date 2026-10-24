---
repo: "Baka-Sky/Easy4K"
name: "Easy4K"
description: "Making videos clearer is actually this simple! Making videos clearer is actually this simple!"
originalDescription: "Making videos clearer is actually this simple! 视频变清晰原来如此简单! "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Baka-Sky/Easy4K"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-23T09:32:18Z"
lastCommitAt: "2026-10-24T08:21:40Z"
lastReleaseAt: "2026-08-25T17:41:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 51
maintainers: ["Baka-Sky"]
openGraphImageUrl: "https://opengraph.githubassets.com/3078ef04e02c31a47e98f87ccebd33a710de2750605907fb019b24d216d30051/Baka-Sky/Easy4K"
---

# Easy4K One-Click Video Super-Resolution & Frame Interpolation Tool <img align="right" style="margin-right:48px" src="logo.png" width="144" alt="Easy4K Logo"/>

A Windows desktop application built on **WinUI 3 (Windows App SDK 2.4)** that handles the entire pipeline in one place:

> **Frame extraction → AI super-resolution (Real-ESRGAN) → AI frame interpolation (RIFE) → video merging → embedding original audio → (optional) SDR→HDR**

A graphical pipeline tool for everyday users: just select a video, check the steps you want, click "Start Processing", and turn low-resolution/low-frame-rate footage into high-definition, high-frame-rate video.

---

## Features

- **Frame extraction** — Uses FFmpeg to export the video frame by frame as PNG at original quality (optional GPU hardware decoding acceleration)
- **AI super-resolution** — Integrates Real-ESRGAN-ncnn-vulkan, supports x2 / x3 / x4 scaling and multiple models
- **AI frame interpolation** — Supports two engines: NCNN (rife-ncnn-vulkan, 40+ models) and Offical (PyTorch official implementation, 10+ models), for a 2× frame rate increase
- **Frame deduplication (SFDP)** — A self-developed four-stage cascaded decision (pixel…
