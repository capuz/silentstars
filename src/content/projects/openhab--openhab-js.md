---
repo: "openhab/openhab-js"
name: "openhab-js"
description: "openHAB JavaScript Library for JavaScript Scripting Automation"
readmeQualityOk: true
url: "https://github.com/openhab/openhab-js"
homepage: "https://www.openhab.org/addons/automation/jsscripting/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["javascript", "openhab", "smarthome"]
stars: 43
forks: 40
openIssues: 10
closedIssues: 161
watchers: 8
contributors: 24
recentReleases: 2
createdAt: "2021-11-12T22:32:56Z"
lastCommitAt: "2026-10-01T10:24:33Z"
lastReleaseAt: "2026-07-21T21:23:08Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 70
maintainers: ["florian-h05", "dependabot[bot]", "Nadahar"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c31c17d30e85ccd7aff73d6da05bfcc184551f2ba2c166ebbaf501d058c20da/openhab/openhab-js"
fundingLinks: ["CUSTOM:https://www.openhab.org/about/donate.html"]
discussionCount: 3
---

# openHAB JavaScript Library

This library aims to be a fairly high-level ES6 library to support automation in openHAB.
It provides convenient access to common openHAB functionality within rules including Items, Things, actions, logging, and more.

This library is included by default in the openHAB [JavaScript Scripting add-on](https://www.openhab.org/addons/automation/jsscripting/).

- [Installation](#installation)
  - [Default Installation](#default-installation)
  - [Custom Installation](#custom-installation)
- [Compatibility](#compatibility)
- [Configuration](#configuration)
  - [Rules in Main UI](#rules-in-main-ui)
  - [Event Object](#event-object)
- [Scripting Basics](#scripting-basics)
  - [`require`](#require)
  - [`console`](#console)
  - [Timers](#timers)
  - [Paths](#paths)
  - [Deinitialization Hook](#deinitialization-hook)
- [`JS` Transformation](#js-transformation)
- [Standard Library](#standard-library)
  - [Items](#items)
  - [Things](#things)
  - [Actions](#actions)
  - [Cache](#cache)
  - [Time](#time)
  - [Quantity](#quantity)
  - [Utils](#utils)
  - [Environment](#environment)
- [Rules created from Script Files](#rules-created-from-script-files)
  -…
