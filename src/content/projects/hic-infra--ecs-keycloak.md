---
repo: "hic-infra/ecs-keycloak"
name: "ecs-keycloak"
description: "Keycloak on ECS with RDS"
readmeQualityOk: true
url: "https://github.com/hic-infra/ecs-keycloak"
language: "HCL"
languages: ["HCL"]
languagePcts: [91]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-10-10T14:31:59Z"
lastCommitAt: "2026-09-15T08:55:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["dependabot[bot]", "AaronJackson", "manics"]
openGraphImageUrl: "https://opengraph.githubassets.com/13129749594964c43946243e8dda0ff9efe545624e45a1c76c74f3ce81ccc65a/hic-infra/ecs-keycloak"
---

# Keycloak on ECS with RDS

This is a demo of running Keycloak on ECS with an RDS (PostgreSQL) database.

RDS (PostgreSQL) and Keycloak are run in a private subnet.

An application load-balancer in a public subnet routes traffic to the Keycloak application.

## Building the container image

Build an "optimised" Keycloak container using Docker or Podman ([`container/Dockerfile`](https://github.com/hic-infra/ecs-keycloak/blob/HEAD/container/Dockerfile)), and push to ECR:

```
podman build --platform linux/amd64 -t ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/example/keycloak:YYYY-MM-DD container
aws ecr get-login-password --region REGION | podman login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com
podman push ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/example/keycloak:YYYY-MM-DD
```

## Deployment

Import a HTTPS certificate to ACM.
For testing you can create a self-signed certificate (run [`scripts/self-signed-cert.sh`](https://github.com/hic-infra/ecs-keycloak/blob/HEAD/scripts/self-signed-cert.sh))

Create an S3 backend configuration file (see…
