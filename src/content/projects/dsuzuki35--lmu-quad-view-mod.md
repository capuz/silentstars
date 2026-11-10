---
repo: "DSuzuki35/LMU-Quad-View-Mod"
name: "LMU-Quad-View-Mod"
description: "Experimental LMU quad-view OpenXR integration and launcher. PolyForm Noncommercial 1.0.0."
readmeQualityOk: true
url: "https://github.com/DSuzuki35/LMU-Quad-View-Mod"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [61, 32]
stars: 12
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-29T15:52:41Z"
lastCommitAt: "2026-11-10T14:38:38Z"
lastReleaseAt: "2026-11-04T15:48:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["DSuzuki35", "ovakisan", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/62da089ccf4dc61c4e93a7d40741e26231522dd4f87bc540e7ba60db0ba5c549/DSuzuki35/LMU-Quad-View-Mod"
---

# LMU Quad View Mod

A free Windows x64 / D3D11 mod that adds two outer and two focus views to
**Le Mans Ultimate** through OpenXR. All four rendering providers are built in:
Native OpenXR (a runtime with quad views), Quad-Views-Foveated (QVFR) and VectorXR
(quad views on any stereo runtime) and Stereo VRS (NVIDIA). Nothing has to be
installed separately.

**Version 1.1.0** adds bundled providers, German launcher text, SimHub setup and benchmark comparisons. See the [1.1.0 changelog](https://github.com/DSuzuki35/LMU-Quad-View-Mod/blob/HEAD/CHANGELOG.md).

**CPU headroom matters:** Dan reports about **2 ms lower CPU frametime with NVIDIA MVR** compared with ordinary Quad Views in his benchmark scenario. With MVR off, earlier measurements and user reports suggested around
**0.5 ms lower CPU render time** from the optimizations, depending on the setup.
Quad Views still adds roughly **3–4 ms of CPU frametime compared with no mod**.
The small savings do not remove that penalty. Use the mod when you have enough
CPU headroom; on a CPU-limited system it can make performance worse even if GPU
time improves.

The launcher includes the **Benchmark** page with Minimal and
Detailed in-headset…
