---
repo: "vividfog/nordpool-predict-fi"
name: "nordpool-predict-fi"
description: "A Python app and ML model that predicts spot prices for the Nordpool FI market."
url: "https://github.com/vividfog/nordpool-predict-fi"
homepage: "https://sahkovatkain.web.app/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 34]
stars: 141
forks: 32
openIssues: 3
closedIssues: 16
watchers: 14
contributors: 2
recentReleases: 0
createdAt: "2024-02-11T19:41:54Z"
lastCommitAt: "2026-07-03T12:16:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 46
maintainers: ["vividfog"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5f8a9068d8a070f1c1c7a5ee4894a745840a05bdbbea13ef9c9a099885905ca/vividfog/nordpool-predict-fi"
---

# Nordpool FI Spot Price Prediction

**This is a Python app that predicts electricity prices for the Nordpool FI market. It fetches a 7-day weather forecast and more, and uses them to predict future Nordpool FI electricity prices, using a pair of XGBoost models. Can also work with Random Forest, Gradient Boost, and other decision tree based models.**

Live version: https://sahkovatkain.web.app

If you just want the predictions as raw data, you'll find them in the [deploy](deploy) folder. See [below](#home-assistant) for Home Assistant instructions.

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
  - [How long will this repository/data be…
