---
repo: "illumio/cloud-operator"
name: "cloud-operator"
description: "Illumio CloudSecure cloud operator"
readmeQualityOk: true
url: "https://github.com/illumio/cloud-operator"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2024-07-31T17:07:37Z"
lastCommitAt: "2026-08-20T04:07:39Z"
lastReleaseAt: "2025-01-30T23:44:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 78
maintainers: ["dependabot[bot]", "pavankumarinnamuri", "rlenglet"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1a2f1eb8e7a1b622cee9e3bb36e507dddd35132e72a5a6c277320c4a43698/illumio/cloud-operator"
---

# Cloud-operator
The Illumio Cloud-operator is deployed as a Deployment on a desired cluster to stream information about the cluster's resources and network traffic to CloudSecure, and to enforce Illumio network policies by managing corresponding k8s NetworkPolicies in the cluster.

## Getting Started

### Deployment Instructions
#### Prerequisites
Ensure you have Helm installed and configured on your local machine.
Ensure you have access to a Kubernetes cluster and the necessary permissions to deploy resources.

#### Packaging the Helm Chart
First, package the Helm chart. This will create a .tgz file that can be used for installation.
```
helm package .
```
This command will generate a file named `cloud-operator-0.0.1.tgz` (or similar, depending on your chart version) in the current directory.

#### Installing the Helm Chart

TODO - How to set values.yaml, set through UI or through terraform.

To install the Helm chart, use the following command:
```
helm install illumio cloud-operator-0.0.1.tgz --namespace illumio-cloud --create-namespace
```
This command will:

1. Install the Helm chart with the release name `illumio`.
1. Use the packaged chart file `cloud-operator-0.0.1.tgz`.…
