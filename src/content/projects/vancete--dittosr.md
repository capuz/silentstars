---
repo: "Vancete/DittoSR"
name: "DittoSR"
description: "A lightweight upscaler designed for handhelds and low-end PCs, offering similar or better quality than FSR 3.1 at higher presets, with superior performance (e.g., DittoSR 2.3x vs. FSR 2x)"
readmeQualityOk: true
url: "https://github.com/Vancete/DittoSR"
language: "C++"
languages: ["C++", "C"]
languagePcts: [35, 34]
stars: 39
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-10-30T08:31:11Z"
lastCommitAt: "2026-11-03T12:48:05Z"
lastReleaseAt: "2026-11-03T11:12:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 24
maintainers: ["Vancete"]
openGraphImageUrl: "https://opengraph.githubassets.com/087ae7606bba6f809b3882f44102f4184c2037476643217bec6d7a00494e77e2/Vancete/DittoSR"
---

# DittoSR

DittoSR is a temporal upscaler for PC games. It started from Qualcomm's **Snapdragon Game Super Resolution 2** (GSR 2),
a light upscaler made for phones, and was reworked heavily to hold up in demanding PC games (AAA titles at 2–2.3x,
dense foliage, fast camera turns) while staying lighter than the usual alternatives. Thought for handheld PCs while also working pretty great on high-end PCs!

It ships as a drop-in **FidelityFX API** provider for **DirectX 12 and Vulkan**: a game that offers FSR 3.1 (or a
tool that loads FSR 3.1, such as OptiScaler) upscales through DittoSR instead, with no change to the game. One DLL
serves both APIs, under the names games load: `amd_fidelityfx_dx12.dll`, `amd_fidelityfx_loader_dx12.dll`,
`amd_fidelityfx_vk.dll` and `amd_fidelityfx_upscaler_dx12.dll`. For games whose FSR it can't reach, it also goes in
place of **XeSS** on DirectX 12, as `libxess.dll`.

You can expect a perceived quality between FSR3.1 and FSR4.1 while being lighter than both. Also, a little .ini is next to the .dll on every game so you can configure the sharpness and frame blending with hot reloading (F9).

## Install

Extract `DittoSR.zip` and run…
