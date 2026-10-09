---
repo: "openmrs/openmrs-module-spa"
name: "openmrs-module-spa"
description: "The OpenMRS Java module that allows Tomcat to serve a Single-SPA"
readmeQualityOk: true
url: "https://github.com/openmrs/openmrs-module-spa"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 12
forks: 48
openIssues: 2
closedIssues: 0
watchers: 51
contributors: 76
recentReleases: 0
createdAt: "2019-05-09T21:15:37Z"
lastCommitAt: "2026-10-09T18:56:58Z"
lastReleaseAt: "2026-06-30T22:34:29Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 62
undervaluedScore: 31
maintainers: ["ibacher", "openmrs-bot", "dkayiwa"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3bbf46f8875c06c3a54286150a97bb5a63cda128123d7c700b4d348428d1bf/openmrs/openmrs-module-spa"
---

# OpenMRS Module SPA

This module provides backend functionality to serve frontend assets from the O3 single-page application.

## Prerequisites
- Maven
- Java >= 8

## Build

To build this module, first clone the repository. Then navigate into `openmrs-module-spa` and run the build command:

```sh
cd openmrs-module-spa && mvn clean install
```

## Configuration

By default, this module will serve files from the `frontend` sub-directory of the OpenMRS Application Directory. If you
need to serve files stored in a different location, you set the setting `spa.local.directory` to either an absolute path
or a path relative to the OpenMRS Application Directory.
