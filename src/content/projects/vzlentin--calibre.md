---
repo: "Vzlentin/calibre"
name: "calibre"
description: "Conformal forecasting for hierarchical time series"
readmeQualityOk: true
url: "https://github.com/Vzlentin/calibre"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["conformal-prediction", "demand-forecasting", "forecasting", "hierarchical-forecasting", "python", "time-series"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2026-03-15T15:32:23Z"
lastCommitAt: "2026-10-20T08:49:41Z"
lastReleaseAt: "2026-10-07T11:47:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 36
maintainers: ["Vzlentin", "MINCHELLA-Paul"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f06b3fd5c526f9cc40964bd1f779e87c79639139bd48cd2bc3f776dd328ea2/Vzlentin/calibre"
---

# Calibre

Calibre is a conformal forecasting library for panels of time series. It makes point
forecasts at many origins, reconciles them over a hierarchy, and calibrates bands and
bounds from out-of-sample residuals.

## Install

The package is `libcalibre` on PyPI, and the import name is `calibre`:

```sh
pip install libcalibre
# or
uv add libcalibre
```

The vendor model adapters need an extra: `stats` (statsforecast), `ml` (mlforecast), or
`neural` (neuralforecast).

```sh
pip install "libcalibre[stats]"
```

## Quick start

```python
import numpy as np
import pandas as pd

from calibre import Absolute, BottomUp, Hierarchy, LeadTime, Panel, SeasonalNaive, Signed
from calibre import SplitQuantile, Step, replay, rolling_forecasts
from calibre.metrics import coverage

rng = np.random.default_rng(0)
series = np.array(["a", "b", "c"])
periods = pd.date_range("2024-01-01", periods=120, freq="D")
panel = Panel(series, periods, rng.poisson(5.0, (3, 120)), "D")
hierarchy = Hierarchy.from_attributes(
    series, pd.DataFrame({"group": ["x", "x", "y"]}, index=series)
)

origins = np.arange(60, 113)  # each origin is the index of the last observed period
run = rolling_forecasts(panel,…
