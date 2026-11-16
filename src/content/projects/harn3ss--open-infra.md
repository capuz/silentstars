---
repo: "harn3ss/open-infra"
name: "open-infra"
description: "A self-hosted, AWS-compatible cloud for your own hardware. Point the AWS CLI, SDKs, CloudFormation and Terraform at it to run Lambda, S3, RDS & SQL Server, DynamoDB, EC2-style VMs, IAM, Step Functions and 25+ AWS services — GitOps and Kubernetes underneath, AWS on the surface."
readmeQualityOk: true
url: "https://github.com/harn3ss/open-infra"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["gitops", "homelab", "infrastructure-as-code", "kubernetes", "mini-cloud", "platform-engineering", "self-hosted", "aws-alternative", "data-lake", "gpu"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 42
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-06-19T12:02:43Z"
lastCommitAt: "2026-11-16T04:28:33Z"
lastReleaseAt: "2026-10-29T13:00:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["harn3ss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6ab00081fad724604790c5646e4662c48e12065a94af3a0efc69de45e5c618f/harn3ss/open-infra"
discussionCount: 0
---

> A **self-hosted cloud that speaks AWS**, running entirely inside your own trust boundary.
> Point your existing AWS **SDK, CLI, Terraform, or CloudFormation** at it and it answers the way AWS
> does — SigV4-authenticated, every fronted service **backed by a real datastore and
> proven by a real-SDK compatibility probe**. Or declare intent in one `infra.yaml` and `git push`.
> Either way you get an AWS-like managed surface — autoscaling HTTPS apps, managed databases, object
> storage, queues, VMs, serverless + GPU inference, an analytics lake, CDC pipelines, Active Directory —
> GitOps-reconciled on hardware you control and **designed with the NIST SP 800-53 control families as
> the target**: secure-by-default and least-privilege, shipping the technical controls and evidence for an
> operator to pursue an authorization — not a claim to *be* certified
> ([Security & compliance](#security--compliance)). The experience feels like AWS, with **no per-service
> cloud bill — you pay for the hardware you own**.

**Two ways in, one platform.**

**1 — Your existing AWS tooling, unchanged.** Set one env var and the opt-in shim answers as AWS,
authenticating each request's SigV4 signature…
