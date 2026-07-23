---
repo: "jordanhubbard/mac"
name: "mac"
description: "Multi-agent coordinator"
readmeQualityOk: true
url: "https://github.com/jordanhubbard/mac"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 8
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-18T02:54:02Z"
lastCommitAt: "2026-07-23T06:15:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 58
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88a5f3309b9b366e01696b0abf4ca6d0fd82b015011ba7cd0c5111173e190e08/jordanhubbard/mac"
---

# mac

Multi-agent coordinator control plane.

`mac` is a clean-room control plane for fleets of AI agents. It is designed to
sit underneath a human-facing agent runtime such as
`NousResearch/hermes-agent`, OpenClaw, or a compatible system.

The human-facing runtime owns conversation, personality, adaptive memory,
skills, and messaging gateways. `mac` owns durable operational truth: tasks,
leases, routing, reviews, evidence, secrets, runtime manifests, rollout state,
and audit trails. Fleet deployments use stock OpenClaw in OpenShell for the
human-channel role; internal agents may share a stable public identity.

The goal is to let a user talk to a persistent Hermes agent with a real
personality and memory, then let that agent create durable work that a broader
fleet can execute, review, publish, and recover.

If you are new to the project, start with the
[production documentation book](https://github.com/jordanhubbard/mac/blob/HEAD/docs/index.md) or read the
[versioned HTML edition](https://jordanhubbard.github.io/mac/). It begins with
the system model and local operation, then advances through fleet deployment,
security, review, publication, and a complete request-to-production…
