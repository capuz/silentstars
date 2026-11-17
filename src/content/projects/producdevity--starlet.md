---
repo: "Producdevity/starlet"
name: "starlet"
description: "GameCube and Wii SDK layer for native decompilation and recompilation ports on Linux ARM handhelds. Translates GX to OpenGL ES 3.1 and covers disc, memory card, audio, input and OS services."
readmeQualityOk: true
url: "https://github.com/Producdevity/starlet"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["aarch64", "arm64", "decompilation", "gamecube", "gles31", "handheld", "handheld-gaming", "linux", "mali", "opengl-es"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-10T17:28:54Z"
lastCommitAt: "2026-11-17T12:14:03Z"
lastReleaseAt: "2026-11-13T17:02:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["Producdevity"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3b1109ec1609849d8906a847d6fdc529cbb97595218bac9b11937b98985ee3/Producdevity/starlet"
---

Starlet is a source-level GameCube and Wii compatibility layer for decompilation
ports to Linux ARM handhelds: OpenGL ES 3.1 on Mali-class GPUs, the firmware's
SDL2, and about 1 GB of RAM.

It holds the GX graphics stack that the Super Mario Galaxy Linux ARM port runs on,
and the disc handling and SDL services its ports share:

- `starlet::gx` (`starlet_gx`) decodes the GX command stream (BP, CP and XF
  registers, display lists, vertex arrays) and models GX vertex processing,
  transforms, TEV, textures, rasterization, pixel operations and EFB copies.
  C++17, no other dependencies.
- `starlet::gx_gles` (`starlet_gx_gles`) draws that model with OpenGL ES 3.1.
- `starlet::disc` (`starlet_disc`) reads GameCube and Wii disc images (ISO/GCM,
  and WIA and RVZ stored or with Zstandard), parses the FST and runs the
  first-launch setup that extracts a supported disc into a port's `gamedata/`.
  C++17, with the pinned Zstandard decoder in `third_party/zstd`.
- `starlet::card` (`starlet_card`) keeps memory cards as Dolphin GCI folders and
  serves them as the SDK's CARD calls (source ports) or as formatted card images
  (EXI card models). C++17, no other dependencies. `starlet::card_sdk`…
