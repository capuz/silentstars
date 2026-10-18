---
repo: "andersfischernielsen/ssx3-decomp"
name: "ssx3-decomp"
description: "A decompilation/port of SSX 3 in Rust."
readmeQualityOk: true
url: "https://github.com/andersfischernielsen/ssx3-decomp"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-15T20:01:38Z"
lastCommitAt: "2026-10-18T08:13:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 46
maintainers: ["andersfischernielsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/7452939d24e6f105a31b17f79727581e2cb951fe7d941c6d697cabbcde7deca8/andersfischernielsen/ssx3-decomp"
---

# ssx3-decomp

▶ **[Watch it running natively (video, docs/ssx3.mp4)](https://github.com/andersfischernielsen/ssx3-decomp/blob/HEAD/docs/ssx3.mp4)**

A native **Rust** static recompilation of **SSX 3 (USA)** (`SLUS_207.72`) for the
PlayStation 2. Every instruction of the game's Emotion Engine code, VU microcode and
IOP drivers is translated to Rust ahead of time and runs on a native PS2 platform layer
(kernel, DMA/VIF/GIF, GS on wgpu, IPU, SPU2, memory card). No emulator interprets the
game's code at runtime.

**Status (2026-10-17):**
- **The game is playable.** It boots and plays the intro movies. Menus, races, music and
  sound work, and saves go to a file-backed memory card.
- **No emulated graphics hardware by default.** The native renderer (`crates/ssx3-gfx`,
  wgpu) draws each frame from the game's own draw lists. The frame's VIF/VU1/GS work is
  not emulated and the GS core is detached. Menus, movies, loading screens and races all
  come through it.
- **Modern displays.** The renderer works at any resolution and aspect ratio, widens the
  game's 3D view to fit (16:9, ultrawide), keeps the HUD at its 4:3 shape, and has an
  adjustable field of view. On high-refresh displays…
