---
repo: "go-to-k/cdkd"
name: "cdkd"
description: "Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation."
readmeQualityOk: true
url: "https://github.com/go-to-k/cdkd"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["aws", "awscdk", "cdk", "cloudformation", "aws-cdk", "aws-cloudformation", "aws-sdk"]
stars: 137
forks: 9
openIssues: 210
closedIssues: 915
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-25T02:36:28Z"
lastCommitAt: "2026-09-08T08:15:47Z"
lastReleaseAt: "2026-04-29T06:02:30Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 29
maintainers: ["go-to-k", "github-actions[bot]", "nix-tkobayashi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ea5841297bbba35628656a9dd4f396c0fd10bf5b1a72597094e6b3fa4a07960/go-to-k/cdkd"
fundingLinks: ["GITHUB:https://github.com/go-to-k"]
---

# cdkd (CDK Direct)

Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation.

**📚 Documentation: [cdkd.dev](https://cdkd.dev)**

<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/go-to-k/cdkd/main/assets/docs-site-dark.png">
</picture></a>

- **Drop-in CDK compatible**: your existing CDK app code runs as-is; just replace `cdk deploy` with `cdkd deploy`.
- **Up to 15x faster deploys**: direct SDK calls, aggressive parallelization, and `--no-wait` to skip slow stabilization waits; **faster than Terraform and CloudFormation Express mode** too (see [Benchmark](#benchmark)).

**cdkd complements the AWS CDK CLI rather than replacing it.** Use cdkd in dev/test for rapid iteration; use the AWS CDK CLI in production for full CloudFormation tooling. Install cdkd alongside an existing `cdk deploy` workflow: no migration needed. You can also [import](https://cdkd.dev/import/) existing stacks into cdkd or [export](https://cdkd.dev/export/) back to CloudFormation anytime.

**A natural fit for AI-driven development.** AI coding agents iterate in tight spin-up / tear-down loops — and cdkd keeps each…
