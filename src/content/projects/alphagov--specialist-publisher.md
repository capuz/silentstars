---
repo: "alphagov/specialist-publisher"
name: "specialist-publisher"
description: "Publishes specialist documents on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/specialist-publisher"
homepage: "https://docs.publishing.service.gov.uk/apps/specialist-publisher.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [81]
topics: ["govuk"]
stars: 13
forks: 10
openIssues: 0
closedIssues: 700
watchers: 52
contributors: 260
recentReleases: 0
createdAt: "2016-04-08T16:10:36Z"
lastCommitAt: "2026-08-28T12:23:45Z"
lastReleaseAt: "2023-08-25T09:45:55Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 62
maintainers: ["dependabot[bot]", "govuk-ci", "ChrisBAshton"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ca112262fbdc5eab1c1f6bc44e294f03bf4381b51cdfbb298045bfd3121feee/alphagov/specialist-publisher"
---

# Specialist Publisher

Publishing App for Specialist Documents.

This application does not store documents in a database of its own. Instead it uses Publishing API to store and retrieve documents. MySQL is used for storing local user records.

For each of the specialist finder schemas, `target_stack` property can be set to `draft` to only put the finder content onto the draft stack, and `live` to publish the finder to the `live` stack

## Some live examples

- [AAIB Reports](https://www.gov.uk/aaib-reports)
- [CMA Cases](https://www.gov.uk/cma-cases)
- [Countryside Stewardship Grants](https://www.gov.uk/countryside-stewardship-grants)
- [Drug Safety Update](https://www.gov.uk/drug-safety-update)
- [International Development Funds](https://www.gov.uk/international-development-funding)
- [Medical Safety Alerts](https://www.gov.uk/drug-device-alerts)
- [MAIB Reports](https://www.gov.uk/maib-reports)
- [RAIB Reports](https://www.gov.uk/raib-reports)
- [Research For Development Outputs](https://www.gov.uk/research-for-development-outputs)

## Nomenclature

- **Format**: Category of a Document. Format names are listed in the `Live Examples` section above and include `MAIB Reports` and…
