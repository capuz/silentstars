---
repo: "jupyterlab/jupyter-chat"
name: "jupyter-chat"
description: "An extension to add a chat panel to JupyterLab"
readmeQualityOk: true
url: "https://github.com/jupyterlab/jupyter-chat"
homepage: "https://jupyter-chat.readthedocs.io/en/latest/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [77, 21]
topics: ["jupyterlab-extension", "chat"]
stars: 40
forks: 40
openIssues: 51
closedIssues: 112
watchers: 8
contributors: 86
recentReleases: 0
createdAt: "2024-02-29T08:50:41Z"
lastCommitAt: "2026-08-22T04:06:10Z"
lastReleaseAt: "2024-12-20T13:49:45Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["brichet", "dlqqq", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc62beb2f386be4e9409e58701982d114c6e0326b0413db3b42c4517db0707e8/jupyterlab/jupyter-chat"
fundingLinks: ["CUSTOM:https://jupyter.org/about#donate"]
---

# jupyter-chat

This project is a monorepo containing:

- an extension to add a chat in jupyterlab
- the frontend components to build a chat extension for Jupyter application

Many components of this chat project come from [jupyter-ai](https://github.com/jupyterlab/jupyter-ai).

> [!WARNING]
> This project is still in early development stage and its API may change often before
> a stable release.

## Install chat extension

The chat extension is available on [PyPI](https://pypi.org/project/jupyterlab-chat/).

```bash
pip install jupyterlab-chat
```

To uninstall the package:

```bash
pip uninstall jupyterlab-chat
```

> [!NOTE]
> The extension was released as [jupyterlab-collaborative-chat](https://pypi.org/project/jupyterlab-collaborative-chat/) until version 0.5.0.

## Composition

### Typescript package

#### @jupyter/chat

The typescript package is located in _packages/jupyter-chat_ and builds an NPM
package named `@jupyter/chat`.

This package provides a frontend library (using react), and is intended to be
used by a jupyterlab extension to create a chat.

#### jupyterlab-chat

The typescript package is located in _packages/jupyterlab-chat_ and
builds an NPM package named…
