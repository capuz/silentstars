---
repo: "nelsonaloysio/networkx-temporal"
name: "networkx-temporal"
description: "Python package to build and manipulate temporal graphs."
readmeQualityOk: true
url: "https://github.com/nelsonaloysio/networkx-temporal"
homepage: "https://networkx-temporal.org"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [79, 21]
stars: 20
forks: 3
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-23T15:56:19Z"
lastCommitAt: "2026-11-09T13:20:39Z"
lastReleaseAt: "2026-08-07T06:41:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 34
maintainers: ["nelsonaloysio"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fc88419087550f725ced12f253eebd7d804a7cdaa82d09aea8d346cd39bf5d6/nelsonaloysio/networkx-temporal"
---

___

Python package to build and manipulate temporal graphs using [NetworkX](https://pypi.org/project/networkx/) as backend.

## Install

Available for **Python 3.7+** from [PyPI](https://pypi.org/project/networkx-temporal/):

```bash
$ pip install 'networkx-temporal[draw]'
```

> The `[draw]` extra includes additional libraries required to plot graphs with NetworkX.

Requires `networkx >=2.1`, `numpy >=1.17.3`, `pandas >=1.1.0`, `scipy >=1.7.3`.

Optional dependencies can be installed from the groups `all`, `docs`, `draw`, `ipynb`.

## Quick example

For detailed information on using the package, please refer to its
[official documentation](https://networkx-temporal.readthedocs.io).

> An interactive Jupyter notebook with more examples is also
> [available here](https://github.com/nelsonaloysio/networkx-temporal/blob/main/notebook/networkx-temporal-01-basics.ipynb)
> ([open on Colab](https://colab.research.google.com/github/nelsonaloysio/networkx-temporal/blob/main/notebook/networkx-temporal-01-basics.ipynb)).

```python
>>> import networkx_temporal as tx
>>>
>>> TG = tx.temporal_graph(directed=True)  # tx.TemporalMultiDiGraph()
>>>
>>> TG.add_edge("a", "b", time=0)
>>>…
