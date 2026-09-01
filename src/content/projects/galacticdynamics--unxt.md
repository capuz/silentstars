---
repo: "GalacticDynamics/unxt"
name: "unxt"
description: "Unitful Quantities in JAX"
readmeQualityOk: true
url: "https://github.com/GalacticDynamics/unxt"
homepage: "https://unxt.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["jax", "quantities", "units", "array", "auto-differentiation", "dimensions", "high-performance", "scientific-computing"]
stars: 67
forks: 5
openIssues: 16
closedIssues: 37
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-12-22T22:13:31Z"
lastCommitAt: "2026-09-01T08:48:05Z"
lastReleaseAt: "2024-03-16T22:32:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["nstarman", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/07357b2a6f58e89e386ff9578b6ad09d5b7ec624457c4c90d5fba28a3b02f90d/GalacticDynamics/unxt"
---

<h1 align='center'> unxt </h1>
<h3 align="center">Unitful Quantities in JAX</h3>

</p>
</p>
</p>
</p>

---

Unxt is unitful quantities and calculations in [JAX][jax], built on [Equinox][equinox] and [Quax][quax].

Unxt supports JAX's compelling features:

- JIT compilation (`jit`)
- vectorization (`vmap`, etc.)
- auto-differentiation (`grad`, `jacobian`, `hessian`)
- GPU/TPU/multi-host acceleration

And best of all, `unxt` doesn't force you to use special unit-compatible re-exports of JAX libraries. You can use `unxt` with existing JAX code, and with [quax][quax]'s simple decorator, JAX will work with `unxt.Quantity`.

## Installation

```bash
pip install unxt
```

<details>
  <summary>using <code>uv</code></summary>

```bash
uv add unxt
```

</details>
<details>
  <summary>from source, using pip</summary>

```bash
pip install git+https://github.com/GalacticDynamics/unxt.git
```

</details>
<details>
  <summary>building from source</summary>

```bash
cd /path/to/parent
git clone https://github.com/GalacticDynamics/unxt.git
cd unxt
pip install -e .  # editable mode
```

</details>

## [Documentation][rtd-link]

For full documentation, including installation instructions, tutorials,…
