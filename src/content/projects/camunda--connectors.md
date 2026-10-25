---
repo: "camunda/connectors"
name: "connectors"
description: "Camunda Connectors"
readmeQualityOk: true
url: "https://github.com/camunda/connectors"
homepage: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/available-connectors-overview/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["camunda", "connectors", "camunda-platform-8"]
stars: 72
forks: 61
openIssues: 170
closedIssues: 1274
watchers: 2
contributors: 113
recentReleases: 0
createdAt: "2022-09-30T11:56:23Z"
lastCommitAt: "2026-10-25T02:37:22Z"
lastReleaseAt: "2022-12-13T09:04:49Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 60
maintainers: ["renovate[bot]", "pablocabrera85", "mathias-vandaele"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b214185398f4d73ca9928e570f7ef4421bdd1194e59f5e6f0cdca64576fbb33/camunda/connectors"
---

# Camunda Connectors

This is the repository for Camunda Connectors. It manages all parts of the Connectors ecosystem,
including the Connector SDK, out-of-the-box Connectors available in Camunda, the Connector Runtime, and the Docker
images.

For more information on Connectors, refer to the
[Camunda documentation](https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/available-connectors-overview/).

## Contents

* [License](#license)
* [Setup](#setup)
* [Create a Connector](#create-a-connector)
    * [Outbound Connector](#outbound-connector)
    * [Inbound Connector](#inbound-connector)
* [Connector Validation](#connector-validation)
* [Start a Connector](#start-a-connector)
* [Integration Tests](#integration-tests)
* [Build](#build)
* [Build a release](#build-a-release)

## License

This is a multi-module project with different licenses applied to different modules.

### Modules available under [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0)

* [Connector SDK](https://github.com/camunda/connectors/blob/HEAD/connector-sdk) including all supporting libraries
* [Connector Secret…
