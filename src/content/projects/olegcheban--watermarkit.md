---
repo: "OlegCheban/WaterMarkIt"
name: "WaterMarkIt"
description: "A lightweight, framework-agnostic Java library for adding watermarks to various file types, including PDFs and videos"
readmeQualityOk: true
url: "https://github.com/OlegCheban/WaterMarkIt"
language: "Java"
languages: ["Java"]
languagePcts: [81]
topics: ["java", "kotlin", "pdfbox", "watermarking", "watermark", "watermark-image", "documents", "pdf", "pdf-document", "document-processing"]
stars: 25
forks: 28
openIssues: 3
closedIssues: 26
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2024-09-09T19:31:28Z"
lastCommitAt: "2026-09-12T08:04:58Z"
lastReleaseAt: "2025-01-30T20:23:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 58
maintainers: ["OlegCheban", "dependabot[bot]", "hulotavrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fc649cb1e415f9d2eb1377339a46456c02d361c850a5defe946589d8d755fd1/OlegCheban/WaterMarkIt"
---

# WaterMarkIt

A lightweight, framework-agnostic Java library for adding watermarks to various file types, including PDFs and videos. The library was developed to address the challenge of creating watermarks that cannot be easily removed from PDF files. Many PDF editors allow users to edit even secured files, and when a watermark is added as a separate layer, it can be easily removed.  

## Features

- **Internal DSL**: Provides a user-friendly way to configure and apply watermarks with ease, while also ensuring type safety at compilation time.

- **Types of Watermarks**:
  - Text-based watermarks
  - Image-based watermarks

- **Customizable Watermarks**: Customize various aspects of your watermark, including:
  - Font
  - Color
  - Size
  - Position
  - Rotation
  - Opacity
  - DPI

- **Trademarks**: A capability to add the trademark symbol ® to text-based watermarks.

- **Page orientation support**: Full support for both portrait and landscape orientations.

- **Supported Formats**:
  - PDF
  - Images (JPEG, PNG, etc.)
  - Videos (MP4, MOV, AVI, MKV, etc)
  
- **Drawn Watermarks**: The library provides the `WatermarkingMethod.DRAW` method to add watermarks to PDF files that…
