---
repo: "epam/edp-keycloak-operator"
name: "edp-keycloak-operator"
description: "It is responsible for establishing a connection to provided Keycloak Server, reconciling realms, and clients according to the created CRs"
readmeQualityOk: true
url: "https://github.com/epam/edp-keycloak-operator"
homepage: "https://docs.kuberocketci.io"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ci", "cd", "keycloak", "sso", "saml", "oidc", "kubernetes", "k8s", "cicd", "edp"]
stars: 96
forks: 38
openIssues: 2
closedIssues: 195
watchers: 8
contributors: 32
recentReleases: 0
createdAt: "2020-12-24T00:48:09Z"
lastCommitAt: "2026-10-29T21:24:45Z"
lastReleaseAt: "2022-08-26T09:25:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 52
maintainers: ["SergK", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5babc1cb12fff41fa8cbe21535ac435a9bf65ea14a7c111fe973cc6ae7dfab2/epam/edp-keycloak-operator"
---

# Keycloak Operator

| Please refer to [KubeRocketCI documentation](https://docs.kuberocketci.io/) to get the main concepts and guidelines. |
| --- |

Get acquainted with the Keycloak Operator, the installation process, the quick start, and the local development guidelines.

## Overview

Keycloak Operator is a KubeRocketCI operator responsible for configuring existing Keycloak instances. The operator runs both on OpenShift and Kubernetes.

_**NOTE:** Operator is platform-independent, which is why there is a unified instruction for deployment._

## Prerequisites

1. Kubernetes 1.32 or later, or OpenShift 4.19 or later;
2. Linux machine or Windows Subsystem for Linux instance with [Helm 3](https://helm.sh/docs/intro/install/) installed;
3. Cluster admin access to the cluster;
4. [cert-manager](https://cert-manager.io/docs/installation/) installed in the cluster (required for webhook functionality, can be disabled via `enableWebhooks: false`);

## Installation Using Helm Chart

To install the Keycloak Operator, follow the steps below:

1. To add the Helm EPAMEDP Charts for a local client, run "helm repo add":

     ```bash
     helm repo add epamedp…
