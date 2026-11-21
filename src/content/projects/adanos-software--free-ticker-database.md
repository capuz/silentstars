---
repo: "adanos-software/free-ticker-database"
name: "free-ticker-database"
description: "Free global stock & ETF ticker reference database - 60k+ tickers, 80+ exchanges, 80+ countries"
readmeQualityOk: true
url: "https://github.com/adanos-software/free-ticker-database"
homepage: "https://adanos.org/ticker-database/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data", "etf", "finance", "stocks"]
stars: 31
forks: 6
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-30T19:59:59Z"
lastCommitAt: "2026-11-21T13:28:58Z"
lastReleaseAt: "2026-04-13T08:00:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["alexander-schneider", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/127540db8346a952f2c2a92444bca3820988a05d9adbae33d6be8f1da55b9d44/adanos-software/free-ticker-database"
---

# Free Global Ticker Database

Free stock and ETF ticker reference data with collision-safe core listings, legacy primary tickers, listing-keyed venue rows, aliases, ISIN/WKN identifiers, cross-listings, and coverage reports.

## Snapshot

| Metric | Value | Meaning |
|---|---:|---|
| Core listings | 63,554 | Rows in `data/core_listings.csv`; one collision-safe core row per security keyed by `listing_key`. |
| Primary tickers | 65,644 | Rows in `data/tickers.csv`; one primary row per security. |
| Full listing rows | 97,691 | Rows in `data/listings.csv`; venue-level rows keyed by `listing_key`, including cross/secondary listings. |
| Stocks | 48,847 | Primary ticker rows where `asset_type=Stock`. |
| ETFs | 16,797 | Primary ticker rows where `asset_type=ETF`. |
| Exchanges | 86 | Distinct primary-listing exchange codes in `data/tickers.csv`. |
| Countries | 96 | Distinct non-empty `country` values in `data/tickers.csv`. |
| Aliases | 129,164 | Rows in `data/aliases.csv`; structured alias/name/identifier lookup rows. |
