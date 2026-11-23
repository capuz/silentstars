---
repo: "ioBroker/ioBroker.history"
name: "ioBroker.history"
description: "manages state history"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.history"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["history-adapter", "history", "storage", "iobroker"]
stars: 31
forks: 23
openIssues: 17
closedIssues: 121
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2014-08-20T15:28:39Z"
lastCommitAt: "2026-11-23T12:23:21Z"
lastReleaseAt: "2021-01-16T23:53:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["GermanBluefox", "ioBroker-Bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6df8746beadb0a467228c51896621d3e99d0610d042c127dedcbea8b8e59139/ioBroker/ioBroker.history"
---

# ioBroker.history

This adapter saves state history in a two-staged process.

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information on how to disable the error reporting, see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## Configuration
* [English description](https://github.com/ioBroker/ioBroker.history/blob/HEAD/docs/en/README.md)
* [Deutsche Beschreibung](https://github.com/ioBroker/ioBroker.history/blob/HEAD/docs/de/README.md)

## Messages for scripts and AI agents
`sendTo('history.0', 'help', {})` answers `{help, commands}`: a description of all messages (`getHistory`, `storeState`, `delete` ...) for AI agents (e.g. ioBroker.pi-agent) and script authors, and the list of all commands with `write: true` for the ones that change something.
