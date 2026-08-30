---
repo: "kyverno/policy-reporter-plugins"
name: "policy-reporter-plugins"
description: "Policy Reporter Plugins Monorepo"
readmeQualityOk: true
url: "https://github.com/kyverno/policy-reporter-plugins"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 7
forks: 2
openIssues: 2
closedIssues: 6
watchers: 5
contributors: 10
recentReleases: 2
createdAt: "2024-01-11T16:04:26Z"
lastCommitAt: "2026-08-30T09:25:31Z"
lastReleaseAt: "2026-07-07T17:43:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 75
maintainers: ["dependabot[bot]", "fjogeleit", "Suhani95"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e20e86786f6167ecb1cb7f895b2e0aceeeacbf8f655db0f191ffe23fd2e929f/kyverno/policy-reporter-plugins"
---

# Policy Reporter Plugins Monorepo

## Introduction

With Policy Reporter UI v2 a new plugin system will be introduced. While plugins in v1 were only used for integrating the [Policy Reporter Kyverno Plugin](https://github.com/kyverno/policy-reporter-kyverno-plugin), the new system will be more generic and needs to provide a defined set of REST APIs, no actual UI changes are required. Plugin information will be included in existing views and providing details about policies.

## Official Plugins

This repostiory provides three plugins for Policy Reporter UI v2.

### Kyverno Plugin

An updated version of the already existing "Policy Reporter Kyverno Plugin". It provides the new APIs as well existing features like PolicyReport generation for blocked Admission Requests.

### Trivy Plugin

The new Trivy Plugin provides details about results comming from VulnerabilityReports. While the actual results still comming from PolicyReports created by [Trivy Operator Polr Adapter](https://github.com/fjogeleit/trivy-operator-polr-adapter), the plugin supplements details about CVEs and GHSA foundings, like detailed description, affected / fixed versions and references.

###…
