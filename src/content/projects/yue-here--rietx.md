---
repo: "yue-here/rietx"
name: "rietx"
description: "Rietveld refinement for the Holocene"
readmeQualityOk: true
url: "https://github.com/yue-here/rietx"
homepage: "https://rietx.org"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 20
forks: 2
openIssues: 106
closedIssues: 166
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-23T09:40:46Z"
lastCommitAt: "2026-10-15T08:32:48Z"
lastReleaseAt: "2026-10-12T14:53:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 50
maintainers: ["yue-here", "mustachefeeling"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dc946af0cfd81da118f85569f7b7a7f89e4146a9c4a5e23dd9001d9c0ce17b4/yue-here/rietx"
---

# rietx

**`rietx`** is an open-source Rietveld refinement and pattern analysis Python module with a streamlined API designed for those who want to drive refinements from code.

## Installation

```sh
pip install rietx            # Python >= 3.11; numpy/scipy core, compiled kernels, matplotlib figures
```

## Example refinement

Condensed from [`examples/nac_11bm.py`](https://github.com/yue-here/rietx/blob/main/examples/nac_11bm.py),
which fits APS 11-BM synchrotron data on Na₂Ca₃Al₂F₁₄ with a CaF₂ impurity.

```python
import rietx as rx

data = rx.read_pattern("11BM_NAC.fxye")              # esd column read from file
structure = rx.Structure.from_cif("cod_1000236.cif")
instrument = rx.Instrument.debye_scherrer(wavelength=0.4139090)

ref = rx.Refinement(structure, instrument)

# structure-free Le Bail first: cell + profile + background
lebail = ref.fit(data, mode="lebail", two_theta_limits=(2, 24))

# then Rietveld under the staged turn-on order of McCusker et al. (1999)
result = ref.fit(data, plan="mccusker_default", two_theta_limits=(2, 24))

report = rx.build_report(result)                     # numbers, not pixels
result.plot(path="fit.png")                          #…
