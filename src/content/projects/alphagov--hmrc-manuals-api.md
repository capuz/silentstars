---
repo: "alphagov/hmrc-manuals-api"
name: "hmrc-manuals-api"
description: "API for HMRC to publish manuals to GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/hmrc-manuals-api"
homepage: "https://docs.publishing.service.gov.uk/apps/hmrc-manuals-api.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["govuk"]
stars: 6
forks: 10
openIssues: 0
closedIssues: 1
watchers: 65
contributors: 100
recentReleases: 0
createdAt: "2014-07-01T13:35:00Z"
lastCommitAt: "2026-10-20T08:49:45Z"
lastReleaseAt: "2023-09-06T10:48:20Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["yndajas", "dependabot[bot]", "govuk-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/e805c9d272724a71c1f7be8ebe36c9ad9fc409e5b153d9ca253afa6a00aaa338/alphagov/hmrc-manuals-api"
---

# HMRC Manuals API

Provides an API for a system built by HMRC to publish tax manuals onto GOV.UK. In many
ways it is analogous to a backend/admin app for publishing on GOV.UK. Content which
passes validation and checks for unsanitary content is submitted to the GOV.UK
Publishing API application. The application does not have a database itself. An HMRC
manual consists of two document types: the manual itself and manual sections.

## Nomenclature

- **Manual**: HMRC manual with title and description, contains many Sections. See [Adding or updating a manual](https://github.com/alphagov/hmrc-manuals-api/blob/HEAD/docs/extended_documentation.md#adding-or-updating-a-manual) for more details.

- **Section**: Sections can contain sub-sections and/or a content body. See [Adding or updating a section](https://github.com/alphagov/hmrc-manuals-api/blob/HEAD/docs/extended_documentation.md#adding-or-updating-a-manual-section) for more details.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker…
