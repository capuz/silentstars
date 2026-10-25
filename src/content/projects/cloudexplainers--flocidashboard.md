---
repo: "cloudexplainers/flocidashboard"
name: "flocidashboard"
description: "A web-based UI and dashboard for Floci, the open-source local AWS emulator. Built with Django to easily visualize, monitor, and interact with your locally emulated AWS services."
readmeQualityOk: true
url: "https://github.com/cloudexplainers/flocidashboard"
homepage: "https://www.youtube.com/@cloudexplainers"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 31]
topics: ["aws", "aws-emulation", "devops", "docker", "ecs", "localstack", "s3", "sqs"]
stars: 22
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-05-02T19:22:30Z"
lastCommitAt: "2026-10-25T02:47:44Z"
lastReleaseAt: "2026-10-24T02:09:38Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 50
maintainers: ["returnvalue", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/333a45d118e0d722f9a4c9023e569d167bb42d5d3529ff37cbcdc7e441d9e0e4/cloudexplainers/flocidashboard"
---

# Floci Dashboard 2.0.2

A local console for inspecting, testing, and learning AWS workflows with [Floci](https://floci.io/). Built with Django, React, TypeScript, Vite, and AWS’s Cloudscape design system.

The dashboard catalogs **65 AWS services** and includes **90 workflow labs across 29 services, with 577 steps**. Compatibility checks target Floci 2.3.0; Floci supports additional services beyond this dashboard’s catalog. This is a local development and learning tool, not the AWS Management Console.

## Features

- **Service consoles:** dedicated interfaces for core services, plus shared resource inventories and schema-driven operation forms. The registry marks 60 services as interactive workbenches; available actions vary by service and emulator support.
- **Resource navigation:** searchable service catalog, favorites, recently visited services, sortable resource tables, pagination, column preferences, and resource details.
- **Operational views:** EC2 networking and security details, CloudWatch metric charts and log-stream browsing, REST/HTTP API Gateway inventories and request testing, Lambda overviews, and Step Functions definition graphs.
- **Workflow labs:** AWS CLI,…
