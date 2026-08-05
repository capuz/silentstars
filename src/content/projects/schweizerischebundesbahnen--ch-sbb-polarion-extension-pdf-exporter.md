---
repo: "SchweizerischeBundesbahnen/ch.sbb.polarion.extension.pdf-exporter"
name: "ch.sbb.polarion.extension.pdf-exporter"
description: "Polarion extension for customised PDF exports"
readmeQualityOk: true
url: "https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.pdf-exporter"
language: "Java"
languages: ["Java"]
languagePcts: [59]
topics: ["polarion", "polarion-alm", "polarion-extension"]
stars: 23
forks: 5
openIssues: 12
closedIssues: 250
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2024-05-30T07:46:12Z"
lastCommitAt: "2026-08-05T06:07:04Z"
lastReleaseAt: "2024-07-16T16:40:32Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 62
maintainers: ["renovate[bot]", "grigoriev", "Jumas"]
openGraphImageUrl: "https://opengraph.githubassets.com/757867d08ce5a266ea0829503658bdad3631e82071fa92b9020125f189ad8623/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.pdf-exporter"
discussionCount: 49
---

# Polarion ALM extension to convert Documents to PDF files

This Polarion extension provides possibility to convert Polarion Documents to PDF files.
This is an alternative to native Polarion's solution.
The extension uses [WeasyPrint](https://weasyprint.org/) as a PDF engine and requires it to run in [Docker as Service](#weasyprint-configuration).

> [!IMPORTANT]
> Starting from version 8.0.0 only latest version of Polarion is supported.
> Right now it is Polarion 2606.

> [!IMPORTANT]
> Please, read our [disclaimer](https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.pdf-exporter/blob/HEAD/DISCLAIMER.md) before using this extension.

## Quick start

Please see separate [quick start page](https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.pdf-exporter/blob/HEAD/QUICK_START.md) where briefly summarized all most important and applicable steps and configurations.

If you need deeper knowledge about all possible steps, configurations and their descriptions, please see sections below.

## Build

This extension can be produced using maven:
```bash
mvn clean package
```

## Installation to Polarion

To install the extension to Polarion…
