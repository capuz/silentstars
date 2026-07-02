---
repo: "bitcoinsearch/summarizer"
name: "summarizer"
description: "Generation of easily accessible summarization feeds for public consumption"
url: "https://github.com/bitcoinsearch/summarizer"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [62, 34]
stars: 6
forks: 6
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2023-04-27T00:49:33Z"
lastCommitAt: "2026-07-02T06:34:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 88
maintainers: ["urvishp80", "0tuedon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2efe0fd2df2ef678696af9b1d7f77278d2e344539205167e858d424d4243ff9d/bitcoinsearch/summarizer"
---

# Welcome to the Summarizer!

This project summarizes the [bitcoin-dev](https://gnusha.org/pi/bitcoindev), [lightning-dev](https://lists.linuxfoundation.org/pipermail/lightning-dev) mailing lists, and [Delving Bitcoin](https://delvingbitcoin.org/) website.

## Overview

Utilizing data collected by the [scraper](https://github.com/bitcoinsearch/scraper) and stored in an Elasticsearch index, it uses several nightly cron jobs to automate the generation of easily accessible summarization feeds for public consumption.

### Current cron jobs

1. Daily [XML Generation](.github/workflows/xmls_gen_cron_job.yml) ([source](xmls_generator_production.py))
   - Queries Elasticsearch for documents from the last 30 days across each source. For each source, it retrieves existing XML files/summaries, while generating summaries for new posts (those lacking XML file).
   For each thread, it compiles inputs to generate a combined thread summary. This compilation includes the summaries of previous posts and the actual content of newer posts that have been added since the last run. 
   All generated summaries, both individual and combined, are formatted into XML files and committed to GitHub to be used…
