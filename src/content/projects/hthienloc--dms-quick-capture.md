---
repo: "hthienloc/dms-quick-capture"
name: "dms-quick-capture"
description: "Screenshot annotation and screen recording plugin for DankMaterialShell"
readmeQualityOk: true
url: "https://github.com/hthienloc/dms-quick-capture"
language: "QML"
languages: ["QML"]
languagePcts: [83]
stars: 46
forks: 8
openIssues: 2
closedIssues: 98
watchers: 1
contributors: 12
recentReleases: 7
createdAt: "2026-05-28T00:22:56Z"
lastCommitAt: "2026-09-18T00:49:06Z"
lastReleaseAt: "2026-07-02T03:27:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["hthienloc", "bbedward", "Lemon-mon-254"]
openGraphImageUrl: "https://opengraph.githubassets.com/381e6621054998ae0b6ce510b90f9910b7fce37b43947c1ae4abb4bb5c1ec99c/hthienloc/dms-quick-capture"
discussionCount: 0
---

# DMS Quick Capture

  </a>
</p>

Screenshot annotation and screen recording plugin for DankMaterialShell.

## Documentation

- **[User Guide](https://github.com/hthienloc/dms-quick-capture/blob/HEAD/docs/user-guide.md)**: capture workflow, annotation tools, shortcuts, floating images, and IPC commands.
- **[Documentation Index](https://github.com/hthienloc/dms-quick-capture/blob/HEAD/docs/index.md)**: architecture, annotation engine, settings reference, and contributor documentation.

## Requirements

| Dependency                           | Purpose                                            |
| ------------------------------------ | -------------------------------------------------- |
| DankMaterialShell >= **1.6.0**       | Required for floating window and scrolling capture |
| **gpu-screen-recorder**              | Screen recording backend (Hardware NVENC / VA-API) |
| **wf-recorder**                      | Alternative CPU screen recording backend (Software libx264, fallback when GPU encoder is unavailable) |
| **ffmpeg**                           | Video thumbnail generation                         |
| **ImageMagick** (`magick`/`mogrify`) | WebP/JPEG exports and OCR/QR crop…
