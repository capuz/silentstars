---
repo: "yuanzhy29/PXDepth"
name: "PXDepth"
description: "PXDepth: Pixel-Space Modeling for Structure Preserving Monocular Depth Estimation"
readmeQualityOk: true
url: "https://github.com/yuanzhy29/PXDepth"
homepage: "https://yuanzhy29.github.io/PXDepth-Page/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["3d-reconstruction", "monocular-depth-estimation"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-15T13:31:06Z"
lastCommitAt: "2026-08-19T04:08:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 22
maintainers: ["yuanzhy29"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9600d8fe5db45666a4a272f63d14a3b70a3b40d962aacdda3d4d2beb1c13057/yuanzhy29/PXDepth"
---

<h1>PXDepth: Pixel-Space Modeling for Structure Preserving<br>Monocular Depth Estimation</h1>

<p>
</p>

</div>

</p>

PXDepth separates global context encoding from pixel-space depth prediction, using a Global Context Encoder and a Pixel-Space Depth Predictor.
</div>

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/yuanzhy29/PXDepth.git
cd PXDepth
conda create -n pxdepth python=3.11 -y
conda activate pxdepth
pip install torch==2.11.0 torchvision==0.26.0 torchaudio==2.11.0 --index-url https://download.pytorch.org/whl/cu128 # Use your preferred version if needed.
pip install -r requirements.txt
```

### Checkpoints

Download our [pretrained model](https://huggingface.co/yuanzhy29/PXDepth/tree/main) under the `checkpoints/` directory. In addition, [MoGe-2](https://huggingface.co/Ruicheng/moge-2-vitl-normal) is required to recover metric scale for point cloud reconstruction. Your files should be organized as follows:

```text
checkpoints/
├── pxdepth/
│   └── model.pt
└── moge-2-vitl-normal/
    └── model.pt
```

## 🔍 Inference

Run inference on one image or all images under a directory:

```bash
python scripts/infer.py \
  --input example_images \…
