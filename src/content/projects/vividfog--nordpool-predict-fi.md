---
repo: "vividfog/nordpool-predict-fi"
name: "nordpool-predict-fi"
description: "A Python app and ML model that predicts spot prices for the Nordpool FI market."
readmeQualityOk: true
url: "https://github.com/vividfog/nordpool-predict-fi"
homepage: "https://sahkovatkain.web.app/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [58, 35]
stars: 149
forks: 33
openIssues: 3
closedIssues: 17
watchers: 16
contributors: 2
recentReleases: 0
createdAt: "2024-02-11T19:41:54Z"
lastCommitAt: "2026-10-23T12:04:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 45
maintainers: ["vividfog"]
openGraphImageUrl: "https://opengraph.githubassets.com/ece2e547ee47a5960e91fe5c23c3fd656bdc231f898180e9c030e5ef20d9b3fd/vividfog/nordpool-predict-fi"
---

# Nordpool FI Spot Price Prediction

**This is a Python app that predicts electricity prices for the Nordpool FI market. It fetches a 7-day weather forecast and more, and uses them to predict future Nordpool FI electricity prices, using a pair of XGBoost models. Can also work with Random Forest, Gradient Boost, and other decision tree based models.**

Live version: https://sahkovatkain.web.app

If you just want the predictions as raw data, you'll find them in the [deploy](https://github.com/vividfog/nordpool-predict-fi/blob/HEAD/deploy) folder. See [below](#home-assistant) for Home Assistant instructions.

This repository contains all the code and most of the data to train the 2 required models, generate the predictions, and optionally provide an LLM-based narration of the results.

## Table of Contents
- [Nordpool FI Spot Price Prediction](#nordpool-fi-spot-price-prediction)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
  - [Major updates](#major-updates)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How does the model work?](#how-does-the-model-work)
    - [Hidden patterns in weather/price data](#hidden-patterns-in-weatherprice-data)
  -…
