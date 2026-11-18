---
repo: "kormax/felica-tool"
name: "felica-tool"
description: "Application for analyzing characteristics of FeliCa cards"
readmeQualityOk: true
url: "https://github.com/kormax/felica-tool"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["adhoc", "falp", "felica", "nfc-f", "osaifu-keitai", "jisx6319", "area", "service", "system"]
stars: 35
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-07T08:48:57Z"
lastCommitAt: "2026-11-17T21:28:59Z"
lastReleaseAt: "2025-12-10T21:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 44
maintainers: ["kormax"]
openGraphImageUrl: "https://opengraph.githubassets.com/d44d8a9122f4572df51d13d3d7f7597925d38912599752cbc65cb3027017e50f/kormax/felica-tool"
---

# FeliCa Tool

# Overview

This project implements tools for performing deep analysis of FeliCa card capabilities and the extraction of available data.

This application enables users to:
* Extract information about FeliCa cards, including:
  * Card identification (IDM, PMM);
  * System codes and services;
  * Block information and data;
  * Card capabilities.
* View detailed scan progress with step-by-step execution timings;
* View scan results, with information assembled from performed commands:
  * General information;
  * Command support report;
  * Enumeration of the detected service providers;
  * Per-system hierarchy overview:
    * Count of child nodes;
    * Key versions and types;
    * Auxiliary node properties;
    * Other node attributes;
    * Block data;
    * Related node annotation (names, service providers, etc);
  * Issuer information (issuance date, card serial number) for supported issuers.
