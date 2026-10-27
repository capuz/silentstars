---
repo: "Harshit-Dhanwalkar/AsciiCam"
name: "AsciiCam"
description: "Ascii video output from your webcam in your terminal."
readmeQualityOk: true
url: "https://github.com/Harshit-Dhanwalkar/AsciiCam"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 43
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-13T15:59:41Z"
lastCommitAt: "2026-10-27T09:16:47Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 39
maintainers: ["Harshit-Dhanwalkar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0783c31a8cb1192420ade97da804724d0b5679f3616bbca26188a959e2f9e7d5/Harshit-Dhanwalkar/AsciiCam"
fundingLinks: ["GITHUB:https://github.com/Harshit-Dhanwalkar", "BUY_ME_A_COFFEE:https://buymeacoffee.com/Harshitpmd", "THANKS_DEV:https://thanks.dev/gh/harshit-dhanwalkar"]
discussionCount: 0
---

# AsciiCam

Real-time webcam video rendered as ASCII art directly in the terminal

Written in C99. Ships its own minimal libc layer (`nolibc`) on Linux: the binary is
statically linked with no runtime dependencies (plugins load through its own
ELF loader, `nl_dlfcn`). Uses platform-native capture backends:
V4L2 on Linux, AVFoundation on macOS, Media Foundation on Windows.

---

## Features

| Feature                       | Details                                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **YUYV to grayscale**         | SSE2 SIMD (`yuyv_to_gray_simd`) - 16 pixels per iteration on x86_64, NEON on ARM64                                                 |
| **YUYV to RGB**               | Fixed‑point BT.601 conversion for truecolor output                                                                                 |
| **Render modes**              | Braille, Blocks, ASCII ramp, Half-block, Dots - cycle live with `m`/`M`…
