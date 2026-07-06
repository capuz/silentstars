---
repo: "cncf/devstatscode"
name: "devstatscode"
description: "📈DevStats code"
readmeQualityOk: true
url: "https://github.com/cncf/devstatscode"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 55
forks: 24
openIssues: 0
closedIssues: 11
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2019-03-18T11:28:14Z"
lastCommitAt: "2026-07-06T07:03:57Z"
lastReleaseAt: "2019-05-13T13:37:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 46
maintainers: ["lukaszgryglicki"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb6c3809c2530ccc410cd29798bfade5b918a1acaa467ac24ade666126ffcbc/cncf/devstatscode"
---

# DevStats code

This is a code repository for [DevStats](https://github.com/cncf/devstats) used to display [CNCF projects dashboards](https://devstats.cncf.io), [CDF projects dashboards](https://devstats.cd.foundation), [GraphQL projects dashboards](https://devstats.graphql.org) and [example Kubernetes/helm deployment](https://cncf.devstats-demo.net).

Authors: Łukasz Gryglicki <lgryglicki@cncf.io>, Justyna Gryglicka <jgryglicka@cncf.io>, Josh Berkus <jberkus@redhat.com>.

# Building and installing

- Follow [this guide](https://github.com/cncf/devstats-helm-example/blob/master/README.md) to see how to deploy on Kubernetes using Helm.
- Follow [this guide](https://github.com/cncf/devstats-helm-graphql/blob/master/README.md) to see GraphQL deployment using Kubernetes & Helm.
- Follow [this guide](https://github.com/cncf/devstats/blob/master/INSTALL_UBUNTU18.md#devstats-installation-on-ubuntu) for installing on bare metal.
- Follow [this guide](https://github.com/cncf/devstats-example/blob/master/README.md) to deploy your own project on bare metal (this example deployes Homebrew statistics).
- Fetch dependency libraries.
- `make` then `make test` finally `make install`.

# Adding…
