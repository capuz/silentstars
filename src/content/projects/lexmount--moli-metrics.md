---
repo: "lexmount/moli-metrics"
name: "moli-metrics"
description: "machine-generated public metrics and charts for Moli"
readmeQualityOk: true
url: "https://github.com/lexmount/moli-metrics"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-21T02:59:45Z"
lastCommitAt: "2026-11-09T03:30:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c63a04cfb93f5f7261196d7dd869d272f4bd11f04b677e637e50049d8416635/lexmount/moli-metrics"
---

# moli-metrics

Machine-generated public metrics and charts for [Moli](https://github.com/lexmount/moli).
This repository is automatically maintained — GitHub Actions checks the star count hourly and
regenerates the data and charts only when it has actually changed.

## Star history

## Embedding

To embed the chart elsewhere (e.g. moli's README), hot-link the raw SVGs:

```html
<picture>
  <source media="(prefers-color-scheme: dark)"
          srcset="https://raw.githubusercontent.com/lexmount/moli-metrics/main/assets/star-history-dark.svg">
  <img alt="Star history of lexmount/moli"
       src="https://raw.githubusercontent.com/lexmount/moli-metrics/main/assets/star-history.svg">
</picture>
```

## How it works

- [`scripts/update_star_history.py`](https://github.com/lexmount/moli-metrics/blob/HEAD/scripts/update_star_history.py) fetches star data for
  `lexmount/moli`, writes [`data/stars.json`](https://github.com/lexmount/moli-metrics/blob/HEAD/data/stars.json), and renders the SVGs in
  [`assets/`](https://github.com/lexmount/moli-metrics/blob/HEAD/assets/). No dependencies beyond the Python standard library.
-…
