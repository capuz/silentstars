---
repo: "wol-fi/volfi"
name: "volfi"
description: "Fast implied volatility based on the quantile formula."
readmeQualityOk: true
url: "https://github.com/wol-fi/volfi"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T21:01:31Z"
lastCommitAt: "2026-09-15T08:54:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 23
maintainers: ["wol-fi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1226795964/1648459a-f753-4359-87e6-73e243896382"
discussionCount: 0
---

# volfi v0.3.0: Fast Implied Volatility

`volfi` is a header-only C++17 reference implementation for inverting the Black–Scholes
price-to-implied-volatility map at machine precision, at vector-hardware throughput.

Version 0.3 adds the **book kernel**: one straight-line evaluation, with a single branch and
a 63-term table, that answers all but three quotes in thirty thousand of a real S&P 500 book
without routing and without iteration. It rests on an exact result. In the inverse's own
coordinates the small-moneyness expansion has rational coefficients (every coefficient beyond
one tabulated function of one variable is a rational number, Proposition 1 of the paper), and
the same rows, re-expanded in a conformal variable, reach across the interior into the deep
wing. The routed four-chart inverter of v0.2 stays in the tree as the fallback behind it and
as the coverage of the whole feasible domain.

Everything is a fixed sequence of fused multiply-adds shared by the scalar entry, the AVX-512
and AVX2 twins and the CUDA port, so batched results are **bit-identical** across instruction
sets, compilers and the device.

The accompanying paper (`docs/volfi_v0.3.0_paper.pdf`, *Implied…
