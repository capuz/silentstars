---
repo: "ioma8/mpc-sample-sdk"
name: "mpc-sample-sdk"
description: "Memory-safe Rust mod SDK for the Akai MPC Sample 1.3.0.12"
readmeQualityOk: true
url: "https://github.com/ioma8/mpc-sample-sdk"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["akai", "audio", "firmware", "modding", "mpc", "rust"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-09T18:53:13Z"
lastCommitAt: "2026-11-14T21:58:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["ioma8"]
openGraphImageUrl: "https://opengraph.githubassets.com/da4eab791161dd0c1c1b41f60d1712b8bb72d61b023e8d7ee11d5948a2f4bde4/ioma8/mpc-sample-sdk"
---

# mpc-sample-sdk

**A Rust SDK for building Akai MPC Sample mods.**

The universal mod SDK for the Akai MPC Sample 1.3.0.12, written in Rust
(edition 2024, MSRV 1.97). The SDK is an ordinary Cargo crate: a mod is a Rust
`cdylib`, and the build script invokes `cargo` — no C or C++ is compiled.

## Built in Rust

Rust is not a wrapper around a C library here; it is the implementation and the
public API.

- **Typed events.** Buttons, pads, the encoder, knobs, MIDI notes and paint
  calls are Rust structs and enums, not raw event pointers.
- **Typed app objects.** Selections, samples, pads, slices, WAV files, effects
  and Extract requests have checked accessors and `Option`/`Result` errors.
- **Explicit firmware contracts.** Events and owned audio have safe APIs. Raw
  firmware calls and UI state access are unsafe where callers must establish
  object lifetime, thread ownership, or exclusive access.
- **One build tool.** [`build-mod.sh`](https://github.com/ioma8/mpc-sample-sdk/blob/HEAD/build-mod.sh) uses Cargo for the
  cross-build, then checks symbols, glibc and the packaged `autorun` zip.
- **Checked in CI-friendly ways.** The crate is fmt-, clippy- (`all`,
  `pedantic`, `cargo`,…
