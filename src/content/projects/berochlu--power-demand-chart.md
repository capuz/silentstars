---
repo: "BEROCHLU/power-demand-chart"
name: "power-demand-chart"
description: "Japan power supply and demand visualization dashboard using ECharts."
originalDescription: "Japan power supply and demand visualization dashboard using ECharts."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/BEROCHLU/power-demand-chart"
homepage: "https://berochlu.github.io/power-demand-chart/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["webpack", "aws-s3", "dashboard", "echarts5", "electricity-consumption", "power-demand", "visualization"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2021-08-06T15:45:02Z"
lastCommitAt: "2026-07-28T14:56:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 59
maintainers: ["BEROCHLU"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f5b151c1abae043db48f04651b729d44194f9e5fb35c13c21b60d580520516/BEROCHLU/power-demand-chart"
---

This is a static web application that allows you to check Japan's power supply and demand performance using heat maps, time series graphs, stacked graphs, and composition ratio graphs.

This repository converts monthly CSV files into `dist/data/rowdata-all.json` and loads them in the browser to render with ECharts. It does not use a server-side API; aggregation and display are completed on the client side.

## Publication

It is published using GitHub Pages static web hosting.

[https://berochlu.github.io/power-demand-chart/](https://berochlu.github.io/power-demand-chart/)

A push to the `main` branch triggers GitHub Actions to automatically execute `npm install`, `npm run build`, and deploy `dist` to GitHub Pages.

## Main Features

- You can select the target period on a monthly basis.
- You can display `power demand`, `nuclear`, `geothermal`, `hydropower`, `thermal`, `biomass`, `wind power performance`, `wind power suppression`, `solar power performance`, `solar power suppression`, and `pumped storage`.
- You can aggregate and display data with a granularity of 1 hour, 1 day, 1 month, or 1 year.
- You can zoom in and move the period using ECharts' DataZoom.
- You can display…
