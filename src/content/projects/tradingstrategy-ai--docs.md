---
repo: "tradingstrategy-ai/docs"
name: "docs"
description: "Trading strategy documentaiton"
readmeQualityOk: true
url: "https://github.com/tradingstrategy-ai/docs"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
topics: ["algorithmic-trading", "pancakeswap", "pandas", "python", "uniswap"]
stars: 25
forks: 13
openIssues: 19
closedIssues: 16
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2022-07-02T12:28:09Z"
lastCommitAt: "2026-11-10T11:37:45Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 61
maintainers: ["miohtama", "sontn1988"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdfad6530511c2908262c997442b35d6c5c3964a34c7e506a415ed692d425bc5/tradingstrategy-ai/docs"
---

# Trading strategy documentation

Documentation for [Trading Strategy algorithmic trading framework and protocol](https://tradingstrategy.ai/).
View [the documentation here](https://tradingstrategy.ai/docs).

# About documentation internals

- The documentation is built on the top of [Sphinx documentation toolchain](https://www.sphinx-doc.org/en/master/)
- [Furo based theme is used](https://github.com/tradingstrategy-ai/furo) (the theme has been modified)
- [API documentation is generated with sphinx-autodoc-typehints](https://github.com/tox-dev/sphinx-autodoc-typehints) 
- [Interactive Jupyter notebook examples are generated with nbsphinx](https://nbsphinx.readthedocs.io/)
- [The documentation is self-hosted using Caddy](https://github.com/tradingstrategy-ai/docs/blob/HEAD/github.com/tradingstrategy-ai/proxy-server/)

# Building locally

[pyproject.toml](https://github.com/tradingstrategy-ai/docs/blob/HEAD/pyproject.toml) is automatically pulling the master version of the packages.

To build everything from the scratch: 

```shell
poetry shell

# If needed
brew install pandoc

# This is a very long duration command.
# For the subsequent documenation updates,
# it is enough to run…
