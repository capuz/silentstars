---
repo: "w3c/specberus"
name: "specberus"
description: "Checker used at W3C to validate the compliance of Technical Reports with publication rules"
readmeQualityOk: true
url: "https://github.com/w3c/specberus"
homepage: "https://www.w3.org/pubrules/"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [72, 21]
stars: 91
forks: 59
openIssues: 37
closedIssues: 481
watchers: 27
contributors: 36
recentReleases: 0
createdAt: "2013-12-19T10:43:31Z"
lastCommitAt: "2026-07-28T15:01:22Z"
lastReleaseAt: "2016-03-29T09:13:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["dependabot[bot]", "kfranqueiro", "deniak"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c78ad2ca90464a21cfba6caa1364833a594c6840c08f43c0973cd237d6e0488/w3c/specberus"
---

# Specberus

Specberus is a checker used at [W3C](https://www.w3.org/) to validate the compliance of [Technical Reports](https://www.w3.org/TR/) with publication rules.

1. [Installation](#1-installation)
1. [Running](#2-running)
1. [Testing](#3-testing)
1. [JS API](#4-js-api)
1. [REST API](#5-rest-api)
1. [Profiles](#6-profiles)
1. [Validation events](#7-validation-events)
1. [Writing rules](#8-writing-rules)

## 1. Installation

Specberus is a [Node.js](https://nodejs.org/en/) application, [distributed through npm](https://www.npmjs.com/package/specberus).
Alternatively, you can clone [the repository](https://github.com/w3c/specberus) and run:

```bash
$ npm install
```

In order to get all the dependencies installed. Naturally, this requires that you have a reasonably
recent version of Node.js installed.

## 2. Running

Specberus runs as a web server, providing both HTML form UI and API endpoints.

### Syntax and command-line parameters

```bash
$ npm start [PORT]
```

Meaning of positional parameters:

1. `PORT`: where Specberus will be listening for HTTP connections.
   (Default `80`.)

Examples:

```bash
$ npm start
$ npm start 3001
```

**Note:** `npm start` relies on…
