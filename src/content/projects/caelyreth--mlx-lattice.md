---
repo: "caelyreth/mlx-lattice"
name: "mlx-lattice"
description: "Sparse convolution library for MLX designed for point cloud operation."
readmeQualityOk: true
url: "https://github.com/caelyreth/mlx-lattice"
homepage: "https://mlx-lattice.iki.moe"
language: "Python"
languages: ["Python", "C++", "Metal"]
languagePcts: [41, 32, 22]
topics: ["inference", "mlx", "neural-network", "point-cloud", "sparse", "sparse-matrix", "training", "metal", "sparse-tensors"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-28T10:52:25Z"
lastCommitAt: "2026-07-11T03:24:29Z"
lastReleaseAt: "2026-07-10T09:07:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["caelyreth"]
openGraphImageUrl: "https://opengraph.githubassets.com/b24a68123098dfc16426d0341582d9bf8aee0a00be2552e9790051c149101b46/caelyreth/mlx-lattice"
---

## MLX Lattice

`mlx-lattice` is a sparse point-cloud and sparse-voxel library for
[MLX](https://github.com/ml-explore/mlx). It provides sparse tensors,
coordinate management, sparse convolution, pooling, point/voxel conversion,
coordinate-aligned sparse algebra, quantized inference weights, and
`mlx.nn`-style modules for Apple Silicon workflows.

[DOI](https://doi.org/10.5281/zenodo.21258875) | [Documentation](https://mlx-lattice.iki.moe)
| [PyPI](https://pypi.org/project/mlx-lattice/)
| [Torch Lattice](https://github.com/caelyreth/torch-lattice)
| [Acknowledgements](#acknowledgements) | [Citation](#citation)

### Install

`mlx-lattice` requires Python 3.12 or newer and MLX 0.31.2. The MLX
version is pinned because the package links against MLX's native C++ ABI.

```bash
uv add mlx-lattice
```

For development from a checkout:

```bash
uv sync --all-packages --group dev
```

The Metal backend is the primary performance target. CPU routes are also
provided for supported operators and are useful for correctness checks,
development, and environments without the same Metal capability.

### What 0.4.0 covers

- Sparse tensor container with coordinate identity metadata.
- Coordinate…
