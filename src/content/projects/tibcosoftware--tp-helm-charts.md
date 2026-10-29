---
repo: "TIBCOSoftware/tp-helm-charts"
name: "tp-helm-charts"
description: "Helm Charts for TIBCO® Platform"
readmeQualityOk: true
url: "https://github.com/TIBCOSoftware/tp-helm-charts"
homepage: "https://cloud.tibco.com"
language: "Shell"
languages: ["Shell", "Go Template", "PLpgSQL"]
languagePcts: [38, 33, 25]
topics: ["helm-charts", "kubernetes", "kubernetes-cluster", "kubernetes-deployment"]
stars: 20
forks: 19
openIssues: 7
closedIssues: 7
watchers: 10
contributors: 37
recentReleases: 0
createdAt: "2023-11-14T06:43:20Z"
lastCommitAt: "2026-10-29T10:36:12Z"
lastReleaseAt: "2024-09-11T04:28:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 67
maintainers: ["nashtapu-tibco", "sgantaya", "cmoeller-tibco"]
openGraphImageUrl: "https://opengraph.githubassets.com/9709ab4944795b62a234e8a882f9508cab2dde057635fb07f320048f8e898e22/TIBCOSoftware/tp-helm-charts"
---

# Helm Charts for TIBCO® Platform

Helm Charts for TIBCO® Platform contains a list of Helm charts for TIBCO® Platform data plane components.

## Introduction
TIBCO Platform provides a single pane of glass for the management, monitoring, and observability of TIBCO applications and capabilities. It provides a unified view of all TIBCO applications and capabilities deployed across multiple Kubernetes clusters and cloud environments.

TIBCO Platform consists of two main components:
* TIBCO® Control Plane is the central monitoring and management interface for n-number of data planes running TIBCO applications and capabilities.
* Data Plane is the runtime environment for TIBCO applications and capabilities. It contains a set of helm charts that can be deployed on any Kubernetes cluster on-premises or in the cloud.

This repository contains Helm charts for Data Plane components that can be deployed on the customer's Kubernetes cluster.

## Installing

Most of the Helm charts in this repository will be installed by the TIBCO® Control Plane. In most cases, customers will not need to install these Helm charts manually.

There are some charts that can help customers set up cluster ingress,…
