---
repo: "pauling-ai/Protonify"
name: "Protonify"
description: "Protonify — pH-dependent SMILES protonation using Uni-pKa predictions."
readmeQualityOk: true
url: "https://github.com/pauling-ai/Protonify"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-21T16:20:04Z"
lastCommitAt: "2026-11-16T11:54:16Z"
lastReleaseAt: "2025-11-21T16:25:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 28
maintainers: ["PabloPauling"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f8e212ec8cb818da7623c9677655a7f40085fe5da935fefc55ba1bf45943b42/pauling-ai/Protonify"
discussionCount: 0
---

# Protonify

Protonation state prediction and microstate distribution for molecules at a given pH.

Given a SMILES string and pH value(s), this tool:
1. Enumerates all possible protonation states
2. Optionally enumerates tautomers
3. Predicts free energy for each microstate using a neural network
4. Calculates Boltzmann distribution at the given pH
5. Returns the most probable protonated SMILES

## Installation

### From GitHub (recommended)

```bash
# Clone the repository
git clone https://github.com/pauling-ai/Protonify.git
cd Protonify

# Build the wheel
pip install build
python -m build --wheel

# Install the package
pip install dist/protonify-0.1.0-py3-none-any.whl
```

Note: Editable installs (`pip install -e .`) require setuptools with PEP 660 support.

### Download Model Weights

The model weights (~500MB) must be downloaded separately:

```bash
# Using the provided script
chmod +x download_model.sh
./download_model.sh

# Or manually download from GitHub Releases and place in protonify/models/
```

### Using Docker

If you prefer to use Docker, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/pauling-ai/Protonify.git
cd Protonify

# 2.…
