---
repo: "elastic/cloudbeat"
name: "cloudbeat"
description: "Analyzing Cloud Security Posture"
url: "https://github.com/elastic/cloudbeat"
language: "Go"
languages: ["Go", "Open Policy Agent"]
languagePcts: [54, 22]
topics: ["cloud", "golang", "cspm", "vulnerability-detection", "vulnerability-scanners"]
stars: 59
forks: 52
openIssues: 85
closedIssues: 622
watchers: 7
contributors: 2244
recentReleases: 0
createdAt: "2022-02-14T10:43:26Z"
lastCommitAt: "2026-07-03T06:06:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["elastic-renovate-prod[bot]", "jeniawhite", "gurevichdmitry"]
openGraphImageUrl: "https://opengraph.githubassets.com/32e66099fa2c5e8d737f77f5f6e742b6fd36b70742043c7ffd727af63370a69d/elastic/cloudbeat"
discussionCount: 1
---

# Cloudbeat

Cloudbeat is a tool that analyzes cloud assets for security compliance and sends findings to Elasticsearch.
It is designed to be used as part of the [Cloud Security](https://www.elastic.co/blog/secure-your-cloud-with-elastic-security) plugin in Kibana.

### CSP Security Policies

Cloudbeat uses [security policies](./security-policies) to evaluate cloud resources.

## Getting Started

To get started with Cloud Security on your cluster, please refer to our documentation:

- [Get started with Kubernetes Security Posture Management (KSPM)](https://www.elastic.co/guide/en/security/current/get-started-with-kspm.html)

- [Get started with Cloud Security Posture Management (CSPM)](https://www.elastic.co/guide/en/security/current/cspm.html)

- [Get started with Cloud Native Vulnerability Management (CNVM)](https://www.elastic.co/guide/en/security/current/vuln-management-get-started.html)

---

## Deployment

To run Cloudbeat, you need to have Elastic Stack (Elasticsearch, Kibana, etc) running (locally/cloud). See our [Elastic Stack Deployment options](dev-docs/ELK-Deployment.md) documentation.

Once your Elastic Stack is deployed, you can proceed with the deployment of…
