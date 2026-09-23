---
repo: "alphagov/email-alert-api"
name: "email-alert-api"
description: "Sends email alerts to the public for GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/email-alert-api"
homepage: "https://docs.publishing.service.gov.uk/apps/email-alert-api.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["govuk"]
stars: 18
forks: 10
openIssues: 2
closedIssues: 7
watchers: 61
contributors: 116
recentReleases: 0
createdAt: "2014-09-24T10:22:32Z"
lastCommitAt: "2026-09-23T08:46:34Z"
lastReleaseAt: "2023-09-12T10:08:28Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 55
maintainers: ["dependabot[bot]", "govuk-ci", "deborahchua"]
openGraphImageUrl: "https://opengraph.githubassets.com/211ac17f2d5c2444cd7bfeadad1d16bdd2c438b1d34387c4343643c6a4ebb786/alphagov/email-alert-api"
---

# email-alert-api

Sends emails to users that subscribe to specific GOV.UK email alerts.

Provides a consistent internal interface to external email
notification services. Currently supports only [GOV.UK Notify](https://www.notifications.service.gov.uk/).

## Nomenclature

- **Content change**:
  * A publication event that creates or changes a content item
  * The representation of that event for the purpose of sending emails

- **Message**:
  * A message, distinct from a content change, that can be sent to subscribers of a list
  * The representation of that event for the purpose of sending emails

- **Subscriber list**:
  * A particular titled list that a user can sign up to
  * Contains criteria to determine which notifications a subscriber will receive (eg. all publications by HMRC)

- **Subscriber**:
  * A user who has subscribed to one or more subscriber lists

- **Subscription**:
  * The relationship between a subscriber and the subscription lists they are subscribed to

- **Digest run**:
  * One batch of either daily or weekly digests representing a particular subscription that has a start and end time and a set of subscribers to send emails to

- **Email**:
  * An email…
