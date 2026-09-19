---
repo: "chvp/NanoLedger"
name: "NanoLedger"
description: "Ledger (plain text accounting) data entry app for Android"
readmeQualityOk: true
url: "https://github.com/chvp/NanoLedger"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "data-entry", "hacktoberfest", "kotlin", "plaintextaccounting"]
stars: 131
forks: 14
openIssues: 10
closedIssues: 64
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2023-08-30T17:30:55Z"
lastCommitAt: "2026-09-19T08:15:29Z"
lastReleaseAt: "2024-02-04T14:14:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 44
maintainers: ["chvp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d72793dfca5ee304252ec91e4e31543935b9dbb90ee44b198af72d68d3685d0/chvp/NanoLedger"
---

NanoLedger is a [Plain Text Accounting](https://plaintextaccounting.org/) data entry app for Android.

Only ledger/hledger-like syntax is supported.
View your transactions and quickly add new ones, with autocomplete on fields where it makes sense.

NanoLedger also supports deleting and editing transactions.
For editing, note that NanoLedger does not support the full (h)ledger syntax.
Transactions added with NanoLedger should be editable, but if you use more esoteric amount syntax, NanoLedger might not parse those correctly.
Dates are also required to be in ISO syntax (the same way NanoLedger writes them out).
If your date is not in this format, the current date will be picked.
