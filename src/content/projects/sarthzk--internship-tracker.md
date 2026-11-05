---
repo: "Sarthzk/internship-tracker"
name: "internship-tracker"
description: "Tracks new tech internship postings in India from company career portals"
readmeQualityOk: true
url: "https://github.com/Sarthzk/internship-tracker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 98
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-22T11:15:08Z"
lastCommitAt: "2026-11-05T00:21:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 27
maintainers: ["github-actions[bot]", "Sarthzk"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bfcd02aadb1865d9b58eb8801b3bb87c9ec8d813d12bebb233561e4928629c5/Sarthzk/internship-tracker"
---

# India Tech Internships Tracker

An automatically updated list of **tech internships in India** (and remote-India) from the career
pages of 160+ companies that Indian students want to intern at, from big tech and banks to
startups: Google, Microsoft, Apple, Amazon, Nvidia, Goldman Sachs, Citi, Bosch, Quadeye, Juspay and
more. A small label under each company name shows what kind of company it is.

## How it works

A GitHub Actions job checks each company's official career page on a schedule, keeps only
internships located in India for tech roles, and compares them with what it saw last time.
New postings are saved to [`data/listings.json`](https://github.com/Sarthzk/internship-tracker/blob/HEAD/data/listings.json) and this page is regenerated.
There is no server and no database: this repository is the database.

**Get alerts on Telegram:** the only official channel is [t.me/tech_internships](https://t.me/tech_internships).
Any other channel using this name is not ours.

Links always go to the company's official career page. We never ask for money, personal
details or messages on WhatsApp/Telegram. Always apply on the company's site.

Closed listings from the last 90 days are in…
