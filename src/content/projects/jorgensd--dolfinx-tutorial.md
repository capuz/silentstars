---
repo: "jorgensd/dolfinx-tutorial"
name: "dolfinx-tutorial"
description: "A reimplementation of the Springer book: https://github.com/hplgit/fenics-tutorial/, covering new topics as well as transitioning from dolfin to dolfinx"
url: "https://github.com/jorgensd/dolfinx-tutorial"
homepage: "https://jorgensd.github.io/dolfinx-tutorial/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [59, 40]
topics: ["finite-element-methods", "fenics", "tutorial", "fenicsx"]
stars: 162
forks: 91
openIssues: 20
closedIssues: 105
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2020-11-28T14:05:33Z"
lastCommitAt: "2026-07-03T12:39:24Z"
lastReleaseAt: "2023-12-06T13:29:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 31
maintainers: ["jorgensd", "dependabot[bot]", "Luhenmo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c753b4619aa691674fc4eb23f2ace4f929968530f035251071a630339d7383a/jorgensd/dolfinx-tutorial"
discussionCount: 5
---

# The DOLFINx tutorial

Author: Jørgen S. Dokken

This is the source code for the dolfinx-tutorial [webpage](https://jorgensd.github.io/dolfinx-tutorial/).
If you have any comments, corrections or questions, please submit an issue in the issue tracker.

## Contributing

If you want to contribute to this tutorial, please make a fork of the repository, make your changes, and test that the CI passes.

Alternatively, if you want to add a separate chapter, a Jupyter notebook can be added to a pull request, without integrating it into the tutorial. If so, the notebook will be reviewed and modified to be included in the tutorial.

Any code added to the tutorial should work in parallel. If any changes are made to `ipynb` files, please ensure that these changes are reflected in the corresponding `py` files by using [`jupytext`](https://jupytext.readthedocs.io/en/latest/faq.html#can-i-use-jupytext-with-jupyterhub-binder-nteract-colab-saturn-or-azure):

## Building the book and running code

The book is built using [jupyterbook](https://jupyterbook.org/). The following environment variables should be set if you want to build the book

```bash
PYVISTA_OFF_SCREEN=false…
