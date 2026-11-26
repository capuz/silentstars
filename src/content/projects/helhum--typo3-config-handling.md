---
repo: "helhum/typo3-config-handling"
name: "typo3-config-handling"
description: "Manage TYPO3 configuration for multiple environments or contexts with ease"
readmeQualityOk: true
url: "https://github.com/helhum/typo3-config-handling"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 38
forks: 26
openIssues: 1
closedIssues: 27
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2017-09-03T20:25:29Z"
lastCommitAt: "2026-11-26T12:59:48Z"
lastReleaseAt: "2021-10-16T09:14:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 38
maintainers: ["helhum"]
openGraphImageUrl: "https://opengraph.githubassets.com/47bb8f53f120852b47a21963ba30ba6ed5bde041c83e8430c44a124ec79421d6/helhum/typo3-config-handling"
fundingLinks: ["GITHUB:https://github.com/helhum", "CUSTOM:https://www.paypal.me/helhum/19.99"]
---

# Extended configuration handling for TYPO3 CMS

## Installation

Requires TYPO3 13.4.40+ or 14.3.12+ and PHP 8.2 or newer.

TYPO3 Config Handling does only work for composer enabled (Composer Mode) TYPO3 projects.

1. Run `composer req helhum/typo3-config-handling`

## Disclaimer

Before using this package you should be aware of the following:

1. To achieve maximum performance and convenience, this package overrides the
   TYPO3 class `TYPO3\CMS\Core\Configuration\ConfigurationManager`. As with any
   other overrides of classes from packages, this comes with several disadvantages,
   most prominently that bugfixes introduced in the upstream package won't
   automatically be applied when using this package. If you are reluctant to accept
   this disadvantage, you should abstain from using this package.
1. To achieve maximum performance in production, this package caches
   configuration values in a single file. This means, when you run your TYPO3
   application during development with `TYPO3_CONTEXT` set to `Production`, manual
   changes to configuration files affect the cache.
