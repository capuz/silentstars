---
repo: "ChEB-AI/python-chebifier"
name: "python-chebifier"
description: "An AI ensemble model for predicting chemical classes."
readmeQualityOk: true
url: "https://github.com/ChEB-AI/python-chebifier"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 6
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-06-16T14:57:40Z"
lastCommitAt: "2026-08-31T09:58:38Z"
lastReleaseAt: "2026-08-05T17:14:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 59
maintainers: ["sfluegel05"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c074c400c748b0156b326e63d5fa3003d6a32f1bb08b1a90c30a424e5e331a7/ChEB-AI/python-chebifier"
---

# python-chebifier
An AI ensemble model for predicting chemical classes in the ChEBI ontology. It integrates deep learning models,
rule-based models and generative AI-based models.

A web application for Chebifier is available at https://chebifier.hastingslab.org/.

## Installation

You can get the package from PyPI:
```bash
pip install chebifier[models]
```
If you want the barebones Chebifier without the base learners, run
```bash
pip install chebifier
```
(This is useful if you only need a subset of base learners)

or get the latest development version from GitHub:
```bash
# Clone the repository
git clone https://github.com/yourusername/python-chebifier.git
cd python-chebifier

# Install the package
pip install -e .[models]
```

The Graph Neural Networks depend on `torch_geometric` and `torch_scatter` which you need to install separately ([depending on your CUDA version](https://pytorch-geometric.readthedocs.io/en/latest/install/installation.html)). E.g.
```bash
pip install torch==2.12.0 torch_scatter torch_geometric -f https://data.pyg.org/whl/torch-2.12.0+cpu.html
```

## Usage

```bash
# Predict for one or more SMILES / InChI strings (default config: eval)
python -m chebifier…
