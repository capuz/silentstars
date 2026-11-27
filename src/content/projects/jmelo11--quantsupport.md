---
repo: "jmelo11/quantsupport"
name: "quantsupport"
description: "Quantitative finance library in Rust for derivatives pricing, curve bootstrapping, risk factor simulations, and XVA, all with AD support."
readmeQualityOk: true
url: "https://github.com/jmelo11/quantsupport"
homepage: "https://jmelo11.github.io/quantsupport/"
language: "Rust"
languages: ["Rust", "Jupyter Notebook"]
languagePcts: [64, 21]
topics: ["automatic-differentiation", "credit-risk", "derivatives-pricing", "equity", "fx", "interest-rates", "quantitative-finance", "risk-management", "xva"]
stars: 32
forks: 4
openIssues: 10
closedIssues: 15
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2023-08-19T22:51:40Z"
lastCommitAt: "2026-11-27T16:23:06Z"
lastReleaseAt: "2026-10-25T12:36:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 63
maintainers: ["jmelo11"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68dd96fa93609ae034659704f6e4203dcde0368aa1982ebeabaebe8c46c2de2/jmelo11/quantsupport"
discussionCount: 3
---

# QuantSupport

QuantSupport (QS) is a quantitative finance library written in Rust. It supports valuation across several asset classes,
market sensitivities using automatic differentiation, interest-rate and credit
curve construction, volatility markets, Monte Carlo simulation and XVA.

Observable quotes and fixings are stored separately from constructed market
objects, such as bootstrapped curves and implied-volatility surfaces.
Instruments define contractual terms, and trades add the position held.
Pricers combine those trades with the market data needed for valuation.

Add the Rust crate to your project with:

```sh
cargo add quantsupport
```

## Bindings

Python and Excel are maintained in separate repositories. Each owns its core
dependency pin, package version, build and release workflows, and documentation.
