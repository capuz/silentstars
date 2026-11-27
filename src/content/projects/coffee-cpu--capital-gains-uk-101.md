---
repo: "coffee-cpu/capital-gains-uk-101"
name: "capital-gains-uk-101"
description: "UK Capital Gains Tax made easy - Free, privacy-focused browser-based CGT calculator"
readmeQualityOk: true
url: "https://github.com/coffee-cpu/capital-gains-uk-101"
homepage: "https://cgtvisualiser.co.uk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["capital-gains-tax", "cgt-calculator", "hmrc", "section-104", "tax-calculator", "uk-tax", "bed-and-breakfast", "capital-gains", "cli", "freetrade"]
stars: 23
forks: 11
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 5
recentReleases: 6
createdAt: "2025-10-07T22:25:16Z"
lastCommitAt: "2026-11-27T16:27:58Z"
lastReleaseAt: "2026-11-25T18:45:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 74
maintainers: ["coffee-cpu", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0e1a7370c13d7ed98a8bfbf9e46999237ad88ab6382197a2c183101c7e95d83/coffee-cpu/capital-gains-uk-101"
---

# Capital Gains Tax Visualiser: free UK CGT calculator for shares

**Free, open-source UK Capital Gains Tax calculator for shares.** Import your broker CSV exports, apply HMRC's same-day, 30-day ("bed and breakfast") and Section 104 rules, and get SA108-ready figures, either in your browser or from the command line. Your transactions never leave your device.

**Try it now at [cgtvisualiser.co.uk](https://cgtvisualiser.co.uk)**

## What it does

1. **Imports your transaction history** from broker CSV exports. You can mix several brokers; the same share is matched across them.
2. **Converts to GBP** using HMRC's official monthly exchange rates (or HMRC yearly averages, or ECB daily rates).
3. **Adjusts for stock splits** (TCGA92/S127). Original quantities are kept, so you can check them against your statements.
4. **Applies HMRC's matching rules** in the right order:
   - **Same-day rule** (TCGA92/S105(1), CG51560): shares bought and sold on the same day are matched first.
   - **30-day "bed and breakfast" rule** (TCGA92/S106A(5) and (5A), CG51560): shares bought back within 30 days after a sale are matched next.
