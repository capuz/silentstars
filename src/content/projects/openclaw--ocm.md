---
repo: "openclaw/ocm"
name: "ocm"
description: "OpenClaw Manager"
readmeQualityOk: true
url: "https://github.com/openclaw/ocm"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 13
forks: 13
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 49
recentReleases: 0
createdAt: "2026-03-26T07:19:41Z"
lastCommitAt: "2026-08-19T04:08:27Z"
lastReleaseAt: "2026-04-16T21:30:29Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 62
maintainers: ["shakkernerd", "fuller-stack-dev", "jalehman"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e22210c1a87104ae5f9b4e591f8a2a8cfa71463f5ae6194aeb56a53eb68524a/openclaw/ocm"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
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
