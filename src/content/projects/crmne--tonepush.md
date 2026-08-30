---
repo: "crmne/tonepush"
name: "tonepush"
description: "Open-source editor and tone library for Line 6 HX pedals and the StompStation PRO. Shared GUI, CLI, cloud library, and reverse-engineered USB protocols."
readmeQualityOk: true
url: "https://github.com/crmne/tonepush"
homepage: "https://docs.tonepush.rocks/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["egui", "guitar", "helix", "hx-stomp", "line6", "reverse-engineering", "rust", "usb", "guitar-effects", "preset-editor"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-05T10:21:06Z"
lastCommitAt: "2026-08-30T09:24:02Z"
lastReleaseAt: "2026-08-15T11:36:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 59
maintainers: ["crmne", "Antti"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd4877454562644fd9648c84abdf73fd398e67ee0b7b0b7974d9a48f1f0d377a/crmne/tonepush"
---

# TonePush

An open-source editor for Line 6 HX-family devices and the Sonulab
StompStation PRO: one cross-platform GUI, one scriptable CLI, and reusable
protocol/client crates behind both. Hardware-tested against an HX Stomp on
firmware 3.80 and a StompStation PRO on firmware 1.5.12.

Nothing here is derived from vendor source code. The HX protocol was
reconstructed by observing USB traffic; see [PROTOCOL.md](https://github.com/crmne/tonepush/blob/HEAD/PROTOCOL.md) for the write-up,
[docs/_reference/opcodes.md](https://github.com/crmne/tonepush/blob/HEAD/docs/_reference/opcodes.md) for the operation dictionary, and
[docs/_reference/model-catalog.md](https://github.com/crmne/tonepush/blob/HEAD/docs/_reference/model-catalog.md) for the data formats HX Edit
ships.

## What it does

For HX devices, everything HX Edit does on an HX Stomp, verified operation by
operation against the hardware:

- **The signal chain, laid out like your pedalboard.** Splits branch the line and joins
  merge it, one lane per branch, with the endpoints showing where they are
  routed. Drag the fork or merge along the line to move where the path
  divides. Devices with two DSP paths get up to four lanes.
-…
