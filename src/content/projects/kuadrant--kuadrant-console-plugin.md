---
repo: "Kuadrant/kuadrant-console-plugin"
name: "kuadrant-console-plugin"
description: "OKD & OpenShift Console Plugin for Kuadrant"
readmeQualityOk: true
url: "https://github.com/Kuadrant/kuadrant-console-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 11
forks: 67
openIssues: 45
closedIssues: 284
watchers: 1
contributors: 40
recentReleases: 0
createdAt: "2024-06-27T08:20:41Z"
lastCommitAt: "2026-10-12T11:15:23Z"
lastReleaseAt: "2024-11-20T10:42:28Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 84
maintainers: ["jasonmadigan", "dependabot[bot]", "pascazzioIsAbyayalan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba09cd35f8f2b44a43e9f5a731aabc220d61895d17f52d4d88dec0e3be20d463/Kuadrant/kuadrant-console-plugin"
discussionCount: 2
---

# Kuadrant OpenShift/OKD Console Plugin

See below for setup requirements.

Based on https://github.com/openshift/console-plugin-template

## Screenshots

## Local plugin development

- Target a running OCP with `oc login`
- `yarn run start` # start webpack
- `yarn run start-console` # start local ocp console + proxy

These commands run the plugin source from this checkout. To test a plugin or RC
already installed in a cluster, use the
[installed-console E2E workflow](https://github.com/Kuadrant/kuadrant-console-plugin/blob/HEAD/e2e/README.md#test-an-installed-console-plugin-or-rc).

# Requirements for running locally

[Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com) are required
to build and run this locally. To run OpenShift console in a container, either
[Docker](https://www.docker.com) or [podman 3.2.0+](https://podman.io) and
[oc](https://console.redhat.com/openshift/downloads) are required.

## Getting started

### Option 1: Local

In one terminal window, run:

1. `yarn install`
2. `yarn run start`

In another terminal window, run:

1. `oc login` (requires [oc](https://console.redhat.com/openshift/downloads) and an [OpenShift…
