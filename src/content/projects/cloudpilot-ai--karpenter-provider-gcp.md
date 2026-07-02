---
repo: "cloudpilot-ai/karpenter-provider-gcp"
name: "karpenter-provider-gcp"
description: "Google Cloud Karpenter Provider"
url: "https://github.com/cloudpilot-ai/karpenter-provider-gcp"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["autoscaling", "gcp", "google", "googlecloud", "karpenter", "kubernetes", "clusterautoscaler", "finops", "gke"]
stars: 313
forks: 59
openIssues: 17
closedIssues: 79
watchers: 15
contributors: 36
recentReleases: 5
createdAt: "2024-09-25T15:56:11Z"
lastCommitAt: "2026-07-02T06:32:36Z"
lastReleaseAt: "2026-06-09T23:26:51Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 95
undervaluedScore: 42
maintainers: ["dm3ch", "dependabot[bot]", "promptless-for-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a64c9cd4b60245a51c0e001eddf70aeaed8bb592f77c582f468a8175f3000b4/cloudpilot-ai/karpenter-provider-gcp"
discussionCount: 2
---

<br><br>
    <i>Autoscale GKE cluster nodes efficiently and cost-effectively.</i>
  </p>
</div>

> [!NOTE]
> A live version is now available.
>
> **Feedback welcome!** Join our [Slack](https://kubernetes.slack.com/archives/C0B20K4KWP8) to share your ideas, ask questions, and discuss with the community.

## Introduction

Karpenter is an open-source node provisioning project built for Kubernetes.
Karpenter improves the efficiency and cost of running workloads on Kubernetes clusters by:

* **Watching** for pods that the Kubernetes scheduler has marked as unschedulable
* **Evaluating** scheduling constraints (resource requests, nodeselectors, affinities, tolerations, and topology spread constraints) requested by the pods
* **Provisioning** nodes that meet the requirements of the pods
* **Removing** the nodes when the nodes are no longer needed

## How it works

Karpenter observes the aggregate resource requests of unscheduled pods and makes decisions to launch and terminate nodes to minimize scheduling latencies and infrastructure cost.

  </p>
</div>

## Managed optimization for production Kubernetes

For teams running Karpenter in production, [CloudPilot…
