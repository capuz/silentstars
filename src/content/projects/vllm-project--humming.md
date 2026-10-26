---
repo: "vllm-project/humming"
name: "humming"
description: "Humming is a high-performance, lightweight, and highly flexible JIT (Just-In-Time) compiled GEMM kernel library specifically designed for quantized inference."
readmeQualityOk: true
url: "https://github.com/vllm-project/humming"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [61, 31]
stars: 314
forks: 66
openIssues: 5
closedIssues: 23
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2026-02-11T10:55:17Z"
lastCommitAt: "2026-10-26T03:02:04Z"
lastReleaseAt: "2026-07-01T16:39:37Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 30
maintainers: ["jinzhen-lin", "mgoin", "LopezCastroRoberto"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eab285a53160faf29750a7cb92bd22242ddd3c08a6ba9d2722d69212d3211c9/vllm-project/humming"
---

# Humming

Humming is a high-performance, lightweight, and highly flexible JIT (Just-In-Time) compiled GEMM kernel library specifically designed for quantized inference.

## Key Features

- **High Flexibility**
    - Supports inference for any weight type under 8-bit across **FP16 / BF16 / FP8 / FP4 / INT8 / INT4** activations (provided the activation's dynamic range covers the weight type).
    - Supports various quantization strategies.
    - Supports various scale types (BF16, FP16, E4M3, E5M2, and UE8M0).
    - Supports both **Dense GEMM** and **MoE GEMM**.
- **High Compatibility**: supports all NVIDIA GPUs from **SM75+** (Turing architecture) and beyond.
- **High Performance**
    * Delivers State-of-the-Art (SOTA) throughput and efficiency across a wide range of computational scenarios.
- **Ultra-Lightweight**
    * Minimal dependencies: Requires only **PyTorch** and **NVCC**.
    * Compact footprint: The package size is only **100+KB**.

## Support Matrix

| Activation Type | Supported Devices | Supported Weight Types |
| :--- | :--- | :--- |
| **FP16** (e5m10) | SM75+ | • Symmetric INT1-8<br>• INT1-8 with dynamic zero point<br>• Arbitrary signed FP (kBits ≤ 8, kExp ≤ 5) |…
