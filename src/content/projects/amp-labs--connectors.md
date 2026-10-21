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
stars: 76
forks: 28
openIssues: 8
closedIssues: 213
watchers: 1
contributors: 29
recentReleases: 0
createdAt: "2023-04-29T00:04:00Z"
lastCommitAt: "2026-10-21T17:31:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["ampersand-ops", "dependabot[bot]", "AmandaYao00"]
openGraphImageUrl: "https://opengraph.githubassets.com/38c4a58d4c135d00e4f3ca19a77159a2a1ba73153d25c2805098b641e6937b93/amp-labs/connectors"
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

- Ampersand server: a managed service that keeps…
