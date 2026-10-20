---
repo: "captn3m0/india-mutual-fund-ter-tracker"
name: "india-mutual-fund-ter-tracker"
description: "Tracking Total Expense Ratios of Indian Mutual Funds. Automatically updated daily."
readmeQualityOk: true
url: "https://github.com/captn3m0/india-mutual-fund-ter-tracker"
homepage: "https://captnemo.in/india-mutual-fund-ter-tracker/"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [62, 23]
topics: ["amfi-data", "git-scraping", "open-data", "indian-mutual-funds"]
stars: 17
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-04-06T02:12:08Z"
lastCommitAt: "2026-10-20T08:49:22Z"
lastReleaseAt: "2023-04-20T11:37:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["github-actions[bot]", "captn3m0"]
openGraphImageUrl: "https://opengraph.githubassets.com/282c604cd8ee2b35a481502819239a3b98ec81bfc1604770ec8b4aaae9284a64/captn3m0/india-mutual-fund-ter-tracker"
---

Indian Mutual Funds TER Tracker
-------------------------------

Tracks expense ratio changes for Indian Mutual Funds.
Watch the repository for any releases to get notified of any changes.

- `data.csv` holds the data. The Field headers are the same as https://www.amfiindia.com/ter-of-mf-schemes, with the exception of the TER Date field, which is dropped.
- Since v2, rows are keyed by NSDL Scheme Code and columns follow SEBI's revised TER breakup (BER, brokerage, transaction cost, statutory levies). v1 was keyed by scheme name and used the older 52(6A) breakup.
- You can directly access the latest version at <https://raw.githubusercontent.com/captn3m0/india-mutual-fund-ter-tracker/main/data.csv>.
- You can view the data online on GitHub at https://github.com/captn3m0/india-mutual-fund-ter-tracker/blob/main/data.csv

## Why

The emails sent by Mutual Funds are quite useless, as they don't contain the actual TER change, just a notification of the change.

Here's a sample notification for example:

.

You're expected to go to the website, and find the TER details on your own.

This is a simple tracker that allows you to watch the TER changes for all funds.

## Get Notified 

You can…
