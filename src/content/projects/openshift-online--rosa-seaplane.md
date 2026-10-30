---
repo: "openshift-online/rosa-seaplane"
name: "rosa-seaplane"
description: "ROSA Seaplane"
readmeQualityOk: true
url: "https://github.com/openshift-online/rosa-seaplane"
language: "HCL"
languages: ["HCL", "Python", "Shell"]
languagePcts: [42, 26, 26]
stars: 13
forks: 33
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 35
recentReleases: 0
createdAt: "2026-01-13T17:36:07Z"
lastCommitAt: "2026-10-30T11:02:47Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 66
maintainers: ["typeid", "slopezz", "openshift-merge-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d50e0a69897e0c0ec734f2f6e6d4076664846d14713b3f873d4472db3369a33f/openshift-online/rosa-seaplane"
---

# rosa-seaplane

For the full architecture overview, see [docs/README.md](https://github.com/openshift-online/rosa-seaplane/blob/HEAD/docs/README.md).

## PR Dashboard

A [PR dashboard](https://openshift-online.github.io/rosa-seaplane/pr-dashboard) shows open PRs across all platform repositories, grouped by label (`review-ready`, `discussion-needed`, or `needs-ok-to-test`) and source (bot PRs). An **IC Tasks** panel at the top surfaces actionable items at a glance: review-ready PRs missing assigned reviewers, and bot PRs awaiting `/ok-to-test`. It refreshes automatically every 10 minutes via GitHub Actions.

To preview locally: `./dashboard/fetch-data.sh && python3 -m http.server -d dashboard 8080`

## C4 Model

An interactive [C4 model](https://openshift-online.github.io/rosa-seaplane/c4-model) of the ROSA
Seaplane architecture (System Context, Container, and Component views) is published alongside the
PR dashboard. See [docs/design/c4/README.md](https://github.com/openshift-online/rosa-seaplane/blob/HEAD/docs/design/c4/README.md) for how it's authored and
rendered.

## Repository Structure

```
rosa-seaplane/
├── argocd/
│   └── config/                       # Live Helm chart…
