---
repo: "jl1nie/mfsk-core"
name: "mfsk-core"
description: "Pure-Rust library for WSJT-family digital amateur-radio modes (FT8/FT4/FST4/WSPR/JT9/JT65). Protocol traits, DSP, FEC codecs and synthesisers, unified behind a zero-cost generic abstraction."
readmeQualityOk: true
url: "https://github.com/jl1nie/mfsk-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 13
forks: 5
openIssues: 27
closedIssues: 156
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-19T08:06:57Z"
lastCommitAt: "2026-09-30T09:57:16Z"
lastReleaseAt: "2026-05-01T02:16:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["jl1nie"]
openGraphImageUrl: "https://opengraph.githubassets.com/635a57c926b7f54060c6573f4a219fd7cdcf8eea4e2ca06aa64bf4bcfa2b1290/jl1nie/mfsk-core"
discussionCount: 3
---

# mfsk-core

       alt="M5StickS3 running embedded-poc/m5stack-s3-app — five real on-air FT8 decodes from a single 15 s slot, IDLE FSM waiting for the operator to pick a callsign"
       width="360">
</p>

日本語: [README.ja.md](https://github.com/jl1nie/mfsk-core/blob/HEAD/README.ja.md)

## What is this?

`mfsk-core` provides **portable, high-performance Rust implementations of
the WSJT-X digital modes**, validated against the upstream reference
decoders.

It is a single pure-Rust crate covering FT8, FT4, FST4, WSPR, JT9, JT65,
and Q65 (all ten sub-modes), with decoding, encoding, and waveform
synthesis built on top of a small set of shared primitives: DSP,
synchronization and correlation, LLRs, LDPC / convolutional /
Reed-Solomon / QRA FEC, and message codecs.

It runs anywhere Rust runs: desktop, WASM in the browser, Android/iOS,
and `no_std` embedded MCUs.

It is a library, not an application. There is no GUI, and the aim is to
let you embed WSJT-X-quality decoders and modems in your own system
rather than to build another WSJT-X.

A major part of the project is the validation around the code. Golden
recordings taken from WSJT-X gate every PR, checking recall and phantom
decodes…
