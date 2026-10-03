---
repo: "cbrgm/cdk-on-demand-minecraft-server"
name: "cdk-on-demand-minecraft-server"
description: " On-Demand Minecraft Server running on ECS(Fargate) and deployed via CDK (Go)"
readmeQualityOk: true
url: "https://github.com/cbrgm/cdk-on-demand-minecraft-server"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["aws", "cdk", "eks", "go", "minecraft", "serverless"]
stars: 17
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-16T20:18:30Z"
lastCommitAt: "2026-10-03T22:03:44Z"
lastReleaseAt: "2025-05-01T12:05:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 60
maintainers: ["renovate[bot]", "cbrgm"]
openGraphImageUrl: "https://opengraph.githubassets.com/17f0722db8626c363f35571ccf5e525237bf9cf226f50f266865636bf6fed724/cbrgm/cdk-on-demand-minecraft-server"
fundingLinks: ["KO_FI:https://ko-fi.com/chrisbargmann"]
---

# cdk-on-demand-minecraft-server

This CDK app sets up a quick, low-cost way to play Minecraft with friends without needing a 24/7 server The server automatically starts when players connect and stops when idle, helping reduce costs by running only when needed.

## Motivation

The idea was to spin up the server only when needed and save on costs by shutting it down when idle. Along the way, it was a chance to learn about using ECS for container management and EFS for persistent storage. 😊

## Environment Variables

### Required:
- **ECS_MINECRAFT_EDITION**: `java` or `bedrock` - Specify the Minecraft edition.
- **ROUTE53_SERVER_SUBDOMAIN**: Subdomain for the server (e.g., "minecraft").
- **ROUTE53_DOMAIN**: Domain for the server (e.g., "example.com").
- **ROUTE53_HOSTED_ZONE_ID**: Hosted Zone ID in Route 53.
- **SNS_EMAIL**: Email address for SNS notifications.
- **AWS_DESTINATION_ACCOUNT**: AWS Account ID for resource deployment.
- **AWS_DESTINATION_REGION**: AWS Region for resource deployment.

### Optional (Defaults in parentheses):
- **ECS_MEMORY_SIZE**: Memory for ECS task (`8192`).
- **ECS_CPU_SIZE**: CPU for ECS task (`4096`).
- **ECS_STARTUP_MIN**: Startup wait time in…
