---
repo: "vyomi-cloud/appliance"
name: "appliance"
description: "Vyomi — the Multi-Cloud Digital Twin Runtime. A faithful, running replica of AWS, GCP & Azure on your machine (real backends, standard SDKs). Build for the cloud, without the cloud. Often used as a local multi-cloud simulator / LocalStack alternative."
readmeQualityOk: true
url: "https://github.com/vyomi-cloud/appliance"
homepage: "https://vyomi.cloud"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [58, 21]
topics: ["aws", "azure", "boto3", "cloud-emulator", "cloud-simulator", "developer-tools", "devops", "dynamodb", "emulator", "gcp"]
stars: 29
forks: 1
openIssues: 45
closedIssues: 113
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-18T18:58:51Z"
lastCommitAt: "2026-11-06T02:43:33Z"
lastReleaseAt: "2026-06-14T17:25:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 41
maintainers: ["github-actions[bot]", "vyomi-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f61af0ed9cb32d2a2de808c2ddd88e2d5d45b1aee412b96dbbb725ca3464326/vyomi-cloud/appliance"
discussionCount: 1
---

# Vyomi — the Multi-Cloud Digital Twin Runtime

**Build for the cloud, without the cloud.** Vyomi is a **multi-cloud digital twin runtime** — a faithful, *running* replica of your AWS, GCP, and Azure environment on your own machine. Real services, real SDKs, real backends; no cloud account, no cloud bill, no network required.

> Often searched for as a *local multi-cloud simulator* or a *LocalStack alternative* — Vyomi goes further: a real digital twin on real backends across all three clouds, not single-cloud mocks.

Point your existing SDKs/CLIs — `boto3`, `aws-sdk-java`, `google-cloud-*`, `azure-sdk-for-*`, plus `aws` / `gcloud` / `gsutil` / `az` / `terraform` — at `http://localhost:9000`, and your code runs unchanged. When you're ready, one-click **Terraform export** promotes the same stack to production cloud.

### Why a digital twin, not a mock? (vs LocalStack / Moto / Azurite)

LocalStack mocks AWS; Moto, [Azurite](https://github.com/Azure/Azurite), and the GCP emulators each cover a single cloud. **Vyomi runs all three major clouds on real backends** (Postgres, MySQL, MinIO/S3, DynamoDB, Vault, NATS, Azurite, the Firestore emulator) with native **multi-cloud NoSQL** —…
