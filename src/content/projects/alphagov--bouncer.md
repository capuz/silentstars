---
repo: "alphagov/bouncer"
name: "bouncer"
description: "Handles traffic for sites that have transitioned to GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/bouncer"
homepage: "https://docs.publishing.service.gov.uk/apps/bouncer.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [91]
topics: ["govuk"]
stars: 5
forks: 9
openIssues: 0
closedIssues: 2
watchers: 84
contributors: 77
recentReleases: 0
createdAt: "2013-07-04T11:45:30Z"
lastCommitAt: "2026-09-22T08:46:04Z"
lastReleaseAt: "2023-11-23T10:24:02Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 60
maintainers: ["dependabot[bot]", "govuk-ci", "brucebolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/27786555e9004ad53c341135766dde4b1d6af041f3f9eda095feb4c20e5a32df/alphagov/bouncer"
---

# bouncer

This is a Rack-based redirector. It serves 301s and 410s from mappings created by [Transition](https://github.com/alphagov/transition).

## Technical documentation

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use GOV.UK Docker to run any commands that follow.**

### Relationship with Transition

Bouncer and Transition currently share a database. As a result, we aim to keep a
few of their dependencies in sync (on the same version), namely:

- rails (Transition) and activerecord (Bouncer)
- optic14n

### Running the tests

```
bundle exec rake
```

### Testing redirects

In order to test the redirect feature of this app, you can use a special `bouncer-redirect.dev.gov.uk` domain. We will create a mapping from this fake domain to GOV.UK.

1. **Setup [the Transition repo](https://github.com/alphagov/transition).**

  One of the seeded organisations will be "Cabinet Office", which we will use in the next step.

2. **In the Transition app, [under the Cabinet Office…
