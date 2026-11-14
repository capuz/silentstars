---
repo: "dphnAI/nf12"
name: "nf12"
description: "Lossless compression of BF16 models to 12-bits"
readmeQualityOk: true
url: "https://github.com/dphnAI/nf12"
language: "Cuda"
languages: ["Cuda", "Python"]
languagePcts: [42, 42]
stars: 32
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-11-06T23:41:07Z"
lastCommitAt: "2026-11-14T10:49:47Z"
lastReleaseAt: "2026-11-11T18:26:32Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 18
maintainers: ["AlpinDale", "ehartford", "Qubitium"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb954d3071d59183dd2b4289e404bae334c29181e9443b6de85e140a9226bcaf/dphnAI/nf12"
---

# nf12

NF12 is a lossless, fixed-length 12-bit encoding of BF16 weight matrices,
based on "NyoomFloat12: Accelerating LLM Inference via Lossless 12-bit Weight
Compression" (Liberman, Fang, Zhang, Dao, Fu, Together AI, 2026). This library
implements this data type efficiently on NVIDIA GPUs, from the Ampere generation
up until Blackwell, on AMD RDNA4 (`gfx1200` / `gfx1201`) via HIP, and on Apple
Silicon GPUs through Metal for PyTorch MPS and MLX (see [docs/METAL.md](https://github.com/dphnAI/nf12/blob/HEAD/docs/METAL.md)).

This library's bit and memory layout (tiled) are not compatible with the one
described in the paper. You can read [the spec](https://github.com/dphnAI/nf12/blob/HEAD/docs/SPEC.md) for more info on the format.

## Requirements

- NVIDIA GPU with SM80 or newer (Ampere and later), an AMD RDNA4 GPU
  (`gfx1200` / `gfx1201`), or an Apple Silicon Mac (macOS 14+).
- CUDA toolkit 13.0+ for NVIDIA, ROCm with `amdclang++` for AMD, or Xcode with
  its Metal Toolchain (`xcodebuild -downloadComponent MetalToolchain`) for Apple.
- A C++ compiler, CMake 3.26+, and Ninja for builds.
- uv for Python environment management and builds.
- Python 3.10+ and PyTorch 2.10+ with CUDA,…
