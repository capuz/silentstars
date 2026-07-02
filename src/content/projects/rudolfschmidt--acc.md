---
repo: "rudolfschmidt/acc"
name: "acc"
description: "plaintext double-entry accounting command line tool"
url: "https://github.com/rudolfschmidt/acc"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 51
forks: 6
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-07-15T10:00:51Z"
lastCommitAt: "2026-07-02T06:33:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 50
maintainers: ["rudolfschmidt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a36838b3ed3b7fdefd79c8d00554bdffe28a8867124d6d2d7a75f8cda6e723ca/rudolfschmidt/acc"
discussionCount: 1
---

# acc

> **acc(ounting)** — a plaintext double-entry accounting CLI in the
> ledger tradition, written in Rust.

acc reads the [ledger](https://www.ledger-cli.org/) journal format and
continues John Wiegley's CLI-first lineage: reports, filters, currency
conversion, an interactive navigator — all driven from plaintext files
you own and edit with whatever tools you already use. Independent
codebase, its own semantic choices, no database, no cloud, no account.

---

## Quick start

```sh
cargo install acc
```

Put this in `journal.ledger`:

```
2024-01-01 (opening) initial balances
    assets:checking           $5000.00
    equity:opening           $-5000.00

2024-01-05 (42) Groceries
    expenses:food              $58.20
    assets:checking

2024-01-10 * paycheck
    assets:checking           $2500.00
    income:salary            $-2500.00
```

Run:

```
$ acc -f journal.ledger bal
 $7441.80 assets
 $7441.80   checking
$-5000.00 equity
$-5000.00   opening
   $58.20 expenses
   $58.20   food
$-2500.00 income
$-2500.00   salary
---------
        0
```

```
$ acc -f journal.ledger reg
2024-01-01 initial balances  assets:checking   $5000.00  $5000.00…
