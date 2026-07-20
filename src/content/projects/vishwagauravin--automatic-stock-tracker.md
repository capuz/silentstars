---
repo: "VishwaGauravIn/automatic-stock-tracker"
name: "automatic-stock-tracker"
description: "It tracks a screener.in screen and tracks all the stock changes happening, based on that it sends message to your telegram id everyday."
readmeQualityOk: true
url: "https://github.com/VishwaGauravIn/automatic-stock-tracker"
homepage: "https://itsvg.in"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["api-trading", "screener", "screeners", "script", "stock", "stock-analysis", "stock-market", "stock-trading"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-20T16:49:23Z"
lastCommitAt: "2026-07-20T06:34:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 56
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/a58d8107f5fccbe45a499d897d02d3ac3abac3483b2396f9e67b0a2d00cceead/VishwaGauravIn/automatic-stock-tracker"
---

# Automatic Stock Tracker and Notifier

This project fetches stock data from the my **SPECIAL** screen (list of stocks) on Screener.in (you can replace it with anything), and sends you a telegram notification daily based on which stock was added to the list or removed.

# How to use? 

#### Just get yourself added in [Telegram Channel](https://t.me/YourDailyStockTracker) (https://t.me/YourDailyStockTracker)
You will receive notification everyday @9:16AM (only if there is any change in the list)

## Features

- **Fetches stock data**: Retrieves stock names and prices from the provided URL.
- **Calculates differences**: Compares current data with previously fetched data and calculates additions and deletions.
- **Archiving**: Saves the differences to an archive folder with a timestamp if there are any changes.
- **Telegram Notifications**: Sends a Telegram message about added and removed stocks.
- **GitHub Actions**: Automatically runs the script daily at 9:16 AM IST via GitHub Actions.

&nbsp;
-----

&nbsp;

# For Developers 
## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/VishwaGauravIn/automatic-stock-tracker.git
cd automatic-stock-tracker
```
### 2.…
