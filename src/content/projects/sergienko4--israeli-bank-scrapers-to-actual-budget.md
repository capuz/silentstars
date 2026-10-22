---
repo: "sergienko4/israeli-bank-scrapers-to-actual-budget"
name: "israeli-bank-scrapers-to-actual-budget"
description: "Automatically import transactions from Israeli banks and credit cards into Actual Budget"
readmeQualityOk: true
url: "https://github.com/sergienko4/israeli-bank-scrapers-to-actual-budget"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["actual-budget", "automation", "bank-scraper", "budgeting", "camoufox", "docker", "fintech", "israel", "israeli-banks", "nodejs"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-18T17:07:02Z"
lastCommitAt: "2026-10-22T08:52:29Z"
lastReleaseAt: "2026-02-19T11:59:42Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 67
maintainers: ["dependabot[bot]", "sergienko4"]
openGraphImageUrl: "https://opengraph.githubassets.com/00423d5e6fc4011ceedef907b1db78808eb8f50afb34a7b4b702b4dc89100400/sergienko4/israeli-bank-scrapers-to-actual-budget"
fundingLinks: ["KO_FI:https://ko-fi.com/eugenesergienko"]
---

# Israeli Bank Importer

**Automatically import transactions from 19 Israeli banks and credit cards into [Actual Budget](https://actualbudget.org/).**

Powered by [**@sergienko4/israeli-bank-scrapers**](https://github.com/sergienko4/israeli-bank-scrapers) (fork of [eshaham/israeli-bank-scrapers](https://github.com/eshaham/israeli-bank-scrapers) with Amex/Isracard WAF fix and Camoufox stealth).

📖 **Full documentation:** <https://sergienko4.github.io/israeli-bank-scrapers-to-actual-budget/>

---

## TL;DR Quick Start

```bash
git clone https://github.com/sergienko4/israeli-bank-scrapers-to-actual-budget.git
cd israeli-bank-scrapers-to-actual-budget
cp config.json.example config.json
# edit config.json with your bank credentials + actualAccountId
docker compose up -d actual-server   # first-time: open http://localhost:5006
docker compose up -d                 # start the importer
docker compose logs -f
```

**Windows:** replace `$(pwd)` with `"C:\path\to\config.json"` in `docker run` examples.

See [Quick Start guide](https://sergienko4.github.io/israeli-bank-scrapers-to-actual-budget/getting-started/quick-start/) for the full walk-through.

---

## Supported Banks

| # |…
