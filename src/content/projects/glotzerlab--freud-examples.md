---
repo: "glotzerlab/freud-examples"
name: "freud-examples"
description: "Examples for the freud library."
readmeQualityOk: true
url: "https://github.com/glotzerlab/freud-examples"
homepage: "https://github.com/glotzerlab/freud"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
topics: ["freud", "analysis", "simulation", "molecular-dynamics", "glotzer", "materials-science"]
stars: 15
forks: 6
openIssues: 4
closedIssues: 7
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2018-08-07T00:28:19Z"
lastCommitAt: "2026-08-28T14:23:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 41
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e30e0b28189a3107d7d2a2205f85efe84909fe04daea1bf37f0712434e630b3/glotzerlab/freud-examples"
---

# freud examples

Welcome to the freud example scripts.
These Jupyter notebooks demonstrate how to utilize the functionality of [freud](http://glotzerlab.engin.umich.edu/freud/).
These notebooks may be launched [interactively on Binder](https://mybinder.org/v2/gh/glotzerlab/freud-examples/master?filepath=index.ipynb)
or downloaded and run on your own system.

```bash
git clone https://github.com/glotzerlab/freud-examples.git
cd freud-examples
jupyter notebook
```

See [Notebook Basics](http://nbviewer.jupyter.org/github/jupyter/notebook/blob/master/docs/source/examples/Notebook/Notebook%20Basics.ipynb) and [Running Code](http://nbviewer.jupyter.org/github/jupyter/notebook/blob/master/docs/source/examples/Notebook/Running%20Code.ipynb) for tutorials on using Jupyter itself.

To test the notebooks and ensure that they all run, use:

```bash
python -m pytest -v --nbval --nbval-lax --ignore=archive/
```
