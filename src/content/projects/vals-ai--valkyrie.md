---
repo: "vals-ai/Valkyrie"
name: "Valkyrie"
description: "Scalable, cloud-native infrastructure for evaluating AI agents across any benchmark."
url: "https://github.com/vals-ai/Valkyrie"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 23
forks: 0
openIssues: 0
closedIssues: 36
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-10-28T00:08:08Z"
lastCommitAt: "2026-06-26T23:40:25Z"
lastReleaseAt: "2026-03-04T02:00:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["JarettForzano", "BradenBug", "Chen-Oliver"]
openGraphImageUrl: "https://opengraph.githubassets.com/6785af0ab4ec2b1283fa1f6e5a65179017fc82b7c925bbdee21789ff06623b3f/vals-ai/Valkyrie"
---

# Valkyrie

Valkyrie is an orchestration platform for running agentic benchmarks.

## Hosting Modes

Valkyrie supports **hosted** and **self-hosted** modes. 
- **Self-hosted Mode** requires you to create AWS infrastructure using the IaC provided.
- **Hosted Mode** allows you to use Vals-hosted infrastructure. Reach out to the Vals team for access (contact@vals.ai)

Both modes require you to provide certain credentials and configuration:  
- AWS API Key: Authentication for an AWS account with S3, CloudWatch, and Secrets Manager access (to store benchmarking logs and results)
- S3 Bucket Name: The S3 bucket to be used for storing benchmark artifacts and agents
- Sandbox provider config: AWS Secrets Manager entry for the sandbox provider. [Setup docs](docs/PROVIDER.md)
- **Hosted mode only:** Vals API Key

See [Hosted vs Self-Hosted Mode](docs/HOSTED_MODE.md) for more details.

## Installation

```bash
uv tool install git+https://github.com/vals-ai/Valkyrie@prod
```

## Configuration

> **Note:** The Valkyrie can be invoked using either `valkyrie` or the alias `valk`. For example: `valkyrie run start` or `valk run start`.

```bash
valkyrie config init
```

This will prompt you to…
