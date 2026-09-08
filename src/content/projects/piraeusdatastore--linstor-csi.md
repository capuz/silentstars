---
repo: "piraeusdatastore/linstor-csi"
name: "linstor-csi"
description: "CSI plugin for LINSTOR"
readmeQualityOk: true
url: "https://github.com/piraeusdatastore/linstor-csi"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["csi", "kubernetes", "linstor", "sds", "persistent-storage"]
stars: 133
forks: 33
openIssues: 30
closedIssues: 77
watchers: 11
contributors: 19
recentReleases: 0
createdAt: "2018-12-10T23:47:59Z"
lastCommitAt: "2026-09-08T08:17:09Z"
lastReleaseAt: "2021-08-18T12:51:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 43
maintainers: ["WanzenBug", "dependabot[bot]", "munin92"]
openGraphImageUrl: "https://opengraph.githubassets.com/825adc951f170d6566468bf5044ebbaf8200fae309cff5f2a5039b2c0c217db8/piraeusdatastore/linstor-csi"
---

# Linstor CSI Plugin

This CSI plugin allows for the use of LINSTOR volumes on Container Orchestrators
that implement CSI, such as Kubernetes.

# Building

If you wish to create a docker image for a local registry run `make upload REGISTRY=local.example.com`.

# Deployment

If you are looking to deploy a full LINSTOR setup with LINSTOR controller and satellites,
take a look at [our operator](https://github.com/piraeusdatastore/piraeus-operator).

This project _ONLY_ deploys the CSI components, a working LINSTOR cluster is required.
Use our example deployment in `examples/k8s/deploy` as base to deploy only the LINSTOR CSI
components. You will need to update every occurence of `LINSTOR_CONTROLLER_URL` with the actual
URL of your LINSTOR Controller, for example like this:

```
$ LINSTOR_CONTROLLER_URL=http://linstor-controller.example.com:3370
$ kubectl kustomize http://github.com/piraeusdatastore/linstor-csi/examples/k8s/deploy \
  | sed "s#LINSTOR_CONTROLLER_URL#$LINSTOR_CONTROLLER_URL#" \
  | kubectl apply --server-side -f -
```

# Usage

This project must be used in conjunction with a working LINSTOR cluster, version
0.9.11 or better.
[LINSTOR's…
