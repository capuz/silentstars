---
repo: "kaskol10/karpenter-optimizer"
name: "karpenter-optimizer"
description: "💰 Cost optimization tool for Karpenter NodePools. Analyzes Kubernetes cluster usage and provides AI-powered recommendations to reduce AWS EC2 costs while maintaining performance."
readmeQualityOk: true
url: "https://github.com/kaskol10/karpenter-optimizer"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [55, 44]
topics: ["aws", "cost-optimization", "docker", "ec2", "go", "helm", "karpenter", "kubernetes", "kubernetes-tools", "node-pool"]
stars: 78
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-01T13:48:12Z"
lastCommitAt: "2026-11-17T14:36:22Z"
lastReleaseAt: "2025-12-03T08:36:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 46
maintainers: ["kaskol10", "claude", "Bart-Leboeuf"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca2a8ca9fe8ad56f33c5a53f516416835defa2a97a5def50b8205799f4c469ec/kaskol10/karpenter-optimizer"
discussionCount: 1
---

# Karpenter Optimizer

💰 **Cost optimization tool for Karpenter NodePools**. Analyzes Kubernetes cluster usage and provides AI-powered recommendations to reduce AWS EC2 costs while maintaining performance.

Karpenter Optimizer helps you optimize your Karpenter NodePool configurations by analyzing actual cluster usage and providing intelligent, cost-effective instance type recommendations. Get visual before/after comparisons showing cost and resource savings.

## ✨ Features

- 🎯 **Automatic Workload Discovery**: Automatically fetch workloads from your Kubernetes cluster
- 📈 **Cluster Trends**: CPU, memory, GPU-memory and estimated-cost trend sparklines in the Cluster Overview (1h/6h/24h) from a background sampler; per-node age badges in the Topology view
- 📊 **Real-time Node Usage**: Visualize actual CPU and memory usage per node with interactive charts
- 🗺️ **Topology View**: Semantic zoom from a Cluster map (every node a tile, grouped by NodePool and zone, coloured by a lens: requests, capacity type, age, cost, serving health, disruption) to a NodePool, a node and a single GPU, each level with its own URL. With metrics-server or Prometheus it shows requested vs actually used…
