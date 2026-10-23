---
repo: "michaeldale/velocity9x"
name: "velocity9x"
description: "Windows 98 display driver with hardware Direct3D/OpenGL/Glide on the Intel GMA & HD, S3 Trio/ViRGE, Matrox Millennium, Rage and a VESA fallback."
readmeQualityOk: true
url: "https://github.com/michaeldale/velocity9x"
language: "C"
languages: ["C"]
languagePcts: [83]
topics: ["86box", "direct3d", "directdraw", "display-driver", "graphics-driver", "retrocomputing", "s3-virge", "windows-98", "s3-trio64", "gma950"]
stars: 66
forks: 0
openIssues: 7
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T06:55:55Z"
lastCommitAt: "2026-10-23T09:32:46Z"
lastReleaseAt: "2026-08-28T07:06:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 34
maintainers: ["michaeldale"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a04014c4174741924723367c7a96c59e1a997968e2e9468b4cd2a0d7384d99/michaeldale/velocity9x"
---

# Velocity9x

A from-scratch display driver for Windows 98 with **hardware 3D on period
cards**. One driver package per chip family gives the card:
- DirectDraw on its 2D engine;
- a Direct3D HAL on its 3D engine;
- an OpenGL 1.1 driver;
- Glide 2 and Glide 3 for games written for 3dfx cards;
- ATI's 3DCIF for games written for ATI Rage cards.

All of them draw through one shared render core. It runs the Intel GMA 950,
GMA 3150, GMA X3100, HD 4600 and HD 4000, the ATI Rage 128 Pro, Rage Pro, Rage XL, Rage Mobility and Rage IIC, the S3 ViRGE and
Trio3D, the Matrox Millennium II and Mystique, the SiS 6326 and the 3dfx Voodoo4 with
hardware 3D. The S3 Trio32/64 and the Matrox Millennium get 2D
acceleration, and other cards run through their VESA video BIOS. The
Intel GMA 4500 and GMA X4500 are claimed: built from their surveys, not
yet run.

It is written against the Windows 98 DDI, DIB Engine, DirectDraw HAL,
Direct3D HAL and OpenGL ICD contracts, rather than derived from anyone's
driver sources.

*Quake 2 through Velocity9x's OpenGL driver on an Intel GMA 950 (HP Mini
110 netbook, Atom N280), 28 fps at the first map's start.*

**Current version: 0.28.0.** The ATI Rage 128 Pro gets…
