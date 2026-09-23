---
repo: "INTERA-Inc/mf6adj"
name: "mf6adj"
description: "A python implementation of the adjoint-sensitivity analysis approach for MODFLOW 6"
readmeQualityOk: true
url: "https://github.com/INTERA-Inc/mf6adj"
homepage: "https://md6adj.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 17
forks: 4
openIssues: 6
closedIssues: 29
watchers: 6
contributors: 15
recentReleases: 3
createdAt: "2022-05-23T15:20:07Z"
lastCommitAt: "2026-09-23T08:47:24Z"
lastReleaseAt: "2026-09-11T20:33:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 73
maintainers: ["jdhughes-dev", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef131b5b0bf114b319f4ddd3de22f4f00497ffd7f2320a4912573c142a4e940/INTERA-Inc/mf6adj"
discussionCount: 4
---

# mf6adj

**mf6adj** is a Python package for adjoint-state sensitivity analysis with
MODFLOW 6.  It uses the [MODFLOW 6 API](https://github.com/MODFLOW-USGS/modflowapi)
to access the internal solution components at run time — no modifications to
MODFLOW 6 are required.  Given one or more user-defined performance measures
(heads, boundary fluxes, or composite objectives), mf6adj computes the
sensitivity of each measure to model parameters across the full model domain.

## Installation

**pip**

```bash
pip install mf6adj
```

**conda-forge**

```bash
conda install -c conda-forge mf6adj
```

mf6adj drives MODFLOW 6 through its shared library (`libmf6`).  The easiest
way to get both is through the
[`flopy`](https://github.com/modflowpy/flopy) helper:

```bash
get-modflow --subset mf6,libmf6 :python
```

## Quick start

```python
import flopy
import mf6adj

# locate the MF6 binary and shared library in the active conda environment
mf6_bin, lib_name = mf6adj.get_conda_mf6_paths()

# run the baseline forward model
flopy.run_model(exe_name=mf6_bin, namefile=None, model_ws="path/to/model")

# write a performance-measure file, with the cell zero based as flopy gives it…
