---
repo: "finos/open-resource-broker"
name: "open-resource-broker"
description: "A unified API for orchestrating and provisioning compute capacity. Define what you need in a template, request it, track it and return it through a CLI, REST API, MCP server or native SDKs."
readmeQualityOk: true
url: "https://github.com/finos/open-resource-broker"
homepage: "https://finos.github.io/open-resource-broker/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 21
forks: 18
openIssues: 79
closedIssues: 232
watchers: 1
contributors: 22
recentReleases: 0
createdAt: "2025-07-10T10:25:15Z"
lastCommitAt: "2026-11-27T11:47:25Z"
lastReleaseAt: "2026-01-28T15:52:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["fgogolli"]
openGraphImageUrl: "https://opengraph.githubassets.com/18cebe9dac3357cabf516cdc720ee837c4997898788f887556d31904aa8e3b20/finos/open-resource-broker"
discussionCount: 0
---

---

**Open Resource Broker (ORB)** is a unified API for orchestrating and provisioning compute capacity programmatically. Define what you need in a template, request it, track it, return it — through a CLI, REST API, MCP server, or native SDKs for Python, Go, TypeScript, Java, Kotlin, and .NET.

ORB includes provider backends for AWS, Azure, Google Cloud, and Kubernetes, plus an extensible provider system for adding new backends.

**Provider support:**
- **AWS** — EC2 RunInstances, EC2Fleet, SpotFleet, Auto Scaling Groups, Lambda MicroVMs (built in; see [AWS Provider Setup](#setup) below)
- **Azure** — VM Scale Sets, single VMs, CycleCloud cluster nodes (`pip install "orb-py[azure]"`; see [Azure Provider Guide](https://github.com/finos/open-resource-broker/blob/HEAD/docs/root/providers/azure/index.md))
- **Google Cloud** — Managed Instance Groups, single Compute Engine VMs (`pip install "orb-py[gcp]"`; see [Google Cloud Provider Guide](https://github.com/finos/open-resource-broker/blob/HEAD/docs/root/providers/gcp/index.md))
- **Kubernetes** — Pod, Deployment, StatefulSet, Job (`pip install "orb-py[k8s]"`; see…
