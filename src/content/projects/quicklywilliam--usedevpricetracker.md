---
repo: "quicklywilliam/usedevpricetracker"
name: "usedevpricetracker"
description: "Website to track the prices of  used electric vehicle prices across multiple sources"
readmeQualityOk: true
url: "https://github.com/quicklywilliam/usedevpricetracker"
homepage: "https://slowlywilliam.com/usedevpricetracker/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 5
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-21T00:19:14Z"
lastCommitAt: "2026-08-18T04:08:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/069f811328047192ef9a333569164fb8acba4c814f7ad6967596f07705144b09/quicklywilliam/usedevpricetracker"
---

# Used EV Price Tracker

A website tracking used EV prices, currently live [here](https://quicklywilliam.github.io/usedevpricetracker/). It's part market tracker, part price guide, part shopping tool. This is currently just a small hobby project, but bug reports and feature requests are welcome.

## Features

- **Multiple Sources**: CarMax, Carvana and Autotrader. Easiy extensible to more
- **Tracks Individua EV Models**: Currently tracks 16 different models, see [tracked-models.json](https://github.com/quicklywilliam/usedevpricetracker/blob/main/config/tracked-models.json).
- **Interactive Visualizations**:

## Architecture

- **Static Deployment**: Hosted on GitHub Pages with no backend required
- **Automated Daily Data Digestion**: GitHub Actions runs scrappers daily at midnight UTC
- **Simple Data Storage**: JSON files in `/data/{source}/{date}.json` committed to repository
- **Frontend**: React app with Chart.js visualizations

## Quick Start

### Run Frontend Locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

### Run Scrapers Locally

Run all scrapers:
```bash
node scrapers/run-all.js
```

Run a specific scraper:
```bash
node scrapers/run-all.js…
