---
repo: "okkymabruri/news-watch"
name: "news-watch"
description: "news-watch: Indonesia's top news websites scraper"
readmeQualityOk: true
url: "https://github.com/okkymabruri/news-watch"
homepage: "http://okky.dev/news-watch/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["news", "newsscraper", "newswatch", "berita", "scraping-berita", "scraping", "indonesian-news"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-27T13:19:01Z"
lastCommitAt: "2026-07-18T05:46:25Z"
lastReleaseAt: "2026-01-16T12:01:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 72
maintainers: ["okkymabruri", "dependabot[bot]", "okky"]
openGraphImageUrl: "https://opengraph.githubassets.com/56318f0b20a87562c512dff7d3b8a575109ba3540cefba3752df8be6a2e9238e/okkymabruri/news-watch"
---

# news-watch: Indonesia's top news websites scraper

**Scope:** Reproducible MBG topic-modeling pass over the approved window
**2025-01-05 → 2026-07-17**, after `nr_topics=15` reduction (14 substantive
topics + 3,192 outliers). Final cleaned-corpus fingerprint
`470acdf80dbad4c4c66a42716c53be78eea08e04109b926bff101af58025f666`.
## placeholder

**Corpus identity (final cutoff, derived from the authoritative
`data/analysis/gate_report.json` and `tables/run_summary.json`; the legacy
`data/clean/gate_report.json` is a byte-identical private mirror of the
same report):**

| Stage | Count |
|---|---:|
| Raw rows ingested across all increments | 25,288 |
| Rows surviving the relevance gate | 18,406 |
| Link-unique rows after dedup | 8,895 |
| Cleaned rows that drive BERTopic | **8,862** |
| Distinct contributing sources | 48 |
playwright install chromium
```

Development setup: see https://okky.dev/news-watch/getting-started/

## Performance Notes

**⚠️ Works best locally.** Cloud environments (Google Colab, servers) may experience degraded performance or blocking due to anti-bot measures.

Some scrapers may work on a local machine but fail on remote servers, Linux CI, or GitHub Actions.…
