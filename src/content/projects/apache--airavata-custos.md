---
repo: "apache/airavata-custos"
name: "airavata-custos"
description: "Apache Airavata Custos Security"
readmeQualityOk: true
url: "https://github.com/apache/airavata-custos"
homepage: "https://airavata.apache.org/custos"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [44, 34]
topics: ["airavata", "apache", "security", "oauth2", "openidconnect", "authentication", "authorization"]
stars: 22
forks: 41
openIssues: 35
closedIssues: 118
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2019-02-14T18:41:17Z"
lastCommitAt: "2026-11-02T17:57:14Z"
lastReleaseAt: "2024-12-06T18:29:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 72
maintainers: ["yasithdev", "lahirujayathilake", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/76eb102c38792d36ccf5154194ab300c4415555d687c93c0c01e6e5513b48101/apache/airavata-custos"
---

# Apache Airavata Custos

Custos is a security middleware for science gateways and HPC research computing, developed under the [Apache Airavata](https://airavata.apache.org/) umbrella. It provides identity and access management, credential storage, federated authentication, and resource allocation services through a language-independent API.

The project is currently being rebuilt around an HPC allocation management focus.

**[Project website](https://airavata.apache.org/custos/)**

## Repository Layout

Custos is composed of pluggable pieces a deployment site mixes and matches.

```
airavata-custos/
├── core/          # Shared contracts and domain models
├── connectors/    # Adapters to external allocation systems (ACCESS-CI, SLURM, ...)
├── extensions/    # Node-side components a site may opt into (PAM, SSH cert signer)
└── dev-ops/       # Local compose stack, Terraform, Ansible
```

| Area | Purpose | Examples |
|------|---------|----------|
| `core/` | Go interfaces and shared domain types that connectors and extensions depend on | `accountprovisioning.Provisioner` |
| `connectors/` | Protocol adapters that bring external state into Custos | `ACCESS/AMIE-Processor`,…
