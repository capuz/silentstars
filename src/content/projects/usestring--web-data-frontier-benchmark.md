---
repo: "usestring/web-data-frontier-benchmark"
name: "web-data-frontier-benchmark"
description: "Compare web access APIs (web unblockers / scrape APIs) head-to-head against a fixed suite of ~90 real-world, hard-to-scrape URLs"
readmeQualityOk: true
url: "https://github.com/usestring/web-data-frontier-benchmark"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["scraping", "webdata", "benchmark", "evaluation", "proxy", "web-scraping"]
stars: 30
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-07-08T21:15:43Z"
lastCommitAt: "2026-11-02T17:56:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["EllAchE", "Rasbora1337", "jonathanvic1"]
openGraphImageUrl: "https://opengraph.githubassets.com/63dde51115b60c1626e09cf9371707334247e907cbca4c58fd7ffedbf9849b0a/usestring/web-data-frontier-benchmark"
---

# Web Data Frontier Benchmark

Compare web access APIs (web unblockers / scrape APIs) head-to-head against a fixed suite of 100
real-world, bot-protected URLs spanning 16 industries (Amazon, Walmart, Zillow, Cloudflare/PerimeterX-guarded
retail and travel sites, etc. — see [Target sites](#target-sites) for the full list). Each provider is sent
the same URLs; a request **passes** when the API returns a `2xx` status **and** the response body contains
the page's expected text.

Read the full write-up: [The Web Scraping Benchmark Problem](https://www.usestring.ai/blog/web-scraping-benchmark-problem).

## Results

Official run: **October 30, 2026** (100 targets × 5 attempts × 17 providers = 8,500 requests;
raw data in [`official_results/benchmark-2026-10-30T18-48-18-489Z.json`](https://github.com/usestring/web-data-frontier-benchmark/blob/HEAD/official_results/benchmark-2026-10-30T18-48-18-489Z.json)).

| Rank | Provider    | Success rate | Latency score |  Passed |
| ---: | ----------- | -----------: | ------------: | ------: |
|    1 | string      |        98.6% |         4.24s | 493/500 |
|    2 | scrapedo    |        94.0% |         5.08s | 470/500 |
|    3 | context_dev |…
