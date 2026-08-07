---
repo: "andrew-codechimp/tsmart_ha"
name: "tsmart_ha"
description: "New Tesla T-Smart and other EUROICC water heaters Home Assistant integration"
readmeQualityOk: true
url: "https://github.com/andrew-codechimp/tsmart_ha"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["hacs", "home-assistant", "hacs-integration"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 6
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2024-03-16T08:52:59Z"
lastCommitAt: "2026-08-07T05:14:36Z"
lastReleaseAt: "2025-04-30T16:01:23Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["renovate[bot]", "andrew-codechimp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/772924333/a4bc3f29-a245-4ceb-a7d2-3c8df8be05e2"
fundingLinks: ["GITHUB:https://github.com/andrew-codechimp", "BUY_ME_A_COFFEE:https://buymeacoffee.com/codechimp"]
---

# Tesla T-Smart thermostat Home Assistant integration

This integration supports Tesla T-Smart and other branded water heaters made by EUROICC.

The integration provides a climate control with preset modes, current temperature sensor, a binary sensor for the relay, and a restart button.

Error and warning binary problem sensors (on when there's a problem) with attributes for error/warning codes are also provided for diagnostic purposes.

Additional binary sensors for each error and warning are available but disabled by default.

A synchronise time button is available if you use the inbuilt schedules and the time of the device drifts, but you do not have your thermostat internet facing to time sync automatically. This is disabled by default.

This project is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Tesla UK Limited or EUROICC.

_Please :star: this repo if you find it useful_  
_If you want to show your support please_

## Installation

If you are moving from the pdw-mb HACS version you should uninstall it first and remove the repository from HACS to avoid confusion. If you see two then select the one with the description starting with new.…
