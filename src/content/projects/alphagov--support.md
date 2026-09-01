---
repo: "alphagov/support"
name: "support"
description: "Forms to raise Zendesk tickets to be used by Government personnel on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/support"
homepage: "https://docs.publishing.service.gov.uk/apps/support.html"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [78, 21]
topics: ["govuk"]
stars: 13
forks: 8
openIssues: 3
closedIssues: 10
watchers: 80
contributors: 243
recentReleases: 0
createdAt: "2012-09-11T09:38:08Z"
lastCommitAt: "2026-09-01T08:51:15Z"
lastReleaseAt: "2023-08-29T10:18:30Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["dependabot[bot]", "govuk-ci", "yndajas"]
openGraphImageUrl: "https://opengraph.githubassets.com/241fff4709061a9719fa24c4fc522d9482447d339c282f59de739adf9f569867/alphagov/support"
---

# Support

This app:

- Presents anonymous feedback about pages on GOV.UK in a "feedback explorer". Anonymous feedback is collected via the [Feedback app](https://github.com/alphagov/feedback) and retrieved from the [Support API](https://github.com/alphagov/support-api).

- Hosts internal forms for publishers to create Zendesk tickets.

- Hosts emergency contact information. This is read from an [environment variable](https://github.com/alphagov/govuk-helm-charts/blob/fb1920b/charts/app-config/values-production.yaml#L2420) which ultimately comes from a secret in AWS Secrets Manager.

## Nomenclature

- **Feedback**: All the data received from contact forms is considered to be "feedback"
of some form or other and relates to pages published on GOV.UK.
- **Anonymous Contact**: Part of the feedback collected by this app is anonymous, when it's
submitted via an anonymous contact form in the [feedback app](https://github.com/alphagov/feedback).

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker…
