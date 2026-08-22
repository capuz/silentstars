---
repo: "itsakeyfut/avio"
name: "avio"
description: "A safe, high-level Rust API over FFmpeg for building media applications."
readmeQualityOk: true
url: "https://github.com/itsakeyfut/avio"
homepage: "https://docs.rs/avio"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["audio", "ffmpeg", "media", "multimedia", "rust", "transcoding", "video"]
stars: 8
forks: 4
openIssues: 137
closedIssues: 695
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T01:24:27Z"
lastCommitAt: "2026-08-22T04:05:39Z"
lastReleaseAt: "2026-03-22T12:51:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 61
maintainers: ["itsakeyfut"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f3a313c2c3fa910d758f6e224212fea9f6ab8cf47de4ad672fa8bad3e6e8ed/itsakeyfut/avio"
discussionCount: 0
---

# avio

A safe, high-level Rust API over FFmpeg: an editing engine on top of a family of model-free FFmpeg primitive crates.

> **Status:** avio is pre-1.0. The API is still evolving and may change between minor versions.

## What is avio?

- **Safe by default**: every unsafe FFmpeg call is encapsulated, so application code never needs `unsafe`.
- **Ergonomic**: builder APIs, typed formats, and errors that carry human-readable context instead of raw FFmpeg return codes.
- **Two layers**: an opinionated editing engine on top of model-free FFmpeg primitives, so you can adopt the whole engine or depend on a single `ff-*` crate (see [Design Philosophy](#design-philosophy)).
- **Focused**: a foundation for video delivery services and video editing applications in Rust; it does not try to cover every FFmpeg feature.

```rust
use ff_probe::open;
use ff_decode::VideoDecoder;
use ff_encode::{VideoEncoder, VideoCodec, AudioCodec, BitrateMode};

// Inspect a media file
let info = open("input.mp4")?;
if let Some(v) = info.primary_video() {
    println!("{}x{} @ {:.2} fps", v.width(), v.height(), v.fps());
}

// Decode frames
let mut decoder = VideoDecoder::open("input.mp4").build()?;
while…
