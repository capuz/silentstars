---
repo: "tenstorrent/ttsim"
name: "ttsim"
description: "A fast full-system simulator of Tenstorrent hardware"
readmeQualityOk: true
url: "https://github.com/tenstorrent/ttsim"
language: "C++"
languages: ["C++"]
languagePcts: [81]
stars: 171
forks: 17
openIssues: 3
closedIssues: 29
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-12-10T14:36:19Z"
lastCommitAt: "2026-11-05T14:04:19Z"
lastReleaseAt: "2026-02-20T20:14:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 33
maintainers: ["mcraigheadTT", "micahwhiteTT"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dabc35d6002b2a1fd9cd9f236198aa7b4b9bc41b423ab4ee336860d471769ef/tenstorrent/ttsim"
---

# ttsim, a fast full-system simulator of Tenstorrent hardware

`ttsim` provides a virtual Wormhole, Blackhole, or Quasar device that can run on any Linux/x86_64
or Linux/aarch64 system (including Windows via WSL2 and macOS via UTM/QEMU), without Tenstorrent
silicon required. It is slower than silicon but still fast enough that you can run interesting
workloads with good productivity, allowing you to explore and experiment with Tenstorrent's hardware
and programming model before purchasing silicon.

Each simulator consists of a single `libttsim.so` file compiled for a specific chip architecture
(Wormhole, Blackhole, or Quasar). This library exports a [simple API](https://github.com/tenstorrent/ttsim/blob/HEAD/docs/libttsim_api.md) that
[TT-Metalium](https://github.com/tenstorrent/tt-metal) knows how to communicate with.

## Distribution
This repository contains the open-source `ttsim` source code for Wormhole and Blackhole, released
under the Apache License 2.0. Prebuilt binaries for Wormhole, Blackhole, and Quasar for both Linux/x86_64
and Linux/aarch64 are also provided via [GitHub Releases](https://github.com/tenstorrent/ttsim/releases/latest);
Quasar is pre-silicon and ships as…
