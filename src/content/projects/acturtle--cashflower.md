---
repo: "acturtle/cashflower"
name: "cashflower"
description: "An open-source Python framework for actuarial cash flow models"
readmeQualityOk: true
url: "https://github.com/acturtle/cashflower"
homepage: "https://cashflower.acturtle.com"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["actuarial-modeling", "python", "actuarial-science", "actuary", "financial-modeling", "quantitative-finance"]
stars: 62
forks: 17
openIssues: 25
closedIssues: 203
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2022-06-27T06:47:17Z"
lastCommitAt: "2026-10-12T11:15:10Z"
lastReleaseAt: "2023-07-16T13:52:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 51
maintainers: ["zchmielewska", "sach98", "aminemanai2003"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8eea6fe31fb4b32a1d87c46fa2b92aec27c10ccc22a2305a1d2bbe2a248bdd/acturtle/cashflower"
discussionCount: 11
---

# Info

Cashflower is an open-source Python framework for actuarial cash flow models.

## Installation

*terminal*
```
pip install cashflower
```

## Create model

*python console*

```python
from cashflower import create_model

create_model("my_model")
```

Creates:

```
my_model/
    input.py
    model.py
    run.py
    settings.py
```

## Model

*my_model/model.py*
```python
from cashflower import variable

@variable()
def survival_probability(t):
    mortality_rate = 0.01
    if t == 0:
        return 1
    return survival_probability(t - 1) * (1 - mortality_rate)
```

## Calculate

*terminal*
```
python run.py
```

# Contribution

GitHub repository:

[https://github.com/acturtle/cashflower](https://github.com/acturtle/cashflower)

Documentation:

[https://cashflower.acturtle.com](https://cashflower.acturtle.com)
