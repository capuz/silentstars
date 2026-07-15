---
repo: "N283T/zsasa"
name: "zsasa"
description: "High-performance SASA (Solvent Accessible Surface Area) calculation in Zig with Python bindings"
readmeQualityOk: true
url: "https://github.com/N283T/zsasa"
homepage: "https://n283t.github.io/zsasa/"
language: "Zig"
languages: ["Zig", "Python"]
languagePcts: [66, 32]
topics: ["bioinformatics", "python", "sasa", "structural-biology", "zig"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-23T06:36:31Z"
lastCommitAt: "2026-07-15T05:53:27Z"
lastReleaseAt: "2026-03-22T05:10:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 48
maintainers: ["N283T"]
openGraphImageUrl: "https://opengraph.githubassets.com/efa893e2c936ae883acdb8c00bd8671c4136c79d328433925c2a84e9df40eabf/N283T/zsasa"
discussionCount: 0
---

</p>

# zsasa

High-performance Solvent Accessible Surface Area (SASA) calculator in Zig.
Paper-era benchmarks cover FreeSASA agreement, proteome-scale batch throughput, large single structures, and low-memory MD trajectory analysis.

**[Documentation](https://n283t.github.io/zsasa/)** · **[Preprint](https://doi.org/10.64898/2026.06.29.733683)** · **[Benchmarks](https://n283t.github.io/zsasa/docs/benchmarks)** · **[Comparison](https://n283t.github.io/zsasa/docs/comparison)**

## Features

- **Two algorithms**: Shrake-Rupley and Lee-Richards, with bitmask LUT optimization
- **Multiple input formats**: mmCIF, BinaryCIF (`.bcif`), PDB, SDF/MOL, JSON, XTC, TRR, DCD, AMBER NetCDF
- **Batch & trajectory**: Proteome-scale directory processing, MD trajectory analysis
- **Python bindings**: NumPy, Gemmi, BioPython, Biotite, MDTraj, MDAnalysis
- **Four classifiers**: ProtOr, NACCESS, OONS, and CCD (bond-topology-based radii for any chemical component)
- **High performance**: SIMD, multi-threading, f64/f32 selectable, zero dependencies
- **Cross-platform**: Linux, macOS, Windows (pre-built wheels on PyPI)

## Quick Start

### Python

```bash
pip install zsasa
```

```python
import numpy as…
