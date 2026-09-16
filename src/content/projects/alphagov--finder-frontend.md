---
repo: "alphagov/finder-frontend"
name: "finder-frontend"
description: "Serves finder and search pages for GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/finder-frontend"
homepage: "https://docs.publishing.service.gov.uk/apps/finder-frontend.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
topics: ["govuk"]
stars: 26
forks: 7
openIssues: 11
closedIssues: 26
watchers: 49
contributors: 152
recentReleases: 0
createdAt: "2014-01-23T15:21:03Z"
lastCommitAt: "2026-09-16T08:47:58Z"
lastReleaseAt: "2023-08-21T10:32:28Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 93
undervaluedScore: 52
maintainers: ["dependabot[bot]", "govuk-ci", "andysellick"]
openGraphImageUrl: "https://opengraph.githubassets.com/311ea73f0bb1072c7ce46d6c113d2967f6ec12b5eb53b89144c3451e2f611dc3/alphagov/finder-frontend"
---

# Finder Frontend

Renders search on GOV.UK:

- [Site search](https://www.gov.uk/search) is available from the header of every page.
- Finder pages provide facetted searching over a collection of documents.
- Most of these pages support [subscribing to email alerts](https://github.com/alphagov/finder-frontend/blob/HEAD/docs/finder-email-alerts.md).

## Live examples

* [gov.uk/aaib-reports](https://www.gov.uk/aaib-reports)
* [gov.uk/drug-device-alerts](https://www.gov.uk/drug-device-alerts)
* [gov.uk/government/case-studies](https://www.gov.uk/government/case-studies)
* [gov.uk/government/people](https://www.gov.uk/government/people)
* [gov.uk/world/organisations](https://www.gov.uk/world/organisations)
* [gov.uk/international-development-funding](https://www.gov.uk/international-development-funding)

## Nomenclature

* Finder: Page containing a list of filterable documents and filters.
* Facets: Metadata associated with documents. See `app/models/*_facet.rb` for examples.
* Filters: Searchable/filterable metadata for example `case_state={open|closed}` for a CMA case.
* Parser: Transforms API responses into model objects.

## Technical documentation

This is a Ruby on Rails app,…
