---
repo: "2scraper/tractorsupply-scraper"
name: "tractorsupply-scraper"
description: "Tractor Supply product scraper in Python. Export store prices, unit prices, stock, pickup availability and ratings to JSON or CSV."
readmeQualityOk: true
url: "https://github.com/2scraper/tractorsupply-scraper"
homepage: "https://2scraper.com/scrapers/tractorsupply-scraper/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["akamai", "ecommerce", "fingerprints", "playwright", "price-monitoring", "proxy", "puppeteer", "scraper", "scraping-browser", "selenium"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-28T10:40:30Z"
lastCommitAt: "2026-11-05T14:04:57Z"
lastReleaseAt: "2026-10-15T22:48:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 30
maintainers: ["jehrr"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fb2357afecaba00fc4a41417b5205df0c4fd134cc5ab51ed50b7c09de284d56/2scraper/tractorsupply-scraper"
discussionCount: 0
---

# Tractor Supply Scraper — Store Prices, Stock and Ratings in Python

-orange)

**Tractor Supply scraper** — an open-source (MIT) Python tool that reads tractorsupply.com categories, whole departments and keyword searches and writes products priced at a specific store, with unit price, stock, pickup availability and ratings, to JSON or CSV. On this site it needs the 2Captcha Scraping Browser API with a US exit: measured 2026-09-28, that was the only client served, while datacentre curl, local Chromium, a US residential proxy and the 2Captcha Scraper API were all refused. Use it to build a product dataset or for store-level price monitoring, comparing two runs priced at the same store with `diff_runs.py`.

Scrapes [tractorsupply.com](https://www.tractorsupply.com) listings — a
category, a whole department, or a keyword search — into JSON and CSV, with
the prices **of a specific store**:

| `--mode` | what | example |
|---|---|---|
| `category` | a category or a whole department | `--category poultry-feed-treats`, `--url …/tsc/category/pet` |
| `search` | a keyword search, in any of the site's eight orderings | `--search "dog food" --sort price-asc` |

One row per product, 35…
