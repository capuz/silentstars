---
repo: "giocaizzi/btc-cycles"
name: "btc-cycles"
description: "Chart of bitcoin price over the halving cycles"
readmeQualityOk: true
url: "https://github.com/giocaizzi/btc-cycles"
homepage: "https://giocaizzi.github.io/btc-cycles/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [95]
topics: ["bitcoin", "python"]
stars: 16
forks: 2
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-05T23:47:13Z"
lastCommitAt: "2026-07-18T05:46:45Z"
lastReleaseAt: "2024-07-20T18:57:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 69
maintainers: ["actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5fc4579f4fbaeb976658aad3e53606be55e2edd5889783be7b541faced4a7eb/giocaizzi/btc-cycles"
---

# btc-cycles

**Bitcoin price analysis across halving cycles.**

</div>

---

> This chart is updated daily at 5:00 UTC.

[**Interactive chart**](https://giocaizzi.github.io/btc-cycles/) | [Static chart](https://github.com/giocaizzi/btc-cycles/blob/main/notebooks/bitcoin.png)

---

Fetch Bitcoin price data, enrich it with halving cycle metrics (ATH, cycle progress, cycle lows), and render a polar chart. Cycles are computed using past halving dates and the predicted next halving from [watcher.guru](https://watcher.guru/bitcoin-halving).

```python
from btc_cycles import Bitcoin

btc = Bitcoin(
    source="cryptocompare",
    api_key="YOUR_API_KEY",
)

# static chart (matplotlib)
fig = btc.plot(from_date="2012-11-28")
fig.savefig("bitcoin.png")

# interactive chart (plotly)
fig = btc.plot(kind="interactive", from_date="2012-11-28")
fig.write_html("bitcoin.html")
```

## Installation

```bash
pip install btc-cycles
```

## Data Sources

| Source | API Key | Status |
|--------|---------|--------|
| [`cryptocompare`](https://www.cryptocompare.com/) | Free tier | **Default** |
| [`coinmarketcap`](https://www.coinmarketcap.com) | Paid | Not implemented |
| `coinmarketcap-free` | None |…
