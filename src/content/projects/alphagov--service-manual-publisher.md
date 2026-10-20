---
repo: "alphagov/service-manual-publisher"
name: "service-manual-publisher"
description: "Publishes the Service Manual on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/service-manual-publisher"
homepage: "https://docs.publishing.service.gov.uk/apps/service-manual-publisher.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [76]
topics: ["govuk"]
stars: 12
forks: 15
openIssues: 3
closedIssues: 2
watchers: 55
contributors: 99
recentReleases: 0
createdAt: "2015-10-06T14:45:26Z"
lastCommitAt: "2026-10-20T08:49:54Z"
lastReleaseAt: "2023-08-30T13:35:14Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 87
undervaluedScore: 57
maintainers: ["dependabot[bot]", "govuk-ci", "ChrisBAshton"]
openGraphImageUrl: "https://opengraph.githubassets.com/1540d27e3afc5a6c4f6818751d969ed8a341c8b994446a29e2007caefedc8320/alphagov/service-manual-publisher"
---

# Service Manual Publisher

Service Manual Publisher is used for publishing and maintaining https://www.gov.uk/service-manual. This application, together with [Service Manual Frontend](https://github.com/alphagov/service-manual-frontend) replaced the previous [Jekyll-based service manual](https://github.com/alphagov/government-service-design-manual).

## Nomenclature

- **Guide**: A guide is the main document format used for manuals.
- **Guide Community**: A profile page that represents the community who curate a collection of guides.
- **Topic**: A collection of guides.
- **Point**: A point from the service standard.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use GOV.UK Docker to run any commands that follow.**

### Running the test suite

```sh
bundle exec rake
```

## Further…
