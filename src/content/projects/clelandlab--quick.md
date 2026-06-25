---
repo: "clelandlab/quick"
name: "quick"
description: "QuICK is a universal wrap of QICK."
url: "https://github.com/clelandlab/quick"
homepage: "https://clelandlab-quick.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-10-07T23:43:06Z"
lastCommitAt: "2026-06-25T02:08:00Z"
lastReleaseAt: "2025-02-05T17:28:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 40
maintainers: ["phantomlsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/5947895423da0b45b224b3e36e891bf6068331ad3a62c1a6a7bb06f39a0ac14a/clelandlab/quick"
---

# QuICK

QuICK is a universal wrap of [QICK](https://github.com/openquantumhardware/qick).

</div>

## Installation

> This is the installation on your PC. For QICK Board setup, see [here](https://clelandlab-quick.readthedocs.io/en/latest/Tutorials/qick).

Install this package with `pip`:

```
pip install clelandlab-quick
```

Then you can import it in your Python code:

```python
import quick

# connect to the QICK board
soccfg, soc = quick.connect(QICK_IP)
```

## Layers

QuICK has several layers of complexity.

- `quick.auto` Automation of Qubit Measurements
- `quick.experiment` Experiment Routines for Qubit Measurements
- `quick.Mercator` Mercator Protocol for Pulse Sequence Program
- `qick` the QICK firmware

![](https://clelandlab-quick.readthedocs.io/en/latest/Images/overview.png)

## Cite this work

```bibtex
@article{li2026large,
  title={Large Language Model-Assisted Superconducting Qubit Experiments},
  author={Li, Shiheng and Miller, Jacob M and Lee, Phoebe J and Andersson, Gustav and Conner, Christopher R and Joshi, Yash J and Karimi, Bayan and King, Amber M and Malc, Howard L and Mishra, Harsh and others},
  journal={arXiv preprint arXiv:2603.08801},
  year={2026}
}…
