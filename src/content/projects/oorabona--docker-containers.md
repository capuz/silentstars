---
repo: "oorabona/docker-containers"
name: "docker-containers"
description: "Hardened multi-arch (amd64/arm64) Docker images with SBOM, Sigstore attestation, daily Trivy scans, and automated upstream tracking."
readmeQualityOk: true
url: "https://github.com/oorabona/docker-containers"
homepage: "https://oorabona.github.io/docker-containers/"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["devops", "devsecops", "docker", "ansible", "debian", "jekyll", "openresty", "pgvector", "php", "postgres"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 679
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-09-18T12:00:57Z"
lastCommitAt: "2026-10-29T12:26:28Z"
lastReleaseAt: "2026-01-17T02:00:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 90
maintainers: ["oorabona-upstream-monitor[bot]", "oorabona", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2730b4740df8a2ae660408f34067af74ece58693ef288c3e09bf71a3f0defeb1/oorabona/docker-containers"
---

# Docker Containers

Production-ready Docker images with **zero-touch upstream monitoring** — when a new version drops, builds happen automatically.

## What's in the box

| Container | What it does | Variants |
|-----------|-------------|----------|
| [postgres](https://github.com/oorabona/docker-containers/blob/HEAD/postgres/) | PostgreSQL with extension ecosystem | base, vector, analytics, timeseries, spatial, distributed, full |
| [terraform](https://github.com/oorabona/docker-containers/blob/HEAD/terraform/) | Terraform CLI, cloud-provider scoped | base, aws, azure, gcp, full |
| [opentofu](https://github.com/oorabona/docker-containers/blob/HEAD/opentofu/) | OpenTofu CLI, cloud-provider scoped | base, aws, azure, gcp, full |
| [github-runner](https://github.com/oorabona/docker-containers/blob/HEAD/github-runner/) | Self-hosted GitHub Actions runner | ubuntu-2404, debian-trixie, windows-ltsc2022 × base/dev |
| [web-shell](https://github.com/oorabona/docker-containers/blob/HEAD/web-shell/) | Browser-accessible shell over HTTPS | debian (default), alpine, ubuntu, rocky |
| [wordpress](https://github.com/oorabona/docker-containers/blob/HEAD/wordpress/) | WordPress with PHP…
