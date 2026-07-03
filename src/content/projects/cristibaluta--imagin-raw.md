---
repo: "cristibaluta/Imagin-Raw"
name: "Imagin-Raw"
description: "A lightweight but powerful alternative to Adobe Bridge for Mac"
url: "https://github.com/cristibaluta/Imagin-Raw"
language: "C++"
languages: ["C++", "Swift"]
languagePcts: [74, 24]
topics: ["photo-gallery", "photography", "photoshop", "canon", "lumix", "nikon", "olympus", "raw", "sony"]
stars: 24
forks: 0
openIssues: 14
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-30T13:09:11Z"
lastCommitAt: "2026-07-03T06:24:42Z"
lastReleaseAt: "2026-06-10T09:23:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 72
undervaluedScore: 33
maintainers: ["cristibaluta"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e190aa778643f5bd85d418b604823227fd3f7a05430368fa4ecde047a5e652/cristibaluta/Imagin-Raw"
---

# Imagin RAW

A lightweight, native macOS application for browsing, culling, and organizing RAW photos - built as a more efficient alternative to Adobe Bridge for read/rate/organize workflows.

An iOS companion app is in development, focused on a simple way to browse your library, cleanup, in field backup of your shots, and scouting.

## Architecture

- **UI**: SwiftUI (macOS 14.6+). AppKit/UIKit for the thumbnails list where SwiftUI performance was poor
- **RAW decoding**: LibRaw (C++), wrapped via Objective-C++ bridge. CoreImage also used for other formats and as a fallback
- **Metadata**: EXIF parsed directly from RAW/JPEG binary structures; XMP sidecars read/written for Lightroom/Bridge compatibility
- **File system monitoring**: FSEvents for real-time folder change detection
- **Search**: NSMetadataQuery (Spotlight) for indexed file/folder search
- **Concurrency**: A mix of Tasks and OperationQueue

## Features

- **Multi-root folder browsing** - add any number of folders from local disks, external drives, or SD cards; no import step, no managed library
- **Real-time file system monitoring** - new photos, deletions, and folder structure changes are detected and reflected…
