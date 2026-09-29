---
repo: "b2522/hot_tdx"
name: "hot_tdx"
description: "Popular Themes Review"
originalDescription: "热门题材复盘"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/b2522/hot_tdx"
homepage: "https://hot-tdx.vercel.app"
language: "HTML"
languages: ["HTML", "JavaScript", "Python"]
languagePcts: [46, 26, 23]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-10T12:22:00Z"
lastCommitAt: "2026-09-29T08:10:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 59
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7694c0c6e65dc110d12ac63a08648fda57007b3d3e94d81bf7a1797a18d0d6c/b2522/hot_tdx"
---

# Stock Daily Limit Analysis System

## Project Introduction

The Stock Daily Limit Analysis System is a stock data crawling, storage, and analysis platform developed based on the Flask framework. The system is primarily used for crawling stock daily limit data, and provides data query, analysis, and visualization functions to help users better understand the daily limit trends in the stock market.

## Features

### Data Crawling Functions
- Scheduled crawling of daily limit data from stock data APIs
- Support for crawling single-day or historical data by date
- Data deduplication and update mechanisms
- Crawling time restrictions (to avoid interference during trading hours)

### Data Management Functions
- SQLite database storage for stock data
- Table partitioning by date, optimizing query performance
- Automatic index creation to improve search speed
- Support for create, read, update, and delete operations on data

### Search and Filtering Functions
- Stock name keyword search
- Support for Pinyin and Pinyin initial letter search
- Thematic sector filtering
- Date filtering functionality

### Data Visualization Functions
- Stock price increase ranking
- Multi-day board…
