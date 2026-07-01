---
repo: "cap-js-community/mtx-tool"
name: "mtx-tool"
description: "Multitenancy and Extensibility Tool is a cli to reduce operational overhead for Cloud Foundry SaaS applications"
url: "https://github.com/cap-js-community/mtx-tool"
homepage: "https://cap-js-community.github.io/mtx-tool/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cloud-foundry", "devops", "sap-btp", "sap-cap", "cli", "open-source"]
stars: 25
forks: 6
openIssues: 6
closedIssues: 38
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2023-01-17T15:58:10Z"
lastCommitAt: "2026-07-01T07:06:11Z"
lastReleaseAt: "2023-10-20T08:32:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 61
maintainers: ["renovate[bot]", "rlindner81", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12f7527cfdfeaed5b05588135f574354e43b578b2a31ce89096511690c09c08e/cap-js-community/mtx-tool"
---

# MTX Tool

Multitenancy and Extensibility Tool is a cli to reduce operational overhead for multitenant Cloud Foundry applications, particularly in the areas user authentication, tenant registration, CAP multitenancy, and HANA container management.

## Getting Started

Prerequisite is an installed [CF cli](https://github.com/cloudfoundry/cli) v8 or newer.

**Prepare**

```
npm install --global @cap-js-community/mtx-tool
mtx --setup
```

**Use, for example**

```
cf target -o <my-org> -s <my-space>
mtx regl
mtx hdil
```

## Pipelines

For pipelines, we recommend committing the setup configuration to your project and running MTX Tool on the pipeline
runner in the corresponding directory through npx with a stable version:

**In project**

```
mtx --setup-local
git add . && git commit -m "mtx-tool config"
```

**In pipeline, for example**

```
npx @cap-js-community/mtx-tool@0.12.0 --svm-fresh-bindings all-services all-tenants
...
npx @cap-js-community/mtx-tool@0.12.0 --svm-repair-bindings all-services
...
npx @cap-js-community/mtx-tool@0.12.0 --cds-upgrade-all
```

## Features

MTX Tool is organized into contextual sections, each with several commands.

```
   === user authentication…
