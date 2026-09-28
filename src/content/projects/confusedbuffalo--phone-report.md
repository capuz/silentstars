---
repo: "confusedbuffalo/phone-report"
name: "phone-report"
description: "Websites for displaying invalid phone numbers, opening hours and incomplete names in OpenStreetMap data"
readmeQualityOk: true
url: "https://github.com/confusedbuffalo/phone-report"
homepage: "https://confusedbuffalo.github.io/phone-report/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 33
forks: 20
openIssues: 17
closedIssues: 84
watchers: 2
contributors: 19
recentReleases: 2
createdAt: "2025-10-09T20:41:48Z"
lastCommitAt: "2026-09-28T10:06:11Z"
lastReleaseAt: "2026-07-11T03:13:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 66
maintainers: ["github-actions[bot]", "dependabot[bot]", "confusedbuffalo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6938a8c61d9db241825714f5d4a845b052b3bc322c851f3febe665de3cbcb8a/confusedbuffalo/phone-report"
---

# OpenStreetMap Phone Number, Opening Hours and Names Validator

This project generates static websites that report on issues in OpenStreetMap (OSM) data, including invalid phone numbers, invalid opening hours and incomplete names. The goal is to identify and provide an easy way to fix incorrect data in OSM.

The generated sites are available at:

- Invalid phone numbers: https://confusedbuffalo.github.io/phone-report/
- Invalid opening hours: https://opening-hours.pages.dev/
- Incomplete names: https://names-report.pages.dev/

The data is usually updated once per day.

## How it works

The project fetches data from OSM, validates it and generates static HTML reports. The process is as follows:

1.  **Fetch Data**: For each country and/or its subdivisions defined in `src/data/constants.js`, a planet extract is downloaded and filtered to relevant objects.
2.  **Validate Tags**: The fetched phone numbers are validated using `libphonenumber-js`. Numbers are checked for correct formatting and validity for the specific country. Opening hours are validated using `opening_hours.js`. The names are checked to see if the main name tag exists and if it matches one of the multi-lingual names,…
