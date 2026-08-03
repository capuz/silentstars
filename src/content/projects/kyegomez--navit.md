---
repo: "kyegomez/NaViT"
name: "NaViT"
description: "My implementation of \"Patch n’ Pack: NaViT, a Vision Transformer for any Aspect Ratio and Resolution\""
readmeQualityOk: true
url: "https://github.com/kyegomez/NaViT"
homepage: "https://discord.gg/qUtxnK2NMf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["vit", "attention-mechanism", "clip", "gpt4", "multimodal", "multimodal-deep-learning", "multimodal-learning", "multimodality"]
stars: 273
forks: 14
openIssues: 0
closedIssues: 6
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2023-09-28T19:49:30Z"
lastCommitAt: "2023-09-28T19:49:30Z"
status: "archived"
tags: ["funded"]
healthScore: 48
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/dba14c446f20dc7406fad8c27fb995f4590ff5c29fba643a813b4624122ffe90/kyegomez/NaViT"
fundingLinks: ["GITHUB:https://github.com/kyegomez"]
---

# NaViT
My implementation of "Patch n’ Pack: NaViT, a Vision Transformer for any Aspect Ratio and Resolution"

[Paper Link](https://arxiv.org/pdf/2307.06304.pdf)

# Appreciation
* Lucidrains
* Agorians

# Install
`pip install navit-torch`

# Usage
```python
import torch
from navit.main import NaViT

n = NaViT(
    image_size = 256,
    patch_size = 32,
    num_classes = 1000,
    dim = 1024,
    heads = 16,
    mlp_dim=2048,
    dropout=0.1,
    emb_dropout=0.1,
    token_dropout_prob=0.1
)

images = [
    [torch.randn(3, 256, 256), torch.randn(3, 128, 128)],
    [torch.randn(3, 256, 256), torch.randn(3, 256, 128)],
    [torch.randn(3, 64, 256)]
]

preds = n(images)
```

# Dataset Strategy
Here is a table of the key datasets and their metadata used for pretraining and evaluating NaViT:

| Dataset | Type | Size | Details | Source |  
|-|-|-|-|-|
| JFT-4B | Image classification | 4 billion images | Private dataset from Google | [1] |
| WebLI | Image-text | 73M image-text pairs | Web-crawled dataset | [2] |
| ImageNet | Image classification | 1.3M images, 1000 classes | Standard benchmark | [3] |
| ImageNet-A | Image classification | 7,500 images | Out-of-distribution variant | [4] |…
