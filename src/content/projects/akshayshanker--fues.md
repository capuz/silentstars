---
repo: "akshayshanker/FUES"
name: "FUES"
description: "Fast upper envelope scan for discrete-continuous optimization"
readmeQualityOk: true
url: "https://github.com/akshayshanker/FUES"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 26]
stars: 14
forks: 3
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-07-27T05:19:41Z"
lastCommitAt: "2026-08-22T04:05:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 61
maintainers: ["akshayshanker"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f86d4e9acd1d391e912c89e536a69afa70458ad80495b755e0742d452a32c0/akshayshanker/FUES"
---

<strong>Fast Upper-Envelope Scan (FUES)</strong>
</p>

</p>

---

FUES recovers the upper envelope of the EGM ([Carroll 2006](https://doi.org/10.1016/j.econlet.2005.09.013)) value correspondence in discrete-continuous problems without requiring monotonicity of the optimal policy or numerical optimisation. FUES can also perform orders of magnitude faster than existing upper-envelope methods.

</p>

This repo ships a unified upper-envelope interface (`uenvelope`) that dispatches to FUES and three benchmark methods: MSS ([Iskhakov et al. 2017](https://doi.org/10.3982/QE643)), LTM ([Druedahl & Jørgensen 2017](https://doi.org/10.1016/j.jedc.2016.11.005)), and RFC ([Dobrescu & Shanker 2024](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4850746)).

> **Pre-release (v0.6.0)** — Under active research development. API may change.
>
> Dobrescu, L.I. and Shanker, A. (2022). "A fast upper envelope scan method for discrete-continuous dynamic programming." [SSRN Working Paper.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4181302)

---

## Install

The installable package is `dcsmm` (contains `fues` and `uenvelope`). Requires Python 3.11+.

### Option 1 — Library only

Install FUES…
