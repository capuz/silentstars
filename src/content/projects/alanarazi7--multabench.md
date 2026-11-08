---
repo: "alanarazi7/MulTaBench"
name: "MulTaBench"
description: "MulTaBench: A Multimodal Tabular Benchmark"
readmeQualityOk: true
url: "https://github.com/alanarazi7/MulTaBench"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 18
forks: 5
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-03T11:04:26Z"
lastCommitAt: "2026-11-08T10:40:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["alanarazi7"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4a138548ebe24e3c11ba46068b9d0a111d62eb4e85dba222b84f4a2beebc816/alanarazi7/MulTaBench"
---

MulTaBench is a benchmark for multimodal tabular learning: tables whose columns hold free text or images alongside
numbers and categories. Its 40 core datasets, 20 text-tabular and 20 image-tabular, were kept only if they show both
**joint signal**, each modality carrying signal about the target that the others don't, and **target awareness**, the
best representation of the text or images depending on the task. 40 more datasets with joint signal are released
alongside them, 80 in total.

Models are ranked on the [live leaderboard](https://huggingface.co/spaces/multabench/leaderboard), but the benchmark's
purpose is to compare ways of encoding text and images for tabular learners, and new methods are welcome.

## Getting started

The core package loads the datasets, their splits and cached embeddings, without torch or any model package:

```bash
pip install multabench
```

```python
from multabench import Size, list_datasets, load_embeddings, load_split, score

datasets = list_datasets(modality="text", task="regression", tier="core")

split = load_split("MUL_IMAGE_PETFINDER", fold=0, size=Size.TEN_K)
split.x_train, split.y_train, split.x_test, split.y_test

embeddings =…
