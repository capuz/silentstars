---
repo: "jordanhubbard/mac"
name: "mac"
description: "Multi-agent coordinator"
readmeQualityOk: true
url: "https://github.com/jordanhubbard/mac"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 8
forks: 4
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-18T02:54:02Z"
lastCommitAt: "2026-07-16T05:57:53Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 60
maintainers: ["jordanhubbard"]
openGraphImageUrl: "https://opengraph.githubassets.com/848dd0cde3a76b3216e9f8a52fad0a0932ab0e2437b2965bfacd1f09efce9186/jordanhubbard/mac"
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
[MAC Quickstart](https://github.com/jordanhubbard/mac/blob/HEAD/docs/getting-started.md). It explains the idea, vocabulary, and
first local commands before fleet deployment.

## Acknowledgements and Lineage

`mac`'s control-plane code is clean-room work, but the system is not built in a
vacuum. It has learned from, interoperates…
