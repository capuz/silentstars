---
repo: "gereoffy/jpeg-nitro"
name: "jpeg-nitro"
description: "Ultrafast multithreaded jpeg/png/heic/psd/cdr viewer inspired by libjpeg-turbo & pugz"
readmeQualityOk: true
url: "https://github.com/gereoffy/jpeg-nitro"
language: "C"
languages: ["C", "C++"]
languagePcts: [55, 33]
topics: ["image-processing", "jpeg", "jpeg-turbo", "jpg", "macos", "macos-app", "psd", "viewer", "png", "x86-64"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 5
recentReleases: 9
createdAt: "2026-09-26T06:45:05Z"
lastCommitAt: "2026-11-03T19:05:56Z"
lastReleaseAt: "2026-10-28T14:47:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 55
maintainers: ["gereoffy"]
openGraphImageUrl: "https://opengraph.githubassets.com/009fb56083483d45290d9a2c74323aa798faeabd931122a1b3ef902607de11cd/gereoffy/jpeg-nitro"
---

# jpeg-nitro

**English** | [Magyar](https://github.com/gereoffy/jpeg-nitro/blob/HEAD/README.hu.md)

**NitroView** is a very fast image viewer for **macOS, Windows and Linux**. It opens photos, scans,
Photoshop files, raw images and vector drawings, and it is built on its own decoders, which decode
every image on multiple CPU cores: a 24-megapixel JPEG opens in about 11 ms on a desktop Intel CPU, ten
times faster than the system's decoder, so a photo series pages as fast as you press the key. SVG,
CorelDRAW and AutoCAD DXF drawings are rendered sharp at any zoom level.

There is no user interface to speak of: a window with the picture in it, use keys and the mouse to
page and zoom.

| platform                                               | viewer                                                    |
| ------------------------------------------------------ | --------------------------------------------------------- |
| macOS 12+, Intel and Apple Silicon                     | `nitroview.app` (Cocoa + Metal, universal)                |
| Windows 10+ with Direct3D 11+                          | `nitroview.exe` (one self-contained file)                 |
| Linux with GNOME…
