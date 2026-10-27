---
repo: "go-to-k/cdkd"
name: "cdkd"
description: "Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation."
readmeQualityOk: true
url: "https://github.com/go-to-k/cdkd"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["aws", "awscdk", "cdk", "cloudformation", "aws-cdk", "aws-cloudformation", "aws-sdk"]
stars: 150
forks: 12
openIssues: 12
closedIssues: 2063
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-03-25T02:36:28Z"
lastCommitAt: "2026-10-27T12:39:02Z"
lastReleaseAt: "2026-04-29T06:02:30Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 32
maintainers: ["go-to-k", "github-actions[bot]", "mpiltz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2851f604c643cccfe1dfe0bb20ffaffd7015f73af766616da0631d20e44c20c1/go-to-k/cdkd"
fundingLinks: ["GITHUB:https://github.com/go-to-k"]
---

📚 Documentation: <a href="https://cdkd.dev"><b>cdkd.dev</b></a>

---

- **Drop-in CDK compatible**: your existing CDK app code runs as-is; just replace `cdk deploy` with `cdkd deploy`.
- **Up to 15x faster deploys**: direct SDK calls, aggressive parallelization, and `--no-wait` to skip slow stabilization waits; **faster than Terraform and CloudFormation Express mode** too (see [Benchmark](#benchmark)).

**cdkd complements the AWS CDK CLI rather than replacing it.** Use cdkd in dev/test for rapid iteration; use the AWS CDK CLI in production for full CloudFormation tooling. Install cdkd alongside an existing `cdk deploy` workflow: no migration needed. You can also [import](https://cdkd.dev/import/) existing stacks into cdkd or [export](https://cdkd.dev/export/) back to CloudFormation anytime.

**A natural fit for AI-driven development.** AI coding agents iterate in tight spin-up / tear-down loops — and cdkd keeps each turn short, with fast deploys and an equally fast `cdkd destroy` that deletes via direct SDK calls instead of polling a CloudFormation stack-delete.

**Local execution from your deployed stack.** `cdkd local` runs your functions, APIs, and ECS tasks on your machine.…
