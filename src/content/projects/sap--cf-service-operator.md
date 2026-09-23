---
repo: "SAP/cf-service-operator"
name: "cf-service-operator"
description: "A Kubernetes operator for Cloud Foundry services"
readmeQualityOk: true
url: "https://github.com/SAP/cf-service-operator"
homepage: "https://sap.github.io/cf-service-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["sap-cns", "sap-cs-devops"]
stars: 8
forks: 6
openIssues: 2
closedIssues: 8
watchers: 7
contributors: 673
recentReleases: 0
createdAt: "2023-06-05T06:41:48Z"
lastCommitAt: "2026-09-23T08:46:34Z"
lastReleaseAt: "2023-10-16T07:16:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 63
maintainers: ["renovate[bot]", "ERP4SME-DevOps-GitHub-Admin-User", "zdenko-kovac"]
openGraphImageUrl: "https://opengraph.githubassets.com/205b1254690b485a7b94174ac114dbca74f8fed90c90511c4cd695e5cdfc651e/SAP/cf-service-operator"
---

# Kubernetes Operator For Cloud Foundry™ Services

Disclaimer: Cloud Foundry is a registered trademark of THE LINUX FOUNDATION. Any rights therein are reserved to THE LINUX FOUNDATION. Any use by this project is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between CloudFoundry and this project.

## About this project

This repository adds native support for Cloud Foundry spaces, service instances and service bindings to Kubernetes clusters.
It contains custom resource definitions
- `spaces.cf.cs.sap.com` (kind `Space`)
- `clusterspaces.cf.cs.sap.com` (kind `ClusterSpace`)
- `serviceinstances.cf.cs.sap.com` (kind `ServiceInstance`)
- `servicebindings.cf.cs.sap.com` (kind `ServiceBinding`)

and an according operator reconciling resources of these types.

A typical usage could look as follows:

```yaml
---
apiVersion: cf.cs.sap.com/v1alpha1
kind: Space
metadata:
  name: k8s
spec:
  organizationName: my-org 
  authSecretName: k8s-space
---
apiVersion: v1
kind: Secret
metadata:
  name: k8s-space
stringData:
  url: "<cf api url>"
  username: "<username>"
  password: "<password>"
---
apiVersion: cf.cs.sap.com/v1alpha1
kind:…
