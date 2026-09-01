---
repo: "alphagov/content-data-api"
name: "content-data-api"
description: "Data warehouse that stores content and content metrics to help content owners measure and improve content on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/content-data-api"
homepage: "https://docs.publishing.service.gov.uk/apps/content-performance-manager.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["govuk"]
stars: 22
forks: 10
openIssues: 0
closedIssues: 11
watchers: 52
contributors: 207
recentReleases: 0
createdAt: "2016-11-16T14:22:38Z"
lastCommitAt: "2026-09-01T08:45:21Z"
lastReleaseAt: "2023-08-15T14:44:21Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 57
maintainers: ["dependabot[bot]", "govuk-ci", "edavey"]
openGraphImageUrl: "https://opengraph.githubassets.com/3982713c67a33d2a21cb7bdf5b25cc0d1fef2d01951cbee88fc676bdca4ac69f/alphagov/content-data-api"
---

# Content Data API

A data warehouse that stores content and content metrics, and exposes this information via an API, to help content owners measure and improve content on GOV.UK.

Data is combined from multiple sources, including [Publishing API](https://github.com/alphagov/publishing-api), [Feedback](https://github.com/alphagov/feedback) and Google Analytics.

## Live examples

- [List all metrics](https://content-data-api.publishing.service.gov.uk/api/v1/metrics)
- [Last month of data for all organisations](https://content-data-api.publishing.service.gov.uk/content?date_range=last-month&search_term=&document_type=all&organisation_id=all)

## Nomenclature

- [Data warehouse](https://github.com/alphagov/content-data-api/blob/HEAD/docs/data-warehouse-what-and-why.md) - The database where we store all the metrics
- Fact - A record containing measurements/metrics
- Dimension - A characteristic that provides context for a fact (such as the time it was extracted, or the content item it belongs to)
- [Star schema](https://github.com/alphagov/content-data-api/blob/HEAD/docs/data-warehouse-schema.md) - The way we structure data in the data warehouse using fact and dimension tables
- ETL…
