---
repo: "openshift/lightspeed-console"
name: "lightspeed-console"
description: "Console plugin for the openshift lightspeed project"
readmeQualityOk: true
url: "https://github.com/openshift/lightspeed-console"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 8
forks: 35
openIssues: 0
closedIssues: 4
watchers: 8
contributors: 2927
recentReleases: 0
createdAt: "2024-01-21T12:14:03Z"
lastCommitAt: "2026-08-25T04:09:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["openshift-merge-bot[bot]", "red-hat-konflux[bot]", "kyoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/e468dbd35868dc3831304f2c2d6539566da3cd653e88086646053ae226457373/openshift/lightspeed-console"
---

# OpenShift Lightspeed Console Plugin

This project is a console plugin for the
[OpenShift Lightspeed AI assistant](https://github.com/openshift/lightspeed-service)
project.

[Dynamic plugins](https://github.com/openshift/console/tree/main/frontend/packages/console-dynamic-plugin-sdk)
allow you to extend the [OpenShift UI](https://github.com/openshift/console) at
runtime, adding custom pages and other extensions. They are based on
[webpack module federation](https://webpack.js.org/concepts/module-federation/).
Plugins are registered with console using the `ConsolePlugin` custom resource
and enabled in the console operator config by a cluster administrator.

Requires OpenShift 4.16 or higher.

- `main` branch supports OpenShift 4.22+
- `release-4.19` branch supports OpenShift 4.19 – 4.21
- `pattern-fly-5` branch supports OpenShift 4.16 – 4.18

[Node.js](https://nodejs.org/en/) >= 22 and [npm](https://www.npmjs.com) are
required to build and run. To run OpenShift console in a container, either
[Docker](https://www.docker.com) or [podman 3.2.0+](https://podman.io) and
[oc](https://console.redhat.com/openshift/downloads) are required.

## Development

### Option 1: Local

In one…
