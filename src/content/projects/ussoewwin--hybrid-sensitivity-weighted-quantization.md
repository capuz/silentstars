---
repo: "ussoewwin/Hybrid-Sensitivity-Weighted-Quantization"
name: "Hybrid-Sensitivity-Weighted-Quantization"
description: "HSWQ is a novel ConvRot INT8/ConvRot NVFP4/ConvRot W4A8 quantization method that combines sensitivity analysis  and importance-weighted histogram optimization, achieving superior quality  compared to naive uniform quantization while maintaining standard loader compatibility."
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
lastCommitAt: "2026-11-21T11:35:34Z"
lastReleaseAt: "2026-03-07T04:57:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 59
maintainers: ["ussoewwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0775a8190b3b643c8df77ab41ae7647eb59d128dcb9e29bbfe3774c2bd87998a/ussoewwin/Hybrid-Sensitivity-Weighted-Quantization"
---

# Hybrid-Sensitivity-Weighted-Quantization (HSWQ)

High-fidelity **ConvRot INT8** (SDXL, Krea2, Qwen Image Edit, SD1.5) and **ConvRot NVFP4** (Z Image Turbo) quantization for diffusion models. HSWQ uses **sensitivity** and **importance** analysis instead of naive uniform cast. SD1.5 ships as a **trajectory-impact hybrid**: a measured per-layer trajectory impact ranks every ConvRot-eligible layer, the top-K stay FP16, and the rest go ConvRot INT8 (UNet only - CLIP untouched, VAE dropped).
