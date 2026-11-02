---
repo: "BAMresearch/MoDaCor"
name: "MoDaCor"
description: "new modular data corrections for any neutron or xray technique that produces 1D or 2D scattering/diffraction/imaging data"
readmeQualityOk: true
url: "https://github.com/BAMresearch/MoDaCor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 5
closedIssues: 26
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2025-02-12T10:53:23Z"
lastCommitAt: "2026-11-02T15:17:08Z"
lastReleaseAt: "2026-05-07T14:51:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 74
maintainers: ["toqduj"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7c07836617a1d9ba3bcf55ca25f2368c4606b38e676013e44027fc853c9b071/BAMresearch/MoDaCor"
discussionCount: 1
---

# MoDaCor

Reference-quality, traceable data corrections for monochromatic X-ray and
neutron scattering, diffraction, and imaging.

MoDaCor applies corrections as inspectable processing steps while preserving
physical units, multiple named uncertainty contributions, and provenance. It
prioritizes correction quality, reproducibility, and scientific review over
maximum throughput. Use it as a primary correction system or as a reference
against which faster instrument-specific implementations can be checked.

## QuickStart

[Install uv](https://docs.astral.sh/uv/getting-started/installation/), then let
it install Python and create an isolated environment:

```bash
uv python install 3.12
uv venv --python 3.12
source .venv/bin/activate
uv pip install modacor
```

This self-contained pipeline adds Poisson uncertainties to a synthetic detector
image and normalizes the counts by exposure time:

```python
import numpy as np

from modacor import ureg
from modacor.dataclasses.basedata import BaseData
from modacor.dataclasses.databundle import DataBundle
from modacor.dataclasses.processing_data import ProcessingData
from modacor.runner import run_pipeline_job
from modacor.runner.pipeline…
