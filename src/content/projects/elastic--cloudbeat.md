---
repo: "elastic/cloudbeat"
name: "cloudbeat"
description: "Analyzing Cloud Security Posture"
readmeQualityOk: true
url: "https://github.com/elastic/cloudbeat"
language: "Go"
languages: ["Go", "Open Policy Agent"]
languagePcts: [55, 21]
topics: ["cloud", "golang", "cspm", "vulnerability-detection", "vulnerability-scanners"]
stars: 59
forks: 58
openIssues: 99
closedIssues: 627
watchers: 7
contributors: 215
recentReleases: 0
createdAt: "2022-02-14T10:43:26Z"
lastCommitAt: "2026-11-11T10:03:07Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 97
undervaluedScore: 60
maintainers: ["elastic-renovate-prod[bot]", "gurevichdmitry", "gsarantid"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac99059350afee7bb84619770ca6b3a6572c4658236ed857b17a04e9dc3791f8/elastic/cloudbeat"
discussionCount: 1
---

# Cloudbeat

Cloudbeat is a tool that analyzes cloud assets for security compliance and sends findings to Elasticsearch.
It is designed to be used as part of the [Cloud Security](https://www.elastic.co/blog/secure-your-cloud-with-elastic-security) plugin in Kibana.

### CSP Security Policies

Cloudbeat uses [security policies](https://github.com/elastic/cloudbeat/blob/HEAD/security-policies) to evaluate cloud resources.

## Getting Started

To get started with Cloud Security on your cluster, please refer to our documentation:

- [Get started with Kubernetes Security Posture Management (KSPM)](https://www.elastic.co/guide/en/security/current/get-started-with-kspm.html)

- [Get started with Cloud Security Posture Management (CSPM)](https://www.elastic.co/guide/en/security/current/cspm.html)

- [Get started with Cloud Native Vulnerability Management (CNVM)](https://www.elastic.co/guide/en/security/current/vuln-management-get-started.html)

---

## Deployment

To run Cloudbeat, you need to have Elastic Stack (Elasticsearch, Kibana, etc) running (locally/cloud). See our [Elastic Stack Deployment options](https://github.com/elastic/cloudbeat/blob/HEAD/dev-docs/ELK-Deployment.md)…
