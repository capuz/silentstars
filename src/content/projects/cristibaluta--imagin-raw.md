---
repo: "cristibaluta/Imagin-Raw"
name: "Imagin-Raw"
description: "A lightweight but powerful alternative to Adobe Bridge for Mac"
readmeQualityOk: true
url: "https://github.com/cristibaluta/Imagin-Raw"
language: "C++"
languages: ["C++", "Swift"]
languagePcts: [73, 26]
topics: ["photo-gallery", "photography", "photoshop", "canon", "lumix", "nikon", "olympus", "raw", "sony"]
stars: 163
forks: 5
openIssues: 22
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-01-30T13:09:11Z"
lastCommitAt: "2026-07-28T14:57:53Z"
lastReleaseAt: "2026-07-20T18:03:58Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 74
undervaluedScore: 26
maintainers: ["cristibaluta"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7d4ba7a8a5f7656dd370960b6cdd1f92221ff7f2e1ae6ebf8401efff3e6d83b/cristibaluta/Imagin-Raw"
---

# Imagin RAW

A lightweight, native macOS application for browsing, culling, and organizing RAW photos - built as a more efficient alternative to Adobe Bridge.

An iOS version as an alternative to the cluttered Photos app is in development. This one wants to be also a scouting app.

## Architecture

- **UI**: SwiftUI (macOS 14.6+, I might try to support even lower if people need it). AppKit/UIKit for the thumbnails list where SwiftUI performance was poor
- **RAW decoding**: LibRaw (C++), wrapped via Objective-C++ bridge. CoreImage also used for other formats and as a fallback
- **Metadata**: EXIF parsed directly from RAW/JPEG binary structures; XMP sidecars read/written for Lightroom/Bridge compatibility
- **File system monitoring**: FSEvents for real-time folder change detection
- **Search**: NSMetadataQuery (Spotlight) for indexed file/folder search
- **Concurrency**: A mix of Tasks and OperationQueue

## Features

- **Multi-root folder browsing** - add any number of folders from local disks, external drives, or SD cards; no import step, no managed library
- **Real-time file system monitoring** - new photos, deletions, and folder structure changes are detected and reflected…
