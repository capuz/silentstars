---
repo: "openshift-helm-charts/charts"
name: "charts"
description: "OpenShift Helm charts Repository"
readmeQualityOk: true
url: "https://github.com/openshift-helm-charts/charts"
homepage: "https://charts.openshift.io"
language: "Go Template"
languages: ["Go Template", "Python"]
languagePcts: [72, 20]
topics: ["helm-charts", "openshift", "openshift-certification"]
stars: 43
forks: 272
openIssues: 0
closedIssues: 110
watchers: 5
contributors: 177
recentReleases: 0
createdAt: "2021-02-25T10:09:56Z"
lastCommitAt: "2026-09-29T08:10:21Z"
lastReleaseAt: "2021-08-11T09:52:42Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 68
maintainers: ["devopsnns", "redhat-mercury-bot", "shlee519"]
openGraphImageUrl: "https://opengraph.githubassets.com/f56b259266bb0f12bd291d4a503f7b22d8c581e34cfef1de6892f2b4dde5caf2/openshift-helm-charts/charts"
---

# OpenShift Helm Charts

OpenShift Helm Charts is a repository hosting [Helm Charts](https://github.com/helm/helm) available out-of-the-box with [OpenShift](https://www.openshift.com/). It contains popular technologies, tools and services. Helm Charts on this repository can be provided by the community, by partners or Red Hat. 

Charts go through an automated Red Hat OpenShift certification workflow, which guarantees security compliance as well as best integration and experience with the platform.

## Structure of the repository

```
.
└── charts
    └── partners
        └── <entity>
            └── <chart-name>
                └── <version>
                    └── src
                        ├── Chart.yaml
                        ├── README.md
                        ├── templates
                        │   ├── deployment.yaml
                        │   ├── _helpers.tpl
                        │   ├── hpa.yaml
                        │   ├── ingress.yaml
                        │   ├── NOTES.txt
                        │   ├── serviceaccount.yaml
                        │   ├── service.yaml
                        │   └── tests
                        │       └──…
