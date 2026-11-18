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
stars: 199
forks: 40
openIssues: 223
closedIssues: 571
watchers: 32
contributors: 102
recentReleases: 0
createdAt: "2020-07-09T13:47:29Z"
lastCommitAt: "2026-11-18T11:34:30Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 39
maintainers: ["nimalank7", "jfharden", "AP-Hunt"]
openGraphImageUrl: "https://opengraph.githubassets.com/35e8ba33f3e2c3ba3da36b80429431afc24fdf36b9a4756c9507a69cd650d8b1/alphagov/govuk-infrastructure"
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
