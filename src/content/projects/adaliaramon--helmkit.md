---
repo: "adaliaramon/helmkit"
name: "helmkit"
description: "Parse HELM strings into RDKit molecules"
readmeQualityOk: true
url: "https://github.com/adaliaramon/helmkit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-16T09:07:00Z"
lastCommitAt: "2026-10-13T10:57:34Z"
lastReleaseAt: "2025-12-12T10:14:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 64
maintainers: ["adaliaramon"]
openGraphImageUrl: "https://opengraph.githubassets.com/27370ad5a5889eb37e9bb6c34765d9ccf8550001025acb4d6d24b7c81f2e71e9/adaliaramon/helmkit"
---

# helmkit

A Python library for converting HELM (Hierarchical Editing Language for Macromolecules) notation to RDKit molecules.

## Table of Contents

- [Basic Usage](#basic-usage)
- [Installation](#installation)
- [Quick Example](#quick-example)
- [Understanding HELM Notation](#understanding-helm-notation)
- [Mapping Atoms and Bonds to Monomers](#mapping-atoms-and-bonds-to-monomers)
- [Using Custom Monomer Data](#using-custom-monomer-data)
- [SDF File Structure Requirements](#sdf-file-structure-requirements)
- [Parallel Processing of Peptides](#parallel-processing-of-peptides)
- [Development Setup](#development-setup)
- [Running Tests](#running-tests)

## Basic Usage

```python
from helmkit import Molecule

# Create a molecule from a HELM string
helm_string = "PEPTIDE1{A.R.G}$$$$"
molecule = Molecule(helm_string)

# Access the RDKit molecule object
rdkit_mol = molecule.mol
```

## Installation

To install `helmkit`, you can use either [`uv`](https://github.com/astral-sh/uv) or `pip`.

### With [`uv`](https://github.com/astral-sh/uv)

```bash
uv pip install helmkit
```

or if you have added it as a dependency to your `pyproject.toml`:

```bash
uv add helmkit
```

### Without `uv`…
