---
repo: "alphagov/govuk-helm-charts"
name: "govuk-helm-charts"
description: "Helm charts for the GOV.UK website and publishing platform (content management system). Cluster turnup automation is in https://github.com/alphagov/govuk-infrastructure."
readmeQualityOk: true
url: "https://github.com/alphagov/govuk-helm-charts"
homepage: "https://www.gov.uk/"
language: "Go Template"
languages: ["Go Template", "Shell"]
languagePcts: [47, 46]
topics: ["govuk"]
stars: 25
forks: 7
openIssues: 1
closedIssues: 16
watchers: 34
contributors: 205
recentReleases: 0
createdAt: "2021-09-10T09:29:52Z"
lastCommitAt: "2026-08-28T14:38:09Z"
lastReleaseAt: "2025-03-12T14:05:09Z"
status: "thriving"
tags: ["community_watch"]
healthScore: 99
undervaluedScore: 57
maintainers: ["govuk-ci", "ChrisBAshton", "AP-Hunt"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ebd60661223358602e4b574dc0a748755686dba679a9497bf70f6cea26dedf/alphagov/govuk-helm-charts"
---

# GOV.UK Helm Charts

## Getting started

See [Helm's documentation](https://helm.sh/docs) to get started with Helm.

See the [GOV.UK Kubernetes cluster
docs](https://govuk-kubernetes-cluster-user-docs.publishing.service.gov.uk/)
for an introduction to the cluster or ask [#govuk-ask-platform-engineering] in
Slack.

## Versioned vs unversioned charts

Most of the charts in this repository are designed to be deployed via [Argo
CD](https://argo-cd.readthedocs.io/en/stable/) rather than by `helm install`.
For these charts, we don't use `Chart.Version` or Helm's packaging system.

A few charts are still installed via `helm install` ([via
Terraform](https://github.com/search?q=repo%3Aalphagov%2Fgovuk-infrastructure+path%3Aterraform%2Fdeployments%2Fcluster-services+alphagov.github.io)).
Those charts are [automatically packaged and
pushed](https://github.com/alphagov/govuk-helm-charts/blob/main/.github/workflows/release.yml)
to our Helm repository when a change to `Chart.Version` is merged.

## Repository operations

The Makefile at the root of this repository provides common operational tasks.

Run `make help` to see available targets, including:

- **Linting**: `make lint` runs yamllint…
