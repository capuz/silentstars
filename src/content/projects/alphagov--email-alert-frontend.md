---
repo: "alphagov/email-alert-frontend"
name: "email-alert-frontend"
description: "Serves email alert signup pages on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/email-alert-frontend"
homepage: "https://docs.publishing.service.gov.uk/apps/email-alert-frontend.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [80]
topics: ["govuk"]
stars: 7
forks: 6
openIssues: 1
closedIssues: 12
watchers: 68
contributors: 102
recentReleases: 0
createdAt: "2015-02-10T11:43:01Z"
lastCommitAt: "2026-09-23T08:46:41Z"
lastReleaseAt: "2023-08-21T10:33:09Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 60
maintainers: ["dependabot[bot]", "govuk-ci", "MartinJJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c8a907a96e397992a7df8dd05a8175c3a966d11de346e99636bc96ab08da9f/alphagov/email-alert-frontend"
---

# Email alert frontend

A frontend for creating and managing email subscriptions.

## Features

### Signup

This app provides three routes for signing up to email:

- A `/email-signup?link=/:base_path` route [[example](https://www.gov.uk/email-signup/?link=/money)]. This route supports signup to several types of content. It was [originally specific to the taxonomy](https://github.com/alphagov/email-alert-frontend/pull/33) (despite the generic name), and then [got re-purposed for other document types](https://github.com/alphagov/email-alert-frontend/pull/451).

- A **legacy** `/:base_path/email-signup` route [[example](https://www.gov.uk/foreign-travel-advice/canada/email-signup)]. Each of these routes corresponds to a content item with an [`email_alert_signup` schema](https://github.com/alphagov/govuk-content-schemas/blob/master/formats/email_alert_signup.jsonnet). At the time of writing, `/foreign-travel-advice/*` still uses this route.

- A `/email/subscriptions/new` route [[example](https://www.gov.uk/email/subscriptions/new?topic_id=statistics-with-1-research-and-statistic-5e2982632b)]. This route enables any other application to offer a fully customised email signup…
