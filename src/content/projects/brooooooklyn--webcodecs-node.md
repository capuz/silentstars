---
repo: "Brooooooklyn/webcodecs-node"
name: "webcodecs-node"
description: "WebCodecs API in Node.js"
url: "https://github.com/Brooooooklyn/webcodecs-node"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 34]
stars: 90
forks: 2
openIssues: 5
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-30T14:19:57Z"
lastCommitAt: "2026-06-24T00:19:25Z"
lastReleaseAt: "2026-01-25T13:49:27Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 24
maintainers: ["renovate[bot]", "Brooooooklyn", "yisibl"]
openGraphImageUrl: "https://opengraph.githubassets.com/550c1b728bae9f5ddadd1b74decd49e8e76dc77dc7b45566183494005b427beb/Brooooooklyn/webcodecs-node"
fundingLinks: ["GITHUB:https://github.com/Brooooooklyn"]
discussionCount: 1
---

# @napi-rs/webcodecs

WebCodecs API implementation for Node.js using FFmpeg, built with [NAPI-RS](https://napi.rs).

## Features

- **W3C WebCodecs API compliant** - Full implementation of the WebCodecs specification with native `DOMException` errors
- **Video encoding/decoding** - H.264, H.265 (with Alpha), VP8, VP9 (with Alpha), AV1
- **Encoding Alpha channel** - VP9 and HEVC alpha encoding/decoding with transparency support (See [canvas-to-video.js](example/canvas-to-video.js) example and [video.html](example/video.html))
- **Audio encoding/decoding** - AAC, Opus, MP3, FLAC, Vorbis, PCM variants
- **Container muxing/demuxing** - MP4, WebM, MKV containers with seeking support
- **Image decoding** - JPEG, PNG, WebP, GIF, BMP, AVIF, JPEG XL
- **Canvas integration** - Create VideoFrames from `@napi-rs/canvas` for graphics and text rendering
- **Hardware acceleration** - Zero-copy GPU encoding with VideoToolbox (macOS), NVENC (NVIDIA), VAAPI (Linux), QSV (Intel)
- **Cross-platform** - macOS, Windows, Linux (glibc/musl, x64/arm64/armv7)
- **Structured logging** - FFmpeg logs redirected to Rust `tracing` crate for easy integration

## Installation

```bash
bun add @napi-rs/webcodecs
#…
