---
repo: "northwood-labs/ssm-shell"
name: "ssm-shell"
description: "Simplifies the process of connecting to EC2 Instances using AWS Session Manager."
url: "https://github.com/northwood-labs/ssm-shell"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [74, 26]
topics: ["aws", "aws-ec2", "aws-ssm", "aws-ssm-agent", "session-manager"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-20T02:55:06Z"
lastCommitAt: "2026-07-01T07:04:25Z"
lastReleaseAt: "2024-04-03T21:56:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 73
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3485292ba296acb15926d91d6bcf0ca3a0b1a5ada51410108623deacb1d768a5/northwood-labs/ssm-shell"
---

# SSM Shell for AWS Session Manager

Simplifies the process of connecting to EC2 instances using AWS Session Manager when you have many instances.

## Why this project?

Honestly, because I'm tired of having to log into the AWS Console to find the EC2 Instance ID before I pass it to the AWS CLI. Secondly, using the web interface in the AWS Console is _OK_, but I prefer to use the right tool for the job — my terminal.

```bash
aws ssm start-session --target i-abcdef123456
```

Given valid AWS credentials, this will hit the EC2 API first to retrieve a list of running instances, then help you select the instance to which to connect.

### Why AWS Session Manager?

<details>
<summary>Read more…</summary><br>

SSH is old-school, error-prone, and easy to get wrong.

With the ever-shifting cybersecurity landscape, older ciphers and protocols being cracked over time, and the likelihood of losing SSH keys (or someone stealing them), there are newer, better ways of connecting to EC2 instances in the cloud. AWS Session Manager uses the _AWS Systems Manager_ (SSM) agent to allow you to connect to EC2 instances using the AWS CLI instead of SSH. I'm not going to dive into that here, but here are…
