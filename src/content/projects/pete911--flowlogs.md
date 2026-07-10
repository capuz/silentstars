---
repo: "pete911/flowlogs"
name: "flowlogs"
description: "dynamically create or delete aws flow logs"
readmeQualityOk: true
url: "https://github.com/pete911/flowlogs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["aws", "flowlogs", "go", "golang"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-04T11:08:14Z"
lastCommitAt: "2026-07-10T07:01:12Z"
lastReleaseAt: "2025-07-05T15:08:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["pete911", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb665a9b09589e8a257332fa61adc9b21f2cf99fad10025952c2c1e65ede237e/pete911/flowlogs"
---

# AWS Flow Logs

> [!WARNING]  
> If you installed previous versions (before `v0.0.8`) via brew, you need to reinstall (brew remove flowlogs && brew install flowlogs) to get updates

Dynamically create or delete aws flow logs for EC2 instances, security groups, subnet or VPC.

CLI creates AWS Flow Logs for specific group (EC2 instance(s) - grouped by the same name), security group, subnet or VPC).

Logs can be searched either via cli `flowlogs query <instance|sg|subnet|vpc|nat> <flags>` or in CloudWatch Logs Insights
by select log group with `/fl-cli/` prefix.

## usage

If you have multiple accounts you need to prefix command with `AWS_PROFILE=<your profile> flowlogs ...`.

- create `flowlogs create <instance|sg|subnet|vpc|nat|endpoint>`
- list `flowlogs list` flowlogs created by this cli
- delete `flowlogs delete <instance|sg|subnet|vpc|nat|endpoint|all>` (use all argument to clean up all flowlogs)
- query `flowlogs query <instance|sg|subnet|vpc|nat|endpoint>`

```
flowlogs create vpc
# wait couple of minute for AWS to aggregate flow logs
flowlogs query vpc
TIME      NI ID                  NI ADDRESS  NI PORT  FLOW        ADDRESS          PORT   ACTION  PACKETS  BYTES  PROTOCOL…
