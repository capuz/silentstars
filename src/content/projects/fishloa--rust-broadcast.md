---
repo: "fishloa/rust-broadcast"
name: "rust-broadcast"
description: "Spec-grounded Rust crates for DVB and IP broadcast protocols — SI, T2-MI, BBFRAME, MPEG-TS, SCTE-35, MXF, RIST, SRT, WHIP/WHEP. Cited to spec, round-trip tested, no_std capable."
readmeQualityOk: true
url: "https://github.com/fishloa/rust-broadcast"
homepage: "https://fishloa.github.io/rust-broadcast/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 14
forks: 2
openIssues: 3
closedIssues: 2582
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-01T10:17:29Z"
lastCommitAt: "2026-11-26T12:59:02Z"
lastReleaseAt: "2026-08-14T15:54:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 52
maintainers: ["fishloa"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb2cd3f69826501701a54400fad98435e11a1d6658ed34885bf0d76a7223a70/fishloa/rust-broadcast"
---

# rust-broadcast

**Spec-grounded broadcast and streaming media protocols in Rust.** A workspace
of parsers, builders and sans-IO protocol engines covering DVB, MPEG-2 systems,
SCTE ad signalling, captions and subtitles, conditional access, container
remuxing (fMP4/CMAF/TS/HLS/DASH), live transport (RTSP, RTP, SRT, RTMP,
WebRTC) and SMPTE professional formats, plus a live origin server and
diagnostics tools built from them.

Every wire layout is cited to the clause of the standard it implements, has a
symmetric serializer, and is round-trip tested against real captures.

- **[docs/CRATES.md](https://github.com/fishloa/rust-broadcast/blob/HEAD/docs/CRATES.md)** — every crate: what it does, its
  standards, `no_std` status, dependencies, and "which crate do I use for X".
- **[docs/STANDARDS.md](https://github.com/fishloa/rust-broadcast/blob/HEAD/docs/STANDARDS.md)** — every standard: which crate
  implements it, which edition, how completely, and where the spec
  transcription lives.
