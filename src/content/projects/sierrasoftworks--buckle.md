---
repo: "SierraSoftworks/buckle"
name: "buckle"
description: "Lightweight bootstrapping of servers, with amazing observability and practically no fluff."
readmeQualityOk: true
url: "https://github.com/SierraSoftworks/buckle"
homepage: "http://buckle.sierrasoftworks.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["bootstrapping", "cloudinit", "configuration-management"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-09-04T08:10:48Z"
lastCommitAt: "2026-11-05T11:24:51Z"
lastReleaseAt: "2023-01-14T10:13:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 71
maintainers: ["claude", "notheotherben", "automate-by-sierra-softworks[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f4eeb5a538b8d53f93023be12cd2afb4986abe6a0b9695132614ec4bea3f2e8/SierraSoftworks/buckle"
---

# Buckle

**Lightweight fleet configuration with phased, health-gated rollouts.**

Buckle configures a fleet of servers from a Git repository of declarative
modules. One static binary does everything: it plans and applies locally, runs
as a persistent agent on every host, and runs as the server that watches Git and
orchestrates rollouts across the fleet with a web UI.

- **Lightweight.** One binary (agent, server and web UI), no interpreter, no
  SSH. Bootstrapping a host is `buckle up --server …`.
- **Fast.** Modules run as a dependency graph in parallel; plan is a pure read
  phase (it cannot write to the host) and apply touches only what changed.
- **Safe to converge.** Thirty typed, idempotent task kinds with plans and diffs;
  everything Buckle applied is cleaned up when it leaves the config (opt out with
  `removal: leave`); a module whose selection cannot be decided is left alone
  rather than removed; tools missing on a minimal image make a step *blocked*,
  not an error.
- **Observable.** One OpenTelemetry trace per rollout spanning the server and
  every agent, with spans per module, task and health check, and gauges for
  rollout hosts and connected agents.
- **Operable…
