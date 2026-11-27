---
repo: "DeepRegular/SmartCut"
name: "SmartCut"
description: "Smart-rendering video cutter: re-encodes only the partial GOPs at the cut points and bit-copies the rest. Built for cutting commercials out of Japanese broadcast recordings (MPEG-2 TS)."
readmeQualityOk: true
url: "https://github.com/DeepRegular/SmartCut"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["broadcast", "commercial-detection", "ffmpeg", "h264", "hevc", "lossless", "mpeg-ts", "mpeg2-ts", "rust", "smart-rendering"]
stars: 21
forks: 3
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 8
createdAt: "2026-08-26T14:07:30Z"
lastCommitAt: "2026-11-27T12:34:19Z"
lastReleaseAt: "2026-09-06T09:50:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 47
maintainers: ["DeepRegular", "SteveYu000"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e576a2ce9283f83dc152bec137e544509feb48131cc822cd0e493e2f6f09ac1/DeepRegular/SmartCut"
---

# SmartCut

**Keep the recording. Lose the commercials.**

Cut commercials out of a TV recording without re-encoding it.

English ・ [日本語](https://github.com/DeepRegular/SmartCut/blob/HEAD/README.ja.md)

       alt="A recording with two commercial blocks in it, and under it the export: what you keep has closed up into one file that is copied byte for byte, with a rebuilt sliver at each seam">

## What is SmartCut?

SmartCut is a desktop application for cutting Japanese TV recordings. Drop a
night's worth of `.ts` files onto it and it finds the commercial breaks for you.
You check the boundaries, cut, and export.

**What matters is how it exports.** A normal video editor takes the whole file
apart into pictures and builds it again from scratch. That takes time, and every
frame comes out slightly worse than it went in.

SmartCut does not do that. Video is stored as **key frames**, which are complete
pictures, and frames that hold only what changed since the last one. Cut on a key
frame and the rest of the file can simply be **copied, byte for byte**. Only the
few frames caught between key frames at a cut point have to be rebuilt.
