---
repo: "go-to-k/cdkd"
name: "cdkd"
description: "Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation."
readmeQualityOk: true
url: "https://github.com/go-to-k/cdkd"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["aws", "awscdk", "cdk", "cloudformation", "aws-cdk", "aws-cloudformation", "aws-sdk"]
stars: 101
forks: 6
openIssues: 13
closedIssues: 455
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-25T02:36:28Z"
lastCommitAt: "2026-08-11T04:49:56Z"
lastReleaseAt: "2026-04-29T06:02:30Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 32
maintainers: ["go-to-k", "semantic-release-bot", "minorun365"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bc024c9d5f41d76367736e4e53e9e05b7fa7f81cdb871fed0b23490021b7305/go-to-k/cdkd"
fundingLinks: ["GITHUB:https://github.com/go-to-k"]
---

# cdkd (CDK Direct)

Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation.

- **Drop-in CDK compatible**: your existing CDK app code runs as-is; just replace `cdk deploy` with `cdkd deploy`.
- **Up to 15x faster deploys**: direct SDK calls, aggressive parallelization, and `--no-wait` to skip slow stabilization waits; **faster than Terraform and CloudFormation Express mode** too (see [Benchmark](#benchmark)).

**cdkd complements the AWS CDK CLI rather than replacing it.** Use cdkd in dev/test for rapid iteration; use the AWS CDK CLI in production for full CloudFormation tooling. Install cdkd alongside an existing `cdk deploy` workflow: no migration needed. You can also [import](#importing-existing-resources) existing stacks into cdkd or [export](#exporting-a-stack-back-to-cloudformation) back to CloudFormation anytime.

**A natural fit for AI-driven development.** AI coding agents iterate in tight spin-up / tear-down loops — and cdkd keeps each turn short, with fast deploys and an equally fast `cdkd destroy` that deletes via direct SDK calls instead of polling a CloudFormation stack-delete.

**Local execution from your…
