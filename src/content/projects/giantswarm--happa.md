---
repo: "giantswarm/happa"
name: "happa"
description: "Web user interface for Giant Swarm – Beyond managed Kubernetes"
readmeQualityOk: true
url: "https://github.com/giantswarm/happa"
homepage: "https://www.giantswarm.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["webui", "kubernetes", "react", "typescript", "hacktoberfest"]
stars: 23
forks: 4
openIssues: 3
closedIssues: 114
watchers: 10
contributors: 85
recentReleases: 0
createdAt: "2016-05-18T08:06:26Z"
lastCommitAt: "2026-08-31T09:59:13Z"
lastReleaseAt: "2019-03-11T11:31:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["renovate[bot]", "marians", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f6de9b7e558287721f1a53dba074ab24e063ba6dd89a60b9488e055753aa654/giantswarm/happa"
---

# Happa

The Giant Swarm web user interface. It lets users:

- View and manage clusters
- Install and manage applications from an app catalog
- Manage their account
- Add / remove organizations
- Add / remove members from organizations
- Learn how to get started with their kubernetes clusters by following a guide

Happa is intended to be deployed to Giant Swarm management clusters and acts as a client to the Giant Swarm API.

Happa is a single page JavaScript application using React+Redux and runs in modern browsers.

## Getting started with development

### Prerequisites

To run happa locally, you need:

- [NodeJS 20](https://nodejs.org/)
- [`yarn`](https://yarnpkg.com/)
- [`kubectl`](https://github.com/giantswarm/kubectl) - Necessary to use happa against a Giant Swarm installation.

### Quick start

Install dependencies:

```nohighlight
yarn install
```

Some warnings regarding unmatched dependency versions are expected and can be ignored.

Then, to bring up Happa connected to an installation, you need to have a `kubectl` context that points to the installation's management cluster. You also need to have `get` permissions for the `happa-configmap` `ConfigMap`, in the…
