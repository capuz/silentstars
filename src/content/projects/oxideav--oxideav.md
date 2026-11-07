---
repo: "OxideAV/oxideav"
name: "oxideav"
description: "Pure-Rust media transcoding framework — aggregator crate wiring codecs, containers, filters, and a JSON transcode job graph"
readmeQualityOk: true
url: "https://github.com/OxideAV/oxideav"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-20T03:05:08Z"
lastCommitAt: "2026-11-07T09:30:23Z"
lastReleaseAt: "2026-10-25T13:12:20Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 24
maintainers: ["MagicalTux"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ace0635826bced5f3916a77ebfee25b76d6a52025d0df7762ad83603f6ba0d5/OxideAV/oxideav"
fundingLinks: ["CUSTOM:https://donate.stripe.com/7sY8wPcnS9dO2Dqgvg4gg01"]
---

# oxideav

Central aggregator crate for oxideav — re-exports and a prebuilt registry

Part of the [oxideav](https://github.com/OxideAV/oxideav-workspace) framework — a pure-Rust media transcoding and streaming stack. Codec, container, and filter crates are implemented from the spec (no C codec libraries linked or wrapped, no `*-sys` crates). Optional hardware-engine crates (`oxideav-videotoolbox` / `-audiotoolbox` / `-vaapi` / `-vdpau` / `-nvidia` / `-vulkan-video`) bridge to OS APIs via runtime `dlsym`; pass `--no-hwaccel` (or omit the `hwaccel` feature) to opt out.

## Usage

```toml
[dependencies]
oxideav = "0.0.1"
```

## Decoding on every core

Codecs run **single-threaded until they are handed a thread budget**.
`oxideav::open_decoder` / `oxideav::open_encoder` build the preferred
implementation from a `RuntimeContext` with an
`ExecutionContext::auto()` budget (every core) already announced:

```rust,ignore
let mut ctx = oxideav::RuntimeContext::new();
oxideav_meta::register_all(&mut ctx);
let mut dec = oxideav::open_decoder(&ctx, &stream.params)?;
```

If you build a codec any other way (`ctx.codecs.first_decoder(..)`,
`oxideav::pipeline::make_decoder_with`, a codec crate's…
