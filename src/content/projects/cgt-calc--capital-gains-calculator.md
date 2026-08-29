---
repo: "cgt-calc/capital-gains-calculator"
name: "capital-gains-calculator"
description: "Calculate UK capital gains from broker exports — supports Charles Schwab, Freetrade, Hargreaves Lansdown, Interactive Brokers, Morgan Stanley, Sharesight, Trading 212, Vanguard and a custom RAW format."
readmeQualityOk: true
url: "https://github.com/cgt-calc/capital-gains-calculator"
homepage: "https://cgt-calc.uk"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["schwab", "capital-gains-calculator", "trading212", "morgan-stanley", "sharesight", "freetrade", "cgt", "hargreaves-lansdown", "hmrc", "interactive-brokers"]
stars: 253
forks: 106
openIssues: 18
closedIssues: 53
watchers: 5
contributors: 42
recentReleases: 0
createdAt: "2021-01-31T19:56:54Z"
lastCommitAt: "2026-08-29T17:26:44Z"
lastReleaseAt: "2022-08-22T11:45:32Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 43
maintainers: ["KapJI", "dependabot[bot]", "amaksoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/39c6703e2fe913d6b3ed4419568e1c952501fb874121e9bc1f55345dbdfe3d94/cgt-calc/capital-gains-calculator"
---

# <img src="https://cgt-calc.uk/assets/logo.svg" alt="" width="34" valign="middle"> UK Capital Gains Calculator

Calculate your **UK capital gains** from your investment transaction history and generate a detailed
calculation report. cgt-calc is intended for UK individual investors working from supported broker
exports.

Supported sources include **Charles Schwab**, **Freetrade**, **Hargreaves Lansdown**, **Interactive
Brokers**, **Morgan Stanley**, **Sharesight**, **Trading 212**, **Vanguard**, or a custom **RAW**
format.

For supported transactions, the tool converts prices to **GBP** and applies the UK **same-day**,
**30-day ("bed and breakfast")**, and **Section 104 holding** rules. It prints a summary of disposal
proceeds, allowable costs, gains, losses, dividends, and interest to the terminal and writes the
full calculations to a **PDF report**.

cgt-calc reports the net gain from the transactions you supply and, for supported tax years,
estimates the amount remaining after the annual exempt amount. It does **not** account for gains or
losses outside those inputs, apply tax rates, work out your final tax bill, or submit a tax return.
Some investment scenarios are not…
