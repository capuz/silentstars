---
repo: "isayevlab/Auto3D_pkg"
name: "Auto3D_pkg"
description: "Auto3D generates low-energy conformers from SMILES/SDF"
readmeQualityOk: true
url: "https://github.com/isayevlab/Auto3D_pkg"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 196
forks: 39
openIssues: 4
closedIssues: 39
watchers: 12
contributors: 10
recentReleases: 2
createdAt: "2022-04-27T13:28:58Z"
lastCommitAt: "2026-08-21T04:11:26Z"
lastReleaseAt: "2026-08-21T03:23:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 44
maintainers: ["isayev"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fae2b4023e0e199563bd2fe4c33d92d2d914378ec2d6fd49ad71cf054897ad1/isayevlab/Auto3D_pkg"
discussionCount: 5
---

# **Auto3D**

**SMILES in, low-energy 3D conformers out.** Auto3D enumerates tautomers and
stereoisomers, embeds and optimizes them with a neural network potential
(AIMNet2, ANI2x, ANI2xt), removes duplicates, and ranks what is left by energy —
in one command, or one function call.

```bash
pip install Auto3D
auto3d run molecules.smi --k=1
```

That writes `molecules_<timestamp>/molecules_out.sdf`: the lowest-energy
conformer per input molecule, each carrying its energy.

---

## Installation

```bash
pip install Auto3D                # core: AIMNet2 engines
pip install "Auto3D[ani,ase]"     # + torchani (ANI2x/ANI2xt) and ase (thermochemistry)
```

Requires **Python ≥ 3.11** and **PyTorch ≥ 2.8**. For GPU acceleration, install a
CUDA-enabled PyTorch build first. AIMNet2 weights download to `~/.cache/aimnet`
on first use, so the first run needs network access.

<details>
<summary><b>Using conda?</b> Install Auto3D itself with pip, even inside a conda env.</summary>

<br>

`conda install -c conda-forge auto3d` installs **2.3.0**, not 3.1.0. conda-forge
requires every dependency to be a conda package, and `aimnet` — a core dependency
since 3.0.0 — is not one yet, nor is its own…
