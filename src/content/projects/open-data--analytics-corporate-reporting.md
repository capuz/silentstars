---
repo: "open-data/analytics-corporate-reporting"
name: "analytics-corporate-reporting"
description: "Analytics and Corporate Reporting for the Open Government Portal"
readmeQualityOk: true
url: "https://github.com/open-data/analytics-corporate-reporting"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2023-05-12T15:06:48Z"
lastCommitAt: "2026-11-03T19:04:58Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 72
maintainers: ["actions-user", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd1d5c85fb8cd5d50934f0fb30c781865505dc5b3033bb3133a9119bb453f35e/open-data/analytics-corporate-reporting"
---

> # **La version française suit**

# **analytics-corporate-reporting**

Analytics and Corporate Reporting for the Open Government Portal

## **About**

This repository contains python scripts developed to generate statics on the user journey on open data and proactive disclosure resources. These statics includes page views and downloads with regional and international dimensions.

## **GA4 Reporting Script**

Google Analytic 4 (GA4) is used to track open Canada portal usage. This script should run once a month to retrieve reports from GA4 using its API. 

**Prerequisite:** Create a new GA4 credential and save the JSON file as credentials.json locally. Then open the file  with an editor and copy the email contained to your GA4 property access management. Here is the link to create :  https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/service-py#create_credentials

**Step 1:** clone this repository or download GA4_reporting_script’s content only. Then add the credential file downloaded previously and two new folders named GA_TMP_DIR and GA_STATIC_DIR in the same folder. 

**Step 2:** Install required packages from requirements.txt file. You could step up…
