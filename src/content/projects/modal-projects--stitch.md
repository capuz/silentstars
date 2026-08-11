---
repo: "modal-projects/stitch"
name: "stitch"
description: "Stitch your rollouts together across clouds and regions"
readmeQualityOk: true
url: "https://github.com/modal-projects/stitch"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-10T15:16:12Z"
lastCommitAt: "2026-08-11T04:48:57Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 34
maintainers: ["nanjiangwill", "jvmncs"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e812185196ccbfbc810410985fdc53cf6d346b99018e02d2f1287e2cfe87eec/modal-projects/stitch"
---

# Stitch

Stitch is the versioned control plane for disaggregated reinforcement learning.
It lets policy training and rollout inference run as independent, elastic
systems while preserving which policy produced every trajectory.

This matters for asynchronous and agentic RL: policy updates continue while
long rollouts are in flight, rollout workers join and leave, and different
consumers tolerate different amounts of staleness. Stitch turns an inference
fleet into a coherent, versioned rollout service. It coordinates policy
publication, replica convergence, request admission, and weight activation
without prescribing the training algorithm, inference engine, storage system,
or compute provider.

```text
Trainer ── publish policy versions ──> Store
   │                                      ▲
   │ version-constrained requests         │ reconcile
   ▼                                      │
Pool gateway ───────────────────────> Rollout replicas ──> Inference engines
```

## What Stitch provides

- **A versioned rollout service.** Requests can require a minimum or exact
  policy version. Incompatible replicas return a retryable `409`, and responses
  report the versions at generation…
