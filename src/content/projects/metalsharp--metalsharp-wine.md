---
repo: "metalsharp/MetalSharp-Wine"
name: "MetalSharp-Wine"
description: "Arm64 / Arm64EC / Aarch64 / x86_64 / I386 & WOW64 Wine With FEX For MacOS Silicon on MacOS 26.4+"
readmeQualityOk: true
url: "https://github.com/metalsharp/MetalSharp-Wine"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["fex", "macos", "metal", "silicon", "translation", "wine"]
stars: 47
forks: 2
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-24T21:36:47Z"
lastCommitAt: "2026-11-01T22:58:26Z"
lastReleaseAt: "2026-10-28T07:22:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 36
maintainers: ["aaf2tbz"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd3720e5897ba66baf7a2a11954329ec69db1677a1edd5dee1d893bc166ebb9b/metalsharp/MetalSharp-Wine"
---

# MetalSharp Wine

___

Developer Notice: This project is in an early access state, especially concerning d3d12 pipelines such as Vkd3d-proton and Mullion. If you experience an issue in-game with either pipeline, please report them upstream to their respective repo's. VKD3D-Proton-MacOS is MetalSharp code and can be found under the MetalSharp Github Organization. Other issues may occur. If you believe it to be a wine issue, please report your issue to this repo instead. MetalSharp Wine 5.0 is focused on the respective elements as a whole; 

- D3D12 with VKD3D-Proton / Mullion in a stable state with playable frame-rates.
- Games with Auth succeeding updates (Such as Assassin's Creed Odyssey)]
- Fullscreen bug when playing with DXVK
- Faster x86 FEX Emulation
- More Wine Arm64EC bug fixes (Emulation overhead, process management, lifecycle management, and general bug fixes)

MetalSharp Wine is Wine 11.20 built as a native arm64 macOS application for Apple Silicon. A FEX-Emu fork translates x86 Windows code to ARM64. In its current state it doesn't run as a plain double-click .app: you run it from Terminal, like Sikarugir. 

- **No Rosetta:** none of it is x86 code run through…
