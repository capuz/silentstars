---
repo: "ChenAo-Phys/quantax"
name: "quantax"
description: "Flexible and scalable neural quantum states built on JAX"
url: "https://github.com/ChenAo-Phys/quantax"
homepage: "https://chenao-phys.github.io/quantax/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["jax", "neural-quantum-state", "quantum-many-body-physics", "variational-monte-carlo"]
stars: 34
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-05-20T13:47:14Z"
lastCommitAt: "2026-06-25T01:39:07Z"
lastReleaseAt: "2026-01-20T19:21:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["ChenAo-Phys"]
openGraphImageUrl: "https://opengraph.githubassets.com/453795405a2c448b089cf0da7faeb591ec714187603c72525ee308c2381a65da/ChenAo-Phys/quantax"
---

<h1 align='center'>Quantax</h1>

  <strong>Flexible and scalable neural quantum states in JAX</strong>
</p>

</p>

---

## 🔍Scope

Quantax is a research-oriented Python package for quantum many-body physics, with a focus on flexible and scalable neural quantum states (NQS). Apart from NQS, Quantax also includes several useful techniques in variational Monte Carlo (VMC):

- Exact diagonalization and small-system benchmarks via [QuSpin](https://github.com/QuSpin/QuSpin)
- Fermionic mean-field wavefunctions
- Flexible (neural) wavefunction design via [Equinox](https://github.com/patrick-kidger/equinox)
- Tensor networks via [quimb](https://github.com/jcmgray/quimb/tree/main) and [symmray](https://github.com/jcmgray/symmray) (to be implemented)

## ⚙️Installation

Requires Python 3.11+, JAX 0.8.0+

First, ensure that a correct JAX version is installed. For details, check [JAX Installation](https://docs.jax.dev/en/latest/installation.html).

For a direct installation of full functionality (recommended in most cases),
```bash
pip install quantax[full]
```

For a minimal installation,
```bash
pip install quantax
```

## 🚀Quick Start

```python
import quantax as qtx
import…
