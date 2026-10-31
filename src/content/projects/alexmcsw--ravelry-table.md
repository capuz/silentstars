---
repo: "alexmcsw/ravelry-table"
name: "ravelry-table"
description: "A `gt` table visualizing a more detailed view of the Ravelry Hot Right Now"
readmeQualityOk: true
url: "https://github.com/alexmcsw/ravelry-table"
homepage: "https://alexmcsw.github.io/ravelry-table/"
language: "JavaScript"
languages: ["JavaScript", "R"]
languagePcts: [79, 20]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-27T17:34:35Z"
lastCommitAt: "2026-10-31T15:58:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 73
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1781990c2003ec548ca32b4919b4f85eb89463d22e57747735d5033f56af25e8/alexmcsw/ravelry-table"
---

# Ravelry Table

My submission for the [2025 Table Contest](https://posit.co/blog/announcing-the-2025-table-and-plotnine-contests/)!

## The idea

[Ravelry](https://www.ravelry.com/) is a website for fibre artists to track and plan their projects as well as browse and sell knitting or crochet patterns. Ravelry has a "hot right now" section which features the patterns with the most visits in the last 24 hours. This list is a nice way to see what's trending but to view any pattern details you have to go in and click on each pattern.

In this table I fetch the Ravelry "hot right now" top 20 and present pattern details in a convenient and easy to read table so fibre artists can quickly decide if they're interested in a pattern.

## Technical details

I used the [`ravelRy`](https://github.com/walkerkq/ravelRy/) R package by Kaylin Pavlik to easily access the Ravelry API. I wrote some R code to fetch the 20 top "hot right now" patterns, fetch additional details about the patterns and their designers, and used the `gt` package to display the results in a beautiful table hosted in a Quarto dashboard with GitHub pages. I set up a GitHub action to automatically fetch new data each day and…
