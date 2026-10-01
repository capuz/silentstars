---
repo: "ministryofjustice/cloud-platform-environments"
name: "cloud-platform-environments"
description: "Environment configuration for the Cloud Platform"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/cloud-platform-environments"
language: "HCL"
languages: ["HCL"]
languagePcts: [99]
topics: ["kubernetes-manifests", "terraform-configurations", "cloud-platform", "go"]
stars: 86
forks: 38
openIssues: 0
closedIssues: 0
watchers: 137
contributors: 910
recentReleases: 0
createdAt: "2018-05-29T09:51:12Z"
lastCommitAt: "2026-10-01T10:24:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 90
undervaluedScore: 40
maintainers: ["neil-stephen-mcgonigle", "jdwoolcock", "emilyfbgov"]
openGraphImageUrl: "https://opengraph.githubassets.com/24978452d461add63fdd471cf9c19278dfdc72c6075dbdacd661be85539b7151/ministryofjustice/cloud-platform-environments"
---

# cloud-platform-environments

## Intro

This repository is where kubernetes namespaces are managed, across all the clusters. Kubernetes namespaces and resources are defined in the `namespaces` directory in this repository under the corresponding `cluster` name.

### Functionality

The pipeline will for each defined `cluster`:

1. Create a namespace as defined in the namespaces/`cluster` directory. If the namespace already exists on the cluster it will be ignored.
2. Delete any namespaces that exist in the cluster but are not defined in the repository.
3. Create any kubernetes resource that is defined under namespaces/`cluster`/`namespace`

### Namespaces

The `namespaces/` directory contains sub directories named after the existing cluster names, and inside, sub directories named after each of the desired namespaces you want to create for each cluster. Placed inside are the kubernetes resource files you want to create in the kubernetes format. Those will be created automatically after a push is made to the Repositories master branch by the AWS code pipeline.

### AWS resources

In a similar fashion as namespaces, you can create AWS resources in your desired namespace. The file…
