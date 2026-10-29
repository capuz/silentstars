---
repo: "openshift/cluster-storage-operator"
name: "cluster-storage-operator"
description: "Operator that sets OCP cluster wide storage defaults"
readmeQualityOk: true
url: "https://github.com/openshift/cluster-storage-operator"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 47
forks: 125
openIssues: 1
closedIssues: 21
watchers: 12
contributors: 414
recentReleases: 0
createdAt: "2018-08-31T14:46:13Z"
lastCommitAt: "2026-10-29T21:24:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 62
maintainers: ["openshift-merge-bot[bot]", "rvagner78", "dfajmon"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9c597beee6b0f2959cdbedd8a274cb16584addce7be1dc9d4cdece50684c6a7/openshift/cluster-storage-operator"
---

# cluster-storage-operator
Operator that sets OCP cluster-wide storage defaults.

Ensures a default storage class exists for OCP clusters, like the [addon-manager](https://github.com/kubernetes/kubernetes/tree/release-1.13/cluster/addons/storage-class) does for kubernetes clusters. Supports AWS and OpenStack. No configuration is required. The created storage class can be made non-default by editing its annotation but cannot be deleted so long as the operator runs.

Will also ensure default CSI volume plugins are installed in a future release when CSI plugins replace in-tree ones (see [csi-operator](https://github.com/openshift/csi-operator)).

## Quick start - running CSO from local workstation

### Scale down current CVO and CSO

```shell
# Set kubeconfig for connection to existing cluster
export KUBECONFIG=<path-to-kubeconfig>

# Scale down CVO and CSO
oc scale --replicas=0 deploy/cluster-version-operator -n openshift-cluster-version  
oc scale --replicas=0 deploy/cluster-storage-operator -n openshift-cluster-storage-operator
```

### Configure required environment variables

```shell
# Set operator and operand image version (this is just a marker for missing version, we assume…
