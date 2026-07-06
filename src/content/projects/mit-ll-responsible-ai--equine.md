---
repo: "mit-ll-responsible-ai/equine"
name: "equine"
description: "Establishing Quantified Uncertainty in Neural Networks"
readmeQualityOk: true
url: "https://github.com/mit-ll-responsible-ai/equine"
homepage: "https://mit-ll-responsible-ai.github.io/equine/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["machine-learning", "uncertainty-quantification"]
stars: 18
forks: 2
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2023-06-14T18:53:53Z"
lastCommitAt: "2026-07-06T07:04:17Z"
lastReleaseAt: "2024-08-22T17:41:30Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 49
maintainers: ["dependabot[bot]", "martinez-hub", "RoundOffError"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d70cd8e70ac462e8ca79ff48b23e429035db4186daab23ecba63dbe08c928c2/mit-ll-responsible-ai/equine"
---

# Establishing Quantified Uncertainty in Neural Networks 

## Usage
Deep neural networks (DNNs) for supervised labeling problems are known to
produce accurate results on a wide variety of learning tasks. However, when
accuracy is the only objective, DNNs frequently make over-confident predictions,
and they also always make a label prediction regardless of whether or not the
test data belongs to any known labels. 

EQUINE was created to simplify two kinds of uncertainty quantification for supervised labeling problems:
1) Calibrated probabilities for each predicted label
2) An in-distribution score, indicating whether any of the model's known labels should be trusted.
 
Dive into our [documentation examples](https://mit-ll-responsible-ai.github.io/equine/)
to get started. Additionally, we provide a [companion web application](https://github.com/mit-ll-responsible-ai/equine-webapp).

## Installation
Users are recommended to install a virtual environment such as Anaconda, as is also recommended
in the [pytorch installation](https://github.com/pytorch/pytorch). EQUINE has relatively
few dependencies beyond torch. 
```console
pip install equine
```
Users interested in contributing…
