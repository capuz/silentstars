---
repo: "alphagov/frontend"
name: "frontend"
description: "Serves most frontend pages for www.gov.uk"
readmeQualityOk: true
url: "https://github.com/alphagov/frontend"
homepage: "https://docs.publishing.service.gov.uk/apps/frontend.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [76]
topics: ["govuk"]
stars: 51
forks: 22
openIssues: 31
closedIssues: 47
watchers: 50
contributors: 224
recentReleases: 0
createdAt: "2011-09-06T00:16:08Z"
lastCommitAt: "2026-09-16T08:48:19Z"
lastReleaseAt: "2023-08-15T13:30:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 49
maintainers: ["andysellick", "KludgeKML", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e97a4d587d14d885010da07639f93726127c6675b5cdcc185093a9bab477f48c/alphagov/frontend"
---

# Frontend

Frontend renders the citizen-facing part of content items, and some hard-coded routes.

The content items are obtained from ContentStore using the ContentStore#content_item method of [`gds-api-adapters`](https://github.com/alphagov/gds-api-adapters).

## Formats

| Format | Schema/Document Type | Live example(s) |
|---|---|---|
|AB testing             |hardcoded|https://www.gov.uk/help/ab-testing|
|Answer                 |[answer](https://docs.publishing.service.gov.uk/content-schemas/answer.html)|https://www.gov.uk/national-minimum-wage-rates|
|Asset placeholder      |hardcoded|https://assets.publishing.service.gov.uk/government/placeholder|
|Calendars              |[calendar](https://docs.publishing.service.gov.uk/content-schemas/calendar.html)|https://www.gov.uk/bank-holidays|
|                       ||https://www.gov.uk/when-do-the-clocks-change|
|Call for evidence   |schema: [call_for_evidence](https://docs.publishing.service.gov.uk/content-schemas/call_for_evidence.html)|https://www.gov.uk/government/calls-for-evidence/credit-union-common-bond-reform|
|…
