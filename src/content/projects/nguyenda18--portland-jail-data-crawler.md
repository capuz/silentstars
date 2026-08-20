---
repo: "NguyenDa18/Portland-Jail-Data-Crawler"
name: "Portland-Jail-Data-Crawler"
description: "Scraper used for recording changes to Portland jail database"
readmeQualityOk: true
url: "https://github.com/NguyenDa18/Portland-Jail-Data-Crawler"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [93]
topics: ["dataframe", "datasette", "python", "python3", "scrapy", "scrapy-crawler", "scrapy-spider"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-07-20T05:17:34Z"
lastCommitAt: "2026-08-20T04:08:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 66
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/92671803934cba979422349bd143eda6f8a1c4a05c9e55f872da48bf9402ae36/NguyenDa18/Portland-Jail-Data-Crawler"
---

# Multnomah County Jail Crawler

## Purpose

Crawl through bookings of PDX Jail Database for data analysis and data transparency purposes. Update data files with scheduled jobs courtesy of GitHub actions.

- Visit Multnomah County Online Inmate Data website: use URL for all inmates in custody: [Link](https://apps.mcso.us/PAID/Home/SearchResults)
- Scrape inmate names and booking dates and update `csvs/inmate_bookings.csv` file
- Visit each inmate link and update `csvs/inmate_details.csv` with inmate details and total amounts for each type of charge against them
- Update `csvs/inmate_charges.csv` with list of charges for all inmates
- Update JSON files in `counts` folder with counts of each category daily

### Scraper Details
- Located at `inmates_spider/inmates_spider/spiders/inmates.py`
- Generate Dataframe of inmates and booking dates and update `csvs/inmate_bookings.csv`, sort by descending order of booking dates
- Follow each inmate's URL and generate metadata for each inmate, update `inmates_charges` MongoDB database with charge totals data

## Using
- BeautifulSoup
- Pandas
- GitHub Actions (for cron job running scraper)
- MongoDB (using pymongo Python package)

##…
