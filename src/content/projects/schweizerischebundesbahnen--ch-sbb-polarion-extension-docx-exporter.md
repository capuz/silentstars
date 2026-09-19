---
repo: "SchweizerischeBundesbahnen/ch.sbb.polarion.extension.docx-exporter"
name: "ch.sbb.polarion.extension.docx-exporter"
description: "This Polarion extension provides possibility to convert Polarion Documents to DOCX files"
readmeQualityOk: true
url: "https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.docx-exporter"
language: "Java"
languages: ["Java", "HTML"]
languagePcts: [47, 31]
topics: ["polarion", "polarion-alm", "polarion-extension"]
stars: 8
forks: 0
openIssues: 5
closedIssues: 92
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-02-05T17:52:09Z"
lastCommitAt: "2026-09-18T20:16:36Z"
lastReleaseAt: "2025-09-05T08:04:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 72
maintainers: ["renovate[bot]", "grigoriev", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42cba47142467f612661dbc0d4035400451cc1bcc430623c070a5406cd446119/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.docx-exporter"
discussionCount: 5
---

# Polarion ALM extension to convert Documents to DOCX files

This Polarion extension provides possibility to convert Polarion Documents to DOCX files.
The extension uses [Pandoc](https://pandoc.org/) as a converter engine and requires it to run in [Docker as Service](#pandoc-configuration).

> [!IMPORTANT]
> Only latest version of Polarion is supported.
> Right now it is Polarion 2606.

> [!IMPORTANT]
> Please, read our [disclaimer](https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.docx-exporter/blob/HEAD/DISCLAIMER.md) before using this extension.

## Quick start

Please see separate [quick start page](https://github.com/SchweizerischeBundesbahnen/ch.sbb.polarion.extension.docx-exporter/blob/HEAD/QUICK_START.md) where briefly summarized all most important and applicable steps and configurations.

If you need deeper knowledge about all possible steps, configurations and their descriptions, please see sections below.

## Build

This extension can be produced using maven:
```bash
mvn clean package
```

## Installation to Polarion

To install the extension to Polarion `ch.sbb.polarion.extension.docx-exporter-<version>.jar`
should be copied to…
