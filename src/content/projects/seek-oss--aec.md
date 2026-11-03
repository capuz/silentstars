---
repo: "seek-oss/aec"
name: "aec"
description: "AWS EC2 CLI - easily work with ec2 instances via the cli 🐶"
readmeQualityOk: true
url: "https://github.com/seek-oss/aec"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ec2", "aws", "cli"]
stars: 10
forks: 6
openIssues: 6
closedIssues: 5
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2019-08-27T22:44:13Z"
lastCommitAt: "2026-11-03T11:15:47Z"
lastReleaseAt: "2024-10-08T11:40:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 43
maintainers: ["dependabot[bot]", "tekumara"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2d682482d56597e8cb2aa7b90fb04a816fe3d4e23d2260f18e9871be19e6069/seek-oss/aec"
---

# AWS EC2 CLI

_"Instead of using the console, use the cli!"_.

Command-line tools for managing pet EC2 instances by name.

Defaults only need to be supplied once via a [config file](https://github.com/seek-oss/aec/blob/HEAD/src/aec/config-example/ec2.toml), which supports multiple profiles for different regions or AWS accounts.

For examples see:

- [EC2](https://github.com/seek-oss/aec/blob/HEAD/docs/ec2.md) - manipulate EC2 instances by name, and launch them with tags and EBS volumes of any size, as per the settings in the configuration file (subnet, security group etc).
- [AMI](https://github.com/seek-oss/aec/blob/HEAD/docs/ami.md) - describe, delete and share images
- [Compute Optimizer](https://github.com/seek-oss/aec/blob/HEAD/docs/compute-optimizer.md) - show over-provisioned instances
- [SSM](https://github.com/seek-oss/aec/blob/HEAD/docs/ssm.md) - run commands on instances, and [ssm patch management](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html)

## Prerequisites

- python 3.10+

## Install

Run the following to install the latest version using pip:

```
pip install aec-cli
```

If you have previously installed aec, run the…
