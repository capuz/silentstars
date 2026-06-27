---
repo: "z16166/SimpleImageViewer"
name: "SimpleImageViewer"
description: "A very fast image viewer, GPU-accelerated, with HDR rendering and background music playing, built using Rust and egui, cross-platform."
url: "https://github.com/z16166/SimpleImageViewer"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 35
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-01T10:06:26Z"
lastCommitAt: "2026-06-27T06:22:32Z"
lastReleaseAt: "2026-04-11T17:10:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 40
maintainers: ["z16166"]
openGraphImageUrl: "https://opengraph.githubassets.com/4658364707abf9f2fe22b7625208d7e60040a04e6609b80fbbf43b4fc09733dc/z16166/SimpleImageViewer"
---

# Simple Image Viewer (SimpleImageViewer)

A high-performance, cross-platform image viewer built with Rust. Designed for fast browsing of large photo libraries with a clean, customizable UI (Dark/Light/System themes), background music playback, and persistent settings.
 

---

## Features

- **Fast image loading** — background thread pre-loads adjacent images so navigation is instant. Includes high-performance WIC pipeline optimization for large portrait (rotated) JPEG images on Windows.
- **Image formats** — Common and modern stills, Photoshop documents, and 60+ camera RAW formats (RAW is viewing-only).
  - **Common stills**: JPEG, PNG, GIF, BMP, TIFF, TGA, WebP, ICO, PNM, QOI
  - **Modern & high-dynamic**: JPEG XL (`.jxl`), AVIF / AVIFS sequences (`.avif`, `.avifs`), OpenEXR (`.exr`), Radiance HDR (`.hdr`), HEIF / HEIC / HIF (including typical iPhone HEIC)
  - **Photoshop**: PSD & PSB, with a RAM safety check before loading large PSB documents
  - **Camera RAW** (60+): Canon (`.cr2`, `.cr3`), Nikon (`.nef`, `.nrw`), Sony (`.arw`), Fujifilm (`.raf`), Panasonic (`.rw2`), Olympus (`.orf`), Pentax (`.pef`), Hasselblad (`.3fr`), Phase One (`.iiq`), and more
- **HDR-capable…
