---
repo: "alphagov/link-checker-api"
name: "link-checker-api"
description: "Checks links on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/link-checker-api"
homepage: "https://docs.publishing.service.gov.uk/apps/link-checker-api.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["govuk"]
stars: 7
forks: 4
openIssues: 5
closedIssues: 17
watchers: 54
contributors: 69
recentReleases: 0
createdAt: "2017-04-03T11:12:04Z"
lastCommitAt: "2026-10-20T08:50:06Z"
lastReleaseAt: "2023-08-29T07:41:47Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 93
undervaluedScore: 58
maintainers: ["dependabot[bot]", "govuk-ci", "yndajas"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c952a1bc81f8d8068c68699124b7748c85ad4564f202a07187c076db9b4f85f/alphagov/link-checker-api"
---

# Link Checker API

A web service that takes an input of URIs. It performs a number of checks on them to determine whether these are things that should be linked to.

## Nomenclature

- **Link**: The consideration of a URI and all resulting redirects that may occur from it.
- **Check**: The process of taking a URI and checking it as a Link for any problems that may affecting linking to it within content.
- **Batch**: The functionality to check multiple URIs in a grouping.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use GOV.UK Docker to run any commands that follow.**

### Running the test suite

```
bundle exec rake
```

### Further documentation

Check the [docs](https://github.com/alphagov/link-checker-api/blob/HEAD/docs) directory.

## Licence

[MIT…
