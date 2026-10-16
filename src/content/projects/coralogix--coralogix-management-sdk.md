---
repo: "coralogix/coralogix-management-sdk"
name: "coralogix-management-sdk"
description: "API clients for configuring the Coralogix platform."
readmeQualityOk: true
url: "https://github.com/coralogix/coralogix-management-sdk"
homepage: "https://coralogix.com"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [62, 27]
topics: ["coralogix", "iac", "logging", "tracing"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2024-08-15T13:02:40Z"
lastCommitAt: "2026-10-16T08:26:51Z"
lastReleaseAt: "2025-03-21T16:00:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 79
maintainers: ["openapi-facade-automation[bot]", "markshleifer-coralogix", "assafad1"]
openGraphImageUrl: "https://opengraph.githubassets.com/b136393bd1e809ac9e8c82944d031604385d322d1530b782f39def648fc98c68/coralogix/coralogix-management-sdk"
---

# 🪵 The Coralogix Management SDK 

🌟 [Master Docs](https://coralogix.github.io/coralogix-management-sdk) 🌟

## REST and OpenAPI

Our APIs are also available over REST through a variety of OpenAPI endpoints. Read more over at the [OpenAPI Docs](https://docs.coralogix.com)

*These endpoints follow the same versioning schemes mentioned below.*

# Versioning

The SDK follows a rolling release schedule with one LTS version once a year (in June). Revisions allow additional fixes that add hotfixes for immediate bugs, security fixes, etc. The remaining issue fixes are rolled up in the following month’s release. The exception is the LTS release which will contain relevant fixes. 

### LTS

Every year in June the x.6.x version is considered LTS and will be backwards compatible for a year. This is the version recommended for any stable product (Terraform Provider, …) and will be maintained without major (API-related) changes.

### Examples

Here are a few examples of (anticipated) versions:

- 0.12.0 → Year 0 (= 2024), month (12), revision (0)
- 1.1.0 → January 2025 without any additional revisions
- 1.6.10 → June 2025 (LTS) with 10 revisions

# Building

## Prerequisites

- `protoc` -…
