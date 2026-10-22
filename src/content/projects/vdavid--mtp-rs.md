---
repo: "vdavid/mtp-rs"
name: "mtp-rs"
description: "Talk to MTP/PTP devices in pure Rust. No libmtp, no FFI, just async USB (uses nusb). Async streaming uploads/downloads, device events, two-level API for Android phones or raw camera access."
readmeQualityOk: true
url: "https://github.com/vdavid/mtp-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["android", "async", "cross-platform", "file-transfer", "media-transfer-protocol", "mtp", "ptp", "rust", "usb", "picture-transfer-protocol"]
stars: 49
forks: 12
openIssues: 5
closedIssues: 13
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2026-01-30T11:34:29Z"
lastCommitAt: "2026-10-22T08:51:32Z"
lastReleaseAt: "2026-10-08T10:32:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 45
maintainers: ["vdavid", "renovate[bot]", "worm-emoji"]
openGraphImageUrl: "https://opengraph.githubassets.com/b39b03dcf14e954e40f46c55aeafaea6139ede6f66af9f81b74b42f0161df0bf/vdavid/mtp-rs"
---

# mtp-rs workspace

Pure-Rust MTP/PTP for modern Android phones, e-readers, Garmin watches, and cameras. No `libmtp`, no `libusb`, no FFI.
Async, runtime-agnostic, consistently faster than libmtp.

This repo ships two crates:

| Crate                                  | What it is                                                | Page                                                                             |
|----------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------------------------|
| **[`mtp-rs`](https://github.com/vdavid/mtp-rs/blob/HEAD/crates/mtp-rs/)**         | The library. Use it from your own Rust code.              | [crates.io](https://crates.io/crates/mtp-rs) · [docs.rs](https://docs.rs/mtp-rs) |
| **[`mtp-rs-cli`](https://github.com/vdavid/mtp-rs/blob/HEAD/crates/mtp-rs-cli/)** | A ready-made `mtp-rs` binary. `brew install vdavid/tap/mtp-rs`. | [crates.io](https://crates.io/crates/mtp-rs-cli)                                 |

For library usage, the API, the device quirks we handle, and tested devices, see the [
`mtp-rs`…
