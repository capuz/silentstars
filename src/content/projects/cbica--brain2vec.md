---
repo: "CBICA/Brain2Vec"
name: "Brain2Vec"
description: "PyTorch implementation of Brain2Vec (https://arxiv.org/abs/2610.28411)"
readmeQualityOk: true
url: "https://github.com/CBICA/Brain2Vec"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["brain-age-estimation", "brain-imaging", "deep-learning", "disease-classification", "foundation-models", "mri", "self-supervised-learning"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-27T01:29:25Z"
lastCommitAt: "2026-10-21T23:36:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 50
maintainers: ["spirosmaggioros"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf4908bba48fabe82fe5be728a1ed4307ec412183293f62d1dcc761a5b939b26/CBICA/Brain2Vec"
---

# Brain2Vec: A Self-Supervised 3D Foundation Model for Structural Brain MRI

Code for the [Brain2Vec](https://arxiv.org/abs/2610.28411) paper, a 3D foundation model pre-trained on 74,425
T1-weighted brain MRI scans. In this repo, you can pre-train your own brain2vec
model, fine-tune a Vision Transformer (ViT) using our pre-trained brain2vec
encoder, train your own downstream ML models using brain2vec output embeddings
or perform downstream classification inference using our pre-trained disease
classification models trained on brain2vec embeddings.

> [!IMPORTANT]
> To use our model, you need to apply for access to our [hugging face model card](https://huggingface.co/cbica/Brain2Vec). Otherwise, you can directly use Brain2Vec on [NiChart](https://neuroimagingchart.com).

*Left: Masked input | Middle: Reconstruction (Z-normalized) | Right: Ground truth*

## Fine-tuning with Brain2Vec

By fine-tuning with our pre-trained model, we achieved both better accuracy and
convergence speed on downstream deep learning tasks

## Using Brain2Vec as a feature extractor

We proved that using Brain2Vec embeddings we get superior or on-par classification
performance across multiple disease groups…
