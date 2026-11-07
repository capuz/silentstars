---
repo: "VirtoCommerce/vc-module-image-tools"
name: "vc-module-image-tools"
description: "Generate thumbnails for images "
readmeQualityOk: true
url: "https://github.com/VirtoCommerce/vc-module-image-tools"
language: "C#"
languages: ["C#"]
languagePcts: [70]
stars: 8
forks: 10
openIssues: 0
closedIssues: 20
watchers: 23
contributors: 37
recentReleases: 0
createdAt: "2016-06-14T15:51:36Z"
lastCommitAt: "2026-11-07T13:55:27Z"
lastReleaseAt: "2020-03-05T16:14:09Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 65
maintainers: ["vc-ci", "OlegoO", "Woland2k"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa4890282ddb6d85f97e92d8fddf93bb5d38f76ac40271b4c1eb6bf087cf2239/VirtoCommerce/vc-module-image-tools"
---

# Virto Commerce Image Tools Module

## Overview

The Image Tools Module provides comprehensive image processing capabilities for the Virto Commerce platform. It enables automatic thumbnail generation for product images, category banners, and other visual assets stored in blob storage.

The module features a **format-agnostic architecture** that supports both raster formats (JPEG, PNG, WebP, BMP) and vector formats (SVG) with native XML manipulation, ensuring scalability without quality loss. Resize geometry and the public interfaces are owned by the module; decoding, scaling and encoding of raster images use [SkiaSharp](https://github.com/mono/SkiaSharp) (MIT).

## Key Features

- **Multi-Format Support**: Process raster images (JPEG, PNG, WebP, BMP) and vector graphics (SVG)
- **Flexible Resize Methods**:
  - `FixedSize` - Proportional fit within specified dimensions with optional padding
  - `FixedWidth` - Maintain aspect ratio, resize to target width
  - `FixedHeight` - Maintain aspect ratio, resize to target height
  - `Crop` - Crop to exact dimensions using configurable anchor positions
- **Background Processing**: Batch thumbnail generation via Hangfire jobs with progress…
