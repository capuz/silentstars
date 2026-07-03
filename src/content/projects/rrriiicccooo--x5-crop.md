---
repo: "rrriiicccooo/X5-Crop"
name: "X5-Crop"
description: "High-confidence TIFF film-strip cropper for Hasselblad/Imacon X5 scans."
url: "https://github.com/rrriiicccooo/X5-Crop"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["film-scanning", "photography", "python", "tiff", "hasselblad-x5"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-06-01T08:16:17Z"
lastCommitAt: "2026-07-03T12:22:26Z"
lastReleaseAt: "2026-06-29T06:39:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8d11dd3205a745d58f6de31f268cf707c9d2acd69eec23de97ebe6a70706dc13/rrriiicccooo/X5-Crop"
---

# X5 Crop

> **下载提示 / Download Notice**
>
> 日常使用请从 GitHub **Releases** 下载整理好的 `X5-Crop-vX.X.zip`。
> 不要下载 GitHub 自动生成的 **Source code** 压缩包；该压缩包是开发源码结构，
> 不是面向日常使用整理的发布包。
>
> Regular users should download the prepared `X5-Crop-vX.X.zip` from GitHub
> **Releases**. Do not use GitHub's auto-generated **Source code** archives;
> those are development source trees, not user-ready release packages.

X5 Crop 是用于 Hasselblad / Imacon X5 胶片片夹长图的 TIFF 自动裁切工具。
它会将同一文件夹里的长条 TIFF 扫描图拆成单张 TIFF。只有高置信结果会自动导出；
低置信或证据冲突的图片会进入复核。

X5 Crop is a TIFF cropper for long film-strip scans from Hasselblad / Imacon X5
holders. It splits long-strip TIFF scans into individual TIFF frames. Only
high-confidence detections are exported automatically; weak or conflicting cases
are sent to review.

当前 active 脚本版本：V4.9

当前稳定发布版本：v4.2.8

Current active script version: V4.9

Current stable release: v4.2.8

## 中文用户手册

### 核心原则

- 原始 TIFF 不会被修改。
- 自动裁切会写出新的单张 TIFF。
- `needs_review/` 里的文件是原始 TIFF 的复制，用于人工处理。
- 自动裁切输出会保留原 TIFF 的位深、通道结构、ICC / 色彩空间、resolution、
  metadata 和已知无损压缩行为。
- 检测阶段保持保守；证据不足、证据冲突、疑似叠片或局部片距异常时进入复核。
- 当前 active policy 更保守；旧版本可 PASS 的困难图片如果
  证据组合不足，可能改为 `REVIEW`。

### 推荐下载

日常使用请下载 GitHub Releases 里的…
