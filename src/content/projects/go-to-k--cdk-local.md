---
repo: "go-to-k/cdk-local"
name: "cdk-local"
description: "Run your CDK-built app locally, no deploy needed — standalone, or kept local while it reaches the real AWS resources and data it depends on, with no `.env` or local copies to maintain."
readmeQualityOk: true
url: "https://github.com/go-to-k/cdk-local"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["aws", "cdk", "cloudformation", "sam", "aws-cdk", "aws-cloudformation", "awscdk", "aws-sam", "awssam"]
stars: 49
forks: 1
openIssues: 6
closedIssues: 258
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-27T07:42:09Z"
lastCommitAt: "2026-11-12T10:49:25Z"
lastReleaseAt: "2026-05-28T06:24:21Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 37
maintainers: ["go-to-k", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fc4de054bc582f1c340ebd16e3aef7a04dc64cacad9b56b6b8f75513764ef88/go-to-k/cdk-local"
fundingLinks: ["GITHUB:https://github.com/go-to-k"]
---

# cdk-local (`cdkl`)

**Run your CDK-built app locally, no deploy needed — standalone, or kept local while it reaches the real AWS resources and data it depends on, with no `.env` or local copies to maintain.**
A CDK-native alternative to `sam local`, covering Lambda, API Gateway, ECS, ALB, CloudFront, and more of your CDK app's compute.

Or drive it all from a browser with `cdkl studio` — pick a target, invoke or serve it, and watch every request, response, and log line land on one live timeline:

## Quick start

Requires **Docker** (running) and **Node.js 22.12 or later**.

```bash
npm install -g cdk-local      # installs the `cdkl` command
cd your-cdk-app               # the directory holding cdk.json
cdkl invoke                   # pick a Lambda from the list, then run it locally
```

**Add `--from-cfn-stack`** to bind to a deployed stack — your handler still runs locally in Docker, but reads and writes against the real AWS the deployed app uses: DynamoDB, S3, Secrets, Cognito, and more (see [Why cdk-local](#why-cdk-local) below).

```bash
cdkl start-api --from-cfn-stack   # local API on real AWS data; JWT verified against the real Cognito User Pool
```

**Prefer a browser?**…
