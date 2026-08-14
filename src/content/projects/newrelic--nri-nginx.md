---
repo: "newrelic/nri-nginx"
name: "nri-nginx"
description: "New Relic Infrastructure Nginx Integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-nginx"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["ohai"]
stars: 23
forks: 26
openIssues: 1
closedIssues: 25
watchers: 18
contributors: 57
recentReleases: 0
createdAt: "2018-07-24T09:45:17Z"
lastCommitAt: "2026-08-04T14:45:20Z"
lastReleaseAt: "2020-04-02T13:46:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 50
maintainers: ["renovate[bot]", "newrelic-coreint-bot", "ujwalsah"]
openGraphImageUrl: "https://opengraph.githubassets.com/28a65fb330fc49267f027237c7a67803f5f8c7746b0ad55182925125dffcb5a3/newrelic/nri-nginx"
---

# New Relic integration for NGINX

The New Relic integration for NGINX captures critical performance metrics and inventory reported by NGINX server. There is an open source and a commercial version of NGINX, both supported by this integration.

Inventory data is obtained from the configuration files and metrics from the status modules.

## Installation and usage

For installation and usage instructions, see our [documentation web site](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration).

## Building

Golang is required to build the integration. We recommend Golang 1.18 or higher.

After cloning this repository, go to the directory of the NGINX integration and build it:

```bash
$ make
```

The command above executes the tests for the NGINX integration and builds an executable file called `nri-nginx` under the `bin` directory. 

To start the integration, run `nri-nginx`:

```bash
$ ./bin/nri-nginx
```

If you want to know more about usage of `./bin/nri-nginx`, pass the `-help` parameter:

```bash
$ ./bin/nri-nginx -help
```

External dependencies are managed through the [go…
