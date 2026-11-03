---
repo: "ussoewwin/Hybrid-Sensitivity-Weighted-Quantization"
name: "Hybrid-Sensitivity-Weighted-Quantization"
description: "HSWQ is a novel ConvRot INT8/ConvRot NVFP4 quantization method that combines sensitivity analysis  and importance-weighted histogram optimization, achieving superior quality  compared to naive uniform quantization while maintaining standard loader compatibility."
readmeQualityOk: true
url: "https://github.com/ussoewwin/Hybrid-Sensitivity-Weighted-Quantization"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-29T03:10:28Z"
lastCommitAt: "2026-11-03T10:52:21Z"
lastReleaseAt: "2026-03-07T04:57:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 57
maintainers: ["ussoewwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3d696385acd04303ecb89c31a6664eabbeabfa08e6c1022e87059c40bef345d/ussoewwin/Hybrid-Sensitivity-Weighted-Quantization"
---

# Hybrid-Sensitivity-Weighted-Quantization (HSWQ)

High-fidelity **ConvRot INT8** (SDXL, Krea2, Qwen Image Edit, SD1.5) and **ConvRot NVFP4** (Z Image Turbo) quantization for diffusion models. HSWQ uses **sensitivity** and **importance** analysis instead of naive uniform cast. SD1.5 ships as a **trajectory-impact hybrid**: a measured per-layer trajectory impact ranks every ConvRot-eligible layer, the top-K stay FP16, and the rest go ConvRot INT8 (UNet only - CLIP untouched, VAE dropped).

- **ConvRot INT8 (SDXL, reverse hybrid):** FP16 checkpoint as the only input; a per-layer **trajectory-impact** measurement (`sdxl/diag_impact_sdxl.py`) ranks every candidate layer, then the **K lowest-impact layers** are packed as **FULL ConvRot INT8** while **every other layer stays FP16** (`sdxl/gen_reverse_int8_sdxl.py`). Validated by the **deterministic 25-seed latent-trajectory comparison** (per-step cosine + bifurcation); production gate = **cosine mean ≥ 0.95 and 0/25 bifurcated**. The ranking is measured on the actual sampling trajectory, so it captures the nonlinear error amplification that static weight-space saliency cannot represent. The quantized file does not embed a VAE…
