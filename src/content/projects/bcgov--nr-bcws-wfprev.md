---
repo: "bcgov/nr-bcws-wfprev"
name: "nr-bcws-wfprev"
description: "The goal of the BC Wildfire Service (BCWS) Prevention Program is to reduce the negative impacts of wildfire on public safety, property, the environment and the economy using the seven disciplines of the FireSmart program."
readmeQualityOk: true
url: "https://github.com/bcgov/nr-bcws-wfprev"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [54, 33]
topics: ["aws", "for", "forest-fire", "mof", "terraform", "wildfire", "terragrunt", "angular", "postgis", "postgresql"]
stars: 6
forks: 6
openIssues: 2
closedIssues: 0
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2024-08-16T16:39:27Z"
lastCommitAt: "2026-10-21T23:36:38Z"
lastReleaseAt: "2025-03-31T22:29:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 76
undervaluedScore: 72
maintainers: ["sukhpalp", "ssylver93", "hwang-vividsolutions"]
openGraphImageUrl: "https://opengraph.githubassets.com/245f9bb97c0a9b81abfbbc365f12dfd0f62160884c3caf38f73faa8b2dc4bdb6/bcgov/nr-bcws-wfprev"
---

# nr-bcws-wfprev
The goal of the BC Wildfire Service (BCWS) Prevention Program is to reduce the negative impacts of wildfire on public safety, property, the environment and the economy using the seven disciplines of the FireSmart program.

## Technologies used

* [Angular](https://angular.io/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [PostGIS](https://postgis.net/)
* [Terraform](https://www.terraform.io)
* [Terragrunt](https://terragrunt.gruntwork.io)
* [AWS](https://aws.amazon.com/)
* [Docker](https://www.docker.com/)

# Getting Started

## Improved Local Development (Recommended)

For a streamlined setup including automated builds and data restoration, use the unified shell scripts in the [docker](https://github.com/bcgov/nr-bcws-wfprev/blob/HEAD/docker) folder.

### macOS, Linux & Windows (via Git Bash / WSL)
```bash
# 1. Grant execution permissions
chmod +x docker/*.sh

# 2. Start the local stack and restore seed data
./docker/start-local.sh -r
```

See the [Local Dev README](https://github.com/bcgov/nr-bcws-wfprev/blob/HEAD/docker/README.md) for full prerequisites and Windows setup instructions.

## Manual Local Deployment

### The Easy Way

You can start the…
