---
repo: "Disty0/sdnq"
name: "sdnq"
description: "SD.Next Quantization Engine"
readmeQualityOk: true
url: "https://github.com/Disty0/sdnq"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 138
forks: 13
openIssues: 0
closedIssues: 22
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2025-09-11T12:05:53Z"
lastCommitAt: "2026-10-16T08:27:17Z"
lastReleaseAt: "2026-05-21T21:28:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 44
maintainers: ["Disty0", "CalamitousFelicitousness"]
openGraphImageUrl: "https://opengraph.githubassets.com/d202ae573c1bfed1e7dcca63847c90067094debb801ad035e3cc0f23201b5075/Disty0/sdnq"
discussionCount: 0
---

# SDNQ: SD.Next Quantization Engine

SD.Next Quantization provides full cross-platform quantization to reduce memory usage and increase performance for any device.  
- SDNQ is written fully in PyTorch and can be compiled with torch.compile into different backends such as Inductor and OpenVINO.  
- SDNQ can run on any device (MPS (Apple Mac), NPU, CPU, ARM, Android etc.) with PyTorch Eager fallback mode.  
  - CUDA (Nvidia GPU), ROCm (AMD GPU), XPU (Intel GPU) and CPU devices utilizes the faster Inductor backend by default if Triton or Inductor is available.  
- SDNQ supports every quantization type from 1 bit to 16 bits including int, uint, fp and ufp types totaling to 176 storage types for inference and training.  
- SDNQ supports Hadamard Rotations, SVD Quantization and Lloyd-Max Codebook Quantization on both quantized weights and quantized matmul for inference and training.  
- SDNQ supports fast INT8, UINT8, FP8 and FP16 quantized matmul on supported Nvidia, AMD and Intel GPUs for inference and training with any quantized weights type.  
- SDNQ supports fast INT8, UINT8 and FP16 quantized mamtul on any x86 or ARM CPUs and Intel NPUs via OpenVINO matmul (requires manual…
