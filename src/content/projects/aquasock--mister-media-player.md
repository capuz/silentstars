---
repo: "aquasock/MiSTer-Media-Player"
name: "MiSTer-Media-Player"
description: "An experimental media-player core for MiSTer FPGA, with a standards-driven MPEG-2 Video / ITU-T H.262 decoder implemented primarily in FPGA logic."
readmeQualityOk: true
url: "https://github.com/aquasock/MiSTer-Media-Player"
language: "SystemVerilog"
languages: ["SystemVerilog", "Verilog"]
languagePcts: [49, 41]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 30
recentReleases: 5
createdAt: "2026-08-09T19:32:42Z"
lastCommitAt: "2026-08-22T04:06:30Z"
lastReleaseAt: "2026-08-18T01:33:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["aquasock"]
openGraphImageUrl: "https://opengraph.githubassets.com/132db16a5a1fefb6bec01715dd8c5214a65028ce4ea20fba88efb4c6ca3ee375/aquasock/MiSTer-Media-Player"
---

# MiSTer Media Player

An experimental media-player core for [MiSTer FPGA](https://github.com/MiSTer-devel/Main_MiSTer), with a standards-driven MPEG-2 Video / ITU-T H.262 decoder implemented primarily in FPGA logic.

> **Development status:** active, pre-release, developer-oriented. **v0.5.0 is the current published hardware-qualified milestone.** It extends the progressive 4:2:0 I/P/B path to the 720x480 regression geometry and independently applies picture-signaled P/B motion-vector `f_code` values from 1 through 4. Audio, program-stream demux, DVD support, and broader H.262 coverage remain future work.

## Current status

The active decoder is a clean H.262 implementation under `rtl/mpeg2_new/`. It currently provides:

- streaming MPEG-2 elementary-stream input with FIFO backpressure;
- picture, slice, macroblock, block, and DCT VLC parsing for the supported paths;
- inverse quantization and fixed-point two-pass 8x8 IDCT;
- full 8-bit Y, Cb, and Cr intra reconstruction;
- two retained planar MiSTer DDR3 frame banks for I/P ping-pong/reference ownership plus a separate B scratch region;
- explicit DDR arbitration, DDR3 readback through small line caches, display-region write…
