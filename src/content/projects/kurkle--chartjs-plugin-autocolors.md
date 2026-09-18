---
repo: "kurkle/chartjs-plugin-autocolors"
name: "chartjs-plugin-autocolors"
description: "Automatic color generation for Chart.js"
readmeQualityOk: true
url: "https://github.com/kurkle/chartjs-plugin-autocolors"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [70]
topics: ["chart", "plugin", "automatic", "colors"]
stars: 79
forks: 9
openIssues: 0
closedIssues: 17
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2020-06-09T04:03:53Z"
lastCommitAt: "2026-09-18T08:26:54Z"
lastReleaseAt: "2022-12-12T06:09:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 48
maintainers: ["kurkle", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/112b0cdbc0552001f952f10762eb70c751c2ac234de223e822ad2549ff7a30c6/kurkle/chartjs-plugin-autocolors"
fundingLinks: ["GITHUB:https://github.com/kurkle"]
discussionCount: 3
---

# chartjs-plugin-autocolors

[Chart.js](https://www.chartjs.org/) plugin that automatically assigns a color to each dataset, data point, or
label — no more picking colors by hand or reusing the same few colors across every chart, for anyone already
charting with Chart.js.

## Example

## Installation

```bash
npm install chart.js chartjs-plugin-autocolors
```

Or via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors"></script>
```

## Quickstart

```js
import { Chart, registerables } from 'chart.js';
import autocolors from 'chartjs-plugin-autocolors';

Chart.register(...registerables, autocolors);

new Chart(document.getElementById('chart'), {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      { label: 'Dataset 1', data: [12, 19, 8, 15] },
      { label: 'Dataset 2', data: [6, 11, 14, 9] },
    ],
  },
});
```

See more integration options (script tag, other module loaders) in the [documentation](https://chartjs-plugin-autocolors.pages.dev/integration/).

## Documentation

You can find documentation for chartjs-plugin-autocolors at…
