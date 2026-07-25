---
repo: "falcosecurity/k8s-metacollector"
name: "k8s-metacollector"
description: "Fetches the metadata from kubernetes API server and dispatches them to Falco instances"
readmeQualityOk: true
url: "https://github.com/falcosecurity/k8s-metacollector"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["api-server", "falco", "kubernetes", "metadata"]
stars: 22
forks: 8
openIssues: 1
closedIssues: 4
watchers: 5
contributors: 22
recentReleases: 1
createdAt: "2023-02-15T09:57:26Z"
lastCommitAt: "2026-07-25T06:01:55Z"
lastReleaseAt: "2026-07-18T14:19:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 65
maintainers: ["dependabot[bot]", "alacuku", "bossm8"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf6ce507bac268f3d109ffeeea3b49216e73c2c66ebd09b788c54d537861b2d/falcosecurity/k8s-metacollector"
---

# k8s-metacollector

⚠️ The repository is still a work in progress ⚠️

The `k8s-metacollector` is a self-contained module that can be deployed within a Kubernetes cluster to perform the task
of gathering metadata from various Kubernetes resources and subsequently transmitting this collected metadata to
designated subscribers.

## Description

[Falco](https://github.com/falcosecurity/falco) enriches events coming from [syscall event source](https://falco.org/docs/event-sources/) with `metadata` 
coming from other sources, for example Kubernetes API server. Historically, each instance of Falco running in a 
Kubernetes cluster would connect to the Kubernetes API server in order to fetch the metadata for a [subset of 
Kubernetes resources](https://falco.org/docs/reference/rules/supported-fields/#field-class-k8s). This approach works 
well in small Kubernetes cluster but does not scale in large environments. The following issue describes the 
problems that were affecting the old Kubernetes client: https://github.com/falcosecurity/libs/issues/987.

The aim of `k8s-metacollector` is to propose a novel approach to `k8s metadata enrichment` in Falco by moving 
the fetching logic of the…
