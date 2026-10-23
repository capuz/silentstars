---
repo: "opthub-org/pytorch-bsf"
name: "pytorch-bsf"
description: "PyTorch implementation of Bezier simploid fitting"
readmeQualityOk: true
url: "https://github.com/opthub-org/pytorch-bsf"
homepage: "https://pypi.org/project/pytorch-bsf/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["machine-learning", "manifold-learning"]
stars: 12
forks: 4
openIssues: 4
closedIssues: 108
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-06-28T12:03:04Z"
lastCommitAt: "2026-10-23T09:33:16Z"
lastReleaseAt: "2024-09-21T19:40:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 78
maintainers: ["NaokiHamada", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a9885f0321a0aec98035b3a7fff0a0c19dc9592812502d457fb181454d0049c/opthub-org/pytorch-bsf"
---

# PyTorch-BSF

**Fit smooth manifolds with explicit geometry, observations and numerical evidence.**

PyTorch-BSF fits Bézier simplices, products of simplices, and cells glued along
shared faces. A single model type and regression API cover all three.

```python
import torch
from torch_bsf import BezierSpace, Samples, fit

space = BezierSpace.simplex(dimension=1, degree=2)
t = torch.tensor([[1.0, 0.0], [0.5, 0.5], [0.0, 1.0]])
result = fit(space, Samples(t, [[0.0], [1.0], [4.0]]))
result.require_success()
predictions = result.model(t)
print(result.metrics, result.diagnostics)
```

- `BezierSpace` holds immutable geometry and shared coefficient ordering.
- `BezierModel` is a differentiable PyTorch module containing coefficients.
- `fit(space, samples)` always returns `FitResult`: model, metrics, diagnostics and stopping state.
- Dense SVD and optional sparse LSMR solve the same weighted, penalized objective in CPU float64.
- Objective minimization uses `minimize` with explicit `PreconditionedSGD` settings.
- Cross-validation, degree search and ensembles retain explicit evidence and ownership.
- Sampling, plotting, subdivision and versioned persistence use the same model types.…
