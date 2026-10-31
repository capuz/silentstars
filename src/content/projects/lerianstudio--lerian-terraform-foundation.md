---
repo: "LerianStudio/lerian-terraform-foundation"
name: "lerian-terraform-foundation"
description: "This project contains the entire foundation infrastructure base in the 3 main public clouds for the installation and use of Midaz."
readmeQualityOk: true
url: "https://github.com/LerianStudio/lerian-terraform-foundation"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [63, 23]
stars: 7
forks: 1
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-02-25T15:25:11Z"
lastCommitAt: "2026-10-31T07:46:30Z"
lastReleaseAt: "2025-09-16T17:12:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 77
maintainers: ["fredcamaral", "lerian-studio", "lerian-studio-midaz-push-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e18e897660dc4fc478b9e0e2000971637257659100bfdc2a4aaf2eb3f76e53d7/LerianStudio/lerian-terraform-foundation"
---

# Lerian Terraform Foundation

Terraform templates for the infrastructure the Lerian products run on: the network, the
Kubernetes cluster, and the datastores each product needs.

On **AWS** you run the templates with plain Terraform, one stack at a time. On **GCP and
Azure** they are driven by `./deploy-legacy.sh`, an interactive script over an earlier
layout.

Pick your cloud and follow that section. Read [Important
information](#important-information) before deploying anything to production.

## Support matrix

| Stack | AWS | GCP | Azure | Creates |
| --- | --- | --- | --- | --- |
| `bootstrap` | true | false | partial | Versioned state bucket, lock table, generated backend config |
| `infra-base` | true | true | true | Network with public/private subnets, Kubernetes cluster, DNS zone |
| `shared-resources` | true | false | false | PostgreSQL, DocumentDB, Valkey, RabbitMQ, Kafka: one instance each, shared by every product in the environment |
| `br-consignado-gw` | true | false | false | PostgreSQL, Valkey |
| `br-sfn` | true | false | false | PostgreSQL, Valkey, RabbitMQ, Kafka, S3 |
| `br-sisbajud` | true | false | false | PostgreSQL, Valkey, Kafka |
| `fetcher` | true |…
