---
repo: "ioBroker/ioBroker.echarts"
name: "ioBroker.echarts"
description: "Show all history data in one GUI"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.echarts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["charts", "echarts", "iobroker"]
stars: 22
forks: 11
openIssues: 76
closedIssues: 217
watchers: 11
contributors: 8
recentReleases: 0
createdAt: "2020-08-19T15:00:30Z"
lastCommitAt: "2026-08-27T14:25:27Z"
lastReleaseAt: "2021-03-27T15:42:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 61
maintainers: ["GermanBluefox", "github-actions[bot]", "Brainbug01"]
openGraphImageUrl: "https://opengraph.githubassets.com/38c7dc08702fcb2f3ef17a22af79e310a59cfa5182b43ee413ade7c02324d471/ioBroker/ioBroker.echarts"
---

# ioBroker.echarts

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)!

## echarts adapter for ioBroker

Build useful charts in ioBroker:

Use "Actual value" aggregation for predicted result.

## Usage

Add after the restart the tab in the admin:

The created preset can be accessed in web adapter too. URL: `http://IP:8082/echarts/index.html?preset=echarts.0.PRESETID`.

For `vis` there is a special widget with easy selection of presets.

### Tooltip

Lower case `i` indicates that the value was interpolated from the 2-neighbour values, and it does not exist at this time stamp.

### Data from JSON

You can define the data source from JSON. In this case you can create some custom state of type `json` and store the value like this:

```json
[
    { "ts": 1675887847000, "val": 45 },
    { "ts": 1675887848000, "val": 77 },
    { "ts": 1675887849000, "val": 180 }
]
```

Alternative following attribute names are supported for `val`: `value`, `v`, `data`, `y`.
And…
