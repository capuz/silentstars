---
repo: "ProjectZKM/zkm-fleet"
name: "zkm-fleet"
description: "A unified scheduling framework for ZKM verifiable AI"
readmeQualityOk: true
url: "https://github.com/ProjectZKM/zkm-fleet"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 22
forks: 23
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2024-03-10T08:53:09Z"
lastCommitAt: "2026-11-23T10:22:55Z"
lastReleaseAt: "2026-11-08T12:45:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 80
maintainers: ["eigmax", "blake-pro"]
openGraphImageUrl: "https://opengraph.githubassets.com/22bf8304bdbed2616de52cd782d62e0e706758b8a3a5111007d6f8e1de463d94/ProjectZKM/zkm-fleet"
---

# zkm-fleet

Fleet schedules apps and batch jobs on shared GPU and CPU machines.

- **Apps** keep containers running: a model server, or a Ziren prover with its program.
- **Batches** run finite commands and release resources when cleanup finishes.

## Architecture

The control host runs the Rust scheduler, Postgres, an HTTPS gateway and, optionally,
MCP. Each execution machine runs `fleet-node` and its own local Ray, and connects
outward to register. Fleet handles admission, quotas, placement and lifecycle; apps
own their data and pipelines. The [code model](https://github.com/ProjectZKM/zkm-fleet/blob/HEAD/docs/reference.md#code-names) follows
Kubernetes' jobs, deployments and controllers, without needing Kubernetes.
