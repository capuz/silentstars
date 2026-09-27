---
repo: "Akseleu-J/atomic-ops"
name: "atomic-ops"
description: "**Fused Gated DeltaNet‑2 (GDN‑2) kernels for TPU v5e in JAX/Pallas.**   Speeds up training by **10–39×** over the associative scan baseline "
readmeQualityOk: true
url: "https://github.com/Akseleu-J/atomic-ops"
homepage: "https://pypi.org/project/atomic-ops/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-06T12:08:27Z"
lastCommitAt: "2026-09-27T09:29:28Z"
lastReleaseAt: "2026-09-06T16:27:07Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 18
maintainers: ["Akseleu"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd4368c96552f511a68cf05ebe0c544d5dcbec169dca721a9f912306377abb2/Akseleu-J/atomic-ops"
---

# atomic_ops

## Packages

This repository ships **two generations** of GDN-2 Pallas kernels:

### `atomic_ops` v0.1.0 — stable
Fused forward + backward GDN-2 kernels. **10–39×** faster than
`associative_scan`. PyPI published.

### `atomic_gdn2` v0.2.0 — next generation
- Unified **mega-backward** (B2+B1+B3+B4+B5 in one Pallas launch)
- **T-22 numerical boundary** documented (`half_span < 88`)
- **9 specialized tests** (T1–T9) — finite differences, domain guard,
  canary, phantom-param audit
- Zero-shot MQAR to **2048 tokens** at 0.9995

```bash
pip install -e .
pytest tests_gdn2/ -v -m "not slow"
```

> `atomic_gdn2` is research-grade. `atomic_ops` remains stable production path.

**Fused Gated DeltaNet-2 (GDN-2) kernels for TPU v5e, written in JAX/Pallas.**
  </a>
  </a>
  </a>
  </a>
  </a>
</p>

---

A from-scratch port of the [NVlabs Gated DeltaNet-2](https://github.com/NVlabs/GatedDeltaNet-2) Triton kernels to `jax.experimental.pallas`, targeting **TPU v5e-8**. The backward pass is implemented as a single fused `custom_vjp` that reuses forward residuals instead of recomputing them.
**Kernel speedup vs `associative_scan`** — direct measurement, single TPU v5e-1,
B=4, D=128,…
