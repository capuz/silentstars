---
repo: "elixir-localize/localize"
name: "localize"
description: "Localization for Elixir"
readmeQualityOk: true
url: "https://github.com/elixir-localize/localize"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [97]
stars: 52
forks: 5
openIssues: 0
closedIssues: 21
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-01-11T00:32:14Z"
lastCommitAt: "2026-07-05T20:54:31Z"
lastReleaseAt: "2026-04-15T06:04:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 43
maintainers: ["kipcole9", "neilberkman"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b371c61ba60572b64b1afaabf8d06220690f0024b2038309f078d757900d2a6/elixir-localize/localize"
discussionCount: 2
---

# Localize

Locale-aware formatting, validation, and data access for Elixir, built on the [Unicode CLDR](https://cldr.unicode.org/) repository.

Localize consolidates the functionality of the `ex_cldr_*` library family into a single package. No compile-time backend modules or code generation is required — all CLDR data is loaded at runtime and cached in `:persistent_term`.

## Features

* **Numbers** — format integers, decimals, percentages, and currencies with locale-appropriate grouping, decimal separators, and symbols.

* **Number parsing** — parse locale-formatted strings back into numbers, including scanning numbers out of arbitrary text.

* **RBNF** — rule-based number formatting: spell-out ("one hundred twenty-three"), ordinals ("42nd"), Roman numerals, and other algorithmic systems.

* **Plural rules** — classify numbers into CLDR cardinal and ordinal plural categories for grammatically correct pluralization.

* **Dates and times** — format `Date`, `Time`, `DateTime`, and `NaiveDateTime` values using CLDR calendar patterns.

* **Relative times** — format time differences as human-readable phrases like "2 hours ago" or "in 3 days".

* **Intervals** — format date, time, and…
