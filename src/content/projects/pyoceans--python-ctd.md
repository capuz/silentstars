---
repo: "pyoceans/python-ctd"
name: "python-ctd"
description: "Tools to load hydrographic data into pandas DataFrame"
readmeQualityOk: true
url: "https://github.com/pyoceans/python-ctd"
homepage: "https://pyoceans.github.io/python-ctd/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 55
forks: 36
openIssues: 10
closedIssues: 26
watchers: 8
contributors: 14
recentReleases: 0
createdAt: "2013-07-19T16:19:36Z"
lastCommitAt: "2026-10-27T12:40:07Z"
lastReleaseAt: "2022-05-31T17:34:43Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 52
maintainers: ["ocefpaf", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b1e5b76a655294227fb63c01772a3b32cf75db07beb383737fa2e09615160f4/pyoceans/python-ctd"
---

# python-ctd

Tools to load hydrographic data as pandas DataFrame with some handy methods for
data pre-processing and analysis

This module can load [SeaBird CTD (CNV)](https://www.seabird.com/),
[Sippican XBT (EDF)](https://www.lockheedmartin.com/en-us/products/oceanographic-instrumentation.html),
and [Falmouth CTD (ASCII)](https://www.falmouth.com/) formats.

## Quick intro

You can install the CTD package with

```shell
conda install ctd --channel conda-forge
```

or

```shell
pip install ctd
```

and then,

```python
from pathlib import Path
import ctd

path = Path("tests", "data", "CTD")
fname = path.joinpath("g01l06s01.cnv.gz")

down, up = ctd.from_cnv(fname).split()
ax = down["t090C"].plot_cast()
```

We can do [better](https://www.go-ship.org/Manual/McTaggart_et_al_CTD.pdf):

```python
temperature = down["t090C"]

fig, ax = plt.subplots(figsize=(5.5, 6))
temperature.plot_cast(ax=ax)
temperature.remove_above_water().despike().lp_filter().press_check().interpolate(
    method="index", limit_direction="both", limit_area="inside"
).bindata(delta=1, method="interpolate").smooth(
    window_len=21, window="hanning"
).plot_cast(ax=ax)
ax.set_ylabel("Pressure (dbar)")…
