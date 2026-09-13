---
repo: "jordanhubbard/mac"
name: "mac"
description: "Multi-agent coordinator"
readmeQualityOk: true
url: "https://github.com/jordanhubbard/mac"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 15
forks: 3
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-18T02:54:02Z"
lastCommitAt: "2026-09-13T08:28:24Z"
lastReleaseAt: "2026-09-06T08:18:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 50
maintainers: ["jordanhubbard"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa7c955528b142fcf4898578dd1315297b9e1db043c666f5e928181992763c91/jordanhubbard/mac"
---

# mac

Multi-agent coordinator control plane.

`mac` is a clean-room control plane for fleets of AI agents. It is designed to
sit underneath a human-facing agent runtime such as OpenClaw under OpenShell, NemoClaw Hermes, or a compatible system.

The human-facing runtime owns conversation, personality, adaptive memory,
skills, and messaging gateways. `mac` owns durable operational truth: tasks,
leases, routing, reviews, evidence, secrets, runtime manifests, rollout state,
and audit trails. The fleet registry selects the human-channel runtime; the committed fleet
default is Hermes (`gateway_impl: hermes`). OpenClaw is another deployment
option. Internal agents may share a stable public identity.

The goal is to let a user talk to an agent with a real
personality and memory, then let that agent create durable work that a broader
fleet can execute, review, publish, and recover.

If you are new to the project, start with the
[production documentation book](https://github.com/jordanhubbard/mac/blob/HEAD/docs/index.md) or read the
[versioned HTML edition](https://jordanhubbard.github.io/mac/). It begins with
the system model and local operation, then advances through fleet deployment,…
