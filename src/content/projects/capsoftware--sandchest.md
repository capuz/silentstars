---
repo: "CapSoftware/Sandchest"
name: "Sandchest"
description: "Add a hacker to your team."
readmeQualityOk: true
url: "https://github.com/CapSoftware/Sandchest"
homepage: "https://sandchest.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-18T12:46:17Z"
lastCommitAt: "2026-11-01T10:45:26Z"
lastReleaseAt: "2026-11-01T00:44:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["richiemcilroy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1160844845/fda8eb23-7e02-4794-9582-e139bd25dbb7"
---

# Sandchest

Sandchest reads your code the way an attacker would. It is a GitHub App that builds a threat model of each repository, reviews every pull request for exploitable vulnerabilities, and hands you fix prompts for your coding agent.

You can use the hosted service at [sandchest.com](https://www.sandchest.com), or run it yourself with the instructions below. A self-hosted Sandchest sends nothing to us: no telemetry and no billing. Plans and credits are switched off. The safety limits stay: one deep scan per repository a day, at most two scans at a time per account, and no scans of repositories over a million lines.

## Self-hosting

You get two containers: `web`, which serves the dashboard and webhooks and runs scans, and `postgres`. You also get a GitHub App of your own, created in one click by the server's setup page.

### What you need

- **Docker** with the Compose plugin (`docker compose version` 2.20 or newer).
- **A machine with 2 or more CPUs and 4 GB of memory.** Each scan clones one repository into a temporary directory and indexes it, so leave disk space for your largest repository.
- **A public HTTPS address** that GitHub can send webhooks to: a domain with a…
