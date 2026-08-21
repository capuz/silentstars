---
repo: "swyxio/gh-action-data-scraping"
name: "gh-action-data-scraping"
description: "this shows how to use github actions to do periodic data scraping"
readmeQualityOk: true
url: "https://github.com/swyxio/gh-action-data-scraping"
homepage: "https://www.swyx.io/github-scraping/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["git-scraping", "gh-actions", "cron"]
stars: 244
forks: 39
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-01-21T20:25:25Z"
lastCommitAt: "2026-08-21T04:11:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 60
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/806c50263ad5593a31a9d692a886d7caa250e0e4bff1cb4212206d75e2dbbfd2/swyxio/gh-action-data-scraping"
---

# gh-action-data-scraping

this repo shows how to use github actions to do automated data scraping, with storage in git itself! **free git storage and scheduled updates!!!**

## 2021 Update

You can read more in the [Blog Writeup](https://www.swyx.io/github-scraping/). 

As of May 2021, [Flat Data scraping](https://octo.github.com/projects/flat-data) is officially supported by GitHub, check them out.

## Basic Idea

- You set a cron triggered github action ([cron examples](https://crontab.guru/examples.html) - max frequency every 5 mins)
- it checks out your repo with https://github.com/actions/checkout
- `npm install` and run your scrape script, write files to somewhere in your repo. This repo uses Node, but you can use whatever language you want
- check it back in with https://github.com/mikeal/publish-to-github-action

The script looks like:

```yaml
# /.github/workflows/daily.yml
on:
  schedule:
    - cron:  '0 8 * * *' # every day at 8am
name: Pull Data and Build
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - name: Build
      run: npm install
    - name: Scrape
      run: npm run action 
      # env:
      #…
