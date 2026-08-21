---
repo: "MaastrichtU-IDS/cohort-explorer"
name: "cohort-explorer"
description: "🫀 Webapp to explore cohorts metadata for the iCARE4CVD project"
readmeQualityOk: true
url: "https://github.com/MaastrichtU-IDS/cohort-explorer"
homepage: "https://maastrichtu-ids.github.io/cohort-explorer"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 33]
topics: ["cohort-analysis", "cohort-studies", "sensible-data", "clean-room"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2024-02-16T13:29:25Z"
lastCommitAt: "2026-08-21T04:11:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 78
maintainers: ["anas-elghafari", "komi786"]
openGraphImageUrl: "https://opengraph.githubassets.com/4480fbae05f8d56a8bbd1f6ac72becf1d1c104ff1443a6501325b47ec23b5f5e/MaastrichtU-IDS/cohort-explorer"
---

# 🫀 iCARE4CVD Cohort Explorer

Webapp enabling the upload, exploration, and mapping of cohort metadata, built for the [iCARE4CVD project](https://icare4cvd.eu).

It interacts with a privacy computing platform ([Decentriq](https://www.decentriq.com/)) to create secure Data Clean Rooms (DCRs) where data scientists can run analyses on selected cohorts. The Cohort Explorer handles **only cohort metadata**; the actual sensitive cohort data is uploaded directly to Decentriq DCRs by data custodians after the DCR is configured via the Explorer.

## ✨ Key Features

This platform enables *data custodians* and *data scientists* to:

*   🔐 **Login:** Authenticate using their [Decentriq](https://www.decentriq.com/) account via OAuth. Access is restricted based on permissions configured within Decentriq.
    *   *Contact [Decentriq](https://www.decentriq.com/) to request an account if you are part of the iCARE4CVD project.*
*   ⬆️ **Upload Metadata:** Data custodians can upload CSV cohort metadata files (data dictionaries) describing the variables of their study cohort.
*   🔄 **Re-upload/Update:** Existing data dictionaries can be re-uploaded to correct or update information. Mappings…
