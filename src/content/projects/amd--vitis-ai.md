---
repo: "amd/Vitis-AI"
name: "Vitis-AI"
description: "AMD’s stack for AI inference on Versal AI Edge and Versal AI Edge Gen 2. Host tools, examples, and reference designs organized per device series."
readmeQualityOk: true
url: "https://github.com/amd/Vitis-AI"
language: "C++"
languages: ["C++"]
languagePcts: [73]
stars: 14
forks: 14
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-04-15T20:10:00Z"
lastCommitAt: "2026-09-23T08:46:11Z"
lastReleaseAt: "2026-06-17T14:19:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 64
undervaluedScore: 23
maintainers: ["vsuraamd", "jeevansa-amd", "saifuddin-xilinx"]
openGraphImageUrl: "https://opengraph.githubassets.com/22db9845ab1fd414b522b41b8c1305614160e3cfa62ae44179e405b629e51698/amd/Vitis-AI"
---

# Vitis AI 6.2

Vitis AI is AMD's development stack for AI inference on AMD adaptive computing platforms. Release **6.2** supports two device series:

- **AMD Versal AI Edge Series**
- **AMD Versal AI Edge Series Gen 2**

The compiler, software dependencies, and associated tools and utilities are device-series specific, which is why content is organized per device series.

## Repository Layout

```text
.
├── versal_ve/            # Vitis AI for Versal AI Edge Series
├── versal_2ve/           # Vitis AI for Versal AI Edge Series Gen 2
│   ├── examples/         # Tutorials and C++/Python example applications
│   ├── reference_design/ # VEK385 reference design (Rev-A, Rev-B)
│   └── tools/            # Host setup and flash utilities
├── vitis_kernels/        # Shared PL HLS kernels
```

## Getting Started

Pick the device series you are targeting and follow the README in that folder:

| Device Series | Folder | Start Here |
|---------------|--------|------------|
| Versal AI Edge Series | [`versal_ve/`](https://github.com/amd/Vitis-AI/blob/HEAD/versal_ve/) | [`versal_ve/README.md`](https://github.com/amd/Vitis-AI/blob/HEAD/versal_ve/README.md) |
| Versal AI Edge Series Gen 2 |…
