---
repo: "openshift-kni/numaresources-operator"
name: "numaresources-operator"
description: "Operator to enable reporting of per-NUMA-zone compute resources"
url: "https://github.com/openshift-kni/numaresources-operator"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 11
forks: 23
openIssues: 19
closedIssues: 35
watchers: 5
contributors: 37
recentReleases: 0
createdAt: "2021-11-03T16:28:03Z"
lastCommitAt: "2026-06-27T06:25:01Z"
lastReleaseAt: "2024-07-30T12:49:18Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 76
maintainers: ["openshift-merge-bot[bot]", "red-hat-konflux[bot]", "ffromani"]
openGraphImageUrl: "https://opengraph.githubassets.com/030f3dd45bbceedc000299e7371dc12fc57980eda587115ad169f69ab396d6c9/openshift-kni/numaresources-operator"
---

# NUMA Resources Operator

Operator to allow to expose the per-NUMA-zone compute resources, using the [RTE - resource topology exporter](https://github.com/k8stopologyawareschedwg/resource-topology-exporter).
The operator also takes care of deploying the [Node Resource Topology API](https://github.com/k8stopologyawareschedwg/noderesourcetopology-api) on which the resource topology exporter depends to provide the data.
The operator provides minimal support to deploy [secondary schedulers](https://github.com/openshift-kni/scheduler-plugins).

## deploying using OLM

The currently recommended way of deploying the operator in your cluster is using [OLM](https://github.com/operator-framework/operator-lifecycle-manager/). OLM greatly simplifies webhook management, which the operator requires.
Assuming you can push container images to a container registry and you are in the root directory of this project, a deployment flow can look like:

1. fix environment variables as per your need. You will most likely need to override `VERSION` `REPO` `CONTAINER_ENGINE`
1. build and upload the operator container image: `make container-build container-push`
1. build and upload the manifest bundle…
