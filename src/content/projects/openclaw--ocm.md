---
repo: "openclaw/ocm"
name: "ocm"
description: "OpenClaw Manager"
readmeQualityOk: true
url: "https://github.com/openclaw/ocm"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 20
forks: 18
openIssues: 7
closedIssues: 32
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2026-03-26T07:19:41Z"
lastCommitAt: "2026-09-26T08:45:54Z"
lastReleaseAt: "2026-04-16T21:30:29Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["shakkernerd", "fuller-stack-dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a73d26ca51de99b5b02ed3b4e86fc5b16e415d5db73a569c73f92aa05cc89edd/openclaw/ocm"
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
