---
repo: "DirazCoder/temporal-fmt"
name: "temporal-fmt"
description: "format and parse Temporal (PlainDate, PlainTime, PlainDateTime, ZonedDateTime) using date-fns-style tokens, with real validation — bad input throws instead of silently returning garbage. Locale-aware, no deps."
readmeQualityOk: true
url: "https://github.com/DirazCoder/temporal-fmt"
homepage: "https://npmjs.com/package/temporal-fmt"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 38]
topics: ["date", "date-fns", "format", "formatting", "i18n", "locale", "plaindate", "temporal", "time", "timezone"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-08-04T10:20:56Z"
lastCommitAt: "2026-11-21T11:38:14Z"
lastReleaseAt: "2026-08-04T17:00:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["DirazCoder", "pmwmedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/6072e813021986d8f27f163ca752b4fbe960264065e3156ed947c5e8f84f8c52/DirazCoder/temporal-fmt"
---

# temporal-fmt 🥶🔥

-brightgreen?style=flat-square)

Format and parse `Temporal` values (`PlainDate`, `PlainTime`, `PlainDateTime`, `ZonedDateTime`) using date-fns-style tokens. Bad input throws — no silent garbage. Locale-aware, zero dependencies.

Node 26 shipped `Temporal` without a string formatter. TC39's position: use `Intl.DateTimeFormat` and leave token-style formatting to userland. Fair enough — but if `'yyyy-MM-dd'` is muscle memory from date-fns or Day.js, this exists so you don't have to give that up.

Native on Node 26+. Below that, bring your own `Temporal` via a polyfill or `setTemporal()`. Import from subpaths to pull only what you use — see [Subpath imports](#subpath-imports).

Locale-aware tokens need Node 20+ regardless of path. Untested below Node 20.

> **Just want `format`/`parse`, nothing else, ever?** [`temporal-fmt-lite`](https://github.com/DirazCoder/temporal-fmt-lite) is a frozen snapshot of the 0.8.2 surface: same two functions, same locale support, no recurrence/business-calendar weight, no new tokens or exports coming. Security and correctness fixes only, no LTS promise. If you outgrow it, migrating to the full package is additive, not a rewrite.
