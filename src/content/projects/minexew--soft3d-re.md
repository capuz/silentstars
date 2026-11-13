---
repo: "minexew/Soft3D-RE"
name: "Soft3D-RE"
description: "Digging into the Soft3D engine by Dingoo Games"
readmeQualityOk: true
url: "https://github.com/minexew/Soft3D-RE"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [59, 23]
topics: ["reverse-engineering", "game-hacking", "gemei-a330", "software-rendering", "7-days-salvation", "dingoo", "kaitai-struct", "fixed-point"]
stars: 24
forks: 8
openIssues: 3
closedIssues: 5
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2020-05-02T15:13:31Z"
lastCommitAt: "2026-11-13T18:28:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 50
maintainers: ["ostrosablin"]
openGraphImageUrl: "https://opengraph.githubassets.com/29af67b44817eee2a2221dbb733f926493ef9df186ea0b4190dbe17bf5c6c53c/minexew/Soft3D-RE"
discussionCount: 0
---

# Soft3D engine archaeology

- Engine written in C++, at least some builds include RTTI

## File formats overview

|  | File extension | Platform(s) | Notes & open questions |
|--|----------------|-------------|------------------------|
|✔️|SPK|Chinese and English variants|resource archives; 64-byte and 32-byte path layouts documented in `Reverse_Docs/filepak_api.md`
|🔧|S3DTEX||S2D images/textures; observed grayscale8/RGB565 decoding and remaining header/engine-loader questions documented in `Reverse_Docs/s3dtex_format.md`
|🔧|S3DSTY||BSP lightmap-frame animation sequences; 256-record layout and loader documented in `Reverse_Docs/s3dsty_format.md`; runtime timing/modulation remains under reconstruction
|🔧|SAI||<p>3D model animations, mostly understood</p><ul><li>Fixed-point transform tracks, bounds, morph targets, timing, and interpolation documented in `Reverse_Docs/soft3d_models_animations.md`</li></ul>
|✔️|SAU|DA320 (all), GA330, S60v1 (chi), S60v2, S60v3, Win32 (chi)|AMI ADPCM audio, low nibble first; same format as WAR except nibble order, well-understood
|🔧|SBN|GA330, S60v3|font (glyphs) + text data (32-bit encoding); Symbian base/local glyphs, string tables, character…
