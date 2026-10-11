---
repo: "red-hat-data-services/ods-ci"
name: "ods-ci"
description: "odh qe tier tests"
readmeQualityOk: true
url: "https://github.com/red-hat-data-services/ods-ci"
language: "RobotFramework"
languages: ["RobotFramework", "Python"]
languagePcts: [68, 24]
stars: 16
forks: 140
openIssues: 31
closedIssues: 6
watchers: 15
contributors: 123
recentReleases: 0
createdAt: "2020-12-11T20:35:15Z"
lastCommitAt: "2026-10-11T10:14:36Z"
lastReleaseAt: "2022-05-10T15:42:32Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 61
maintainers: ["kobihk", "jland-redhat", "jstourac"]
openGraphImageUrl: "https://opengraph.githubassets.com/e038d3a73d7a1a46bcf3089b040dcf0f24df265894d3c8b38a294a9d835a62b1/red-hat-data-services/ods-ci"
---

# ODS-CI
ODS-CI is a framework to test [Red Hat OpenShift AI](https://www.redhat.com/en/technologies/cloud-computing/openshift/openshift-ai)
and its upstream project, [Open Data Hub](https://opendatahub.io/).

# Requirements
  1. Linux distribution that supports Selenium automation on top of either a Chromium/Google-Chrome web browser using [ChromeDriver](https://chromedriver.chromium.org) or Firefox web browser using [geckodriver](https://github.com/mozilla/geckodriver):
     * relevant web driver binaries can be downloaded here: [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing) or [geckodriver](https://github.com/mozilla/geckodriver/releases)
     * the `ChromeDriver` version must match the installed version of Chromium/Google-Chrome, for `geckodriver` see the release notes for particular release
     * install your web driver so that it's visible by Robot Framework during tests execution, e.g. into `~/.local/bin` path

  2. [Poetry](https://python-poetry.org/docs/#installation) tool installed and added to your `$PATH`.

# Quick Start
  1. Move to the ods_ci folder inside ods-ci repo
     ```bash
     cd ods_ci
     ```
  1. Create a variables file for all of…
