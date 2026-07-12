---
repo: "shakkernerd/ocm"
name: "ocm"
description: "OpenClaw Manager"
readmeQualityOk: true
url: "https://github.com/shakkernerd/ocm"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-26T07:19:41Z"
lastCommitAt: "2026-07-12T06:16:25Z"
lastReleaseAt: "2026-04-16T21:30:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["vincentkoc", "shakkernerd", "hannesrudolph"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df05477f932bd78f46bdddf134f61dc14456d5bdc7f5715076b3f07e564f503/shakkernerd/ocm"
---

# ocm

**Install, run, update, and manage OpenClaw — properly.**

OCM gives OpenClaw one coherent workflow across stable releases, local checkouts, supervised env gateways, upgrades, snapshots, and ongoing maintenance.

OpenClaw is easy to start once. It gets messier when you want more than one setup, need stable and local development side by side, or want confidence about what is actually running. `ocm` fixes that.

Once an environment exists, `ocm` can be your normal OpenClaw entrypoint:

```bash
ocm @mira -- tui
ocm @mira -- status
ocm @mira -- onboard
```

## What ocm manages

`ocm` keeps the moving parts separate:

- **envs** — isolated OpenClaw environments
- **runtimes** — installed and pinned OpenClaw releases
- **launchers** — named command recipes for local-dev or custom runs
- **services** — background OpenClaw processes tied to one environment

That split is what makes stable releases, local development, upgrades, and service management fit together cleanly.

## Why people use it

Use `ocm` when you want:

- one clean OpenClaw environment per project, task, or instance
- one command path for OpenClaw itself through `ocm @<env> -- <command>`
- published OpenClaw…
