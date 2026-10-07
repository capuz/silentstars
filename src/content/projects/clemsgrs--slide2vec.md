---
repo: "clemsgrs/slide2vec"
name: "slide2vec"
description: "Fast, scalable whole-slide encoding"
readmeQualityOk: true
url: "https://github.com/clemsgrs/slide2vec"
homepage: "https://clemsgrs.github.io/slide2vec"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 7
openIssues: 3
closedIssues: 78
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2024-09-02T09:49:32Z"
lastCommitAt: "2026-10-07T10:30:46Z"
lastReleaseAt: "2025-12-16T13:16:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["clemsgrs"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2a1e989c51fd286c3ec4d35547a27ed28f261726827a2fc9f57caf0028e647e/clemsgrs/slide2vec"
---

# slide2vec

`slide2vec` encodes whole-slide images with publicly available pathology foundation models. It uses [`hs2p`](https://pypi.org/project/hs2p/) for tissue detection and tiling, and handles batching, multi-GPU execution, and embedding storage.

## Install

Python 3.10 or newer is required:

```shell
pip install slide2vec
```

Many models need additional dependencies available through `pip install "slide2vec[fm]"`. See the [model installation guide](https://clemsgrs.github.io/slide2vec/models.html#model-installation) for model-specific extras, separate environments, and upstream packages.

For gated models such as Virchow2, request access on the model's Hugging Face page and authenticate with `hf auth login` or an `HF_TOKEN` environment variable.

## Embed a slide

```python
from slide2vec import Model, PreprocessingConfig

model = Model.from_preset("virchow2")
preprocessing = PreprocessingConfig(requested_spacing_um=0.5)
embedded = model.embed_slide("/path/to/slide.svs", preprocessing=preprocessing)

tile_embeddings = embedded.tile_embeddings  # (N, 2560)
x, y = embedded.x, embedded.y               # level-0 tile coordinates
```

The preset supplies tile size and…
