---
repo: "ioBroker/ioBroker.influxdb"
name: "ioBroker.influxdb"
description: "Store history data in InfluxDB (not for Windows)"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.influxdb"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 37]
topics: ["influxdb", "time-series", "iobroker", "storage", "history"]
stars: 37
forks: 33
openIssues: 21
closedIssues: 189
watchers: 9
contributors: 32
recentReleases: 0
createdAt: "2015-12-13T14:28:30Z"
lastCommitAt: "2026-11-23T12:25:47Z"
lastReleaseAt: "2020-07-22T06:54:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 63
maintainers: ["GermanBluefox", "ioBrokerTranslator", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e778e01b2ad59c96417c15427c93aa3abe5e56e7a0883fbf1f5d887452b51f7/ioBroker/ioBroker.influxdb"
---

# ioBroker.influxdb

This adapter saves state history into InfluxDB.

**The Adapter supports InfluxDB 1.x, 2.x and 3.x (Core and Enterprise)**

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## InfluxDB version support

### InfluxDB 1.x
If you have an InfluxDB 1.x installation (preferably `1.8.x` or `1.9.x`) then you choose "1.x" in the adapter configuration and enter the Host-IP and Port together with Username and Password for the Access.
You can also define a database name. The default is `iobroker`. On the first adapter start, this database is created.

When doing custom queries via the "query" message, you can use InfluxQL to select the data you want. FluxQL with InfluxDB 1.x is not supported (and will also not be added).
