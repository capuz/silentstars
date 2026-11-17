---
repo: "emilgeo/india2actual"
name: "india2actual"
description: "Convert Indian bank statements (CSV, Excel, PDF) into Actual Budget transactions with real merchant names"
readmeQualityOk: true
url: "https://github.com/emilgeo/india2actual"
homepage: "https://india2actual.emil.ge/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["actual-budget", "bank", "bank-statement", "hdfc", "icici", "india", "personal-finance", "sbi", "upi", "actualbudget"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-09-17T15:43:01Z"
lastCommitAt: "2026-11-17T14:44:36Z"
lastReleaseAt: "2026-10-20T16:03:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 57
maintainers: ["emilgeo", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a02063826c39a4c86f45b92b069fb8625f29d820952b626521083ef2ee8fcd95/emilgeo/india2actual"
---

# india2actual

Get your Indian bank statements into [Actual Budget](https://actualbudget.org),
with **real payee names instead of UPI reference strings**.

    &middot;
    &middot;

## Why this exists

**1. Actual has no bank sync for Indian banks, and is unlikely to get one soon.**
([more below](#limitations)). The only way to
get transactions in is to download a statement and import it yourself. This tool
makes that as painless as it can be: hand it the file your bank gave you (CSV,
Excel or PDF) and it either produces a clean CSV for Actual or puts the
transactions straight into your budget.

**2. UPI transactions are unreadable as they come.** Your bank describes two
orders from the same shop like this:

```
UPI/DR/412345678901/SWIGGY/YESB/swiggy@ybl/Payment
UPI/DR/419876543210/SWIGGY/YESB/swiggy@ybl/Payment
```

Every line has a different reference number, so Actual treats them as two
different payees. A few months in, you have hundreds of junk payees, reports by
payee tell you nothing, and Actual cannot learn your categories.

This tool pulls the name out of each line, so both become simply `Swiggy`:

| Date       | Payee          | Notes…
