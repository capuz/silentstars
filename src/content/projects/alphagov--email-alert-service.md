---
repo: "alphagov/email-alert-service"
name: "email-alert-service"
description: "Message queue consumer that triggers email alerts for GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/email-alert-service"
homepage: "https://docs.publishing.service.gov.uk/apps/email-alert-service.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["govuk"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 52
contributors: 76
recentReleases: 0
createdAt: "2014-09-24T10:14:32Z"
lastCommitAt: "2026-09-16T08:47:14Z"
lastReleaseAt: "2023-10-31T09:25:32Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 64
maintainers: ["dependabot[bot]", "govuk-ci", "KludgeKML"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec2346fcfd06972d4086d565ddbac679fe5c94d4b8e36c91559959b7beba1be8/alphagov/email-alert-service"
---

# Email alert service

This is a message queue consumer that triggers email alerts when documents are published with a major change.

## Technical documentation

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use GOV.UK Docker to run any commands that follow.**

### Before running the app

The email-alert-service uses the [govuk_message_queue_consumer](https://github.com/alphagov/govuk_message_queue_consumer)
to connect to message queues on the `published_documents` exchange.

There is a rake task to create the queues for this exchange:

```
bundle exec rake message_queues:create_queues
```

There are two rake tasks to start processors to consume from the queues:

`bundle exec rake message_queues:major_change_consumer`
`bundle exec rake message_queues:unpublishing_consumer`

### Running the test suite

```
bundle exec rake
```

## Licence

[MIT License](https://github.com/alphagov/email-alert-service/blob/HEAD/LICENCE)
