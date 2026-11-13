---
repo: "danielraffel/Shipyard"
name: "Shipyard"
description: "Cross-platform CI coordination for local Macs, SSH hosts, cloud runners, and Tart."
readmeQualityOk: true
url: "https://github.com/danielraffel/Shipyard"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 7
forks: 0
openIssues: 142
closedIssues: 118
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-08T22:35:46Z"
lastCommitAt: "2026-11-13T04:55:59Z"
lastReleaseAt: "2026-04-09T22:12:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["danielraffel", "shipyard-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b51690a37d13d0c5fbc1de6fb903bad55293d0189915f4717458895f40ed413f/danielraffel/Shipyard"
---

# Shipyard

**Local-first engineering orchestration and governance for coding agents.**
Shipyard coordinates builds and tests, records review and merge gates, and
supports bounded recovery across local machines, SSH-reachable VMs, and cloud
runners. GitHub remains authoritative for pull requests and merge order.

Shipyard and [TartCI](https://github.com/danielraffel/tartci) solve different
parts of CI:

- **Shipyard coordinates the work.** It sends an exact commit to the targets
  you choose, records the results, watches pull requests, and hands a verified
  head to GitHub for landing.
- **TartCI runs the work in disposable VMs.** For teams using Tart on Apple
  Silicon, it turns their Macs into GitHub Actions capacity with clean macOS,
  Linux, and Windows VM lanes that are removed after each job.

Tart provides the VM runtime; it does not by itself schedule GitHub jobs or
manage their runner lifecycle. TartCI adds that CI pool around it: managed
images, capacity leases, ephemeral runner registration, job cleanup, and
metrics.
On a managed fleet, TartCI is the supported pool path; Orchard is retired and
should be disabled so two schedulers do not claim the same jobs or capacity.…
