---
repo: "YihanWangAstro/VegasAfterglow"
name: "VegasAfterglow"
description: "High-performance C++ framework for afterglow modeling with Python bindings. Features fast multi-wavelength light curve generation, MCMC parameter inference, and advanced physics models including shock dynamics, radiation mechanisms, and structured jets. Designed for computational efficiency and scientific workflow integration."
readmeQualityOk: true
url: "https://github.com/YihanWangAstro/VegasAfterglow"
homepage: "https://vegasafterglow.readthedocs.io/en/latest/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [42, 38]
topics: ["afterglow", "astrophysics", "gravitational-waves", "grb", "high-performance", "jet", "kilonova", "magnetar", "mcmc", "modeling"]
stars: 49
forks: 7
openIssues: 3
closedIssues: 7
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-03-22T05:36:05Z"
lastCommitAt: "2026-10-22T08:50:34Z"
lastReleaseAt: "2026-03-05T15:36:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 33
maintainers: ["YihanWangAstro"]
openGraphImageUrl: "https://opengraph.githubassets.com/e72e2586eb60ba23e2690783cf1ecab98942cb95a86ee3ca76daa3fac909aa4f/YihanWangAstro/VegasAfterglow"
discussionCount: 1
---

# VegasAfterglow

**[Latest Release Notes](https://github.com/YihanWangAstro/VegasAfterglow/blob/HEAD/CHANGELOG.md#v200-beta---2026-02-02)** | **[Interactive Web Tool](https://www.vegasafterglow.com)** | **[Validation Report](https://yihanwangastro.github.io/VegasAfterglow/reports/latest/)** | **[Install Now](#installation)**

* **Advanced Inference:** While VegasAfterglow includes a standalone fitter, its models are also integrated into [**Redback**](https://github.com/nikhil-sarin/redback) for more advanced Bayesian inference, model comparison, and multi-messenger analysis.
* **Community Tools:** We also recommend checking out [**PyFRS**](https://github.com/leiwh/PyFRS), [**Jetsimpy**](https://github.com/haowang-astro/jetsimpy), [**ASGARD**](https://github.com/mikuru1096/ASGARD_GRBAfterglow) as tool for afterglow modeling.

Institutes behind the [papers using VegasAfterglow](https://yihanwangastro.github.io/VegasAfterglow/papers/) — refreshed weekly.

---

## Quick Start

```bash
pip install VegasAfterglow
```

```python
import numpy as np
import matplotlib.pyplot as plt
from VegasAfterglow import ISM, TophatJet, Observer, Radiation, Model

model = Model(…
