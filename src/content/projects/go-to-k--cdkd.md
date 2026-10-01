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
stars: 143
forks: 9
openIssues: 118
closedIssues: 1672
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-03-25T02:36:28Z"
lastCommitAt: "2026-10-01T10:23:47Z"
lastReleaseAt: "2026-04-29T06:02:30Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 30
maintainers: ["go-to-k", "github-actions[bot]", "nix-tkobayashi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d93265b22a53d59af98abcf86d9caab6d328edfa56b49fa32b7a743be33275/go-to-k/cdkd"
fundingLinks: ["GITHUB:https://github.com/go-to-k"]
---

<p>
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/go-to-k/cdkd/main/docs-site/public/brand/logo-dark.svg">
    </picture>
  </p>
  <h1>cdkd (CDK Direct)</h1>
  </a>
  </a>
  </a>
  <h3>The fastest way to deploy AWS CDK.</h3>
  <p>Drop-in CDK CLI for existing CDK apps — up to 15x faster deploys via direct AWS SDK calls instead of CloudFormation.</p>
  <p>
    📚 Documentation: <a href="https://cdkd.dev"><b>cdkd.dev</b></a>
  </p>
</div>

---

- **Drop-in CDK compatible**: your existing CDK app code runs as-is; just replace `cdk deploy` with `cdkd deploy`.
- **Up to 15x faster deploys**: direct SDK calls, aggressive parallelization, and `--no-wait` to skip slow stabilization waits; **faster than Terraform and CloudFormation Express mode** too (see [Benchmark](#benchmark)).

**cdkd complements the AWS CDK CLI rather than replacing it.** Use cdkd in dev/test for rapid iteration; use the AWS CDK CLI in production for full CloudFormation tooling. Install cdkd alongside an existing `cdk deploy` workflow: no migration needed. You can also [import](https://cdkd.dev/import/) existing stacks into cdkd or…
