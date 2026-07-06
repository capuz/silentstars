---
repo: "tubedude/finance-elixir"
name: "finance-elixir"
description: "Financial calculations in Elixir — XIRR/IRR, NPV, time value of money, bonds, depreciation, and return metrics"
readmeQualityOk: true
url: "https://github.com/tubedude/finance-elixir"
homepage: "https://hexdocs.pm/finance"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["bonds", "depreciation", "elixir", "finance", "fintech", "hex", "irr", "npv", "time-value-of-money", "xirr"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2015-11-17T23:50:30Z"
lastCommitAt: "2026-07-06T07:03:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 86
maintainers: ["tubedude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5809d72434b4ecce6cf4d61ff5d17615130623e0b6e545d3c3a48c65d9781f4/tubedude/finance-elixir"
---

# Finance

An Elixir library for cash-flow analysis. It covers internal rate of return
(`xirr`/`irr`), net present value (`xnpv`/`npv`), and modified IRR (`mirr`),
along with the usual time-value-of-money and depreciation helpers. Options are
validated with `nimble_options`, and amounts may be `Decimal` values when you
have that optional dependency installed.

The functions are organised into domain modules:

- `Finance.CashFlow` — net present value and internal rate of return
  (`npv`, `xnpv`, `irr`, `xirr`, `mirr`), plus batched `irr_many`/`xirr_many`.
- `Finance.TVM` — time-value-of-money scalars (`pv`, `fv`, `pmt`, `ipmt`, `ppmt`,
  `nper`, `rate`) plus `amortization_schedule`.
- `Finance.Rates` — rate conversions (`effective_annual_rate`, `nominal_rate`,
  `continuous_to_periodic`).
- `Finance.Bonds` — fixed income (`price`, `ytm`, `duration`,
  `modified_duration`, `convexity`).
- `Finance.Depreciation` — `sln`, `syd`, `ddb`, `db`.
- `Finance.Returns` — performance and risk metrics (`volatility`, `cagr`,
  `payback_period`, `discounted_payback_period`, `profitability_index`, `twr`).
- `Finance.Solver` — the root-finding strategy behind the rate functions,
  swappable via the…
