---
repo: "vertti/daffy"
name: "daffy"
description: "Lightweight DataFrame validation decorators for Pandas, Polars, Modin, and PyArrow. No custom types required."
readmeQualityOk: true
url: "https://github.com/vertti/daffy"
homepage: "https://daffy.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pandas", "dataframe", "validation", "polars", "pydantic", "data-quality", "data-validation", "dataframe-schema", "decorator", "python"]
stars: 58
forks: 5
openIssues: 1
closedIssues: 2
watchers: 8
contributors: 8
recentReleases: 0
createdAt: "2021-01-31T09:27:29Z"
lastCommitAt: "2026-07-15T05:54:33Z"
lastReleaseAt: "2025-11-27T06:35:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 51
maintainers: ["renovate[bot]", "vertti"]
openGraphImageUrl: "https://opengraph.githubassets.com/b102bb06574a4a9960cad53b0ea12f14957ab7ae015a0c516cd2f5c8e849de2b/vertti/daffy"
fundingLinks: ["THANKS_DEV:https://thanks.dev/u/gh/vertti", "BUY_ME_A_COFFEE:https://buymeacoffee.com/vertti"]
---

# Daffy — Validate pandas & Polars DataFrames with Python Decorators

**Validate your pandas and Polars DataFrames at runtime with simple Python decorators.** Daffy catches missing columns, wrong data types, and invalid values before they cause downstream errors in your data pipeline.

Also supports Modin and PyArrow DataFrames.

- ✅ **Column & dtype validation** — lightweight, minimal overhead
- ✅ **Value constraints** — nullability, uniqueness, range checks
- ✅ **Row validation with Pydantic** — when you need deeper checks
- ✅ **Works with pandas, Polars, Modin, PyArrow** — no lock-in

---

## Installation

```bash
pip install daffy
```

or with conda:

```bash
conda install -c conda-forge daffy
```

Works with whatever DataFrame library you already have installed. Python 3.10–3.14.

---

## Quickstart

```python
from daffy import df_in, df_out

@df_in(["price", "bedrooms", "location"])
@df_out(["price_per_room", "price_category"])
def analyze_housing(houses_df):
    # Transform raw housing data into price analysis
    return analyzed_df
```

If a column is missing, has wrong dtype, or violates a constraint — **Daffy fails fast** with a clear error message at the function…
