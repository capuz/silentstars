---
repo: "alphagov/publishing-api"
name: "publishing-api"
description: "API to publish content on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/publishing-api"
homepage: "https://docs.publishing.service.gov.uk/apps/publishing-api.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [88]
topics: ["govuk"]
stars: 44
forks: 17
openIssues: 7
closedIssues: 8
watchers: 56
contributors: 261
recentReleases: 0
createdAt: "2014-12-04T15:15:43Z"
lastCommitAt: "2026-09-01T08:49:18Z"
lastReleaseAt: "2023-08-24T08:08:50Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 90
undervaluedScore: 48
maintainers: ["dependabot[bot]", "govuk-ci", "brucebolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b114931857cde2e09d5fbcc758e147326e148b3b98b4cb86b7b894ff9335054/alphagov/publishing-api"
---

# Publishing API

The Publishing API aims to provide _workflow as a service_ so that common publishing features can be written once and used by all publishing applications across Government. Content can be stored and retrieved using the API and workflow actions can be performed, such as creating a new draft or publishing an existing piece of content.

Publishing API sends content downstream to the draft and live [Content Stores][content-store], as well as on a [Rabbit message queue](https://github.com/alphagov/publishing-api/blob/HEAD/docs/rabbitmq.md), which enables things like sending emails to users subscribed to that content. Read "[Downstream Sidekiq background processing triggered by publishing](https://docs.publishing.service.gov.uk/manual/architecture-deep-dive.html#downstream-sidekiq-background-processing-triggered-by-publishing)".

## Nomenclature

- [**Document**](https://github.com/alphagov/publishing-api/blob/HEAD/docs/model.md#document): A document is a piece of content in a particular locale. It is associated with editions that represent the versions of the document.
- [**Edition**](https://github.com/alphagov/publishing-api/blob/HEAD/docs/model.md#edition): The…
