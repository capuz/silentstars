---
repo: "Particular/NServiceBus.AmazonSQS"
name: "NServiceBus.AmazonSQS"
description: "An AWS SQS transport for NServiceBus."
readmeQualityOk: true
url: "https://github.com/Particular/NServiceBus.AmazonSQS"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["hacktoberfest"]
stars: 38
forks: 20
openIssues: 13
closedIssues: 210
watchers: 3
contributors: 48
recentReleases: 0
createdAt: "2014-12-31T03:03:44Z"
lastCommitAt: "2026-10-14T08:58:19Z"
lastReleaseAt: "2017-06-25T04:14:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["dependencyupdates[bot]", "danielmarbach", "internalautomation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f398462ac7219b43b3b929fb5b59ee8de5bb812fb376731136d98952c44b7ff5/Particular/NServiceBus.AmazonSQS"
---

# NServiceBus.AmazonSQS

NServiceBus.AmazonSQS is the [Amazon SQS](https://docs.aws.amazon.com/sqs/) transport for NServiceBus.

It is part of the [Particular Service Platform](https://particular.net/service-platform), which includes [NServiceBus](https://particular.net/nservicebus) and tools to build, monitor, and debug distributed systems.

See the [Amazon SQS Transport documentation](https://docs.particular.net/transports/sqs/) to learn more.

## Running tests locally

The solution contains the [NServiceBus Acceptance Test suite](https://www.nuget.org/packages/NServiceBus.AcceptanceTests.Sources/) and the [NServiceBus Transport Test suite](https://www.nuget.org/packages/NServiceBus.TransportTests.Sources/).

To run the tests, the Access Key ID and Secret Access Key of an AWS IAM account need to be set in environment variables on the machine running the tests. Full details on how to set this up can be found in the [Amazon SQS Transport documentation](https://docs.particular.net/transports/sqs/#prerequisites).

**NSERVICEBUS_AMAZONSQS_S3BUCKET** enables [offloading large messages to…
