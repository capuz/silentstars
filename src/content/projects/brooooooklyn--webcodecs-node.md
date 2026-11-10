---
repo: "Brooooooklyn/webcodecs-node"
name: "webcodecs-node"
description: "WebCodecs API in Node.js"
readmeQualityOk: true
url: "https://github.com/Brooooooklyn/webcodecs-node"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 37]
stars: 96
forks: 4
openIssues: 4
closedIssues: 7
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-11-30T14:19:57Z"
lastCommitAt: "2026-11-10T11:38:41Z"
lastReleaseAt: "2026-08-10T04:37:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 40
maintainers: ["Brooooooklyn", "renovate[bot]", "natew"]
openGraphImageUrl: "https://opengraph.githubassets.com/210061c6ff1e1738a5a8dc8b3652324fb9cfe563e0e5e0645027eaee0f47e06d/Brooooooklyn/webcodecs-node"
fundingLinks: ["GITHUB:https://github.com/Brooooooklyn"]
discussionCount: 1
---

# @napi-rs/webcodecs

WebCodecs API implementation for Node.js using FFmpeg, built with [NAPI-RS](https://napi.rs).

## Features

- **W3C WebCodecs API compliant** - Full implementation of the WebCodecs specification with native `DOMException` errors
- **Video encoding/decoding** - H.264, H.265 (with Alpha), VP8, VP9 (with Alpha), AV1
- **Encoding Alpha channel** - VP9 and HEVC alpha encoding/decoding with transparency support (See [canvas-to-video.js](https://github.com/Brooooooklyn/webcodecs-node/blob/HEAD/example/canvas-to-video.js) example and [video.html](https://github.com/Brooooooklyn/webcodecs-node/blob/HEAD/example/video.html))
- **Audio encoding/decoding** - AAC, Opus, MP3, FLAC, Vorbis, PCM variants
- **Container muxing/demuxing** - MP4, WebM, MKV containers with seeking support
- **Image decoding** - JPEG, PNG, WebP, GIF, BMP, AVIF, JPEG XL
- **Canvas integration** - Create VideoFrames from `@napi-rs/canvas` for graphics and text rendering
- **Hardware acceleration** - Zero-copy GPU encoding with VideoToolbox (macOS), NVENC (NVIDIA), VAAPI (Linux), QSV (Intel)
- **Cross-platform** - macOS, Windows, Linux (glibc/musl, x64/arm64/armv7)
- **Structured logging** - FFmpeg…
