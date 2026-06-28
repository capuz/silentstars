---
repo: "OxideAV/oxideav-magicyuv"
name: "oxideav-magicyuv"
description: "Pure-Rust MagicYUV lossless decoder for the oxideav framework"
url: "https://github.com/OxideAV/oxideav-magicyuv"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-02T22:43:16Z"
lastCommitAt: "2026-06-28T02:02:34Z"
lastReleaseAt: "2026-06-15T05:11:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 60
maintainers: ["MagicalTux"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc5c394f1bef22756dc2658f6af3466b3c9d876655dc425b4f7b7d8ff50d76b5/OxideAV/oxideav-magicyuv"
fundingLinks: ["CUSTOM:https://donate.stripe.com/7sY8wPcnS9dO2Dqgvg4gg01"]
---

# oxideav-magicyuv

Pure-Rust MagicYUV lossless video codec for the
[oxideav](https://github.com/OxideAV/oxideav-workspace) framework.

## Status

**Codec-only** (MagicYUV is a video codec; AVI/MOV containers live in
their own crates). Decoder + encoder, with byte-for-byte round-trip.

Decodes the full native FOURCC set: 8-bit (M8RG, M8RA, M8Y4, M8Y2,
M8Y0, M8YA, M8G0) and 10/12/14-bit (M0RG, M0RA, M2RG, M2RA, M4RG,
M4RA, M0Y2, M0Y4, M0Y0, M0G0). Honours `FLAG_INTERLACED` for
field-stride prediction.

The encoder emits wire-format frames the decoder round-trips
byte-for-byte. Strategies:

- **Fixed** Left / Gradient / Median predictors
  (`PredictorStrategy::Fixed`).
- **Dynamic** per-slice predictor selection by minimum residual L1
  norm (`PredictorStrategy::Dynamic`).
- Per-slice Huffman / raw fallback (`SliceMode::Auto`, by byte
  budget). `EncodeOptions::dynamic_auto()` combines both.

Both directions are wired into `oxideav-core`'s codec registry (the
default-on `registry` feature): the codec entry declares
`with_decode()` **and** `with_encode()`, registering a `Decoder` and
an `Encoder` factory plus all 17 native v7 FourCC tags. The registry
`Encoder` recovers the output…
