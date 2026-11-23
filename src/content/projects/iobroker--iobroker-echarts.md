---
repo: "ioBroker/ioBroker.echarts"
name: "ioBroker.echarts"
description: "Show all history data in one GUI"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.echarts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["charts", "echarts", "iobroker"]
stars: 23
forks: 9
openIssues: 61
closedIssues: 255
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2020-08-19T15:00:30Z"
lastCommitAt: "2026-11-23T08:24:01Z"
lastReleaseAt: "2021-03-27T15:42:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 61
maintainers: ["GermanBluefox", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4085e3779081fc18785d097166cb5666e2f8cb640ccfd2d36180d54baf28063/ioBroker/ioBroker.echarts"
---

# ioBroker.echarts

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)!

## echarts adapter for ioBroker

Build useful charts in ioBroker:

Use "Actual value" aggregation for predicted result.

### One bar per data point

Normally the X-axis of a bar chart is the time and every bar is one interval. With **Bar settings → One
bar per line** the X-axis becomes the list of the lines instead: every line gets exactly one bar, which
shows the last value of that line. Together with the aggregation "Actual value" that is the current
value of every state, e.g. the consumption of every device.

**Horizontal bars** turns the chart by 90°, so the names stand on the Y-axis. That is the better choice
for long names or for many lines.

## Usage

Add after the restart the tab in the admin:

The created preset can be accessed in web adapter too. URL: `http://IP:8082/echarts/index.html?preset=echarts.0.PRESETID`.

For `vis` there is a special widget with easy selection of presets.
