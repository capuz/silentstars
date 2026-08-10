---
repo: "newrelic/nri-mysql"
name: "nri-mysql"
description: "New Relic Infrastructure MySQL Integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-mysql"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["newrelic", "infrastructure", "integrations", "monitoring", "metrics", "mysql", "mysql-database"]
stars: 13
forks: 35
openIssues: 2
closedIssues: 26
watchers: 19
contributors: 65
recentReleases: 0
createdAt: "2018-07-24T09:42:55Z"
lastCommitAt: "2026-08-10T05:05:34Z"
lastReleaseAt: "2021-03-10T17:34:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["renovate[bot]", "newrelic-coreint-bot", "RamanaReddy8801"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca3cae88443091b83c82bc36cf206c4d7da6f824f4739a723ba3928b690bc679/newrelic/nri-mysql"
---

# New Relic integration for MySQL

The New Relic integration for MySQL captures critical performance metrics and inventory reported by MySQL database.

Data is obtained by querying directly the database for its status and configuration variables to build the reported metrics and inventory.

See our [documentation web site](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration) for more details.

## Installation and usage

For installation and usage instructions, see our [documentation web site](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration).

## Building

Golang is required to build the integration. We recommend Golang 1.11 or higher.

After cloning this repository, go to the directory of the MySQL integration and build it:

```bash
$ make
```

The command above executes the tests for the MySQL integration and builds an executable file called `nri-mysql` under the `bin` directory. 

To start the integration, run `nri-mysql`:

```bash
$ ./bin/nri-mysql
```

If you want to know more about usage of `./bin/nri-mysql`, pass the `-help` parameter:

```bash
$…
