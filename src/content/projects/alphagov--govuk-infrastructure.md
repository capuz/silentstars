---
repo: "alphagov/govuk-infrastructure"
name: "govuk-infrastructure"
description: "This repository contains all the code and infrastructure to run the GOV.UK Platform. See https://github.com/alphagov/govuk-helm-charts for application config. Issues created in this repository are for all of GOV.UK Platform Engineering (not just infrastructure).."
readmeQualityOk: true
url: "https://github.com/alphagov/govuk-infrastructure"
language: "HCL"
languages: ["HCL"]
languagePcts: [94]
topics: ["govuk"]
stars: 196
forks: 37
openIssues: 219
closedIssues: 553
watchers: 33
contributors: 93
recentReleases: 0
createdAt: "2020-07-09T13:47:29Z"
lastCommitAt: "2026-09-11T08:15:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 39
maintainers: ["koetsier", "jaskaransarkaria", "nimalank7"]
openGraphImageUrl: "https://opengraph.githubassets.com/63ef376772d9a2a340b4d8b1405a1a4dc3f7d60bf39a73ac263e57009482d2fd/alphagov/govuk-infrastructure"
---

# GOV.UK Infrastructure

## What's in this repo

The govuk-infrastructure repo contains:

- [`terraform/`](https://github.com/alphagov/govuk-infrastructure/blob/HEAD/terraform/): Terraform modules for turning up an Kubernetes
  cluster on EKS for GOV.UK.
- [`images/`](https://github.com/alphagov/govuk-infrastructure/blob/HEAD/images/): Container image definitions for utilities.
- [`.github/`](https://github.com/alphagov/govuk-infrastructure/blob/HEAD/.github/): GitHub Actions and workflows used by other GOV.UK
  repos, for example release automation, test runners and security analysis
  tools.

### What's not in this repo

Helm charts for GOV.UK applications are in [alphagov/govuk-helm-charts](https://github.com/alphagov/govuk-helm-charts).

Base image definitions for GOV.UK Ruby apps are in [alphagov/govuk-ruby-images](https://github.com/alphagov/govuk-ruby-images/).

Configuration of CDN services is stored in [alphagov/govuk-fastly](https://github.com/alphagov/govuk-fastly) and [alphagov/govuk-fastly-secrets](https://github.com/alphagov/govuk-fastly-secrets) (private) repos.

Configuration of Google Cloud Platform (GCP) projects used for internal analytics is stored in…
