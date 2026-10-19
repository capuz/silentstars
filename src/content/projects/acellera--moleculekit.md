---
repo: "Acellera/moleculekit"
name: "moleculekit"
description: "MoleculeKit: Your favorite molecule manipulation kit"
readmeQualityOk: true
url: "https://github.com/Acellera/moleculekit"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["molecule", "machine-learning", "proteins", "drug-discovery", "molecular-modeling", "molecular-simulation"]
stars: 249
forks: 35
openIssues: 7
closedIssues: 96
watchers: 9
contributors: 10
recentReleases: 0
createdAt: "2019-03-28T10:51:36Z"
lastCommitAt: "2026-10-19T09:15:00Z"
lastReleaseAt: "2025-10-21T09:35:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 40
maintainers: ["stefdoerr", "dependabot[bot]", "tonigi"]
openGraphImageUrl: "https://opengraph.githubassets.com/657e5822c476ed44d04aa197c60fd3f6d65ef9d8546b15cba9f33ab16fd8163a/Acellera/moleculekit"
---

# MoleculeKit

A molecule manipulation library

# Getting started

### Installing moleculekit

#### With pip

```
pip install moleculekit
```

#### With conda

[Installation Instructions](https://software.acellera.com/moleculekit/installation.html)

### Using moleculekit in ipython

Install ipython in the correct conda enviroment using the following command.

```
pip install ipython
```

Now you can start an ipython console with

```
ipython
```

In the ipython console you can now import any of the modules of moleculekit and use it as normal.

```python
from moleculekit.molecule import Molecule

mol = Molecule('3ptb')
mol.view()
```

### API

For the official documentation of the moleculekit API head over to https://software.acellera.com/moleculekit/index.html

### Issues

For any bugs or questions on usage feel free to use the issue tracker of this github repo.

### Dev

If you are using moleculekit without installing it by using the PYTHONPATH env var you will need to compile the C++ extensions in-place with the following command:

```
python setup.py build_ext --inplace
```

#### Building for WebAssembly

Install `emscripten`…
