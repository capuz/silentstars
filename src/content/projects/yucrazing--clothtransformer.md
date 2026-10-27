---
repo: "YuCrazing/ClothTransformer"
name: "ClothTransformer"
description: "Code for paper \"ClothTransformer: Unified Latent-Space Transformers for Scalable Cloth Simulation (NeurIPS 2026)\""
readmeQualityOk: true
url: "https://github.com/YuCrazing/ClothTransformer"
homepage: "https://yucrazing.github.io/clothtransformer/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 30
forks: 1
openIssues: 2
closedIssues: 0
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2026-05-28T02:55:52Z"
lastCommitAt: "2026-10-27T12:39:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 4
maintainers: ["YuCrazing"]
openGraphImageUrl: "https://opengraph.githubassets.com/c282da319f7ac6d81bf4b64ef39e64106f15acb191710b781a8b686316be7ee8/YuCrazing/ClothTransformer"
---

# ClothTransformer: Unified Latent-Space Transformers for Scalable Cloth Simulation (NeurIPS 2026)

## News

- **[2026-09-26]** ClothTransformer has been accepted to NeurIPS 2026!
- **[2026-07-17]** The dataset is available on [Hugging Face](https://huggingface.co/datasets/YuCrazing/ClothTransformer-dataset).

## Installation

```bash
git clone https://github.com/YuCrazing/ClothTransformer.git
cd ClothTransformer
conda create -n ct python=3.10 -y
conda activate ct
# Install PyTorch for your CUDA version first (https://pytorch.org); tested with torch 2.4.0 + CUDA 12.1
pip install torch==2.4.0 --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt
```

## Pretrained Model

Download the checkpoint from [Hugging Face](https://huggingface.co/YuCrazing/ClothTransformer-checkpoint)
to `checkpoints/`:

```bash
hf download YuCrazing/ClothTransformer-checkpoint ct-no-ccd-preview.pt --local-dir checkpoints
```

## Examples

[`examples/showcase.txt`](https://github.com/YuCrazing/ClothTransformer/blob/HEAD/examples/showcase.txt) lists three test trajectories, one per scenario.…
