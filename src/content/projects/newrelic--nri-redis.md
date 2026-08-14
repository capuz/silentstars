---
repo: "newrelic/nri-redis"
name: "nri-redis"
description: "New Relic Infrastructure Redis Integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-redis"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["newrelic", "infrastructure", "integrations", "monitoring", "metrics", "redis"]
stars: 15
forks: 30
openIssues: 1
closedIssues: 34
watchers: 18
contributors: 62
recentReleases: 0
createdAt: "2018-07-24T09:46:15Z"
lastCommitAt: "2026-07-28T08:30:26Z"
lastReleaseAt: "2021-03-24T15:11:54Z"
status: "quiet"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 85
undervaluedScore: 56
maintainers: ["renovate[bot]", "newrelic-coreint-bot", "abhishuraina"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a10535c9fd6462336fdb938c25229c05f80c32c7063e55302921086f0554be4/newrelic/nri-redis"
---

# New Relic integration for Redis

Our Redis integration reports critical performance data from your Redis server to New Relic products. You can view this metric data and inventory data in pre-built dashboards, create alert policies, and create custom queries and charts. You can also specify keys that are important to your application and get information about their length.

## Installation and usage

For installation and usage instructions, see our [documentation web site](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration).

## Building

Golang is required to build the integration. We recommend Golang 1.16 or higher.

After cloning this repository, go to the directory of the Redis integration and build it:

```bash
$ make
```

The command above executes the tests for the Redis integration and builds an executable file called `nri-redis` under the `bin` directory. 

To start the integration, run `nri-redis`:

```bash
$ ./bin/nri-redis
```

If you want to know more about usage of `./bin/nri-redis`, pass the `-help` parameter:

```bash
$ ./bin/nri-redis -help
```

## Testing

To run the tests execute:

```bash
$ make…
