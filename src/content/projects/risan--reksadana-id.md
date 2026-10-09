---
repo: "risan/reksadana-id"
name: "reksadana-id"
description: "API to get Indonesian mutual funds data from Bibit."
readmeQualityOk: true
url: "https://github.com/risan/reksadana-id"
homepage: "https://bibit-reksadana.risan.vercel.app"
language: "JavaScript"
languages: ["JavaScript", "Astro"]
languagePcts: [68, 21]
stars: 13
forks: 12
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-01-06T14:40:16Z"
lastCommitAt: "2026-10-09T18:56:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 86
maintainers: ["risan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5763dc012cf9422197650c27a69ab5ccb876b8ddc8833b69a43fdf00decd3eb7/risan/reksadana-id"
---

# Reksadana ID

Raw data for Indonesian mutual funds (reksa dana), and a website that reads it: [reksadana.risanb.com](https://reksadana.risanb.com). The data comes from four fund sources: the public API behind [Bibit](https://app.bibit.id/), the [Kontan pusatdata](https://pusatdata.kontan.co.id/reksadana) pages, [Bareksa](https://www.bareksa.com/id/data/reksadana/daftar), and the public fund pages of [Makmur](https://www.makmur.id/). Three more folders hold what the funds are measured against: benchmark index levels (from Bareksa), the exchange rate, policy rate and inflation (from Bank Indonesia), and the official monthly size of every fund (from OJK, the regulator). The data lives in this repository, so you can read it without calling any of the sites.

If you want the data, read [Get the data](#get-the-data) and [What is where](#what-is-where). If you maintain the project, start at [Run it yourself](#run-it-yourself).

## Contents

- [Get the data](#get-the-data): files, downloads, and the API
- [What is where](#what-is-where): the folders under `data/` and their columns
- [The website](#the-website): what it shows and how it computes its figures
- [Run it…
