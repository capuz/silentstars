---
repo: "CMBSciPol/furax"
name: "furax"
description: "Framework for Unified and Robust data Analysis with JAX"
readmeQualityOk: true
url: "https://github.com/CMBSciPol/furax"
homepage: "https://furax.readthedocs.io/en/stable"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 11
forks: 4
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 9
recentReleases: 1
createdAt: "2024-11-20T09:11:37Z"
lastCommitAt: "2026-10-09T10:50:45Z"
lastReleaseAt: "2026-07-14T10:07:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 74
maintainers: ["sbiquard", "dependabot[bot]", "ArtemBasyrov"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b86e85c6ad11a574af56296567a601c569dbd5203057699d4c30916fe6ab231/CMBSciPol/furax"
---

# Furax

[**Docs**](https://furax.readthedocs.io/en/stable)

Furax: a Framework for Unified and Robust data Analysis with JAX.

This framework provides building blocks for solving inverse problems, in particular in the astrophysical and cosmological domains.

## Requirements

- Python 3.12 or higher
- [JAX](https://jax.readthedocs.io/en/latest/installation.html) — install separately for your target hardware (CPU, CUDA, Metal, …)

## Installation

Furax is available as [`furax`](https://pypi.org/project/furax/) on PyPI, and can be installed with:

```bash
uv add furax       # uv, recommended
pip install furax  # pip, alternative
```

> [!NOTE]
> Transposing spherical harmonic transforms (`furax.math.sht`) requires an `s2fft` fix ([#380](https://github.com/astro-informatics/s2fft/pull/380)) that is not yet released.
> Until the next release, install `s2fft` from GitHub alongside Furax:
>
> ```bash
> uv add "s2fft @ git+https://github.com/astro-informatics/s2fft"
> pip install "s2fft @ git+https://github.com/astro-informatics/s2fft"
> ```

## Developing Furax

We strongly recommend using [`uv`](https://docs.astral.sh/uv) to work on Furax.

```bash
uv sync                  # automatic…
