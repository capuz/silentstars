---
repo: "newrelic/nri-rabbitmq"
name: "nri-rabbitmq"
description: "New Relic Infrastructure RabbitMQ Integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-rabbitmq"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 9
forks: 24
openIssues: 4
closedIssues: 25
watchers: 20
contributors: 62
recentReleases: 0
createdAt: "2018-07-26T13:45:15Z"
lastCommitAt: "2026-10-30T07:56:32Z"
lastReleaseAt: "2019-02-19T15:35:26Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 85
undervaluedScore: 49
maintainers: ["renovate[bot]", "newrelic-coreint-bot", "ujwalsah"]
openGraphImageUrl: "https://opengraph.githubassets.com/73f61773b1c19f97e59ffeaf5567488c6b2ec8c5ee27415e7c26412e5af5a1c7/newrelic/nri-rabbitmq"
---

# New Relic integration for RabbitMQ

New Relic's integration for RabbitMQ captures critical performance metrics and inventory reported by the RabbitMQ Management Plugin. Inventory data is obtained from the configuration file, and metrics and additional inventory data is obtained from the management API.

## Requirements

The RabbitMQ integration requires that the [RabbitMQ Management Plugin](https://www.rabbitmq.com/management.html#getting-started) is enabled on the RabbitMQ host being monitored.

## Installation and usage

For installation and usage instructions, see our [documentation web site](https://docs.newrelic.com/install/rabbitmq/).

## Building

Golang is required to build the integration. We recommend Golang 1.11 or higher.

After cloning this repository, go to the directory of the RabbitMQ integration and build it:

```bash
$ make
```

The command above executes the tests for the RabbitMQ integration and builds an executable file called `nri-rabbitmq` under the `bin` directory. 

To start the integration, run `nri-rabbitmq`:

```bash
$ ./bin/nri-rabbitmq
```

If you want to know more about usage of `./bin/nri-rabbitmq`, pass the `-help` parameter:

```bash
$…
