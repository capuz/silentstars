---
repo: "banbanzhige/DLSS5Tool"
name: "DLSS5Tool"
description: "Supports arbitrary video and image input, using the DLSS5 algorithm to enhance the realism of image and video super-resolution rendering. Compatible with NVIDIA RTX 30/40/50 series GPUs, it supports HDR and queued batch processing, and provides real-time render preview and parameter adjustment. It can preserve the original format, resolution, and container encoding, or produce custom lossless output. It works out of the box on Windows, requires no game engine, and depends on no additional components."
originalDescription: "支持视频、图片任意输入，借助 DLSS5 算法提升图像与视频渲超分染真实质感；兼容 RTX30/40/50 系列 NVIDIA 显卡，支持 HDR、队列批量处理，提供实时渲染预览与参数调节。可保留原始格式、分辨率及容器编码，也可自定义无损输出；Windows 端开箱即用，无需游戏引擎，不依赖额外组件。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/banbanzhige/DLSS5Tool"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 170
forks: 7
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T13:49:33Z"
lastCommitAt: "2026-10-26T20:59:41Z"
lastReleaseAt: "2026-09-12T05:34:17Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 66
undervaluedScore: 28
maintainers: ["banbanzhige"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5f63fd4773ad2290b1279ec4316c4b88d2e8405b92905940cbff2900acdeda4/banbanzhige/DLSS5Tool"
---

Local image and video processing · Real-time window enhancement. Adjust and compare visuals in one workspace.

This document describes the **v3.1.0** local packaged build, which improves super-resolution processing, automatic pre-rendering, cache reclamation, and export efficiency, and adds queued output directory management. Continuous memory growth in some environments is still unresolved. Whether the build is publicly downloadable depends on the actual attachments on Releases. For changes, see [Release Notes](https://github.com/banbanzhige/DLSS5Tool/blob/HEAD/docs/release/RELEASE_NOTES_v3.1.0.md); for distribution restrictions, see [License](#许可证).

## Feature Overview

DLSS5Tool puts **local media processing and real-time window enhancement** in the same workspace, with no need to integrate a game engine or use a capture card.

- **Local images and videos**: DLSS 5 neural rendering, split-view and side-by-side comparison with the original, frame-by-frame viewing, plus batch export and image-sequence-to-video conversion.
- **Local super-resolution and frame interpolation**: RTX Video 2× / 4× super-resolution. Videos can be exported with 2× / 3× / 4× frame interpolation (the…
