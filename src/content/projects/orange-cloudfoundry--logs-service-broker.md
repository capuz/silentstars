---
repo: "orange-cloudfoundry/logs-service-broker"
name: "logs-service-broker"
description: "A logs service broker to forward logs to any syslog backend (http, tcp, or udp)"
readmeQualityOk: true
url: "https://github.com/orange-cloudfoundry/logs-service-broker"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 5
forks: 1
openIssues: 0
closedIssues: 4
watchers: 7
contributors: 15
recentReleases: 0
createdAt: "2018-11-29T18:22:02Z"
lastCommitAt: "2026-11-02T15:17:16Z"
lastReleaseAt: "2021-11-03T14:53:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 56
maintainers: ["dependabot[bot]", "adamspd"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea300a26b5c6f0e2b3bb1f6f4158f40efb1ee23428acd69413097750a99a7d58/orange-cloudfoundry/logs-service-broker"
---

# logs-service-broker

Logs-service-broker is a broker server for logs parsing (with custom parsing patterns given by user or operator) and
forwarding to one or multiple syslog endpoint in RFC 5424 syslog format.
Take care that logs-service-broker will always provide json encoded format to final syslog endpoint(s).

It is for now tied to Cloud Foundry for different types of logs received by this platform.

This is compliant with the spec [open service broker api](https://www.openservicebrokerapi.org/) for
[syslog drain](https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#log-drain).

## How to deploy

On Cloud Foundry, a service should **not** be deployed from this source code, but it must use the boshrelease related to it
which can be found here: https://github.com/orange-cloudfoundry/logservice-boshrelease/

1. Clone the repo
2. Go build the repo directly this will give you a logs-service-broker runnable server
3. Create a `config.yml` file to set your configuration. Configuration is explained in the [configuration section](#configuration)

## Configuration

Config format is explained in…
