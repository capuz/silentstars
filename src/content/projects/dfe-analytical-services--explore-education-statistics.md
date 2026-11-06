---
repo: "dfe-analytical-services/explore-education-statistics"
name: "explore-education-statistics"
description: "Explore education statistics (EES) is the Department for Education's official statistics dissemination platform, designed to make DfE’s published statistics and data easier to find, access, use and understand."
readmeQualityOk: true
url: "https://github.com/dfe-analytical-services/explore-education-statistics"
homepage: "https://explore-education-statistics.service.gov.uk/"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [57, 31]
stars: 18
forks: 7
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 38
recentReleases: 0
createdAt: "2018-12-17T10:20:11Z"
lastCommitAt: "2026-11-06T11:23:41Z"
lastReleaseAt: "2023-09-07T13:18:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 67
maintainers: ["duncan-at-hiveit", "benoutram", "mmoalin"]
openGraphImageUrl: "https://opengraph.githubassets.com/40a2f1f784b987a45f08e13c3a834b7122174af3e8d724ee361cc5a03a7a2c97/dfe-analytical-services/explore-education-statistics"
---

# Explore Education Statistics service

## Project structure

The project is primarily composed of two areas:

### Public frontend (for public users)

- **UI** - `src/explore-education-statistics-frontend`
  - Next.js React app
  - Depends on:
    - Content API
    - Data API
    - Notifier

- **Content API** - `src/GovUk.Education.ExploreEducationStatistics.Content.Api`
  - Private API providing content for UI app
  - Depends on:
    - Publisher - to generate its cache

- **Data API** - `src/GovUk.Education.ExploreEducationStatistics.Data.Api`
  - Private API providing statistics for UI app
  - Depends on:
    - SQLServer `statistics` database (known as `public-statistics` in non-local environments)

- **Notifier**
    - Azure function for adding users to GOV.UK Notify

- **Public Data API** - `src/GovUk.Education.ExploreEducationStatistics.Public.Data.Api`
  - Public API providing statistics for public users
  - Depends on:
    - Postgres `public_data` database

### Admin (for admins and analysts)

- **UI** - `src/explore-education-statistics-admin`
  - CRA React app
  - Depends on:
    - Admin API

- **Admin API** - `src/GovUk.Education.ExploreEducationStatistics.Admin`
  -…
