---
repo: "volcengine/veadk-python"
name: "veadk-python"
description: "An open-source kit for agent development, integrated the powerful capabilities of Volcengine."
readmeQualityOk: true
url: "https://github.com/volcengine/veadk-python"
homepage: "https://volcengine.github.io/veadk-python/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 22]
topics: ["agent", "sdk", "volcengine"]
stars: 331
forks: 88
openIssues: 3
closedIssues: 14
watchers: 1
contributors: 50
recentReleases: 0
createdAt: "2025-08-01T22:21:20Z"
lastCommitAt: "2026-08-14T05:13:39Z"
lastReleaseAt: "2025-10-23T01:31:33Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 39
maintainers: ["evanlowe", "FirstayZheng", "xgtcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9573a314cbf98c93b94b14b67b9dc3a53ff36ae8985c39136bb7039f6ffd10f/volcengine/veadk-python"
---

</p>

# Volcengine Agent Development Kit

An open-source kit for agent development, integrated the powerful capabilities of Volcengine.

For more details, see our [documents](https://volcengine.github.io/veadk-python/).

A [tutorial](https://github.com/volcengine/veadk-python/blob/main/veadk_tutorial.ipynb) is available by Jupyter Notebook, or open it in [Google Colab](https://colab.research.google.com/github/volcengine/veadk-python/blob/main/veadk_tutorial.ipynb) directly.

## Installation

### From PyPI

```python
pip install veadk-python

# install extensions
pip install veadk-python[extensions]
```

### Build from source

We use `uv` to build this project ([how-to-install-uv](https://docs.astral.sh/uv/getting-started/installation/)).

```bash
git clone ... # clone repo first

cd veadk-python

# create a virtual environment with python 3.12
uv venv --python 3.12

# only install necessary requirements
uv sync

# or, install extra requirements
# uv sync --extra database
# uv sync --extra eval
# uv sync --extra cli

# or, directly install all requirements
# uv sync --all-extras

# install veadk-python with editable mode
uv pip install -e .
```

## Configuration

We recommand you…
