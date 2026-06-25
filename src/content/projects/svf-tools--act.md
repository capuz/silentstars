---
repo: "SVF-tools/ACT"
name: "ACT"
description: "Abstract Constraint Transformation"
url: "https://github.com/SVF-tools/ACT"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [59, 41]
topics: ["ai-verification", "model-verification", "neural-network-verification", "abstract-constraint-transformation", "model-fuzzing", "neural-network-testing", "static-analysis-of-ai-models"]
stars: 16
forks: 5
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2025-10-15T10:03:56Z"
lastCommitAt: "2026-06-25T01:31:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["yuleisui", "guanqin-123", "Kaijie-liu"]
openGraphImageUrl: "https://opengraph.githubassets.com/3da1dd75001141801bfa2fdb43812a7d3702335913ce9defdc6a8ce9c256907c/SVF-tools/ACT"
---

# Abstract Constraint Transformation (ACT)

A testing and verification framework for AI models based on neural networks, built on a three-tier architecture (front-end, back-end, and pipeline), with native PyTorch support and an ACT intermediate representation (IR) that enables refinement-based precision and supports diverse model architectures, input formats, and specification types.

## Quick Start

## 0. Preparation
Install [Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions) and create a running environment.

```
conda env create -f environment.yml    # Install required lib packages to run ACT
conda activate act-py312 # Activate an environment (python-3.12)  # Activate the environment 
```

## 1. Clone repository
```
git clone --recursive https://github.com/SVF-tools/ACT.git
cd ACT
```

## 2. Apply and download the [Gurobi license](https://www.gurobi.com/academia/academic-program-and-licenses/) (Optional for MILP optimization)
```
cp /path/to/your/gurobi.lic ./modules/gurobi/gurobi.lic  # put gurobi.lic file in ./modules/gurobi/ directory
```

## 3. Run ACT phases
ACT uses a modular three-tier architecture. For detailed…
