---
repo: "timoklein/hyperbolix"
name: "hyperbolix"
description: "Hyperbolic Deep Learning in JAX and Flax.nnx"
readmeQualityOk: true
url: "https://github.com/timoklein/hyperbolix"
homepage: "https://timoklein.github.io/hyperbolix/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-09-26T11:56:02Z"
lastCommitAt: "2026-08-04T06:12:26Z"
lastReleaseAt: "2026-03-19T12:34:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["timoklein"]
openGraphImageUrl: "https://opengraph.githubassets.com/100acb75d1e14d42135e5187f38a3b9719b23a458fe85b15e708988700e30465/timoklein/hyperbolix"
---

# Hyperbolix

## Hyperbolic Deep Learning in JAX

Pure JAX implementation of hyperbolic deep learning with manifold operations, neural network layers, and Riemannian optimizers. Built with Flax NNX and Optax.

## Features

- 🌐 **6 Manifolds**: Euclidean, Poincaré Ball, Hyperboloid, Proper Velocity, κ-Stereographic (signed curvature — hyperbolic, flat, and spherical in one manifold), and Product Manifold (mixed-curvature composition)
- 🎛️ **Learnable Curvature**: `LearnableCurvature` module bundles parameter + reparameterization (softplus, log/exp, or signed identity) + optional clamp. Works with any `nnx.Optimizer` — no Riemannian optimizer needed
- 🧠 **40+ Neural Network Layers**: Linear, convolutional, regression, attention, normalization, positional encoding, PV
- ⚡ **5 Hyperbolic Activations**: ReLU, Leaky ReLU, Tanh, Swish, GELU
- 📈 **Riemannian Optimizers**: RAdam and RSGD with automatic manifold detection
- 🚀 **Pure JAX/Flax NNX**: vmap-native API, JIT-compatible
- ✅ **3,550+ tests passing** (735 test functions, parametrized across dtypes, dimensions, manifolds) checked against independently transcribed NumPy/SciPy oracles

## Quick Start

```python
import jax.numpy as…
