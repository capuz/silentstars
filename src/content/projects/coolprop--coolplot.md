---
repo: "CoolProp/CoolPlot"
name: "CoolPlot"
description: "Create property plots for engineering thermodynamics using CoolProp as data source."
readmeQualityOk: true
url: "https://github.com/CoolProp/CoolPlot"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [77, 21]
stars: 25
forks: 9
openIssues: 4
closedIssues: 4
watchers: 7
contributors: 39
recentReleases: 6
createdAt: "2019-05-22T21:40:29Z"
lastCommitAt: "2026-11-03T12:47:43Z"
lastReleaseAt: "2026-10-24T09:58:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["jowr"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbf7509bb0fc2deece2036d01c679615c9091a3c632c2b822fe92b5e13ad3355/CoolProp/CoolPlot"
---

CoolPlot
========

Property diagrams and psychrometric charts for engineering
thermodynamics, with [CoolProp] as the source of every property:
log(p)-h, T-s, h-s, p-s, p-rho, T-rho and p-T diagrams for pure fluids
and refrigerant blends, cycles drawn on top of them, and psychrometric
charts for humid air.

```python
from coolplot import PropertyDiagram
from coolplot.thermo.cycles import simple_compression

diagram = PropertyDiagram("R290", "ph", units="engineering", tp_limits="ACHP")
diagram.set_default_lines(labels=True, rounding=True)
diagram.add_cycle(simple_compression("R290", T_evap_C=-5, T_cond_C=45, dT_sh_K=5))
diagram.save("R290_ph.png")           # or .pdf, .svg; show() opens a window
```

Cycles can be given state by state in the chart's units, by two
properties or by the process that leads to a state:

```python
diagram.add_cycle("Heat pump", [
    {"p": 3.0, "T": 0.0},                               # 1 compressor inlet, bar and deg C
    {"p": 15.0, "via": "compression", "eta_is": 0.7},   # 2 compressor outlet
    {"p": 15.0, "Q": 0.0},                              # 3 condenser outlet
    {"p": 3.0, "via": "isenthalpic"},                   # 4 after the valve
])
```…
