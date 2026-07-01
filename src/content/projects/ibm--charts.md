---
repo: "IBM/charts"
name: "charts"
description: "The IBM/charts repository provides helm charts for IBM and Third Party middleware."
url: "https://github.com/IBM/charts"
language: "Go Template"
languages: ["Go Template", "Shell"]
languagePcts: [52, 26]
topics: ["kubernetes", "helm", "helm-charts", "ibm", "ibm-bluemix", "docker"]
stars: 311
forks: 415
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 56
recentReleases: 0
createdAt: "2017-06-13T08:16:04Z"
lastCommitAt: "2026-07-01T07:04:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c3dfd67ad256dd06bd0bc917c03dd424e12983a0b3767b1c1af30fff60e67416/IBM/charts"
---

# **IBM Charts** Helm Repository

## Overview

The `IBM/charts` git repository provides several [Helm](https://github.com/helm/helm#helm) chart repositories and is organized as follows:

## Helm 3
The `repo/ibm-helm` directory contains packaged Helm chart binaries.  Installation of a chart from the ibm-helm repo may require a docker-registry secret containing an entitlement key from [MyIBM Container Software Library](https://myibm.ibm.com/products-services/containerlibrary).  See [obtaining your entitlement key](https://www.ibm.com/support/knowledgecenter/SSFC4F_1.3.0/readmes/GA/red_hat_getting_started.html#entitlement) for step by step instructions on retrieving an entitlement key if required.  

To add the ibm-helm repo to local helm chart repository list run the following command : 
```
helm repo add ibm-helm https://raw.githubusercontent.com/IBM/charts/master/repo/ibm-helm
```

To add the ibm-helm repo to a OCP 4.6+ helm chart repository list run the following command : 
```
cat <<EOF | kubectl apply -f -
apiVersion: helm.openshift.io/v1beta1
kind: HelmChartRepository
metadata:
  name: ibm-helm-repo
spec:
  connectionConfig:
    url:…
