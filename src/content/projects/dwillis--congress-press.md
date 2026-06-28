---
repo: "dwillis/congress-press"
name: "congress-press"
description: "Congressional press releases as data"
url: "https://github.com/dwillis/congress-press"
homepage: "http://thescoop.org/congress-press/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 16
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T19:05:31Z"
lastCommitAt: "2026-06-28T01:45:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["github-actions[bot]", "dwillis"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a1b55148b3ae96dbea8d66b4eaa85f42bda7b0fa7166e974193793703a8bac7/dwillis/congress-press"
---

# congress-press

A collection of more than 670,000 congressional press releases from 2001 to the present, including full text, with daily updates powered by [python-statement](https://github.com/dwillis/python-statement).

## Data

The dataset contains press releases from over 860 members of Congress across both chambers. Data is stored as JSONL files organized by month in `data/YYYY/YYYY-MM.jsonl`.

Records come from two sources:

- **Legacy import** (2001-2020) - ~486,000 press releases with full text from the ProPublica Congress API
- **Scraper collection** (2020-present) - ~187,000 press releases collected via automated scrapers, with text extracted from individual pages

**IMPORTANT** this is not a comprehensive collection, mostly owing to departed members and periods when scraper coverage was incomplete. As of March 30, 2026, all current members with official websites are covered. See Caveats below for more details.

## How it works

A GitHub Actions workflow runs daily at 5am UTC in two phases:

1. **Metadata collection** - Scrapes press release listings (title, URL, date) from 536 congressional websites
2. **Text extraction** - Fetches full article text using newspaper4k…
