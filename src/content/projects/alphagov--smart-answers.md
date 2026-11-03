---
repo: "alphagov/smart-answers"
name: "smart-answers"
description: "Serves smart answers on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/smart-answers"
homepage: "https://docs.publishing.service.gov.uk/apps/smart-answers.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [81]
topics: ["govuk"]
stars: 181
forks: 121
openIssues: 5
closedIssues: 56
watchers: 102
contributors: 284
recentReleases: 0
createdAt: "2011-10-26T15:39:01Z"
lastCommitAt: "2026-11-03T11:15:42Z"
lastReleaseAt: "2015-11-16T14:33:37Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 45
maintainers: ["dependabot[bot]", "stacy-hayes", "govuk-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/091e6625235fc6fb3dabc57edd4969e2073ef342dbec3f929294feb04e858162/alphagov/smart-answers"
---

# Smart Answers

A tool for content designers to present complex information as a flow of questions, leading to an outcome. While the app is mostly self-contained, some Smart Answers use [Whitehall](https://github.com/alphagov/whitehall) to get data on countries and worldwide organisations.

## Live examples

* [Look up Meursing code](https://www.gov.uk/additional-commodity-code)
* [Maternity and paternity calculator for employers](https://www.gov.uk/maternity-paternity-calculator)
* [Towing: licence and age requirements](https://www.gov.uk/towing-rules)

## Nomenclature

* **Smart Answer**: The flow, questions and outcomes.

* **Flow**: Defines the questions, outcomes and the rules for navigating between them.

* **Landing page**: Contains a description of the Smart Answer and the "Start now" button that leads to the first question.

* **Question page**: Contains an individual question that's asked in order to help arrive at an outcome.

* **Outcome page**: Contains the result of the Smart Answer based on responses to individual questions.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app…
