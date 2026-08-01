---
repo: "ussoewwin/ComfyUI-HSWQ-Loader-and-Tools"
name: "ComfyUI-HSWQ-Loader-and-Tools"
description: "HSWQ ConvRot INT8/ConvRot NVFP4/NVFP4 Loader, and various toos."
readmeQualityOk: true
url: "https://github.com/ussoewwin/ComfyUI-HSWQ-Loader-and-Tools"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 15
forks: 2
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T07:04:15Z"
lastCommitAt: "2026-08-01T06:16:29Z"
lastReleaseAt: "2026-01-16T01:04:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 38
maintainers: ["ussoewwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0024b810ee2f863b0c117e8577854d32865ef41263d386015029111d78db5a6/ussoewwin/ComfyUI-HSWQ-Loader-and-Tools"
---

# ComfyUI-HSWQ-ConvRot-INT8/ConvRot-NVFP4-Loader-and-Tools

<table align="center">
  <tr>
    <td align="center" bgcolor="#3478ca" width="88" height="36"><font color="#ffffff"><b>EN</b></font></td>
    <td align="center" bgcolor="#e5e7eb" width="88" height="36"><a href="zhmd/README.md"><font color="#4b5563"><b>中文</b></font></a></td>
  </tr>
</table>

</p>

## Overview

This custom node pack loads and runs **[Hybrid-Sensitivity-Weighted-Quantization (HSWQ)](https://github.com/ussoewwin/Hybrid-Sensitivity-Weighted-Quantization)** packs and related ComfyUI-compatible quantized SDXL / Z Image weights.

HSWQ is a high-fidelity quantization line for diffusion UNets. Current public HSWQ work focuses on **ConvRot INT8** and **ConvRot NVFP4** for **SDXL**, plus **ConvRot NVFP4** for **Z Image / ZIT** UNets (sensitivity / importance analysis, DualMonitor + weighted-histogram FP16 protection, then FULL ConvRot on the remainder). It is **not** a keep-ratio percentage scheme: keep ratio is fixed at **0 (r0)**; FP16 layers are chosen by automatic analysis under a fixed MiB budget.

| Path | Role in this repo |
| :--- | :--- |
| **HSWQ ConvRot INT8 (SDXL V3.1)** | ComfyUI `int8_tensorwise`…
