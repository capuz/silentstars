---
repo: "Dasharo/open-source-firmware-validation"
name: "open-source-firmware-validation"
description: "OSFV infrastructure with automated tests and scripts for managing test results"
readmeQualityOk: true
url: "https://github.com/Dasharo/open-source-firmware-validation"
homepage: "https://dasharo.github.io/open-source-firmware-validation/"
language: "RobotFramework"
languages: ["RobotFramework"]
languagePcts: [87]
stars: 26
forks: 21
openIssues: 220
closedIssues: 260
watchers: 5
contributors: 30
recentReleases: 1
createdAt: "2022-10-20T09:07:04Z"
lastCommitAt: "2026-09-03T07:26:45Z"
lastReleaseAt: "2026-09-09T08:21:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 68
maintainers: ["philipanda", "Kondix10", "miczyg1"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b54389fd601f3cb1e090d02f3839a13a63fd9f4326208b61ba07fe6ea8e3133/Dasharo/open-source-firmware-validation"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/3mdeb_com"]
---

# Open Source Firmware Remote Test Environment

The following repository contains set of tests and other features to conduct
Dasharo firmware validation procedures.

## Warning

**!!! WARNING !!!**
This repository is in the process of stabilization after migration
and multiple major reworks. Check the published tags and their descriptions
for information about the expected stability on selected platform.
It's recommended to run Dasharo regression tests on top of the most recent
version tags, like "v0.3.0". Use `git tag` to list all the published tags.

Use the top of the develop branch only if you are willing to risk unstable
regression runs and unexpected fails for the sake of the release_tests_devices features.
**!!! WARNING !!!**

## Table of contents

* [Lab architecture](#lab-architecture)
* [Test environment overview](#test-environment-overview)
* [Supported platforms](#supported-platforms)
* [Getting started](#getting-started)
    - [Initializing environment](#initializing-environment)
    - [Running tests](#running-tests)
    - [Running tests via wrapper](#running-tests-via-wrapper)
    - [Running regression tests](#running-regression-tests)
* [Checking Robot Framework…
