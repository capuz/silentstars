---
repo: "alphagov/feedback"
name: "feedback"
description: "Serves contact pages on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/feedback"
homepage: "https://docs.publishing.service.gov.uk/apps/feedback.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [80]
topics: ["govuk"]
stars: 17
forks: 8
openIssues: 3
closedIssues: 12
watchers: 85
contributors: 142
recentReleases: 0
createdAt: "2012-08-30T13:21:39Z"
lastCommitAt: "2026-09-16T08:47:38Z"
lastReleaseAt: "2023-09-07T09:17:40Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 51
maintainers: ["dependabot[bot]", "govuk-ci", "sairamya93"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a327e0b6b470510d21b2dbc438ad921137fb4d77a366b0743c4466eee2e15a6/alphagov/feedback"
---

# Feedback

This app collects feedback from users via contact forms rendered on GOV.UK.
This data is then sent to [support-api](https://github.com/alphagov/support-api) app to be dealt with.

## Live examples

- https://www.gov.uk/contact/
- https://www.gov.uk/contact/govuk
- https://www.gov.uk/contact/govuk/thankyou
- https://www.gov.uk/contact/govuk/anonymous-feedback/thankyou

## Nomenclature

- **Feedback**: All the data received from contact forms is considered to be "feedback" of some form
or other and relates to pages published on GOV.UK.
- **Anonymous Contact**: Part of the feedback collected by this app is anonymous, when it's
submitted via an anonymous contact form.
- **Named Contact**: In contrast with the Anonymous Contact feedback, this is submitted
via a form that will require you to identify yourself. This data is sent directly
to Support API, which passes it on to Zendesk.

## Completed Transaction feedback forms

### Service Feedback
Most of the `/done/completed-transaction` pages render a Service Feedback form. An example is: [www.gov.uk/done/vehicle-tax](http://www.gov.uk/done/vehicle-tax).

### Transaction finished

The transaction finished page can be found…
