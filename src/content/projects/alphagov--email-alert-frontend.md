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
openIssues: 2
closedIssues: 12
watchers: 68
contributors: 103
recentReleases: 0
createdAt: "2015-02-10T11:43:01Z"
lastCommitAt: "2026-11-20T12:17:08Z"
lastReleaseAt: "2023-08-21T10:33:09Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["dependabot[bot]", "govuk-ci", "MartinJJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/2497eb7ce06e2d3a1226ab2bb4567e53e9f9b1ce656af2852199e74bb0ef97af/alphagov/email-alert-frontend"
---

# Email alert frontend

A frontend for creating and managing email subscriptions.

## Features

### Signup

This app provides three routes for signing up to email:

- A `/email-signup?link=/:base_path` route [[example](https://www.gov.uk/email-signup/?link=/money)]. This route supports signup to several types of content. It was [originally specific to the taxonomy](https://github.com/alphagov/email-alert-frontend/pull/33) (despite the generic name), and then [got re-purposed for other document types](https://github.com/alphagov/email-alert-frontend/pull/451).

- A **legacy** `/:base_path/email-signup` route [[example](https://www.gov.uk/foreign-travel-advice/canada/email-signup)]. Each of these routes corresponds to a content item with an [`email_alert_signup` schema](https://github.com/alphagov/govuk-content-schemas/blob/master/formats/email_alert_signup.jsonnet). At the time of writing, `/foreign-travel-advice/*` still uses this route.
