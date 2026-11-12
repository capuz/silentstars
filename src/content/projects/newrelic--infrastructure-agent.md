---
repo: "newrelic/infrastructure-agent"
name: "infrastructure-agent"
description: "New Relic Infrastructure Agent"
readmeQualityOk: true
url: "https://github.com/newrelic/infrastructure-agent"
homepage: "https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 152
forks: 154
openIssues: 14
closedIssues: 617
watchers: 9
contributors: 88
recentReleases: 0
createdAt: "2020-04-17T19:36:44Z"
lastCommitAt: "2026-11-11T08:04:42Z"
lastReleaseAt: "2020-11-04T15:43:59Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 54
maintainers: ["sairaj18", "renovate[bot]", "rajrohanyadav"]
openGraphImageUrl: "https://opengraph.githubassets.com/65305f1ed615a12b530fcd5ee2eac6a9ad197fa5a08282b0d241fa3541c87bb0/newrelic/infrastructure-agent"
---

# New Relic infrastructure agent

The infrastructure agent (infra-agent) collects inventory data and metrics of your hosts and sends it to the New Relic platform.

[New Relic's infrastructure monitoring](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/get-started/introduction-new-relic-infrastructure) provides flexible,
dynamic monitoring of your entire infrastructure, from services running in the cloud or on dedicated hosts to containers running in orchestrated environments.

- [Compatibility and requirements](#compatibility-and-requirements)
  - [Set up your license key](#set-up-your-license-key)
- [Compile and build the agent](#compile-and-build-the-agent)
- [Run the agent](#run-the-agent)
- [Use the agent](#use-the-agent)
- [Testing](#testing)
- [Documentation](#documentation)
- [Support](#support)
- [Privacy](#privacy)
- [Contribute](#contribute)
- [License](#license)

## Compatibility and requirements

You can build the agent for any OS and architecture [supported by Go](https://golang.org/doc/install#requirements);
New Relic does not provide support for all of them.
For more information on operating systems supported by New Relic, see the [agent…
