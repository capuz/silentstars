---
repo: "VirtoCommerce/vc-module-google-ecommerce-analytics"
name: "vc-module-google-ecommerce-analytics"
description: "Provides Google Analytics for Virto Commerce storefront"
readmeQualityOk: true
url: "https://github.com/VirtoCommerce/vc-module-google-ecommerce-analytics"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["analytics", "google-ecommerce-analytics", "ecommerce", "tracking"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 4
watchers: 24
contributors: 21
recentReleases: 0
createdAt: "2016-07-21T10:09:21Z"
lastCommitAt: "2026-11-07T13:55:14Z"
lastReleaseAt: "2022-08-12T09:09:14Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 58
maintainers: ["vc-ci", "OlegoO", "yuskithedeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/badb0bf18af88294ba50ad4c87ec8d71da377795073edef855bf629658e84170/VirtoCommerce/vc-module-google-ecommerce-analytics"
---

# Integration with Google Analytics 4 & Google Tag Manager
Google Analytics 4 module allows you to assign Google Analytics Measurement Id and Google Tag Manager Container Id for a Store and measure traffic, ecommerce events to collect information about the shopping behaviour of your users. 

The module supports both direct GA4 integration and advanced Google Tag Manager integration for centralized tag management.

It also **reads back** from GA4 through the Data API, so other modules can ask what the collected events say — see [Reading analytics data](#reading-analytics-data).

## Key Features
1. Store Configuration.
1. Measure ecommerce with Vue B2B Theme and Virto Storefront.
1. Google Tag Manager integration for advanced tracking and tag management.
1. Ready for integration with other sales channels.
1. Application menu.
1. Reporting API: read collected events back from GA4 (`IAnalyticsService`) for other modules to build on.
1. Staged connection diagnostics for the reporting setup.

## Screenshots

## Setup

### Option 1: Direct GA4 Integration (Recommended for Simple Setups)
1. [Create Google Analytics 4 Account](https://support.google.com/analytics/answer/9304153)
1. Save…
