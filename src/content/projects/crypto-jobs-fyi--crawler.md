---
repo: "crypto-jobs-fyi/crawler"
name: "crawler"
description: "The idea is to collect existing jobs directly from Web3 companies and aggregate them for future use and analysis"
url: "https://github.com/crypto-jobs-fyi/crawler"
homepage: "https://crypto-jobs-fyi.github.io/web/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 9
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-04-19T10:18:36Z"
lastCommitAt: "2026-06-26T06:48:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 82
maintainers: ["yury-dubinin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f687565c8534b0a9399b585343d796a26b2957e450706240501eaf9d51a040d2/crypto-jobs-fyi/crawler"
---

# crypto-jobs-crawler

A Python-based web crawler designed to scrape job listings from various crypto, AI, and Fintech company websites and Applicant Tracking Systems (ATS).

The goal is to build a dashboard with industry jobs and track industry health through index calculations.

## Supported Platforms (ATS)
The crawler supports major HR platforms including:
- **Greenhouse**
- **Ashby**
- **Lever**
- **Workable**
- **SmartRecruiters**
- **BambooHR**
- **Gem**
- And many custom company-specific scrapers (Coinbase, Ripple, Gemini, etc.)

## Architecture

- **Orchestration**: Entry points like `crawler_ai.py`, `crypto_crawler.py`, and `crawler_tech.py` manage the scraping process.
- **Scrapers**: Modular scraper classes in `src/` inheriting from `ScrapeIt`.
- **Data Models**: `CompanyItem` defines the target company, its jobs URL, and the scraper to use.
- **Automation**: GitHub Actions workflows automate periodic scraping and data updates via Pull Requests.

## How to use?

### Local Setup
1.  **Environment**: Python 3.12+ is recommended.
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
2.  **Run Crawler**:
    ```bash…
