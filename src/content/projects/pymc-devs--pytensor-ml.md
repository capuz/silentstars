---
repo: "pymc-devs/pytensor-ml"
name: "pytensor-ml"
description: "Neural Network package built on Pytensor"
readmeQualityOk: true
url: "https://github.com/pymc-devs/pytensor-ml"
homepage: "https://pytensor-ml.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 7
openIssues: 12
closedIssues: 40
watchers: 2
contributors: 30
recentReleases: 6
createdAt: "2024-04-20T08:45:31Z"
lastCommitAt: "2026-10-25T02:47:45Z"
lastReleaseAt: "2026-08-25T02:06:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 91
maintainers: ["jessegrabowski", "twiecki", "nightcityblade"]
openGraphImageUrl: "https://opengraph.githubassets.com/333a45d118e0d722f9a4c9023e569d167bb42d5d3529ff37cbcdc7e441d9e0e4/pymc-devs/pytensor-ml"
---

# pytensor_ml

A(nother) deep learning library, built on top of [PyTensor](https://github.com/pymc-devs/pytensor).

Networks are ordinary PyTensor graphs. You build one out of layers, and everything PyTensor already does —
symbolic differentiation, graph rewrites, and compilation to Numba, C, JAX, PyTorch, or MLX — applies to it
unchanged. Training is a compiled function that takes a batch and returns a loss; there is no separate runtime
or tape.

That goes all the way down: layers are graph constructors, parameters are shared variables, and a training
step is a compiled function whose updates are the optimizer. Because a model is only a graph, it composes with
any other PyTensor graph — a PyMC model included — as there is nothing else to interoperate with.

> **Status: pre-alpha.** The API is still moving, and there is no release-to-release compatibility guarantee yet.

## Installation

```bash
pip install pytensor-ml
```

The only hard dependencies are `pytensor` and `numpy`. Saving and loading weights needs `safetensors`
(`pip install safetensors`). A backend beyond the default (`numba`, `jax`, `torch`, `mlx`) is installed
separately, and only loads when you actually compile…
