---
repo: "SkBlaz/py3plex"
name: "py3plex"
description: "Py3plex - A multilayer complex network visualization and analysis library in python3"
url: "https://github.com/SkBlaz/py3plex"
homepage: "https://skblaz.github.io/py3plex/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["biological-data-analysis", "complex-networks", "data-science", "graph-algorithms", "multilayer-networks", "multiplex-networks", "network-analysis", "network-science", "network-visualization", "visualization"]
stars: 185
forks: 40
openIssues: 1
closedIssues: 634
watchers: 14
contributors: 8
recentReleases: 0
createdAt: "2017-06-06T14:22:38Z"
lastCommitAt: "2026-07-01T07:04:10Z"
lastReleaseAt: "2026-01-13T19:03:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 45
maintainers: ["github-actions[bot]", "Copilot", "SkBlaz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/93527013/6308d100-5f86-11ea-8288-380c8023eb7b"
---

*Multilayer networks* are complex networks with additional information assigned to nodes or edges (or both). This library includes
some of the state-of-the-art algorithms for decomposition, visualization and analysis of such networks.

**Key Features:**
* SQL-like DSL for intuitive network queries with smart defaults
* Multilayer network visualization and analysis
* Community detection and centrality measures
* Network decomposition and embeddings

```python
from py3plex.core import datasets
from py3plex.dsl import Q

# Load a built-in multilayer biological network (~500 nodes, 4 layers)
network = datasets.fetch_multilayer("human_ppi_gene_disease_drug")

# Find key regulator candidates with integrated community detection and uncertainty quantification
master_regulators = (
    Q.communities(                           # Automated community detection
        mode="pareto",                       # Multi-objective Pareto selection
        uq=True,                             # Uncertainty quantification enabled
        uq_n_samples=30,                     # Robustness via 30 perturbed runs
        uq_method="seed",                    # Vary random seeds for stability
        seed=42,…
