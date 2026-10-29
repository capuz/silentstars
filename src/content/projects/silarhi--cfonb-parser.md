---
repo: "silarhi/cfonb-parser"
name: "cfonb-parser"
description: "A PHP parser for CFONB 120 and 240 bank files (statements and transfers), with zero dependencies"
readmeQualityOk: true
url: "https://github.com/silarhi/cfonb-parser"
homepage: "https://cfonb-parser.silarhi.dev"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["cfonb", "ebics", "php", "cfonb-parser", "parser", "bank-statement", "cfonb120", "cfonb240"]
stars: 10
forks: 8
openIssues: 2
closedIssues: 11
watchers: 3
contributors: 8
recentReleases: 4
createdAt: "2020-04-07T19:50:16Z"
lastCommitAt: "2026-10-29T21:24:30Z"
lastReleaseAt: "2026-10-29T21:24:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 90
maintainers: ["guillaume-sainthillier", "renovate[bot]", "fezfez"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/253896771/b9fe12c1-141c-4723-ac42-633acab198ab"
---

alt="Latest Stable Version">
            alt="CI Status">

    Bank statements and transfers, with zero runtime dependencies.

    📖 <a href="https://cfonb-parser.silarhi.dev"><strong>Documentation</strong></a>

---

## Features

- **Zero dependencies** — only PHP is required, nothing else gets pulled into your project.
- **CFONB 120 statements** — `Statement` objects with opening/closing balances (`01`/`07`), operations (`04`) and their details (`05`).
- **CFONB 240 transfers** — `Transfer` objects with a header (`31`), transactions (`34`) and a total (`39`).
- **Signed amounts** — CFONB 120 decimals and sign characters are decoded: credits are positive, debits are negative.
- **Exact amounts** — since 6.6, every amount is also an exact decimal string (`getAmount(true)`, `"-22.79"`), to store and add without float errors.
- **Consistency checks** — since 6.6, `validate()` checks that a statement's operations belong to its account and add up to its closing balance, and that a transfer's transactions add up to its total.
- **Typed value objects** — getters return floats, dates (`DateTimeImmutable` for CFONB 120, typed `DateTimeInterface` for CFONB 240) and nullable strings, not…
