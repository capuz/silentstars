---
repo: "wkentaro/osam"
name: "osam"
description: "Run SAM 1/2/3, EfficientSAM, YOLO-World and other promptable vision models locally, on CPU, CUDA or CoreML."
readmeQualityOk: true
url: "https://github.com/wkentaro/osam"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["computer-vision", "deep-learning", "foundation-models", "segment-anything", "onnx"]
stars: 96
forks: 14
openIssues: 5
closedIssues: 11
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-01-14T12:41:28Z"
lastCommitAt: "2026-10-30T11:02:18Z"
lastReleaseAt: "2026-01-13T13:08:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["wkentaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cf9fe7eb75a7d9cd0adda137d9fa385d5d79eaa9be731519772a5aebb9ce8b4/wkentaro/osam"
---

Run promptable vision models locally, on CPU, CUDA or CoreML.

*Osam* (/oʊˈsɑm/) is a tool to run open-source promptable vision models locally
(inspired by [Ollama](https://github.com/ollama/ollama)).

*Osam* provides:

- **Promptable Vision Models** - Segment Anything Model (SAM), EfficientSAM, YOLO-World;
- **Local APIs** - CLI & Python & HTTP interface;
- **Customization** - Host custom vision models.

## Installation

### Pip

```bash
pip install osam[cpu]  # or osam[gpu] for NVIDIA GPUs
```

`osam[gpu]` installs `onnxruntime-gpu` together with the CUDA and cuDNN
libraries, so no system CUDA install is needed. Install only one onnxruntime
build: `onnxruntime` and `onnxruntime-gpu` overwrite each other's files.

**For `osam serve`**:

```bash
pip install osam[cpu,serve]
```

## Quickstart

To run with EfficientSAM:

```bash
osam run efficientsam --image <image_file>
```

To run with YOLO-World:

```bash
osam run yoloworld --image <image_file>
```

## Model library

Here are models that can be downloaded:

| Model | Parameters | Size | Download |
| ---------------- | ---------- | ----- | --------------------------- |
| SAM 100M | 94M | 100MB | `osam run sam:100m` |
| SAM 300M |…
