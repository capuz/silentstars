---
repo: "alphagov/local-links-manager"
name: "local-links-manager"
description: "Manages local links from local authorities on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/local-links-manager"
homepage: "https://docs.publishing.service.gov.uk/apps/local-links-manager.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [94]
topics: ["govuk"]
stars: 27
forks: 7
openIssues: 3
closedIssues: 4
watchers: 56
contributors: 199
recentReleases: 0
createdAt: "2016-03-03T15:00:55Z"
lastCommitAt: "2026-09-01T08:48:33Z"
lastReleaseAt: "2023-09-01T10:42:22Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 90
undervaluedScore: 49
maintainers: ["dependabot[bot]", "govuk-ci", "andysellick"]
openGraphImageUrl: "https://opengraph.githubassets.com/1edfa58b88c3f78674d5712fa0769655b1a69196f668b4a1ebf7a1644781fd05/alphagov/local-links-manager"
---

# Local-links-manager

Admin interface for managing Local Authorities' links including all their services and interactions.

For example, [this service](https://www.gov.uk/garden-waste-disposal) uses Local Links Manager to determine the URL of the garden waste disposal page on the Local Authority website which corresponds to the postcode a user has entered.

Note that Local Links Manager does not determine a user's Local Authority based on their postcode.

This app maps RESTful URLs onto a persistence layer. It doesn't face public users.

## Nomenclature

- **SNAC** - Standard Names And Code - The old identifier code for locations. This is being phased out in favour of GSS codes.
- **GSS**  - Government Statistical Service - The new identifier code for locations.
- **LGSL** - Local Government Services List
- **LGIL** - Local Government Interactions List

Both LGSL and LGIL codes are used for the lookups for each Local Authority and its service interactions.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions][conventions].

You can use the [GOV.UK Docker environment][govuk-docker] to run the application and its tests with all the…
