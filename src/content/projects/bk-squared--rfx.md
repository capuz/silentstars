---
repo: "bk-squared/rfx"
name: "rfx"
description: "JAX-based 3D FDTD electromagnetic simulator"
readmeQualityOk: true
url: "https://github.com/bk-squared/rfx"
homepage: "https://remilab.ai/rfx/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["antenna-design", "automatic-differentiation", "computational-electromagnetics", "differentiable-simulation", "electromagnetics", "fdtd", "gpu", "inverse-design", "jax", "microwave"]
stars: 8
forks: 3
openIssues: 17
closedIssues: 388
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-27T14:21:31Z"
lastCommitAt: "2026-09-21T09:13:54Z"
lastReleaseAt: "2026-09-06T05:14:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["bk-squared", "rfx-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/795cdd11c007f795fb00504cf48b6c1a10039723da5c25f2beca939e6ea4f738/bk-squared/rfx"
---

# rfx

```text
██████╗ ███████╗██╗  ██╗
██╔══██╗██╔════╝╚██╗██╔╝
██████╔╝█████╗   ╚███╔╝
██╔══██╗██╔══╝   ██╔██╗
██║  ██║██║     ██╔╝ ██╗
╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝
```

**Differentiable 3D FDTD electromagnetic simulator for RF and microwave engineering — powered by JAX.**

> Start with the uniform Cartesian Yee solver. Feature support and its limits
> live in the [support matrix](https://github.com/bk-squared/rfx/blob/HEAD/docs/guides/support_matrix.md); per-port-family
> S-parameter limits live in the
> [S-parameter support matrix](https://github.com/bk-squared/rfx/blob/HEAD/docs/guides/sparameter_support_matrix.md).
> Known defects a user can hit are listed in
> [known limitations](https://github.com/bk-squared/rfx/blob/HEAD/docs/guides/known_limitations.md).

## At a Glance

| | |
|---|---|
| **GPU-accelerated** | 200³ grid on an RTX 4090: **7,266 Mcells/s** with PEC walls, **2,087 Mcells/s** with CPML absorbers — an open-boundary simulation pays the absorber, so quote the second for antenna/scattering work. Measured by marginal-cost differencing (`scripts/diagnostics/gpu_throughput_bench.py`); see the benchmark guide for other cards. |
| **Differentiable** | `jax.grad` through…
