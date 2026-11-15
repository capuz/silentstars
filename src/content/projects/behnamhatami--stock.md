---
repo: "behnamhatami/stock"
name: "stock"
description: "Tehran Stock Market Crawler and Analyzer"
readmeQualityOk: true
url: "https://github.com/behnamhatami/stock"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["stock-analysis", "stock", "stock-prices", "django", "python3", "python", "crawler"]
stars: 15
forks: 7
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-08-27T05:14:51Z"
lastCommitAt: "2026-11-15T08:08:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 51
maintainers: ["behnamhatami"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d5b53c57899726605cfe6a25241a77a4950933c1535322b27a08e50a134209b/behnamhatami/stock"
---

# Tehran Stock Market Crawler and analyzer

A django web app that helps you to crawl `TSETMC` share lists, share groups, historical data and live data of the day

## Features

- Download list of shares
- Download list of share groups
- Download history of share prices
- Download last day data of the shares including transaction board, prices and transaction datas
- Store historical data in database
- Efficient indexing and analyzing using `PANDAS` dataframe
- Normalizing Data of share prices due to events in share data
- Nice admin page for searching and editing data by using `Django` web framework
- Compatible with linux cron job system for crawling new historical data every day
- Compatible with `Django`
- Compatible with `PANDAS`
- Compatible with `sqlite` or every other production database supported by `Django`

## 0 - Install
```bash
git clone https://github.com/behnamhatami/stock
cd stock
sudo pip3 install -r requirements.txt 
```

## 1- Initialization
For first use you need initialize the database
```
python3 manage.py migrate
```

then you should crawl the data of the stock lists
```
python3 manage.py update_share_list
```

also you can deep crawl tse site for shares (the…
