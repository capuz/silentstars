---
repo: "aquasock/MiSTer-Media-Player"
name: "MiSTer-Media-Player"
description: "An experimental media-player core for MiSTer FPGA, with a standards-driven MPEG-2 Video / ITU-T H.262 decoder implemented primarily in FPGA logic."
readmeQualityOk: true
url: "https://github.com/aquasock/MiSTer-Media-Player"
language: "SystemVerilog"
languages: ["SystemVerilog", "Verilog"]
languagePcts: [45, 45]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 30
recentReleases: 8
createdAt: "2026-08-09T19:32:42Z"
lastCommitAt: "2026-08-30T09:23:48Z"
lastReleaseAt: "2026-08-28T00:41:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["aquasock"]
openGraphImageUrl: "https://opengraph.githubassets.com/a12cdd9947d48aba56937de2568ce4976b995b6323018ef2b71d707bd1e78944/aquasock/MiSTer-Media-Player"
---

# MiSTer Media Player

An experimental media-player core for [MiSTer FPGA](https://github.com/MiSTer-devel/Main_MiSTer), with a standards-driven MPEG-2 Video / ITU-T H.262 decoder implemented primarily in FPGA logic.

> **Development status:** active, pre-release, developer-oriented. **v0.8.0 is the current milestone**, adding a bounded 720x480 interlaced frame-DCT all-I path with native 480i presentation, AC-3 decode, and AC-3/DTS passthrough over S/PDIF, on the v0.7.0 Program Stream, PTS, and ARM-helper foundation.

Current `master` extends that released baseline with simulation-qualified
720x480 interlaced frame-picture P/B decoding, frame or field motion, and frame
or field DCT. A clean Quartus fit and MiSTer playback qualification are still
required before that extension becomes a released capability.

## Current status

The active decoder is the clean H.262 implementation under `rtl/mpeg2_new/`. v0.8.0 provides:

- raw MPEG-2 Video elementary-stream playback, a bounded H.222.0 MPEG-2 Program Stream path for `.mpg` and `.mpeg` files, and audio-only `.mp3`, `.wav` or `.flac` playback;
- a matching ARM helper that demultiplexes Program Streams, decodes MPEG Layers II/III, WAV,…
