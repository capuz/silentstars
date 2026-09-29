---
repo: "netdata/netdata-grafana-datasource-plugin"
name: "netdata-grafana-datasource-plugin"
description: "Netdata Grafana Datasource Plugin"
readmeQualityOk: true
url: "https://github.com/netdata/netdata-grafana-datasource-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 51
forks: 13
openIssues: 0
closedIssues: 12
watchers: 9
contributors: 12
recentReleases: 0
createdAt: "2022-10-04T12:30:02Z"
lastCommitAt: "2026-09-29T10:05:12Z"
lastReleaseAt: "2026-02-02T14:23:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["witalisoft", "kapantzak", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb3ae1bf8a8218d025766a8794cc3c85736ce66f51e2dfe5315bb3e4d7d131ce/netdata/netdata-grafana-datasource-plugin"
---

# Netdata data source for Grafana

_Enhanced high-fidelity troubleshooting data source for the Open Source community!_

## How to install the plugin?

To start using the Netdata data source plugin on your Grafana environment, local or Cloud. Here are some tips to get through this depending on your setup:
* Directly through the Grafana UI
* Docker
* Linux (local)
* Windows (local - powershell)
* Building the plugin locally

The installations below will use different tools like: curl, docker, jq, wget, unzip and xcopy.

### Directly through the Grafana UI

Netdata is available in the Grafana Plugin catalog that can be accessed from the Grafana UI. 
For details on how to: use the Plugin catalog, manage the plugins (install, update, uninstall), and other information, please check [this documentation](https://grafana.com/docs/grafana/latest/administration/plugin-management/).

### Docker

#### Pre-buit script - setup-demo-environment
We provide you a script `setup-demo-environment.sh` that will help you setting this up real fast.
To start the container with the Netdata datasource plugin already installed you just need to:
```
setup-demo-environment.sh run
```

To remove container:
```…
