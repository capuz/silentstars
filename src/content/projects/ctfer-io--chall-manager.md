---
repo: "ctfer-io/chall-manager"
name: "chall-manager"
description: "Challenge Instances on Demand, anywhere at any time"
readmeQualityOk: true
url: "https://github.com/ctfer-io/chall-manager"
homepage: "https://ctfer.io/docs/chall-manager"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["capture-the-flag", "ctf", "on-demand", "challenge", "instance"]
stars: 45
forks: 7
openIssues: 8
closedIssues: 52
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-01-25T13:35:20Z"
lastCommitAt: "2026-11-07T10:38:09Z"
lastReleaseAt: "2025-05-07T10:42:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["dependabot[bot]", "pandatix"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b6def368706a2bfbfed72747e9e084b6db80e67e2646657a073c70fce954a85/ctfer-io/chall-manager"
---

Chall-Manager is a challenge instances on demand engine, designed to make managing CTF (Capture The Flag) challenges effortless.

Instead of juggling infrastructure details, container lifecycles, and scaling logic, Chall-Manager provides a unified abstraction layer to run and manage challenges reliably—whether for a classroom, training environment, or large-scale competition.

> [!CAUTION]
> Chall-Manager is currently in public beta phase.
> It could be run in production, but breaking changes are subject to happen in the upcoming months until General Availability.

## 🚀 What Chall-Manager Does

- **Abstracts infrastructure** – Run challenges locally, in Kubernetes, or across clouds without changing your workflows;
- **Manages challenge lifecycles** – Create, start, stop, and clean up instances on demand;
- **Scales intelligently** – Define minimum/maximum pool sizes, then automatically maintains the pool; pick from the pool whenever needed;
- **[Integrates with CTFd](https://github.com/ctfer-io/ctfd-chall-manager) and more** – Is platform-agnostic, and has [Terraform](https://github.com/ctfer-io/terraform-provider-ctfdcm) and [Pulumi](https://github.com/ctfer-io/pulumi-ctfdcm)…
