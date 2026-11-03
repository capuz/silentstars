---
repo: "alphagov/collections-publisher"
name: "collections-publisher"
description: "Publishes step by steps, /browse pages, and legacy /topic pages on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/collections-publisher"
homepage: "https://docs.publishing.service.gov.uk/apps/collections-publisher.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [84]
topics: ["govuk"]
stars: 9
forks: 6
openIssues: 1
closedIssues: 3
watchers: 62
contributors: 127
recentReleases: 0
createdAt: "2014-07-30T10:41:14Z"
lastCommitAt: "2026-11-03T11:14:59Z"
lastReleaseAt: "2023-08-30T08:15:02Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 57
maintainers: ["dependabot[bot]", "Tetrino", "PeterHattyar"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa2a681c8a1feda25855a8848c270c106111e960aea64845a18b2ef4247b972/alphagov/collections-publisher"
---

# Collections Publisher

This app is used by GDS and some departmental editors. It can publish:

- [/browse pages](https://www.gov.uk/browse/births-deaths-marriages/register-offices)
- [step by step pages](https://www.gov.uk/learn-to-drive-a-car) and [step by step sidebar navigation](https://www.gov.uk/driving-eyesight-rules)
- [coronavirus pages](https://www.gov.uk/coronavirus)

These pages are then served by the [collections app](https://github.com/alphagov/collections). It is also used to curate pages tagged to a browse page into "curated lists", instead of a single 'A-Z' list, as the following screenshots illustrate.

## Nomenclature

See the [README of collections frontend](https://github.com/alphagov/collections).

## Technical documentation

This is a Ruby on Rails application, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use…
