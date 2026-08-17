---
repo: "ArturSepp/TrendFollowingSystems"
name: "TrendFollowingSystems"
description: "trendfollowing — closed-form trend-following analytics, reference system implementations, and reproducible futures evidence in Python for quantitative researchers and practitioners."
readmeQualityOk: true
url: "https://github.com/ArturSepp/TrendFollowingSystems"
homepage: "https://artursepp.github.io/TrendFollowingSystems/"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [67, 32]
topics: ["backtesting", "cta", "futures", "momentum", "python", "quantitative-finance", "replication", "systematic-trading", "time-series-momentum", "trend-following"]
stars: 19
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-07-20T12:23:01Z"
lastCommitAt: "2026-08-17T04:20:19Z"
lastReleaseAt: "2026-08-01T18:07:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 45
maintainers: ["ArturSepp"]
openGraphImageUrl: "https://opengraph.githubassets.com/54039810327a4407c9d8599656bf5b3c31cb2c95de40e354af1e32f0701f33cc/ArturSepp/TrendFollowingSystems"
---

# trendfollowing

`trendfollowing` — closed-form trend-following analytics, reference system implementations,
and reproducible futures evidence in Python for quantitative researchers and practitioners.

It is a research and replication library, not a broker integration or general-purpose execution
engine; portfolio analytics and reporting are delegated to `qis`.

**Paper:** Sepp, A. and Lucic, V., *The Science and Practice of Trend-Following
Systems*. **Read and download the paper on SSRN:**
[ssrn.com/abstract=3167787](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3167787)
(doi:[10.2139/ssrn.3167787](https://dx.doi.org/10.2139/ssrn.3167787)).
See [Citation](#citation) for the BibTeX entry. The replication material for
every figure and table is in [`papers/tf_systems/`](https://github.com/ArturSepp/TrendFollowingSystems/blob/HEAD/papers/tf_systems/).

`trendfollowing` implements the paper's central result: an exact decomposition
of the European trend-following system's P&L into an autocorrelation channel
and a squared-drift channel,

```math
\bar F_{1y} = h \sum_{m=1}^{\infty} \nu^{m}\rho(m)
+ \frac{l \sigma_{\mathrm{target}}}{\sqrt{a}} \mu^{2},
\qquad h = l…
