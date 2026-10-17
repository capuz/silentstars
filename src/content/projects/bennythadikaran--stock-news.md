---
repo: "BennyThadikaran/stock-news"
name: "stock-news"
description: "A Python Terminal script for displaying Corporate filings on BSE exchange."
readmeQualityOk: true
url: "https://github.com/BennyThadikaran/stock-news"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bse", "corporate-filings", "python3", "stock-market", "stock-news"]
stars: 24
forks: 10
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2023-10-24T11:54:22Z"
lastCommitAt: "2026-10-17T07:59:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 26
maintainers: ["BennyThadikaran"]
openGraphImageUrl: "https://opengraph.githubassets.com/de01425d9c8ae21b0d8d454de2228298e7a017157fdc3c89f7d2dced7d50493e/BennyThadikaran/stock-news"
---

# BSE NEWS.py

A Python Terminal script for displaying Corporate filings on BSE exchange.

- Corporate Announcements
- Result Calendar
- Corporate Actions like Dividend, Bonus, Splits etc.

Use it to track company updates, quarterly results, dividend, bonus etc on your portfolio stocks.

Python version: >= 3.8

If you ❤️ my work so far, please 🌟 this repo.

## Installation

1. Clone this repo

2. Install dependencies: `pip install -U bse`

### Initial Setup

1. **Create a text file** of all stock symbols. One on each line. This could be your stocks portfolio or a watchlist.

```
hdfcbank
tcs
infy
```

2. **Run the script** with `-f` or `--file` option passing the file path.

`py news.py -f watch.txt`

This will generate a `watchlist.json` file and display all announcements & actions for the day.

## Usage

After the initial setup, run the script with no options.

`py news.py`

By default, the current day announcements are printed.

To **print the previous day**, use `-p` or `--prev` option.

```bash
py news.py -p
# print yesterdays announcements
```

Add an optional integer number like `py news.py -p 3` to go 3 days back.

To **jump to a specific date**, use `-d` or `--date`…
