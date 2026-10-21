---
repo: "duckduckgo/privacy-configuration"
name: "privacy-configuration"
description: "🎛 Configuration files used by DuckDuckGo's apps and extensions to control which privacy protections are enabled."
readmeQualityOk: true
url: "https://github.com/duckduckgo/privacy-configuration"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
stars: 216
forks: 135
openIssues: 1
closedIssues: 597
watchers: 71
contributors: 138
recentReleases: 0
createdAt: "2021-06-24T14:05:25Z"
lastCommitAt: "2026-10-21T08:47:44Z"
lastReleaseAt: "2021-11-09T11:41:38Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 43
maintainers: ["daxtheduck", "dependabot[bot]", "jdorweiler"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c9ac4f60c0ff3e224f3f431d69898a292672c2f836e0cf7f2a841d4e46cd8d/duckduckgo/privacy-configuration"
---

# DuckDuckGo Privacy Configuration

The configuration files within this repo are used by DuckDuckGo's Apps and Browser Extensions to control which privacy protections are enabled or disabled.

In some cases, privacy protections can cause conflicts that affect expected website functionality. Files in the `features` directory can be used to temporarily disable privacy protections or add exceptions for particular sites in order to restore expected site functionality.

All feature files contain an `exceptions` property which contains a list of sites on which a feature should be disabled to prevent breaking site functionality. Additionally there is an `overrides` directory which contains files that may add to these configurations for their respective platforms.

This repo also contains the code to build and deploy the configuration files.
These files (in the `generated` directory once built) are served from
https://staticcdn.duckduckgo.com/trackerblocking/config/v4/...

Please see the [Related Resources](#Related-Resources) section for a list of
files used by each platform.

## Documentation

- [Config Maintainer…
