---
repo: "2scraper/lidl-scraper"
name: "lidl-scraper"
description: "Open-source Lidl US scraper in Python. Export grocery products, prices, unit prices and pack sizes to JSON or CSV."
readmeQualityOk: true
url: "https://github.com/2scraper/lidl-scraper"
homepage: "https://2scraper.com/scrapers/lidl-scraper/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["lidl", "playwright", "puppeteer", "scraper", "selenium", "grocery", "headless-browser", "price-tracking", "proxy", "web-scraping"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-09-20T14:01:00Z"
lastCommitAt: "2026-11-18T12:08:06Z"
lastReleaseAt: "2026-10-19T08:07:47Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 43
maintainers: ["jehrr", "chakh1ik"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b43c97a887ec5eefbe5b887dc8b8fd03ccb8881210436144f18ce85a6dde9f2/2scraper/lidl-scraper"
discussionCount: 1
---

# Lidl Scraper — US Grocery Prices and Unit Prices in Python

**Lidl scraper** — an open-source (MIT) Python tool that reads lidl.com (Lidl US) search and category pages and writes grocery products with prices, unit prices and sizes to JSON or CSV. The default is a local headless Chromium with no proxy, key or account; live engine runs passed on 2026-10-18, and prices depend on the store you pick (confirmed the same day). Use it to track grocery prices by store, or to compare two runs with the bundled diff tool.

lidl.com (Lidl US) grocery product scraper: a search term or a specials
category in, a flat list of products out. Three engines (Playwright
primary, Selenium and Puppeteer/pyppeteer for parity), JSON or CSV output,
an open, documented `Product` schema. Part of the
[2scraper](https://github.com/2scraper) family — same output contract,
exit codes, and family modules as `stockx-scraper` / `skyscanner-scraper`.

## Example output

Both records of [`sample_output.json`](https://github.com/2scraper/lidl-scraper/blob/HEAD/sample_output.json), trimmed from the
live Playwright run of 2026-09-20 — every column, in the output's order:
