---
repo: "abhisheksreesaila/omxcore"
name: "omxcore"
description: "Modern GPU-native dataframes. Mojo kernels, one codebase for NVIDIA, AMD and Apple Silicon."
readmeQualityOk: true
url: "https://github.com/abhisheksreesaila/omxcore"
homepage: "https://abhisheksreesaila.github.io/omxcore/"
language: "Mojo"
languages: ["Mojo", "Python"]
languagePcts: [76, 23]
stars: 5
forks: 0
openIssues: 13
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-07T23:44:54Z"
lastCommitAt: "2026-10-25T09:01:50Z"
lastReleaseAt: "2026-10-14T17:38:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["abhisheksreesaila"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fc8f5a05059004cd2c9451dcb1716beb88052171040d1b799e4e4cbf8e8b4ad/abhisheksreesaila/omxcore"
---

# omxcore

**The data engine for the agent era.**

omxcore runs SQL on your CPU *and* your GPU, over the CSV and Parquet files you already have. It's one native library,
written in Mojo, with no Python inside. Apps link it like SQLite. Agents talk to it in JSON.

### ✨ [Read the story →](https://abhisheksreesaila.github.io/omxcore/story.html) · ▶ [Watch it as slides](https://abhisheksreesaila.github.io/omxcore/deck.html)
The journey, why Mojo, why it's built for agents, the numbers, and where it's going.

- **Your files stay yours.** No import, no new format. Point it at a CSV or a Parquet file and ask.
- **Your hardware, all of it.** CPU or GPU, chosen per query, with the reason.
- **Answers an agent can trust.** Exact decimals, errors with a line, a column and a hint, a note for every decision.

## Try it

```sh
mx sql "SELECT region, sum(revenue) AS revenue FROM 'orders.csv' GROUP BY region"    # JSON out, no Python
```

```python
import omxcore as mx   # 0.6.0 from PyPI: pip install "mxframe[runtime,sql]", then import mxframe as mx

out = mx.sql("SELECT dept, SUM(x) AS s FROM t GROUP BY dept ORDER BY dept", t=mx.scan_parquet("t.parquet").compute())
print(out.compute())
```

On…
