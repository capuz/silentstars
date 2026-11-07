---
repo: "sirmarcel/marathon"
name: "marathon"
description: "jax/flax training infrastructure"
readmeQualityOk: true
url: "https://github.com/sirmarcel/marathon"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-08-08T11:08:22Z"
lastCommitAt: "2026-11-07T10:37:31Z"
lastReleaseAt: "2026-10-01T13:40:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["sirmarcel"]
openGraphImageUrl: "https://opengraph.githubassets.com/382e64ec8d315bc032c2c80e394a0d7a5e2ec63db37ce91aa054b20891e80436/sirmarcel/marathon"
---

---

`marathon` is an experimental `jax/flax`-oriented toolkit for prototyping machine-learning interatomic potentials. It does not provide a finished and polished training loop; instead it provides a few composable parts that can be assembled and adapted as needed for experiments. It's therefore not intended as user-facing production code, instead it aims to make experiments faster and more pleasant.

| Module | Description |
|--------|-------------|
| `marathon.data` | Process `ase.Atoms` into padded batches with a flexible properties system |
| `marathon.evaluate` | Predict energy, forces, stress; compute loss (MSE/Huber) and metrics (MAE, RMSE, R2) |
| `marathon.emit` | Checkpointing, logging (text, W&B), diagnostic plots |
| `marathon.io` | Read/write `msgpack` and `yaml`; serialize `flax.nn.Module` instances |
| `marathon.elemental` | Per-element energy baselines via linear regression |
| `marathon.grain` | Scalable data pipelines with [grain](https://github.com/google/grain) for large datasets |
| `marathon.extra.edge_to_edge` | Fixed-size neighborhood batching for PET-style edge transformers |

Since the library is aimed at active research and is used and adapted as…
