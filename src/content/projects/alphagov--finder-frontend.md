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
openIssues: 9
closedIssues: 26
watchers: 49
contributors: 302
recentReleases: 0
createdAt: "2014-01-23T15:21:03Z"
lastCommitAt: "2026-08-28T12:21:49Z"
lastReleaseAt: "2023-08-21T10:32:28Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 94
undervaluedScore: 52
maintainers: ["dependabot[bot]", "govuk-ci", "KludgeKML"]
openGraphImageUrl: "https://opengraph.githubassets.com/348e5ee446dd8f569c55cd1f22eec44f4940ea0f130ad7d6d9414a1d0665d919/alphagov/finder-frontend"
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
