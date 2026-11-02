---
repo: "dalinaum/rs"
name: "rs"
description: "Calculates the KOSPI relative strength rating daily."
originalDescription: "매일 코스피 상대 강도 등급을 계산합니다."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/dalinaum/rs"
homepage: "https://dalinaum.github.io/rs/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 9
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-03-22T14:58:36Z"
lastCommitAt: "2026-11-02T17:56:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 93
undervaluedScore: 72
maintainers: ["dalinaum"]
openGraphImageUrl: "https://opengraph.githubassets.com/3635f3e0f7d54e89e2b117548ed4c5960fbef2078d34e4b8289812de07da4ee4/dalinaum/rs"
---

# Dalinaum's KOSPI Relative Strength Rating

We built a site based on [William O'Neil's Relative Strength Rating](https://www.williamoneil.com/proprietary-ratings-and-rankings/).

 * [Dalinaum's KOSPI Relative Strength](https://dalinaum.github.io/rs/)

The site is scheduled to update automatically with the KOSPI relative strength around 4 PM, Monday through Friday. If it isn't updated by 4:30 PM, there is a system error.

## William O'Neil's Relative Strength Rating

William O'Neil's site describes the calculation method as follows.

RELATIVE STRENGTH RATING

This technical tool is one of the most popular ways for clients to see the market's top performers. The Relative Strength Rating is the result of calculating a stock's percentage price change over the last 12 months. A 40% weight is assigned to the latest three-month period; the remaining three quarters each receive 20% weight. All stocks are arranged in order of greatest price percentage change and assigned a percentile rank from 99 (highest) to 1 (lowest).

## How This Site Calculates It

Following O'Neil's description, we calculated the price change for each of the four quarters, counted only the most recent quarter at…
