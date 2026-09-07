---
repo: "nabilrn/MyPaas"
name: "MyPaas"
description: "Selfhosted Platform As a Service"
readmeQualityOk: true
url: "https://github.com/nabilrn/MyPaas"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [41, 25]
stars: 8
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-23T06:57:41Z"
lastCommitAt: "2026-09-07T08:34:39Z"
lastReleaseAt: "2026-09-05T10:01:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 66
maintainers: ["nabilrn"]
openGraphImageUrl: "https://opengraph.githubassets.com/e88a45b1d1fb2dfe6d2a39136c7b9b97b61149d086a92301fb8bb79be1604a7e/nabilrn/MyPaas"
---

# MyPaaS

MyPaaS is a self-hosted **single-host PaaS** for deploying and operating applications on a Linux server you control.

**Status:** Beta

It is built for an owner developer or a small trusted team. MyPaaS manages deployment, routing, lifecycle, persistence, and common operations without pretending one server has unlimited capacity or multi-tenant isolation.

## Current capabilities

- deploy Git repositories with **Dockerfile**, **Docker Compose**, or **static output**;
- choose repositories available to the connected GitHub account directly from the New Project form, including private repositories;
- deploy OCI images with anonymous pulls or one bounded installation-level credential for a configured registry;
- inspect repositories and support base-directory / monorepo deployments;
- manage encrypted environment variables, editable per-source resource defaults with fixed safety floors, deployment history, logs, metrics, restart, redeploy, and rollback;
- monitor the host-wide Docker-compatible container inventory, including MyPaaS control-plane and application containers, with search, filters, pagination, and live runtime metrics;
- provide an owner-only short-lived host…
