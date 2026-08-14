---
repo: "image-charts/chartjs-image-javascript"
name: "chartjs-image-javascript"
description: "Render Chart.JS chart as image"
readmeQualityOk: true
url: "https://github.com/image-charts/chartjs-image-javascript"
homepage: "https://documentation.image-charts.com/chart.js/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["chartjs", "chartjs-node", "chartjs-image", "chartjs-api"]
stars: 13
forks: 4
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-10-13T18:48:05Z"
lastCommitAt: "2026-08-14T05:15:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 60
undervaluedScore: 61
maintainers: ["FGRibreau"]
openGraphImageUrl: "https://opengraph.githubassets.com/38cf4bf813bd14097e452e428d377162945de4269b83c9e816f001ec2afd5427/image-charts/chartjs-image-javascript"
---

Generate [Chart.JS charts](https://www.chartjs.org/docs/latest/) as image and embed them everywhere in emails, pdf reports, chat bots...!

### Getting started

#### 1. Install Chart.JS Image [npm](https://www.npmjs.com/package/chart.js-image) Package

```bash
npm install chart.js-image --save
```

#### 2. Import Chart.JS Image

> CommonJS

```javascript
const ChartJSImage = require('chart.js-image');
```

> ES6

```javascript
import ChartJSImage from 'chart.js-image';
```

#### 3. Generate a chart image

```js
const line_chart = ChartJSImage().chart({
  "type": "line",
  "data": {
    "labels": [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    "datasets": [
      {
        "label": "My First dataset",
        "borderColor": "rgb(255,+99,+132)",
        "backgroundColor": "rgba(255,+99,+132,+.5)",
        "data": [
          57,
          90,
          11,
          -15,
          37,
          -37,
          -27
        ]
      },
      {
        "label": "My Second dataset",
        "borderColor": "rgb(54,+162,+235)",
        "backgroundColor": "rgba(54,+162,+235,+.5)",
        "data": [
          71,…
