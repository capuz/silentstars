---
repo: "SamratDuttaOfficial/WaterSheep"
name: "WaterSheep"
description: "A decision model that returns calibrated answers to yes/no, choice, score and multi-label questions."
readmeQualityOk: true
url: "https://github.com/SamratDuttaOfficial/WaterSheep"
homepage: "https://samratduttaofficial.github.io/WaterSheep/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["browser", "calibration", "decision-model", "huggingface", "javascript", "jev", "jev-alternative", "local-first", "machine-learning", "multi-label-classification"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-29T12:10:45Z"
lastCommitAt: "2026-10-10T10:04:39Z"
lastReleaseAt: "2026-09-29T12:47:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 24
maintainers: ["SamratDuttaOfficial"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1395162600/c3a82c11-3626-4c75-b795-83ef62d3faeb"
discussionCount: 1
---

#  WaterSheep

Calibrated decisions for any text.

[Website](https://samratduttaofficial.github.io/WaterSheep/) ·
[Demo](https://huggingface.co/spaces/samratduttaofficial/WaterSheep) ·
[Model](https://huggingface.co/samratduttaofficial/WaterSheep)

WaterSheep answers yes/no, single-choice, rating and multi-label questions about any text, with a
probability for every option.

## Usage

```bash
pip install transformers torch
```

```python
from transformers import pipeline

ws = pipeline(model="samratduttaofficial/WaterSheep", trust_remote_code=True)
ws("I was charged twice.", question="Which team should handle this?", options=["billing", "shipping", "support"])
```

| Type | Options | Answer |
|---|---|---|
| `noul` | none (yes/no) | probability of yes |
| `choice` | any labels | the best option |
| `score` | a digit scale, e.g. `1` to `5` | the expected level |
| `multi` | any labels, with `type="multi"` | every option above the threshold |

Every answer includes a probability for each option.

## Using Jev?

WaterSheep is an open-source alternative to Jev. Run it as a local server:

```bash
pip install git+https://github.com/SamratDuttaOfficial/WaterSheep
watersheep --model…
