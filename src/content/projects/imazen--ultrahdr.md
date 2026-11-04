---
repo: "imazen/ultrahdr"
name: "ultrahdr"
description: "Pure Rust Ultra HDR (gain map HDR) encoder/decoder"
readmeQualityOk: true
url: "https://github.com/imazen/ultrahdr"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 21
forks: 0
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-13T22:49:04Z"
lastCommitAt: "2026-11-04T02:57:43Z"
lastReleaseAt: "2026-07-24T19:30:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f163b965d8a463d01cc7d43649156e5617acae7c273bccfd33bb7e739e6b278/imazen/ultrahdr"
---

# ultrahdr [](https://github.com/imazen/ultrahdr/actions/workflows/ci.yml) [](https://crates.io/crates/ultrahdr-core) [](https://lib.rs/crates/ultrahdr-core) [](https://docs.rs/ultrahdr-core) [](#license) [](https://doc.rust-lang.org/cargo/reference/manifest.html#the-rust-version-field) [](https://codecov.io/gh/imazen/ultrahdr)

Pure-Rust encoder and decoder for [Ultra HDR](https://developer.android.com/media/platform/hdr-image-format) gain map JPEGs. An Ultra HDR file is a normal SDR JPEG with a second JPEG (the gain map) and a small block of metadata stapled onto it; HDR-capable readers reconstruct an HDR image, everything else sees the SDR base. This workspace ships the gain map math (`ultrahdr-core`) and a JPEG-bundled encoder/decoder (`ultrahdr-rs`) built on [zenjpeg](https://github.com/imazen/zenjpeg).

> **Pre-1.0, still being shaped.** Expect renames and re-exports between point releases — for example, `ultrahdr_core::metadata` is being retired in favor of `zenjpeg::container` and `zencodec::gainmap` ([#8](https://github.com/imazen/ultrahdr/issues/8)), and the streaming types are `#[doc(hidden)]` pending removal. Pin patch versions and read `CHANGELOG.md` before upgrading.…
