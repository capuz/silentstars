---
repo: "amp-labs/connectors"
name: "connectors"
description: "Ampersand Open Connectors library"
readmeQualityOk: true
url: "https://github.com/amp-labs/connectors"
homepage: "https://docs.withampersand.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 82
forks: 34
openIssues: 8
closedIssues: 213
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2023-04-29T00:04:00Z"
lastCommitAt: "2026-11-24T00:58:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["ampersand-ops", "dependabot[bot]", "Cobalt0s"]
openGraphImageUrl: "https://opengraph.githubassets.com/154039bbda8ff32b567508c809c64126a2cdf9d90d9a383bd05c491ed1ec070b/amp-labs/connectors"
---

# Overview

[Ampersand](https://withampersand.com?trk=readme-github) is a declarative platform for SaaS builders who are creating product integrations. It allows you to:

* Read data from your customer’s SaaS
* Write data to your customer’s SaaS
* Subscribe to events (creates, deletes, and field changes) in your customer’s SaaS

# Ampersand Connectors

This is a Go library that makes it easier to make API calls to SaaS products such as Salesforce and Hubspot. It handles constructing the correct API requests given desired objects and fields.

It can be either be used as a standalone library, or as a part of the [Ampersand platform](https://docs.withampersand.com/), which offers additional benefits such as:
- Handling auth flows
- Orchestration of scheduled reads, real-time writes, or bulk writes
- Handling API quotas from SaaS APIs
- A dashboard for observability and troubleshooting

The key components of the Ampersand platform include:

- Manifest file (`amp.yaml`): Define all your integrations, the APIs to connect to, the objects and fields for reading or writing, and the configuration options you want to expose to your customers.
